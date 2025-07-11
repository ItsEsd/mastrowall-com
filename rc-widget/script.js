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
    const frmurl = "https://www.sciencenews.org";
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
  function openframenews(url, triggerId) {
    const frmanwsctive = document.querySelector(".frmnwsactive");
    if (frmanwsctive) {
      frmanwsctive.remove();
    }
    $("#framenews,.nbtbfrm").slideDown("slow");
    $("#dots,#ctdotbx,#lnkotbx,#jdbox").hide("fast");
    var overlayDiv = document.createElement("div");
    overlayDiv.id = "ovrlyfrmld";
    overlayDiv.style.position = "fixed";
    overlayDiv.style.top = "0";
    overlayDiv.style.left = "0";
    overlayDiv.style.width = "100%";
    overlayDiv.style.height = "100%";
    overlayDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    var loadingMessage = document.createElement("div");
    loadingMessage.innerHTML =
      '<div id="loadfrmdv" style="font-size:14px;"><span class="spinloadfrm"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"> <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/> <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/> </svg></span>Loading... </div>';
    loadingMessage.style.position = "absolute";
    loadingMessage.style.top = "50%";
    loadingMessage.style.left = "50%";
    loadingMessage.style.transform = "translate(-50%, -50%)";
    loadingMessage.style.color = "white";
    overlayDiv.appendChild(loadingMessage);
    document.getElementById("framenews").appendChild(overlayDiv);
    var iframe = document.getElementById("frame");
    iframe.style.backgroundImage =
      "url('https://mastrowall.com/images/loading-gif.gif')";
    iframe.onload = function () {
      document.getElementById("framenews").removeChild(overlayDiv);
      iframe.style.backgroundImage = "none";
    };

    var ovrlyfrmldElement = document.getElementById("ovrlyfrmld");
    if (ovrlyfrmldElement) {
      ovrlyfrmldElement.addEventListener("click", function () {
        ovrlyfrmldElement.parentNode.removeChild(ovrlyfrmldElement);
      });
    }

    if (new URL(iframe.src).href !== new URL(url, location.origin).href) {
      iframe.src = url;
    } else {
      document.getElementById("framenews").removeChild(overlayDiv);
      iframe.style.backgroundImage = "none";
    }

    if (triggerId) {
      const triggerEl = document.getElementById(triggerId);
      if (triggerEl) {
        const dot = document.createElement("span");
        dot.className = "frmnwsactive";
        dot.innerHTML = "";
        const label = triggerEl.querySelector("span");
        if (label) {
          triggerEl.insertBefore(dot, label);
        } else {
          triggerEl.appendChild(dot);
        }
      }
    }
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
