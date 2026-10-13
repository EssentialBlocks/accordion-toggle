/**
 * Design generation given to blocks inserted from 1.4.0 on.
 *
 * See the `designVersion` attribute: anything that would change the look or the
 * behaviour of a block saved by 1.3.0 or earlier is only applied when this returns
 * true, so existing blocks keep rendering exactly as they did, even after a re-save.
 */
export const LATEST_DESIGN_VERSION = 2;

export const isLatestDesign = (attributes) =>
    Number(attributes?.designVersion || 0) >= LATEST_DESIGN_VERSION;

/**
 * Build one CSS rule, or nothing.
 *
 * The 1.4.0 style options start empty. The shared style generators still return
 * whitespace (and a `transition` list) for an unset control, so emitting the rule
 * unconditionally would add empty selectors to every block's stored CSS. A rule is
 * only written when at least one of its declarations has a value; a lone
 * `transition` does not count.
 *
 * @param {string}   selector     CSS selector list.
 * @param {string[]} declarations Declaration strings from the style generators.
 * @param {string}   transition   Optional transition value.
 * @return {string} The rule, or an empty string.
 */
export const cssRule = (selector, declarations, transition = "") => {
    const body = declarations
        .filter((part) => typeof part === "string" && part.trim() !== "")
        .join("\n");

    if (body.trim() === "") {
        return "";
    }

    return `${selector}{
        ${body}
        ${transition ? `transition: ${transition};` : ""}
    }`;
};
