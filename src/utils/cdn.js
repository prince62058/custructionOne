import { CDN_BASE_URL } from "../config/apiKeys";

export const cdnUrl = (pathOrUrl) => {
    if (!pathOrUrl || typeof pathOrUrl !== "string") return "";

    // already full url
    if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
        return pathOrUrl;
    }

    const base = (CDN_BASE_URL || "").replace(/\/+$/, "");
    const path = pathOrUrl.replace(/^\/+/, "");
    return `${base}/${path}`;
};

// console.log("cdn url", CDN_BASE_URL)
