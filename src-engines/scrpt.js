$(document).ready(function () {
  /* ---------- 1️⃣ Load the stored engine (or default to Google) ---------- */
  const ENGINE_KEY = "mastrowall_search_engine";
  const $engineSelect = $("#engineSelect");

  // Pull the saved value, if any
  const savedEngine = localStorage.getItem(ENGINE_KEY);
  if (savedEngine) {
    $engineSelect.val(savedEngine);
  } else {
    $engineSelect.val("google"); // default
  }

  /* ---------- 2️⃣ When the user changes the dropdown, persist it ---------- */
  $engineSelect.on("change", function () {
    const chosen = $(this).val();
    localStorage.setItem(ENGINE_KEY, chosen);
  });

  /* ---------- 3️⃣ Form submit – use the (possibly stored) engine ---------- */
  $("#glocform").on("submit", function (event) {
    event.preventDefault(); // stop normal post

    const query = $("#q").val().trim();
    if (!query) return; // nothing to search

    const engine = $engineSelect.val(); // current selection

    // Build the appropriate URL
    let searchUrl = "";
    switch (engine) {
      case "google":
        searchUrl =
          "https://www.google.com/search?q=" + encodeURIComponent(query);
        break;
      case "bing":
        searchUrl =
          "https://www.bing.com/search?q=" + encodeURIComponent(query);
        break;
      case "yahoo":
        searchUrl =
          "https://search.yahoo.com/search?p=" + encodeURIComponent(query);
        break;
      case "wikipedia":
        searchUrl =
          "https://en.wikipedia.org/w/index.php?search=" +
          encodeURIComponent(query);
        break;
      case "duckduckgo":
        searchUrl = "https://duckduckgo.com/?q=" + encodeURIComponent(query);
        break;
      case "wolframalpha":
        searchUrl =
          "https://www.wolframalpha.com/input/?i=" + encodeURIComponent(query);
        break;
      case "aol":
        searchUrl =
          "https://search.aol.com/search?q=" + encodeURIComponent(query);
        break;
      case "ask":
        searchUrl = "https://www.ask.com/web?q=" + encodeURIComponent(query);
        break;
      case "ecosia":
        searchUrl =
          "https://www.ecosia.org/search?q=" + encodeURIComponent(query);
        break;
      case "youtube":
        searchUrl =
          "https://www.youtube.com/results?search_query=" +
          encodeURIComponent(query);
        break;
      default:
        // fallback – should never happen
        searchUrl =
          "https://www.google.com/search?q=" + encodeURIComponent(query);
    }

    // Open the search result in a new tab
    window.open(searchUrl, "_blank")?.focus();
  });
});
