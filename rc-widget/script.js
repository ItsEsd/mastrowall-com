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

  $("#scinewsorg").click(function () {
    openframenews();
    document.getElementById("frame").src = "https://www.sciencenews.org";
  });

  $("#mntday").click(function () {
    openframenews();
    document.getElementById("frame").src = "https://www.medicalnewstoday.com";
  });

  $("#scrpwiki").click(function () {
    openframenews();
    document.getElementById("frame").src = "https://scrapia.amrit-corp.com/";
  });

  $("#iasstils").click(function () {
    window.open("https://ilias.mastrowall.in", "_blank");
  });

  $("#popscie").click(function () {
    openframenews();
    document.getElementById("frame").src = "https://www.popsci.com";
  });

  $("#wirdns").click(function () {
    openframenews();
    document.getElementById("frame").src = "https://www.wired.com";
  });

  $("#scdaily").click(function () {
    openframenews();
    document.getElementById("frame").src = "https://www.scitechdaily.com";
  });

  $("#anainsgt").click(function () {
    openframenews();
    document.getElementById("frame").src = "https://www.ourworldindata.org/";
  });

  $("#bigth").click(function () {
    openframenews();
    document.getElementById("frame").src = "https://bigthink.com/";
  });

  $("#rssamrit").click(function () {
    openframenews();
    document.getElementById("frame").src = "https://rss-feed.amrit-corp.com";
  });

  $(".closeotbx").click(function () {
    $(".dircttb").slideUp("slow");
  });

  $("#esq").click(function () {
    opjdbox();
    document.getElementById("btitlejd").innerHTML = "|| Journals";
    document.getElementById("jdframe").src =
      "https://www.openaccessjournals.com/";
  });

  $("#scd").click(function () {
    opjdbox();
    document.getElementById("btitlejd").innerHTML = "|| Journals";
    document.getElementById("jdframe").src =
      "https://www.sciencedirect.com/browse/journals-and-books?accessType=openAccess";
  });

  $("#g2faq").click(function () {
    opjdbox();
    document.getElementById("btitlejd").innerHTML = "|| 🤖 G2 FAQ - AMRIT";
    document.getElementById("jdframe").src = "https://g2faq.amrit-corp.com";
  });

  $("#dictnr").click(function () {
    opjdbox();
    document.getElementById("btitlejd").innerHTML = "|| Dictionary";
    document.getElementById("jdframe").src = "https://www.dictionary.com/";
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

  $("#srchengn").click(function () {
    $("#srchengcon,#clssrceng").slideDown();
    $(".nbtbfrm").addClass("nbtbfrmwtsrc");
  });

  $("#clssrceng").click(function () {
    $("#srchengcon,#clssrceng").slideUp();
    $(".nbtbfrm").removeClass("nbtbfrmwtsrc");
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
    $("#jdbox,.nbtbfrm").slideDown("slow");
    $("#dots,#ctdotbx,#lnkotbx,#framenews").hide("fast");
    document.getElementById("jdframe").style.backgroundImage =
      'url("/images/loading-gif.gif")';
    document.getElementById("jdframe").onload = function () {
      document.getElementById("jdframe").style.backgroundImage = "none";
    };
  }

  function openframenews() {
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
    iframe.style.backgroundImage = "url('/images/loading-gif.gif')";
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
  }

  $("<link>", {
    rel: "stylesheet",
    href: "https://mastrowall.com/css/bootstrap.min.css",
  }).appendTo("head");
});
