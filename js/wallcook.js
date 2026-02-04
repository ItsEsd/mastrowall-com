var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(";");
for (var i = 0; i < ca.length; i++) {
  var c = ca[i].split("mwallced=")[1];
  var d = ca[i].split("mwallcstu=")[1];
  if (c == "true") {
    actionforuser();
    rmvrestrictfn();
  } else if (d == "true") {
    actionforuser();
  }
}
function actionforuser() {
  $("#intro").slideUp("slow");
  $("#stuname,#stueid,#exid,#expass,#conexidbtn").removeAttr("disabled");
  $("#expgtotst").show();
}

function rmvrestrictfn() {
  $("#chexid,#chkey,#conexedited").removeAttr("disabled");
  $(
    "#eduname,#extitle,#exdescp,#timedurhr,#timedurmin,#edueid,#crtidone",
  ).removeAttr("disabled");
}

var url_string = window.location.href;
var url = new URL(url_string);
var q = url.searchParams.get("onlineTest");
if (q == "true") {
  $(".otservice").show();
  $("#falsesecback").show();
}

var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(";");
function chkck() {
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].split("mwallced=")[1];
    var d = ca[i].split("mwallcstu=")[1];
    if (c == "true" || d == "true") {
      return true;
    }
  }
}
if (chkck() != true) {
  /// Do restriction
}

/* ===============================
   GistBox Link Interceptor
   =============================== */

(function () {
  const allowedDomains = [
    "library.mastrowall.in",
    "blog.mastrowall.in",
    "home.mastrowall.in",
  ];

  function isAllowedDomain(url) {
    try {
      const parsed = new URL(url, window.location.href);
      return allowedDomains.includes(parsed.hostname);
    } catch (e) {
      return false;
    }
  }

  function openInGistBox(url) {
    // showNotification("Opening external link in <u>GistBox</u>");
    setTimeout(() => {
      showGistBox(url);
    }, 1000);
  }

  /* -------------------------------
     1) Anchor <a target="_blank">
     ------------------------------- */
  document.addEventListener("click", function (e) {
    const anchor = e.target.closest("a");
    if (!anchor || anchor.target !== "_blank" || !anchor.href) return;

    if (!isAllowedDomain(anchor.href)) return;

    e.preventDefault();
    openInGistBox(anchor.href);
  });

  /* -------------------------------
     2) window.open interception
     ------------------------------- */
  const originalWindowOpen = window.open;

  window.open = function (url, target, features) {
    if (target === "_blank" && isAllowedDomain(url)) {
      openInGistBox(url);
      return null; // stop new tab
    }

    return originalWindowOpen.call(window, url, target, features);
  };
})();

function showGistBox(url) {
  document.body.style.overflowY = "hidden";
  let existinggist = document.getElementById("gistbox");
  if (existinggist instanceof HTMLElement) {
    existinggist.style.display =
      existinggist.style.display === "none" || !existinggist.style.display
        ? "block"
        : "none";
    updateFetchUrl(url);
  } else {
    const box = document.createElement("div");
    box.id = "gistbox";
    box.className = "gistbox";
    box.style.display = "block";
    const closeBtn = document.createElement("button");
    closeBtn.className = "gistbox-close";
    closeBtn.textContent = "Close GistBox";
    closeBtn.onclick = () => {
      box.style.display = "none";
      document.body.style.overflowY = "auto";
      if (history.state === "gistbox-open") {
        history.replaceState(null, "");
      }
    };

    const iframe = document.createElement("iframe");
    iframe.src =
      "https://gistbox.mastrowall.com/?fetchurl=" + encodeURIComponent(url);
    iframe.className = "gistbox-iframe";
    iframe.id = "gistbox-iframe";
    iframe.allowFullscreen = true;
    box.appendChild(closeBtn);
    box.appendChild(iframe);
    document.body.appendChild(box);
  }
  if (history.state !== "gistbox-open") {
    history.pushState({ page: "gistbox-open" }, "");
  }
}

function updateFetchUrl(newUrl) {
  const iframegist = document.getElementById("gistbox-iframe");
  if (iframegist && iframegist.contentWindow) {
    iframegist.contentWindow.postMessage(
      {
        type: "navigatelinkins",
        url: newUrl,
        headtit: "Testing",
      },
      "https://gistbox.mastrowall.com/",
    );
  } else {
    console.warn("iframe not ready or not found");
  }
}

window.addEventListener("popstate", (ev) => {
  if (ev.state !== "gistbox-open") {
    document.getElementById("gistbox").style.display = "none";
    document.body.style.overflowY = "auto";
  }
});
