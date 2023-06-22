$(document).ready(function() {
    $("#glocform").submit(function(event) {
      event.preventDefault();
      var searchQuery = $("#q").val();
      var searchUrl;
      var selectedEngine = $("input[name='engine']:checked").val();

      if (selectedEngine === "google") {
        searchUrl = "https://google.com/search?q=" + encodeURIComponent(searchQuery);
      } else if (selectedEngine === "bing") {
        searchUrl = "https://www.bing.com/search?q=" + encodeURIComponent(searchQuery);
      } else if (selectedEngine === "yahoo") {
        searchUrl = "https://search.yahoo.com/search?p=" + encodeURIComponent(searchQuery);
      } else if (selectedEngine === "wikipedia") {
        searchUrl = "https://en.wikipedia.org/w/index.php?search=" + encodeURIComponent(searchQuery);
      } else if (selectedEngine === "duckduckgo") {
        searchUrl = "https://duckduckgo.com/?q=" + encodeURIComponent(searchQuery);
      } else if (selectedEngine === "wolframalpha") {
        searchUrl = "https://www.wolframalpha.com/input/?i=" + encodeURIComponent(searchQuery);
      } else if (selectedEngine === "aol") {
        searchUrl = "https://search.aol.com/search?q=" + encodeURIComponent(searchQuery);
      } else if (selectedEngine === "ask") {
        searchUrl = "https://www.ask.com/web?q=" + encodeURIComponent(searchQuery);
      } else if (selectedEngine === "ecosia") {
        searchUrl = "https://www.ecosia.org/search?q=" + encodeURIComponent(searchQuery);
      } else if (selectedEngine === "youtube") {
        searchUrl = "https://www.youtube.com/results?search_query=" + encodeURIComponent(searchQuery);
      }

      var win = window.open(searchUrl, "_blank");
      win.focus();
    });
  });