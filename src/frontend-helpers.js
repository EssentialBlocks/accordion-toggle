/**
 * Front-end icon helpers, published as `window.eb_frontend` (dist/frontend.js,
 * registered as `essential-blocks-controls-frontend`).
 *
 * Built from this repository instead of the shared controls bundle, which also
 * exported EBRenderIcon: an HTML-string builder the accordion never calls. Only
 * the two helpers the accordion's frontend script uses are kept.
 */

export const EBGetIconType = (value) => {
    if (typeof value === "string" && value.includes("fa-")) {
        return "fontawesome";
    }
    return "dashicon";
};

export const EBGetIconClass = (value) => {
    if (!value || typeof value !== "string") {
        return "";
    }
    if (!value.includes("fa-")) {
        return "dashicon dashicons " + value;
    }
    return value;
};
