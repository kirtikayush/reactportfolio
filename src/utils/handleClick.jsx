// src/utils/handleClick.js

export const handleClick = (url) => {
  if (!url) {
    console.warn("handleClick: No URL provided.");
    return;
  }

  // Open in a new tab safely (prevents window.opener attacks)
  window.open(url, "_blank", "noopener,noreferrer");
};
