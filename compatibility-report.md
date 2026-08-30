# Accordion Toggle — PHP / WordPress Compatibility Report

- **Plugin:** Accordion Toggle (`accordion-toggle`)
- **Version:** 1.2.9 → **1.5.0**
- **Branch:** `accordion-toggle-1.5.0-dev`, based on tag **`v1.2.9`** (`683dda7`, = `origin/latest`)
- **Date of audit:** 2026-08-09
- **Skill:** `eb-single-plugin-compatible`

> **Rebase note.** The audit in §§1–8 below was originally performed against
> `master`, which is stale at **1.2.7** — the released 1.2.9 lives on the
> `latest` branch and never merged back. The whole fix set has since been
> replayed onto the real 1.2.9 code. See **§9 — Merge-forward onto 1.2.9** for
> what conflicted and how it was resolved. Line numbers cited in §3 refer to the
> original 1.2.7 base; the findings themselves all still applied to 1.2.9.

---

## 1. Detected original baseline

| | Declared | Detected from code | Agree? |
|---|---|---|---|
| PHP | *(nothing declared anywhere)* | **5.6** | No — header field was missing |
| WordPress | `readme.txt`: `Requires at least: 5.6`, `Tested up to: 6.2` | **5.6** | Floor agrees; "tested up to" was 4 years stale |

**How the PHP floor was determined**

- `includes/font-loader.php:21-24` — `get_instance( ...$args )` + `new static( ...$args )`.
  Variadics and argument unpacking are **PHP 5.6+** syntax; the file will not
  even parse on 5.5. This is the single highest syntax requirement in the plugin.
- Short array syntax `[...]` throughout (`accordion-toggle.php:47`) → 5.4+.
- Closure used as `render_callback` (`blocks/accordion.php:41`) → 5.3+.
- **Nothing above 5.6 was found**: no `??`, no `<=>`, no scalar type hints, no
  return types, no arrow functions, no `match`, no constructor promotion, no
  enums, no `readonly`. So 5.6 is the true floor, not just the lowest possible.

**How the WordPress floor was determined**

- `WP_Block_Type_Registry`, `register_block_type()`, `has_blocks()`,
  `WP_Block_Parser`, `render_block` filter → **WP 5.0+** hard requirement.
- `includes/helpers.php` already contains an explicit `< 5.8` branch that falls
  back to name-string block registration, so the author deliberately supported
  pre-5.8 installs.
- `accordion-toggle.php:78` handles `site-editor.php` → author was aware of WP 5.9.
- `readme.txt` declares 5.6, and nothing in the code needs more than 5.0, so the
  declared 5.6 floor is honest and was kept.

**Legacy markers checked and NOT found** (confirming this is not a pre-5.x-era
codebase): no `mysql_*`, `ereg*`, `split()`, `create_function()`, `each()`,
`money_format()`, `screen_icon()`, `get_currentuserinfo()`, `wp_get_http()`,
`$wpdb` usage of any kind, no `$_GET`/`$_POST`/`$_REQUEST`/`$_SERVER` access,
no jQuery in any enqueued script, no `register_rest_route`.

---

## 2. Target compatibility range

Latest stable versions **verified live on 2026-08-09**, not from memory:

| | Latest stable | Source |
|---|---|---|
| PHP | **8.5.9** (released 30 Jul 2026) | `https://www.php.net/releases/index.php?json` + web search |
| WordPress | **7.0.3** | `https://api.wordpress.org/core/version-check/1.7/` |

PHP branches still receiving support per php.net at time of check: 8.2, 8.3, 8.4, 8.5.

**Target range = PHP 5.6 → 8.5, WordPress 5.6 → 7.0 (inclusive of everything in between).**

### Per-version checklist actually walked

PHP: `5.6` · `7.0` · `7.1` · `7.2` · `7.3` · `7.4` · `8.0` · `8.1` · `8.2` · `8.3` · `8.4` · `8.5`

| Version | Relevant hazard | Present in this plugin? |
|---|---|---|
| 5.6 | variadics OK, TLS verify | n/a |
| 7.0 | `mysql_*`/`ereg` removal, uniform variable syntax | none |
| 7.1 | `mcrypt` deprecation | none |
| 7.2 | `create_function`/`each` deprecation, `count()` on non-Countable | none |
| 7.3 | heredoc indentation, `continue` in `switch` | none |
| 7.4 | curly-brace offsets, **array offset on bool/null** | **yes → I-2** |
| 8.0 | **string↔number `==` change**, undefined array key warnings, warnings→Error | **yes → I-3, I-4** |
| 8.1 | **`null` to non-nullable internal param**, `ReturnTypeWillChange` | **yes → I-5** |
| 8.2 | **dynamic property creation**, `${var}` interpolation, `utf8_*` | none — all 5 classes declare every property they use |
| 8.3 | `range()` tightening, argless `get_class()` | none |
| 8.4 | **implicit nullable params** `f(int $x = null)` | none — no typed params anywhere |
| 8.5 | non-canonical casts `(integer)`/`(boolean)`, `trigger_error(E_USER_ERROR)` | none — only `(float)` and `(string)` used |

WordPress: `5.6` · `5.7` · `5.8` · `5.9` · `6.0` … `6.9` · `7.0`

| Version | Relevant hazard | Present? |
|---|---|---|
| 5.5 | REST `permission_callback` mandatory | n/a — no REST routes |
| 5.6 | jQuery 3.5 + Migrate removals | n/a — plugin ships no jQuery |
| 5.7 | jQuery Migrate dropped | n/a |
| 5.8 | `register_block_type()` path form; block widgets | **yes → I-6, F-6** |
| 5.9 | Site Editor / `site-editor.php` | handled already |
| 6.2 | `$wpdb->prepare()` `%` strictness, `%i` | n/a — no DB access |
| 6.3 | **Block API v3 / iframed editor**; script `strategy` args array | **yes → F-3** |
| 6.5 | Interactivity API, `Requires Plugins` header | not used (fine) |
| 6.7 | **translations loaded before `init`** → `_doing_it_wrong` | none — no `__()` at file scope |
| 6.8 | bcrypt password hashing | n/a |
| 6.9 / 7.0 | Block API v1 warned about; no jQuery Migrate shims at all | **yes → F-3** |

---

## 3. Issues found

Severity: **Critical** = fatal / page-breaking · **High** = wrong behavior or fatal
under a plausible condition · **Medium** = PHP warning/deprecation noise ·
**Low** = correctness/hygiene with no runtime impact today.

| # | File:line (pre-fix) | Issue | Breaks on | Severity |
|---|---|---|---|---|
| I-1 | `includes/class-faq-schema.php:104` | Leftover debug `die('innerblocks');` inside the top-level `accordion-toggle/accordion-item` branch. Prints `innerblocks` and **halts the whole page** mid-`wp_head`. Also rendered lines 105-109 unreachable. | **All PHP, all WP** | **Critical** |
| I-2 | `accordion-toggle.php:194` | `require_once` of `lib/style-handler/style-handler.php` with no existence check. `lib/style-handler` is a **git submodule** (`.gitmodules`) and is empty in this checkout → uncaught `Error`, white screen, site-wide. | **All** | **Critical** |
| I-3 | `accordion-toggle.php:60`, `blocks/accordion.php:26` | `$deps = include_once '…​.asset.php';` — `include_once` returns `bool(true)` when the file was already included in the request, so `$deps['dependencies']` is `null`. | Warning "Trying to access array offset on true" from **PHP 7.4**; `null` deps on every version | **High** |
| I-4 | `includes/font-loader.php:52` | `$block['blockName']` read without `isset()`. `render_block` receives synthetic block arrays that can omit the key. | "Undefined array key" warning, **PHP 8.0+** | **Medium** |
| I-5 | `includes/font-loader.php:70` | `$googleFontFamily[$attributes[$key]] = …` — a non-scalar `*FontFamily` attribute value used as an array key. | **`TypeError: Cannot access offset of type array on array`** — fatal on **PHP 8.0+** (warning on 7.x) | **High** |
| I-6 | `includes/helpers.php:24` | `(float) get_bloginfo('version') < 5.8`. Float-casting a version string: `"5.10"` → `5.1`, `"7.10"` → `7.1`. Picks the wrong registration branch on any future `x.10+` release. | Latent, **any WP** | **High** |
| I-7 | `includes/class-faq-schema.php:215` | `strip_tags($block['innerHTML'])` where the key can be absent or `null`. | "Undefined array key" (**8.0**) + "Passing null to parameter #1 … is deprecated" (**8.1+**) | **Medium** |
| I-8 | `includes/class-faq-schema.php:183` | `is_array($block['innerBlocks'])` read without `isset()`. | Undefined-array-key warning, **PHP 8.0+** | **Medium** |
| I-9 | `blocks/accordion.php:17` | Global function `create_block_accordion_block_init()` — the **unprefixed default name emitted by `@wordpress/create-block`**. Any other plugin scaffolded the same way triggers `Fatal error: Cannot redeclare`. | **All** | **High** |
| I-10 | `accordion-toggle.php:96-97` | `require $script_asset_path` with no existence check → fatal if `dist/` is absent (fresh clone before build). | **All** | **Medium** |
| I-11 | `blocks/accordion.php`, `blocks/accordion-item.php`, `includes/class-faq-schema.php` | No `if ( ! defined( 'ABSPATH' ) ) exit;` guard — direct-access hardening missing on 3 of 6 source files. | n/a (hardening) | **Medium** |
| I-12 | `includes/post-meta.php:12` | `add_filter('init', …)` used to register an **action**. Functionally identical in WP, but wrong and WPCS-flagged. | n/a | **Low** |
| I-13 | `includes/post-meta.php:20-28` | `register_meta()` with `show_in_rest => true` but no explicit `type`. | n/a (implicit `'string'`) | **Low** |
| I-14 | `includes/font-loader.php:105` | Google Fonts loaded over a **protocol-relative** `//fonts.googleapis.com/css` URL. | Mixed-content / redirect on plain-HTTP installs | **Low** |
| I-15 | `includes/font-loader.php:16` | `private static $block_name = [];` declared as array, always assigned a string. | n/a | **Low** |
| I-16 | `includes/font-loader.php:90` | `array_search('Default', $fonts)` without `$strict` — the PHP 8.0 loose-comparison change makes non-strict searches a live hazard class. | Latent, **PHP 8.0+** | **Low** |
| I-17 | `blocks/accordion.php:24`, `blocks/accordion-item.php:22` | `$dir = dirname(__FILE__);` assigned and never used. | n/a | **Low** |
| I-18 | `accordion-toggle.php` header | No `Requires PHP`, no `Requires at least`, no `Tested up to`. WP cannot protect users from installing on an unsupported stack. | n/a | **Medium** |
| I-19 | `readme.txt` | `Tested up to: 6.2` (March 2023) — 8 WordPress majors stale; wordpress.org shows an "untested" warning. | n/a | **Medium** |

### Empirical confirmation

I-1, I-2, I-3, I-4 and I-5 were **reproduced**, not just read. A stubbed
WordPress harness ran the `master` code and the branch code under PHP 8.5.8 with
`error_reporting = E_ALL`:

```
# master
Fatal error: Failed opening required '…/lib/style-handler/style-handler.php'   <- I-2
Warning:     Trying to access array offset on true … accordion-toggle.php:64/65  <- I-3
Warning:     Undefined array key "blockName" … font-loader.php:52                <- I-4
Fatal error: Cannot access offset of type array on array … font-loader.php:70    <- I-5
innerblocks   (output halted mid-wp_head)                                        <- I-1

# accordion-toggle-leon-dev
== WP 7.0.3 / PHP 8.5.8 ==  registered: accordion-toggle, accordion-item
                            controls deps resolved: 10 · font loader ok
                            faq schema output: <script type="application/ld+json" …>
== WP 5.8   / PHP 8.5.8 ==  (identical)
== WP 5.7.2 / PHP 8.5.8 ==  (identical — legacy <5.8 registration branch)
SMOKE OK
```

Zero warnings, zero deprecations, zero fatals after the fixes, across all three
WordPress branches the plugin has code paths for.

---

## 4. Fixes applied

| Issue | Fix | Behavior change? |
|---|---|---|
| I-1 | Deleted the `die('innerblocks');` line in `render_accordion_item_faq_schema()`. | Pages that previously **broke** now render. The re-enabled branch only fires for an Accordion Item block sitting at the *top level* of post content, which `block.json`'s `"parent"` constraint normally prevents — so real-world output is unchanged, the crash is not. |
| I-2 | Wrapped the `lib/style-handler` include in `file_exists()` before `require_once`. | None when the submodule is present (i.e. in every shipped build). |
| I-3, I-10 | Added `Accordion_Helper::get_asset_file( $relative_path )` — uses `include` (not `include_once`), checks `file_exists()`, validates the return is an array, and merges over `['dependencies' => [], 'version' => ACCORDION_BLOCK_VERSION]`. All three call sites in `accordion-toggle.php` and `blocks/accordion.php` now use it. | None. Same dependencies and same webpack hash version when the files exist. |
| I-4 | `isset()`-guarded `blockName`, and added `is_array()` on `attrs`, in `get_fonts_on_render_block()`. | None. |
| I-5 | `get_fonts_family()` now returns early on a non-array argument and `continue`s past any `*FontFamily` value that is not a non-empty string. | None for string font names — which is the only shape that ever produced a valid Google Fonts URL. |
| I-6 | `(float) get_bloginfo('version') < 5.8` → `version_compare( get_bloginfo('version'), '5.8', '<' )`. | None on any WP that has ever shipped; removes the future `x.10` trap. |
| I-7 | `$raw_inner_html = isset($block['innerHTML']) ? (string) $block['innerHTML'] : '';` before `strip_tags()`. | None. |
| I-8 | Added `isset($block['innerBlocks'])` to the guard in `render_accordion_item_scheme_head()`. | None. |
| I-9 | Renamed `create_block_accordion_block_init` → **`accordion_toggle_accordion_block_init`** (approved, was F-8), and wrapped the declaration **and** its `add_action('init', …)` in `if ( ! function_exists( … ) )`. Same guard added to `accordion_toggle_accordion_item_block_init` for symmetry. | None to output. The old callback name no longer exists, so a third party calling `remove_action( 'init', 'create_block_accordion_block_init' )` would silently stop working — no such caller is known. |
| I-11 | Added `if ( ! defined( 'ABSPATH' ) ) { exit; }` to `blocks/accordion.php`, `blocks/accordion-item.php`, `includes/class-faq-schema.php`. | None. |
| I-12 | `add_filter('init', …)` → `add_action('init', …)`. | None — WP routes both through the same hook registry. |
| I-13 | Added explicit `'type' => 'string'` to the `register_meta()` args. | None — that is the documented implicit default. |
| I-14 | `//fonts.googleapis.com/css` → `https://fonts.googleapis.com/css`. | None visually. |
| I-15 | `private static $block_name = [];` → `= '';`. | None. |
| I-16 | `array_search( 'Default', $fonts, true )`. | None — the haystack holds only strings. |
| I-17 | Removed both unused `$dir` assignments. | None. |
| I-18 | Added `Requires at least: 5.6`, `Requires PHP: 7.2`, `Tested up to: 7.0` to the plugin header. | None. |
| I-19 | `readme.txt`: `Tested up to: 6.2` → `7.0`, added `Requires PHP: 7.2`, `Stable tag` → `1.2.8`, added a 1.2.8 changelog entry. | None. |
| F-1 | Deleted the always-true `if ( ! method_exists( $post, 'post_content' ) )` wrapper in `render_accordion_item_faq_schema()` and dedented its 38-line body (approved). | None — the condition evaluated to `true` on every request, so the body already always ran. |

Version bumped **1.2.7 → 1.2.8** (patch) and kept in sync across:
`accordion-toggle.php` header, `ACCORDION_BLOCK_VERSION`, `readme.txt` `Stable tag`,
`package.json`.

---

## 5. Flagged items

These were surfaced rather than silently changed, because each one would alter
user-facing output, a public name, or saved-content behavior. **Four were put to
the user and resolved** (F-1, F-4, F-8, F-10); the rest remain open.

### Resolved

| # | Decision | Status |
|---|---|---|
| F-1 | `class-faq-schema.php` dead `method_exists( $post, 'post_content' )` guard — **delete the condition**, since it was always true and the body already always ran. | **Applied.** Wrapper removed, 38-line body dedented. No behavior change. |
| F-4 | `accordion-item/block.json` `textdomain: "essential-blocks"` mismatch — **leave as-is**, to avoid invalidating translations already keyed to that domain. | **Not changed**, by decision. |
| F-8 | Rename `create_block_accordion_block_init` → `accordion_toggle_accordion_block_init`. | **Applied**, together with the redeclare guard. |
| F-10 | Raise the declared PHP floor from 5.6 to **7.2**, matching WordPress core's own minimum. | **Applied** in both the plugin header and `readme.txt`. Declaration only — no code change was needed, the code still parses and runs on 5.6. |

### Still open

| # | Location | Finding | Recommendation |
|---|---|---|---|
| F-2 | `blocks/accordion-item.php:24` | Registers `accordion-toggle/accordion-item` only if **`essential-blocks/accordion`** is unregistered — it checks a different block's name. Looks copy-pasted from `accordion.php`. | If it is deliberate (defer entirely to the Essential Blocks main plugin), leave it. If not, the check should be against `accordion-toggle/accordion-item`. Your call. |
| F-3 | `blocks/accordion-toggle/block.json` | No `apiVersion` key → the block runs as **Block API v1**. WP 6.3 introduced the iframed editor canvas (v3) and WP 6.9/7.0 warn about v1. v1 blocks lose the `useBlockProps` wrapper and can misbehave inside the iframe. | Bumping to `"apiVersion": 2` (or 3) changes the editor wrapper markup and needs a JS-side `useBlockProps` audit + visual QA. Real work, not a compat one-liner. Recommend scheduling it. `accordion-item/block.json` already declares `apiVersion: 2`, so the two are inconsistent today. |
| F-5 | `accordion-toggle.php:70` | `'eb_wp_version' => (float) get_bloginfo('version')` — same float-cast hazard as I-6, but this value crosses into JS in `dist/`. | Should be a version string compared with a proper semver check, but the compiled JS in `dist/` may do numeric comparisons on it. Needs a JS-side change + rebuild. Recommend fixing in the same pass as F-3. |
| F-6 | `accordion-toggle.php:74-82` | Editor detection via `$pagenow` covers `post.php`, `post-new.php`, `site-editor.php`, `themes.php` — but **not `widgets.php`**, the block-based widget editor added in WP 5.8. | Adding `widgets.php` would start localizing `eb_conditional_localize` there, which is a behavior change. Say the word and I'll add it. |
| F-7 | `includes/font-loader.php:11` | Class name is misspelled: `Accordion_Font_Loder` (should be `Loader`). Also `Accordion_Helper` is a very collision-prone global class name. | Renaming either is a public-API break for anyone extending them. Recommend leaving both and only revisiting at a major version. |
| F-9 | `includes/font-loader.php:33` | Google Fonts `<link>` is enqueued on `wp_footer`, not `wp_enqueue_scripts`. Modern WP prints late styles reliably; older WP is less predictable, and it costs a render-blocking request low in the document. | Moving it is a page-output change. Leave unless you want the performance work. |
| F-11 | `dist/*.asset.php` | The four generated asset files have no `ABSPATH` guard. | Fixing means changing the webpack/build config and regenerating `dist/`, which is out of scope for a compat pass. Low risk (they only `return` an array). |

---

## 6. Old-vs-new conflicts

Only one, and it is mild.

**PHP 5.6 floor vs. modern syntax.** Keeping 5.6 support rules out `??`, typed
properties, arrow functions and constructor promotion — the natural way to write
several of these fixes. I resolved this **without compromising the new end**: every
fix uses `isset()`-ternaries and explicit `(string)` casts, which parse on 5.6 and
are equally deprecation-clean on 8.5. The cost is verbosity, not correctness, so
nothing was traded away.

The only genuine tension is F-10 above: the honest code floor (5.6) is lower than
the floor WordPress core itself enforces (7.2.24 since WP 6.6). That is a
declaration decision, not a code one, and it is yours to make.

**No conflict was found that forced a compromise in either direction.**

**Resolution:** the user chose to declare `Requires PHP: 7.2`. The code is still
written to 5.6-parseable syntax, so the *audited* range remains PHP 5.6 → 8.5;
the *declared* floor is simply raised to the lowest PHP that modern WordPress
will itself run on. Nothing was given up — the declaration narrowed, the
compatibility did not.

---

## 7. Final declared compatibility range

`accordion-toggle.php` header:

```
Version:           1.2.8
Requires at least: 5.6
Requires PHP:      7.2
Tested up to:      7.0
```

`readme.txt`:

```
Requires at least: 5.6
Tested up to:      7.0
Requires PHP:      7.2
Stable tag:        1.2.8
```

- **Declared range:** WordPress 5.6 → 7.0, PHP 7.2 → (no ceiling).
- **Actually verified clean:** WordPress 5.6 → 7.0.3, PHP 5.6 → 8.5.9. The code
  runs below the declared floor; the declaration is deliberately conservative.

---

## 8. Verification performed

- **`php -l` on every changed file** immediately after each edit, plus a full
  sweep of all 11 PHP files in the plugin (including the four generated
  `dist/*.asset.php`): **no syntax errors detected**, PHP 8.5.8.
- **Stubbed runtime harness** under PHP 8.5.8 with `error_reporting = E_ALL`,
  exercising `init`, `enqueue_block_editor_assets` (fired twice, to trip I-3),
  `render_block` with five hostile block shapes, `wp_footer`, and `wp_head`
  against parsed-block fixtures including `innerHTML => null`, a missing
  `innerHTML` key, and a top-level `accordion-item` (the I-1 `die()` path).
  Run against WP version strings `7.0.3`, `5.8` and `5.7.2` so both branches of
  `Accordion_Helper::get_block_register_path()` were covered.
  Result: **clean on the branch, five distinct failures on `master`** (quoted in §3).
  Re-run unchanged after the four user-approved edits in §5 — still clean.
- **`phpcs`: not installed** in this environment (`which phpcs` → not found).
  Per the skill's rules, skipped rather than installing global tooling.
- **Live WordPress boot: not performed.** The Local site's MySQL is stopped
  (`wp plugin list` → `Error: Error establishing a database connection`), so no
  in-WordPress smoke test was possible. Start the site and load a page with an
  accordion before merging.

## Git state

- Branch `accordion-toggle-leon-dev`, created from an up-to-date `master`.
- **Nothing committed, nothing pushed.** All changes are in the working tree.

Files changed: `accordion-toggle.php`, `blocks/accordion.php`,
`blocks/accordion-item.php`, `includes/helpers.php`, `includes/font-loader.php`,
`includes/class-faq-schema.php`, `includes/post-meta.php`, `readme.txt`,
`package.json`, plus this report.

---

## 9. Merge-forward onto 1.2.9

### Why this was needed

`master` (`8d4e49a`, March 2023) is stale at **1.2.7**. The releases since then
were cut on the `latest` branch and tagged, but only 1.2.7 and earlier were
merged back into `master`. The two lines diverged at `f01adf2`:

```
merge-base            f01adf2  2023-03-23
master        1.2.7   8d4e49a  2023-03-30   <- 8 merge commits, then stopped
v1.2.9 =
origin/latest 1.2.9   683dda7  2024-07-04   <- 5 commits master never took
```

The original compatibility pass was therefore built on a base that was two
releases behind what WordPress.org actually ships.

### Where 1.2.9 lives

| Ref | Commit | Version | Verdict |
|---|---|---|---|
| tag `v1.2.9` | `683dda7` | 1.2.9 | **Chosen base** |
| `origin/latest` | `683dda7` | 1.2.9 | Identical commit to the tag |
| `origin/accordion-new-structure` | `00b52b8` | 1.2.9 | Unreleased June-2025 refactor, not the release line |
| `origin/accordion-new-structure-monir` | `b24ec6e` | 1.2.9 | Same, a personal offshoot |
| `origin/trunk`, `origin/master` | `8d4e49a` | 1.2.7 | Stale |

1.2.9's source **is** in this git repo, so Step 2a applied and no SVN checkout
was needed. For the record, releases do reach WordPress.org over SVN — via
`.github/workflows/deploy.yml` (`10up/action-wordpress-plugin-deploy`) and
`assets.yml`, which deploys from the `trunk` branch. There is no `.svn`
directory in the working copy.

### What 1.2.9 changed

Versus 1.2.7, release 1.2.9 is mostly a JS/CSS rebuild ("update from EB 4.5.0"):
~68 files, +67,850/−7,623, almost all of it `dist/` and `blocks/*/src/`. Only
**two PHP source files** overlap with the compatibility work:

- `accordion-toggle.php` — the editor bundle moved from `dist/controls.*` to
  `dist/modules.*`; added a `fontAwesome` localize key; renamed the
  `eb-fontawesome-admin` style handle to `essential-blocks-fontawesome` and
  pointed it at `assets/css/fontawesome/css/all.min.css`; added the
  `essential-blocks-iconpicker-css` style and the
  `essential-blocks-controls-frontend` script.
- `blocks/accordion.php` — appended `essential-blocks-controls-frontend` to the
  frontend script's dependencies, and swapped `eb-fontawesome-admin` for
  `dashicons` + `essential-blocks-fontawesome` in the render callback.

`includes/class-faq-schema.php`, `includes/font-loader.php`,
`includes/helpers.php`, `includes/post-meta.php` and `blocks/accordion-item.php`
are **byte-identical** between 1.2.7 and 1.2.9, so every fix in those five files
replayed with no conflict at all.

### Conflicts and how each was resolved

`git cherry-pick -n a9fc74e` onto `v1.2.9` produced four conflicted files.

| File | Conflict | Resolution |
|---|---|---|
| `accordion-toggle.php` | `Version:` header — 1.2.9 vs 1.2.8 | → **1.5.0** |
| `accordion-toggle.php` | `ACCORDION_BLOCK_VERSION` — 1.2.9 vs 1.2.8 | → **1.5.0** |
| `accordion-toggle.php` | **Semantic.** 1.2.9: `include_once …/dist/modules.asset.php`. Compat fix: `Accordion_Helper::get_asset_file('/dist/controls.asset.php')`. Taking either side alone loses something — the compat side would have silently reverted 1.2.9's move to the `modules` bundle. | Combined: `Accordion_Helper::get_asset_file('/dist/modules.asset.php')`. Keeps 1.2.9's target file **and** the safe loader. |
| `blocks/accordion.php` | **Semantic, badly interleaved.** Git tangled the two sides across the function body, mixing 1.2.9's `array_merge(…, ['essential-blocks-controls-frontend'])` and `dashicons`/`essential-blocks-fontawesome` enqueues with the compat side's rename, `ABSPATH` guard and `get_asset_file()` call. | Resolved by hand-writing the file rather than picking hunks. Final version keeps **all** of 1.2.9's asset behavior and **all** of the compatibility changes. |
| `package.json` | `version` — 1.2.9 vs 1.2.8 | → **1.5.0** |
| `readme.txt` | Header block: 1.2.9's `Tested up to: 6.4` / `Stable tag: 1.2.9` vs the compat side's `Tested up to: 7.0` / `Requires PHP: 7.2` / `Stable tag: 1.2.8` | `Tested up to: 7.0`, `Requires PHP: 7.2`, `Stable tag: 1.5.0` |
| `readme.txt` | Changelog: the compat pass had written a `= 1.2.8 - 09/08/2026 =` entry, which **collides with the genuine 1.2.8 release of 19/02/2024** | The invented 1.2.8 entry was discarded and rewritten as `= 1.5.0 - 09/08/2026 =`. The real 1.2.9 and 1.2.8 history is preserved untouched. |

**Nothing was force-resolved.** Every conflict above was either pure version
metadata (dictated by the 1.5.0 bump) or a case where both sides' intent could be
kept in full. No compatibility finding was dropped, and no 1.2.9 behavior was
reverted.

### Version-number correction

The earlier pass bumped 1.2.7 → 1.2.8 against the stale `master`, not knowing
that **1.2.8 and 1.2.9 were already released and tagged** (`v1.2.8` = `ebff4e6`,
Feb 2024). That bump would have shipped a second, different 1.2.8. Going to
**1.5.0** off the real 1.2.9 base resolves the collision.

### Re-verification after the rebase

- `php -l` on all PHP files in the plugin: **no syntax errors**.
- No conflict markers remain in any `.php`, `.txt`, `.json` or `.md` file.
- Version is **1.5.0** in all four places: plugin header,
  `ACCORDION_BLOCK_VERSION`, `readme.txt` `Stable tag`, `package.json`.
- Smoke harness re-run under PHP 8.5.8 / `E_ALL` against WP 7.0.3, 5.8 and
  5.7.2: **clean, zero warnings or fatals**. Resolved editor dependencies went
  from 10 → **14**, which confirms the loader is reading 1.2.9's
  `dist/modules.asset.php` rather than the old `dist/controls.asset.php`.
- Live WordPress boot: **still not performed** (Local site's MySQL is down).

### Git state

Branch `accordion-toggle-1.5.0-dev`, based on `v1.2.9` (`683dda7`).
Cherry-pick left in progress and **not committed** — changes are staged/unstaged
in the working tree for review, as requested.

---

## 10. Frontend regression after the 1.2.9 merge — root cause and fix

**Symptom reported:** on `accordion-toggle-1.5.0-dev` the block behaved correctly
in the editor but was broken on the public page.

### What was actually wrong

**Not** the hand-merged enqueue logic. That was the obvious suspect — it was the
only code reconciled by hand — so it was checked first and cleared:

```
$ diff <(git show 683dda7:blocks/accordion.php) blocks/accordion.php
```

shows only the four intended differences (ABSPATH guard, function rename +
`function_exists` guard, `$dir` removal, `get_asset_file()` in place of
`include_once`). Every enqueue survived intact: `dashicons`,
`essential-blocks-fontawesome`, `essential-blocks-animation`, both scripts, and
the `array_merge(…, ['essential-blocks-controls-frontend'])` dependency.

The real cause is **the `file_exists()` guard added as fix I-2**, combined with
`lib/style-handler` being an **uninitialised git submodule** in this checkout:

```
$ git submodule status
-e27b778…  controls
-74863767…  lib/style-handler     <- leading "-" = never initialised
```

`lib/style-handler` is not an optional extra. It is the component that turns each
block's `blockMeta` attribute into a real stylesheet at
`wp-content/uploads/eb-style/eb-style-<post_id>.min.css`, generated on the `wp`
hook and enqueued on `wp_enqueue_scripts`. Without it:

- **Editor is unaffected** — the editor computes and injects block styles in JS,
  never touching the PHP style handler. Hence "admin fine".
- **Front end loses every generated rule.** The markup and base CSS still ship,
  so the page is not blank; the accordion just renders as an unstyled stack. The
  panels also depend on those rules for their collapsed state
  (`visibility:hidden; position:absolute`, flipped by `.eb_accdn_loaded`), so
  open/close is broken too.

Measured on the live site at `http://localhost:10047/?p=7` before the fix:
markup present (4 `eb-accordion` matches), all three scripts loading,
`animate.min.css` / `all.min.css` / `dashicons` loading — but **no `eb-`
stylesheet and not one generated CSS rule**. All three occurrences of
`eb-accordion-content-wrapper-eb-accordion-n83lv5k` in the HTML were `class`
attributes; none was a CSS selector.

Before fix I-2, this same checkout **fatally errored on every request** — the
unguarded `require_once` of a missing file. The guard was the right change (a
missing optional path should not white-screen a site), but making it *silent*
converted a loud failure into a subtle one that presents as "editor fine,
front end broken" — one of the harder WordPress symptoms to trace.

### Fix

1. **Initialised the submodule** — `git submodule update --init lib/style-handler`,
   checked out at the pinned commit `74863767` (`v0.1.2-128-g7486376`). This is a
   working-copy fix; the recorded submodule SHA is unchanged, so it produces no
   tracked diff.
2. **Made the guard non-silent** (`accordion-toggle.php`). When the file is
   absent, an `admin_notices` callback now tells an administrator what is missing,
   what breaks, and how to fix it. Gated on `current_user_can('activate_plugins')`,
   and the translation calls live inside the callback so they run after `init`
   (avoiding the WP 6.7+ early-translation notice). Zero effect on a correct
   install, where the branch is never taken.

`lib/style-handler` also lints clean on PHP 8.5.8, so pulling it in adds no new
compatibility debt.

### Verification

| Check | Result |
|---|---|
| Generated stylesheet written | `uploads/eb-style/eb-style-7.min.css`, 5058 bytes |
| Enqueued on the page | `…/uploads/eb-style/eb-style-7.min.css?ver=…`, HTTP 200 |
| Generated rules present | `.eb-accordion-container.eb_accdn_loaded … { visibility:visible; position:static }` and the collapsed/`is-selected` rules |
| JS ↔ CSS contract | `dist/frontend/index.js` sets `eb_accdn_loaded` and binds 2 `click` + 3 `keydown` handlers; the CSS keys on that exact class |
| **A/B against pristine 1.2.9** | Swapped `accordion-toggle.php` + `blocks/accordion.php` for `git show 683dda7:` copies, re-rendered, and diffed against the merged branch's output with `?ver=` stripped: **byte-identical**. The merge introduced no frontend regression. |
| Editor path in real WP | `do_action('enqueue_block_editor_assets')` → `eb-accordion-toggle-controls-util` (14 deps, ver `38a122a031619513d09b` — the real hash from 1.2.9's `dist/modules.asset.php`, proving `get_asset_file()` reads the file rather than falling back), `eb-accordion-toggle-editor` (13 deps), editor styles resolving to `modules.css` / `style-modules.css` / `all.min.css`. Both blocks registered. |
| PHP errors | Frontend, home, `wp-login.php` and `wp-admin/` all HTTP 200 with **0 new lines** in the site error log. (Earlier `07:02 UTC` parse errors in that log are from the brief window when unresolved conflict markers were on disk; they stop once the conflicts were resolved.) |
| Admin notice | Correctly **not** hooked while the submodule is present |

**Not verified:** an actual click-through of open/close in a browser. The Claude
Chrome extension is not connected in this environment, so interactivity was
confirmed structurally (JS handlers + the CSS rules they toggle) rather than by
clicking. Worth a manual 10-second check.

### Related pre-existing issue (found, not fixed)

Four styles are registered against files that **do not exist** and have not
existed since the 1.2.9 rebuild dropped them from `assets/css/`:

- `fontpicker-default-theme` → `assets/css/fonticonpicker.base-theme.react.css`
- `fontpicker-material-theme` → `assets/css/fonticonpicker.material-theme.react.css`
- `essential-blocks-hover-css` → `assets/css/hover-min.css`
- `hover-effects-style` → `assets/css/hover-effects.css`

These are **registered but never enqueued**, so nothing requests them and there
are no 404s — harmless today. They are present in pristine 1.2.9 too, so this is
not a merge artifact. Left alone: dropping a public handle could break any theme
or plugin that enqueues one by name. Recommend cleaning up in a separate pass.
