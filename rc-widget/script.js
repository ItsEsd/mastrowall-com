"use strict";
$(document).ready(function () {
  $("#togTest").click(function () {
    $("#dots,#togTest2").show("fast");
    $("#togTest").hide();
  });

  window.addEventListener("mouseup", function (event) {
    var pol = document.getElementById("dots");
    if (event.target != pol && event.target.parentNode != pol) {
      pol.style.display = "none";
      $("#togTest").show();
      $("#togTest2").hide();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  });

  $(".botInline1,.botInline2,.botInline3,.botInline4").click(function () {
    $("#dots").hide("fast");
    $("#togTest").show();
    $("#togTest2").hide();
  });

  $("#togTest2").click(function () {
    $("#dots").hide("fast");
    $("#togTest").show();
    $("#togTest2").hide();
  });

  $("#iasstils").click(function () {
    window.open("https://www.astro.mastrowall.in/groups", "_blank");
  });

  $("#scinewsorg").click(function () {
    const frmurl = "https://www.britannica.com/Science-Tech";
    openframenews(frmurl, "scinewsorg");
  });

  $("#mntday").click(function () {
    const frmurl = "https://www.medicalnewstoday.com";
    openframenews(frmurl, "mntday");
  });

  $("#esq").click(function () {
    const frmurl = "https://www.openaccessjournals.com/";
    openframenews(frmurl, "esq");
  });
  $("#popscie").click(function () {
    const frmurl = "https://www.popsci.com";
    openframenews(frmurl, "popscie");
  });

  $("#wirdns").click(function () {
    const frmurl = "https://www.wired.com";
    openframenews(frmurl, "wirdns");
  });

  $("#scdaily").click(function () {
    const frmurl = "https://www.scitechdaily.com";
    openframenews(frmurl, "scdaily");
  });

  $("#anainsgt").click(function () {
    const frmurl = "https://www.ourworldindata.org/";
    openframenews(frmurl, "anainsgt");
  });

  $("#bigth").click(function () {
    const frmurl = "https://bigthink.com/";
    openframenews(frmurl, "bigth");
  });

  $("#rssamrit").click(function () {
    const frmurl = "https://rss-feed.amrit-corp.com";
    openframenews(frmurl, "rssamrit");
  });

  $(".closeotbx").click(function () {
    $(".dircttb").slideUp("slow");
  });

  function loadIntoIframeSrcdoc(outerId, url, options = {}) {
    const outer = document.getElementById(outerId);
    if (!outer) {
      console.error("[loadIntoIframeSrcdoc] No iframe with id", outerId);
      return;
    }

    const sandbox =
      options.sandbox || "allow-scripts allow-same-origin allow-forms";
    const innerHTML = `
<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<style>
  html,body{margin:0;padding:0;height:100%;overflow:hidden;}
  iframe{border:none;width:100%;height:100%;display:block;}
</style>
</head>
<body>
  <iframe src="${url}" sandbox="${sandbox}"
          loading="eager" referrerpolicy="no-referrer"></iframe>
</body></html>`.trim();
    const onLoad = () => {
      const ev = new Event("srcdoc-loaded");
      outer.dispatchEvent(ev);
    };
    outer.addEventListener("load", onLoad, { once: true });

    if ("srcdoc" in outer) {
      outer.srcdoc = innerHTML;
      outer.removeAttribute("src");
    } else {
      const blob = new Blob([innerHTML], { type: "text/html" });
      const blobUrl = URL.createObjectURL(blob);
      outer.src = blobUrl;
      outer.addEventListener("load", () => URL.revokeObjectURL(blobUrl), {
        once: true,
      });
    }

    if (options.linkId) {
      const link = document.getElementById(options.linkId);
      if (link) {
        link.href = url;
        if (options.openInNewTab) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        } else {
          link.removeAttribute("target");
          link.removeAttribute("rel");
        }
      }
    }
  }

  function openframenews(url, triggerId) {
    const $iframe = $("#frame");
    const currentUrl = $iframe.data("srcdoc-url");

    const cachedFromTrigger = triggerId
      ? $(`#${triggerId}`).data("srcdoc-url")
      : null;

    if (url === currentUrl || url === cachedFromTrigger) {
      $("#framenews,.nbtbfrm").slideDown("slow");
      $("#dots,#ctdotbx,#lnkotbx,#jdbox").hide("fast");
      setActiveDot(triggerId);
      return;
    }

    $(".frmnwsactive").remove();

    $("#framenews,.nbtbfrm").slideDown("slow");
    $("#dots,#ctdotbx,#lnkotbx,#jdbox").hide("fast");

    const $overlayDiv = $("<div>", {
      id: "ovrlyfrmld",
      css: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 9999,
        cursor: "pointer",
      },
    });

    const $loadingMessage = $(`
    <div id="loadfrmdv" style="font-size:14px;">
      <span class="spinloadfrm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
             class="bi bi-arrow-repeat" viewBox="0 0 16 16">
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
          <path fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
        </svg>
      </span> Loading...
    </div>
  `).css({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      color: "white",
      textAlign: "center",
    });

    $overlayDiv.append($loadingMessage);
    $("#framenews").append($overlayDiv);

    $overlayDiv.on("click", () => $overlayDiv.remove());

    const $iframeEl = $("#frame");
    $iframeEl.css(
      "backgroundImage",
      "url('https://mastrowall.com/images/loading-gif.gif')",
    );

    loadIntoIframeSrcdoc("frame", url, {
      sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
      openInNewTab: true,
    });

    $iframeEl.one("srcdoc-loaded", () => {
      $("#ovrlyfrmld").remove();
      $iframeEl.css("backgroundImage", "none");
    });

    $iframeEl.data("srcdoc-url", url);

    setActiveDot(triggerId);
  }

  function setActiveDot(triggerId) {
    if (!triggerId) return;
    const $trigger = $(`#${triggerId}`);

    if (!$trigger.length) return;

    const cachedUrl = $("#frame").data("srcdoc-url");
    if (cachedUrl) $trigger.data("srcdoc-url", cachedUrl);

    $trigger.find(".frmnwsactive").remove();

    const $dot = $('<span class="frmnwsactive"></span>');
    const $label = $trigger.find("span").first();

    if ($label.length) $label.before($dot);
    else $trigger.append($dot);
  }

  $("#mlibr").click(function () {
    window.open("https://library.mastrowall.in/", "_blank");
  });

  $("#quzz").click(function () {
    opjdbox();
    const active = document.createElement("span");
    active.innerHTML = "";
    active.className = "frmactive";
    document.getElementById("quzz").appendChild(active);
    const frame = document.getElementById("jdframe");
    const newSrc = "https://quiz.mastrowall.com";
    document.getElementById("btitlejd").innerHTML = "|| Quizzes";
    if (new URL(frame.src).href !== new URL(newSrc, location.origin).href)
      frame.src = newSrc;
  });

  $("#g2faq").click(function () {
    opjdbox();
    const active = document.createElement("span");
    active.innerHTML = "";
    active.className = "frmactive";
    document.getElementById("g2faq").appendChild(active);
    const frame = document.getElementById("jdframe");
    const newSrc = "https://g2faq.amrit-corp.com";
    document.getElementById("btitlejd").innerHTML = "|| 🤖 G2 FAQ - AMRIT";
    if (new URL(frame.src).href !== new URL(newSrc, location.origin).href)
      frame.src = newSrc;
  });

  $("#scrpwiki").click(function () {
    opjdbox();
    const active = document.createElement("span");
    active.innerHTML = "";
    active.className = "frmactive";
    document.getElementById("scrpwiki").appendChild(active);
    const frame = document.getElementById("jdframe");
    const newSrc = "https://scrapia.amrit-corp.com/";
    document.getElementById("btitlejd").innerHTML =
      "|| Scrapia Academic Search 🔍";
    if (new URL(frame.src).href !== new URL(newSrc, location.origin).href)
      frame.src = newSrc;
  });

  $("#botcrtod").click(function () {
    opnotbxctd();
  });

  $("#botlinkins").click(function () {
    opnotbxlnk();
  });

  $("#masthome").click(function () {
    window.open("https://mastrowall.com", "_blank");
  });
  const responimps = document.querySelectorAll(".nbtbfrm");

  $("#srchengn").click(function () {
    $("#srchengcon,#clssrceng").slideDown();
    responimps.forEach((el) => el.classList.add("nbtbfrmwtsrc"));
  });

  $("#clssrceng").click(function () {
    $("#srchengcon,#clssrceng").slideUp();
    responimps.forEach((el) => el.classList.remove("nbtbfrmwtsrc"));
  });

  function opnotbxctd() {
    $("#ctdotbx,.nbtbfrm").slideDown("slow");
    $("#dots,#jdbox,#lnkotbx").hide("fast");
  }

  function opnotbxlnk() {
    $("#lnkotbx,.nbtbfrm").slideDown("slow");
    $("#dots,#jdbox,#ctdotbx").hide("fast");
  }

  function opjdbox() {
    const frmactive = document.querySelector(".frmactive");
    if (frmactive) {
      frmactive.remove();
    }
    $("#jdbox,.nbtbfrm").slideDown("slow");
    $("#dots,#ctdotbx,#lnkotbx,#framenews").hide("fast");
    document.getElementById("jdframe").style.backgroundImage =
      'url("https://mastrowall.com/images/loading-gif.gif")';
    document.getElementById("jdframe").onload = function () {
      document.getElementById("jdframe").style.backgroundImage = "none";
    };
  }

  $("<link>", {
    rel: "stylesheet",
    href: "https://mastrowall.com/css/bootstrap.min.css",
  }).appendTo("head");
});
