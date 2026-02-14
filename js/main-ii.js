$("#conasmwall").click(function () {
  document.getElementById("continueas").style.width = "100%";
  document.getElementById("myNav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("closecas").style.display = "block";
  document.getElementById("closecasinfo").style.display = "block";
});

$("#signregpre").click(function () {
  $("#intro").slideUp("slow");
  document.getElementById("myNav").style.width = "350px";
  document.getElementById("continueas").style.width = "0";
  document.getElementById("closecasinfo").style.display = "none";
  $(".falseback-nav").show();
  $(".mynvflback").slideDown("slow");
  document.getElementById("main").style.marginLeft = "0px";
  $("#dots").hide("fast");
  $("#togTest").show();
  $("#togTest2").hide();
});

$("#goinmastro").click(function () {
  window.open(
    "https://mastrowall.in",
    "_blank",
    "location=center,height=670,width=1600,left=0,top=0,scrollbars=yes,status=yes",
  );
});

$("#signinuser,#signmbl").click(function () {
  document.getElementById("continueas").style.width = "100%";
  document.getElementById("myNav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("closecas").style.display = "block";
  document.getElementById("closecasinfo").style.display = "block";
});
$("#conlivem").click(function () {
  $("#golive").toggle();
  $("#myNav-two").animate(
    {
      scrollTop: 150,
    },
    500,
  );
});

$(".closebtn").click(function () {
  closeNav();
});

$("#oknav,#mwallImg").click(function () {
  openNav();
  $("#todbox").hide();
  $("#privacybox").hide();
  $("#jdbox").hide();
  $("#examsideq").hide();
  document.getElementById("bodyconv2").style.scrollBehavior = "hidden";
});

$("#playvc1").click(function () {
  document.getElementById("vcone").pause();
  document.getElementById("vcone").currentTime = 0;
  document.getElementById("playvc1").style.display = "none";
  document.getElementById("stopvc1").style.display = "block";
});

$("#stopvc1,#signregpre").click(function () {
  document.getElementById("vcone").play();
  document.getElementById("stopvc1").style.display = "none";
  document.getElementById("playvc1").style.display = "block";
});

$("#td").click(function () {
  $("#todbox").slideDown("fast");
  closeNav();
});

$("#crtod,#botcrtod").click(function () {
  $("#framenews,#framenw-back").slideUp("slow");
  var fstelm = document.getElementById("todbox");
  if (fstelm.style.display == "block") {
    $("#todbox").slideUp("fast");
  } else {
    $("#todbox").slideDown("fast");
    var refelm = document.getElementById("srchengcon");
    if (refelm.style.display == "block") {
      fstelm.style.height = "calc(84vh - 30px)";
    }
  }
  // let stateObj = { id: "0" };
  // window.history.replaceState(stateObj,
  //       "", "/e/create-TOD/#");
  //       document.title = "Create TOD | MASTROWALL";
});

function changezpostd() {
  $("#todbox").slideUp("fast");
  // var fstelm = document.getElementById('todbox');
  // if(fstelm.style.display =='block'){
  //   $('#framenews').css('zIndex','20');
  // }
  // else{
  //   $('#framenews').css('zIndex','100');
  // }
}

$("#prosign,#exammwall").click(function () {
  window.open(
    "https://exam-portal.mastrowall.com/",
    "_blank",
    "location=center,height=670,width=1600,left=0,top=0,scrollbars=yes,status=yes",
  );
});

$("#signtomdrive").click(function () {
  signInToOneDrive();
});

$("#oplibrary").click(function () {
  window.open(
    "https://library.mastrowall.in",
    "_blank",
    "location=center,height=670,width=1600,left=0,top=0,scrollbars=yes,status=yes",
  );
});

$("#opblog").click(function () {
  window.open(
    "https://blog.mastrowall.in",
    "_blank",
    "location=center,height=670,width=1600,left=0,top=0,scrollbars=yes,status=yes",
  );
});

function openNav() {
  document.getElementById("myNav").style.width = "350px";
  document.getElementById("main").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  $(".falseback-nav").hide();
}

$("#mf").click(function () {
  $("#mfiles").toggle("fast");
});

$("#checkres").click(function () {
  $("#resbrd").show();
  $("#falsesecback").show();
});

$("#dlight1").click(function () {
  golight();
});

$("#dlight2").click(function () {
  godark();
});

$("#nrheightmtel").click(function () {
  document.getElementById("telemedia").style.zIndex = "0";
  document.getElementById("telemedia").style.height = "580px";
  document.getElementById("nrheightmtel").style.display = "none";
  document.getElementById("fullheightmtel").style.display = "block";
  document.getElementById("mtitlemtel").style.display = "none";
  document.getElementById("btitlemtel").style.display = "block";
});

function loadUrlInSrcdoc(outerIframeId, linkId, url, options = {}) {
  const outer = document.getElementById(outerIframeId);
  if (!outer) {
    console.error(`[loadUrlInSrcdoc] No element with id="${outerIframeId}"`);
    return;
  }

  const isRssFeed = /rss[-_]feed/i.test(url);
  if (isRssFeed) {
    const sandbox =
      options.sandbox ||
      "allow-scripts allow-same-origin allow-forms allow-popups";

    outer.sandbox = sandbox;
    outer.src = url;
    outer.removeAttribute("srcdoc");

    if (linkId) {
      const link = document.getElementById(linkId);
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
    return;
  }

  const sandbox =
    options.sandbox ||
    "allow-scripts allow-same-origin allow-forms allow-popups allow‑top‑navigation allow‑top‑navigation‑by‑user‑activation";

  const innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Embedded – ${url}</title>
  <style>
    html,body{margin:0;padding:0;height:100%;overflow:hidden;}
    iframe{border:none;width:100%;height:100%;display:block;}
  </style>
</head>
<body>
  <iframe src="${url}"
          sandbox="${sandbox}"
          loading="eager"
          referrerpolicy="no-referrer"></iframe>
</body>
</html>`.trim();

  outer.srcdoc = innerHTML;
  outer.removeAttribute("src");

  if (linkId) {
    const link = document.getElementById(linkId);
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

$("#scinewsorg").click(function () {
  move();
  openframenews();
  changezpostd();
  loadUrlInSrcdoc(
    "frame",
    "hrefframenews",
    "https://www.britannica.com/Science-Tech",
    { openInNewTab: true },
  );
});

$("#mntday").click(function () {
  move();
  openframenews();
  changezpostd();
  loadUrlInSrcdoc(
    "frame",
    "hrefframenews",
    "https://www.medicalnewstoday.com",
    { openInNewTab: true },
  );
});

$("#esq").click(function () {
  move();
  openframenews();
  changezpostd();
  loadUrlInSrcdoc(
    "frame",
    "hrefframenews",
    "https://www.openaccessjournals.com/",
    { openInNewTab: true },
  );
});

$("#iasstils").click(function () {
  move();
  changezpostd();
  window.open("https://www.astro.mastrowall.in/groups", "_blank");
});

$("#popscie").click(function () {
  move();
  openframenews();
  changezpostd();
  loadUrlInSrcdoc("frame", "hrefframenews", "https://www.popsci.com", {
    openInNewTab: true,
  });
});

$("#wirdns").click(function () {
  move();
  openframenews();
  changezpostd();
  loadUrlInSrcdoc("frame", "hrefframenews", "https://www.wired.com", {
    openInNewTab: true,
  });
});

$("#scdaily").click(function () {
  move();
  openframenews();
  changezpostd();
  loadUrlInSrcdoc("frame", "hrefframenews", "https://www.scitechdaily.com", {
    openInNewTab: true,
  });
});

$("#anainsgt").click(function () {
  move();
  openframenews();
  changezpostd();
  loadUrlInSrcdoc("frame", "hrefframenews", "https://www.ourworldindata.org/", {
    openInNewTab: true,
  });
});

$("#bigth").click(function () {
  move();
  openframenews();
  changezpostd();
  loadUrlInSrcdoc("frame", "hrefframenews", "https://bigthink.com/", {
    openInNewTab: true,
  });
});

$("#rssamrit").click(function () {
  move();
  openframenews();
  changezpostd();
  loadUrlInSrcdoc("frame", "hrefframenews", "https://rss-feed.amrit-corp.com", {
    openInNewTab: true,
  });
});

$("#masthome").click(function () {
  window.open(
    "https://home.mastrowall.in",
    "_blank",
    "location=center,height=670,width=1600,left=0,top=0,scrollbars=yes,status=yes",
  );
});
$("#astroforum").click(function () {
  window.open(
    "https://www.astro.mastrowall.in/forum",
    "_blank",
    "location=center,height=670,width=1600,left=0,top=0,scrollbars=yes,status=yes",
  );
});
$("#opabout").click(function () {
  window.open("about/", "_blank");
});
$(".closeotserv").click(function () {
  $(".otservice").hide("fast");
  $("#falsesecback").hide("fast");
  $(".otserviceinfo").hide("fast");
});

$("#expeducon").click(function () {
  $("#ttside").toggle("fast");
  $("#gtside").hide();
});

$("#conwexid").click(function () {
  document.getElementById("continueexamid").style.display = "block";
  $(".otservice").hide();
});

$("#chperfexp").click(function () {
  $("#continueeducator").show();
  $(".otservice").hide();
});
$("#chperfexpst").click(function () {
  $("#continueeducator").show();
  $(".otservice").hide();
});
$("#expstucon").click(function () {
  $("#gtside").toggle("fast");
  $("#ttside").hide();
});

$("#assgntst").click(function () {
  $("#assignstuexam").show();
  $(".otservice").hide();
});

$("#expgtotst").click(function () {
  window.open(
    "online-test/",
    "_self",
    "location=center,height=670,width=1600,left=0,top=0,scrollbars=yes,status=yes",
  );
});

$("#exmpcreatid").click(function () {
  $("#termuse").hide();
  $("#contactdesk").hide();
  $("#prereq").hide();
  $("#createid").show("fast");
  $("#exportalpromo").show();
});

$(window).on("resize", function () {
  adjustHeights();
});

function adjustHeights() {
  var viewportWidth = $(window).width();
  if (viewportWidth > 850) {
    $("#blbdiy").css("display", "none");
    $("#exportalpromo").css("height", "100vh");
  } else {
    $("#blbdiy").css("display", "block");
    $("#exportalpromo").css("height", "50vh");
  }
}

$(document).ready(function () {
  adjustHeights();
});

$("#blbdiy").click(function () {
  var blbdiyHeight = $("#exportalpromo").height();
  if (blbdiyHeight > $(window).height() * 0.4) {
    $("#exportalpromo").css("height", "0vh");
  } else {
    $("#exportalpromo").css("height", "50vh");
  }
});

$("#exmpprereq").click(function () {
  $("#termuse").hide();
  $("#contactdesk").hide();
  $("#prereq").show("fast");
  $("#createid").hide();
  $("#exportalpromo").show();
});

$("#exmpsamptst").click(function () {
  window.open("https://exam-portal.mastrowall.com?q=sampletest", "_blank");
});
$("#exampconmasd").click(function () {
  $("#termuse").hide();
  $("#contactdesk").show("fast");
  $("#prereq").hide();
  $("#createid").hide();
  $("#exportalpromo").show();
});

$("#svprtstpass").click(function () {
  infoexampdf();
});

$("#addQ").click(function () {
  $("#qtstfalse").show();
  if (document.getElementById("qst").value == "") {
    document.getElementById("qtstfalse").innerHTML = "** Required";
    document.getElementById("conq").style.border = "2px solid #f75858";
  } else {
    $("#qtstfalse").hide();
    document.getElementById("conq").style.border = "2px solid #6a67fa";
  }
  document.getElementById("formcontainer").scrollTop = "0px";
});

$("#crtnewexid").click(function () {
  createnewexid();
});

$(document).ready(function () {
  var exptimg = [
    "../images/examportal/exmpt-1.jpg",
    "../images/examportal/exmpt-2.jpg",
    "../images/examportal/exmpt-3.jpg",
    "../images/examportal/exmpt-4.jpg",
    "../images/examportal/exmpt-5.jpg",
    "../images/examportal/exmpt-6.jpg",
    "../images/examportal/exmpt-7.jpg",
    "../images/examportal/exmpt-8.jpg",
    "../images/examportal/exmpt-9.jpg",
    "../images/examportal/exmpt-10.jpg",
  ];
  var exmplen = exptimg.length;
  for (var k = 0; k <= exmplen - 1; k++) {
    document.getElementById("exportalpromo").innerHTML +=
      "<img class='exmpproimg' src='" +
      exptimg[k] +
      "' onclick='enlargeempimg(this)'>";
  }
});

function enlargeempimg(label) {
  var list = document.getElementsByClassName("exmpproimg");
  list = [].slice.call(list);
  var posofimg = list.indexOf(label);
  var srcimg = document.getElementsByClassName("exmpproimg")[posofimg].src;
  $("#enlrgimg").show("fast");
  document.getElementById("emprimgenlrg").src = srcimg;
}
$("#enlrgimg").click(function () {
  $("#enlrgimg").hide();
});

$("#chngbcgrnd").click(function () {
  $("#chbcground").toggle("fast");
  $("#framenews,#framenw-back,#todbox").hide();
});
$("#clschbc").click(function () {
  $("#chbcground").hide("fast");
});
$(document).ready(function () {
  var chsbc = [
    "../images/background/img-29.webp",
    "../images/background/img-30.webp",
    "../images/background/img-31.webp",
    "../images/background/img-32.webp",
    "../images/background/img-33.webp",
    "../images/background/img-34.webp",
    "../images/background/img-35.webp",
    "../images/background/img-1.webp",
    "../images/background/img-2.webp",
    "../images/background/img-3.webp",
    "../images/background/img-4.webp",
    "../images/background/img-5.webp",
    "../images/background/img-6.webp",
    "../images/background/img-7.webp",
    "../images/background/img-8.webp",
    "../images/background/img-9.webp",
    "../images/background/img-10.webp",
    "../images/background/img-11.webp",
    "../images/background/img-12.webp",
    "../images/background/img-13.webp",
    "../images/background/img-14.webp",
    "../images/background/img-15.webp",
    "../images/background/img-16.webp",
    "../images/background/img-17.webp",
    "../images/background/img-18.webp",
    "../images/background/img-19.webp",
    "../images/background/img-20.webp",
    "../images/background/img-21.webp",
    "../images/background/img-22.webp",
    "../images/background/img-23.webp",
    "../images/background/img-24.webp",
    "../images/background/img-25.webp",
    "../images/background/img-26.webp",
    "../images/background/img-27.webp",
    "../images/background/img-28.webp",
    "../images/background/img-36.webp",
    "../images/background/img-37.webp",
    "../images/background/img-38.webp",
    "../images/background/img-39.webp",
    "../images/background/img-40.webp",
    "../images/background/img-41.webp",
    "../images/background/img-42.webp",
    "../images/background/img-43.webp",
    "../images/background/img-44.webp",
    "../images/background/img-45.webp",
    "../images/background/img-46.webp",
    "../images/background/img-47.webp",
    "../images/background/img-48.webp",
    "../images/background/img-49.webp",
    "../images/background/img-50.webp",
  ];

  var exmplen = chsbc.length;
  var indices = [...Array(exmplen).keys()];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  indices = shuffle(indices);

  for (let d = 0; d < indices.length; d++) {
    const fin = indices[d];
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
    );
    img.setAttribute("data-src", chsbc[fin]);
    img.setAttribute("onerror", "this.src='../images/imgonerror.svg'");
    img.setAttribute("class", "chsbcg lazy");
    img.setAttribute("onclick", "chngbackground(this)");
    img.setAttribute("alt", "Background Image");
    document.getElementById("choosebcgr").appendChild(img);
  }

  // Apply random background for wide screens
  if (window.innerWidth > 1000) {
    document.body.style.backgroundImage = 'url("' + chsbc[indices[0]] + '")';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
  }

  // Lazy load images using IntersectionObserver
  if ("IntersectionObserver" in window) {
    let lazyImages = document.querySelectorAll("img.lazy");
    let observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function (img) {
      observer.observe(img);
    });
  } else {
    // Fallback: Load all images if IntersectionObserver is not supported
    $("img.lazy").each(function () {
      $(this).attr("src", $(this).data("src"));
      $(this).removeClass("lazy");
    });
  }
});

function chngbackground(label) {
  var list = document.getElementsByClassName("chsbcg");
  list = [].slice.call(list);
  var posofimg = list.indexOf(label);
  var srcimg = document.getElementsByClassName("chsbcg")[posofimg].src;
  document.body.style.backgroundImage = 'url("' + srcimg + '")';
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "100% 100%";
  $("#chbcground").hide("fast");
}

/// GetGames ///////////////
var gmdsh = [
  ["../images/gaming/gm1.png", "https://testtubegames.com/velocityraptor.html"],

  ["../images/gaming/gm2.png", "https://testtubegames.com/shocktopus_web.html"],

  ["../images/gaming/gm3.png", "https://www.funbrain.com/games/"],

  [
    "../images/gaming/chess.png",
    "/e-games/stockfish-chess-web-gui-master/index.html",
  ],
  ["../images/gaming/sudoku-icon.png", "/e-games/web-sudoku-puzzle/index.html"],

  ["../images/gaming/gm5.png", "https://littlealchemy2.com/"],

  ["../images/gaming/gm7.png", "https://kids.nationalgeographic.com/games/"],

  ["../images/gaming/gm6.png", "https://www.roythezebra.com/english-ks1"],

  ["../images/gaming/gm8.png", "https://www.roomrecess.com/"],

  ["../images/gaming/gm9.gif", "https://toytheater.com/"],

  ["../images/gaming/gm10.png", "https://draw.tate.org.uk/"],

  ["../images/gaming/gm11.png", "https://www.turtlediary.com/"],

  ["../images/gaming/gm15.png", "https://www.physicsgames.net/"],

  ["../images/gaming/gm16.png", "https://kids.niehs.nih.gov/games/"],

  ["../images/gaming/gm18.png", "https://mathworld.wolfram.com/"],

  [
    "../images/gaming/gm20.png",
    "https://www.mathnook.com/math/boatcoordinates.html",
  ],

  ["../images/gaming/gm19.png", "https://www.thatquiz.org/"],

  ["../images/gaming/gm22.png", "https://freeonlinequizzes.com/"],

  ["../images/gaming/stellarium.org.png", "https://stellarium-web.org/"],
];
$(document).ready(function () {
  var gmdshlen = gmdsh.length;
  for (var g = 0; g <= gmdshlen; g++) {
    document.getElementById("gmicon").innerHTML +=
      "<img onerror='this.onerror=null;this.src= `../images/imgonerror.svg`' class='gtgmic' src='" +
      gmdsh[g][0] +
      "' onclick='goplgm(this)'>";
  }
});

function goplgm(label) {
  document.getElementById("opgm").style.backgroundImage =
    "url(/images/loading-gif.gif)";
  var list = document.getElementsByClassName("gtgmic");
  list = [].slice.call(list);
  var posofimg = list.indexOf(label);
  document.getElementById("opgm").src = gmdsh[posofimg][1];
  $("#gmcnsl").slideDown();
  if (gmdsh[posofimg][1] == "https://toytheater.com/") {
    document.getElementById("opgm").style.backgroundColor = "white";
    document.getElementById("opgm").style.backgroundImage = "none";
  } else {
    document.getElementById("opgm").style.backgroundColor = "#161616be";
  }
}

$("#getgames").click(function () {
  $("#gmdiv,#gmdash").slideDown();
});

$("#gobcm").click(function () {
  $("#gmcnsl,#gmdiv,#gmdash").hide();
  document.getElementById("opgm").src = "";
});

$("#srchengn").click(function () {
  $("#srchengcon,#clssrceng").slideDown();
  var refelm = document.getElementById("todbox");
  var refsrch = document.getElementById("srchengcon");
  if (refsrch.style.display == "block") {
    refelm.style.height = "calc(84vh - 30px)";
  } else if (refsrch.style.display == "none") {
    refelm.style.height = "calc(100vh - 30px)";
  }
});
$("#clssrceng").click(function () {
  $("#srchengcon, #clssrceng").slideUp();
  var refelm = document.getElementById("todbox");
  var screenWidth = window.innerWidth;
  if (screenWidth <= 20000) {
    refelm.style.height = "calc(100vh - 30px)";
  } else {
    refelm.style.height = "calc(84vh - 30px)"; // Adjust as needed
  }
});

function downloadFileapk() {
  var fileUrl =
    "https://mastrowall.com/app/apk-release/MASTROWALL-apkversion_beta-0.99.apk";
  var link = document.createElement("a");
  link.href = fileUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function downloadFileapk_monolith() {
  var fileUrl =
    "https://mastrowall.com/app/apk-release/MASTROWALL-apkversion_monolith-1.1.apk";
  var link = document.createElement("a");
  link.href = fileUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
