const PWA_ROOT = "/pwa";

// Import configs
importScripts(PWA_ROOT + "/config.js");

// Import Main Service Worker
importScripts(PWA_ROOT + "/sw.js");

function preloadAllImages() {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    const img = new Image();
    img.src = image.src;
  });
}

preloadAllImages();
