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
    const frmurl = "https://www.sciencedaily.com/";
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

  $("#telemdmastro").click(function () {
    const frmurl = "https://telemedia.mastrowall.com";
    openframenews(frmurl, "telemdmastro");
  });

  $(".closeotbx").click(function () {
    $(".dircttb").slideUp("slow");
  });

  window.addEventListener("popstate", function () {
    $(".dircttb").slideUp("slow");
    if (history.state === "rcwidget-frmnws") {
      history.back();
    }
    const overlay = document.getElementById("ovrlyfrmld");
    if (overlay) overlay.remove();
  });

  function loadIntoIframeSrcdoc(iframeId, url, mode = "srcdoc", options = {}) {
    if (history.state !== "rcwidget-frmnws") {
      history.pushState("rcwidget-frmnws", "");
    }
    const oldIframe = document.getElementById(iframeId);
    if (!oldIframe) return Promise.resolve();

    const sandbox =
      options.sandbox ||
      "allow-scripts allow-same-origin allow-forms allow-popups";

    return new Promise((resolve) => {
      // 🔁 create fresh iframe (hard reset)
      const iframe = document.createElement("iframe");
      iframe.id = oldIframe.id;
      iframe.className = oldIframe.className;
      iframe.style.cssText = oldIframe.style.cssText;

      iframe.onload = () => resolve();

      if (mode === "src") {
        iframe.setAttribute("sandbox", sandbox);
        iframe.src = url;
        iframe.dataset.loadedUrl = url;
      } else {
        const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
html,body{margin:0;height:100%;overflow:hidden;}
iframe{border:none;width:100%;height:100%;}
</style>
</head>
<body>
<iframe src="${url}" sandbox="${sandbox}" referrerpolicy="no-referrer"></iframe>
</body>
</html>`;
        iframe.srcdoc = html;
        iframe.dataset.srcdocUrl = url;
      }

      // 🔥 replace old iframe completely
      oldIframe.replaceWith(iframe);
    });
  }

  async function openframenews(url, triggerId) {
    const $iframe = $("#frame");

    const mode = triggerId === "telemdmastro" ? "src" : "srcdoc";
    const cachedUrl =
      mode === "src" ? $iframe.data("loaded-url") : $iframe.data("srcdoc-url");

    if (url === cachedUrl) {
      $("#framenews,.nbtbfrm").slideDown("slow");
      $("#dots,#ctdotbx,#lnkotbx,#jdbox").hide("fast");
      setActiveDot(triggerId);
      return;
    }

    $(".frmnwsactive").remove();
    $("#ovrlyfrmld").remove();

    $("#framenews,.nbtbfrm").slideDown("slow");
    $("#dots,#ctdotbx,#lnkotbx,#jdbox").hide("fast");

    /* ---------- overlay ---------- */
    const $overlay = $('<div id="ovrlyfrmld">Loading…</div>').css({
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    });

    $("#framenews").append($overlay);
    var ovrlyfrmldElement = document.querySelector("#ovrlyfrmld");
    if (ovrlyfrmldElement) {
      ovrlyfrmldElement.addEventListener("click", function () {
        ovrlyfrmldElement.parentNode.removeChild(ovrlyfrmldElement);
      });
    }
    $("#frame").css(
      "backgroundImage",
      "url('https://mastrowall.com/images/loading-gif.gif')",
    );

    // 🔁 unified loader (hard reset iframe)
    await loadIntoIframeSrcdoc("frame", url, mode);

    $("#ovrlyfrmld").remove();
    $("#frame").css("backgroundImage", "none");

    if (mode === "src") {
      $("#frame").data("loaded-url", url);
    } else {
      $("#frame").data("srcdoc-url", url);
    }

    setActiveDot(triggerId);
  }

  function setActiveDot(triggerId) {
    if (!triggerId) return;

    const $trigger = $(`#${triggerId}`);
    if (!$trigger.length) return;

    const cachedUrl =
      $("#frame").data("srcdoc-url") || $("#frame").data("loaded-url");

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
