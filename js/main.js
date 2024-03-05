$(document).ready(function () {
  $(".closeFrame").click(function () {
    $("#framenews").slideUp("slow");
    $("#framenw-back").hide();
  });
});
/*
$(".botInline2").click(function(){
  $('header').hide();
}); */

function openframenews() {
  $("#framenews").slideDown("slow");
  $("#framenw-back").show();
  //document.getElementById('framenews').style.display="block";
}

if (navigator.onLine) {
  document.getElementById("framecontainer").innerHTML =
    '<iframe id="frame" src="" width="100%" frameborder=0></iframe>';
} else {
  document.getElementById("framecontainer").innerHTML =
    "<div align='center'><div style='max-width:400px;margin-top:140px;border:none;box-shadow:0 2px 6px 0 grey;padding:40px;'><p style='font-size:60px'>&#9785;</p><h2 style='padding:10px;'>No Internet</h2></div></div>";
}

window.addEventListener("online", function () {
  $("#notifyoffln").hide();
  var elem = this.document.createElement("div");
  elem.id = "notifyonln";
  elem.innerHTML =
    '<center><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-wifi" viewBox="0 0 16 16"><path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/><path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/></svg> You are back online.</center>';
  $("body").append(elem);
  $("elem").slideDown("slow");
  this.setTimeout(function () {
    $(elem).slideUp("slow");
  }, 5000);
  document.getElementById("framenews").style.display = "none";
  document.getElementById("framecontainer").innerHTML =
    '<iframe id="frame" src="" width="100%" frameborder=0></iframe>';
});

window.addEventListener("offline", function () {
  $("#notifyonln").hide();
  var elem = this.document.createElement("div");
  elem.id = "notifyoffln";
  elem.innerHTML =
    '<center><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-wifi-off" viewBox="0 0 16 16"><path d="M10.706 3.294A12.545 12.545 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.448 8.448 0 0 1 3.51-1.27L8 6zm2.596 1.404.785-.785c.63.24 1.227.545 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.462 8.462 0 0 0-1.98-.932zM8 10l.933-.933a6.455 6.455 0 0 1 2.013.637c.285.145.326.524.1.75l-.015.015a.532.532 0 0 1-.611.09A5.478 5.478 0 0 0 8 10zm4.905-4.905.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 0 1 .047.737.518.518 0 0 1-.668.05 11.493 11.493 0 0 0-1.811-1.07zM9.02 11.78c.238.14.236.464.04.66l-.707.706a.5.5 0 0 1-.707 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 0 1 8 11.5c.374 0 .723.102 1.021.28zm4.355-9.905a.53.53 0 0 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75l10.75-10.75z"/></svg> You are currently offline.</center>';
  $("body").append(elem);
  $("elem").slideDown("slow");
  this.setTimeout(function () {
    $(elem).slideUp("slow");
  }, 5000);
  document.getElementById("framecontainer").innerHTML =
    "<div align='center'><div style='max-width:400px;margin-top:180px;border:none;box-shadow:0 2px 6px 0 grey;padding:40px;'><p style='font-size:60px'>&#9785;</p><h2 style='padding:10px;'>No Internet</h2></div></div>";
});

function HBack() {
  window.history.back();
}

/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   document.getElementById('aol').style.boxShadow = "0 2px 10px 0px #1d41d1";
  } 
  else {
    document.getElementById('aol').style.boxShadow = "0 2px 10px 0px #1d41d1";
  }
}
*/

$(document).ready(function () {
  $(".frameback").on("click", function () {
    window.location.reload();
  });
  $("#fullheight").on("click", function () {
    document.getElementById("examsideq").style.height = "100%";
    document.getElementById("fullheight").style.display = "none";
    document.getElementById("mtitle").style.display = "block";
    document.getElementById("btitleexam").style.display = "none";
  });

  $("#fullheightnews").on("click", function () {
    document.getElementById("framenews").style.maxHeight = "95vh";
    document.getElementById("frame").style.height = "100%";
    document.getElementById("framecontainer").style.height = "100%";
    document.getElementById("framenews").style.zIndex = "8";
    document.getElementById("fullheightnews").style.display = "none";
    document.getElementById("mtitlenews").style.display = "block";
    document.getElementById("btitlefnews").style.display = "none";
  });

  $("#fullheightjd").on("click", function () {
    document.getElementById("jdbox").style.height = "100%";
    document.getElementById("fullheightjd").style.display = "none";
    document.getElementById("mtitlejd").style.display = "block";
    document.getElementById("btitlejd").style.display = "none";
  });

  $("#fullheightsearch").on("click", function () {
    document.getElementById("searchframe").style.height = "100%";
    document.getElementById("containsframe").style.height = "100%";
    document.getElementById("sframe").style.paddingBottom = "10px";
    document.getElementById("searchframe").style.zIndex = "1";
    document.getElementById("mtitlesearch").style.display = "block";
    document.getElementById("btitlesearch").style.display = "none";
    document.getElementById("fullheightsearch").style.display = "none";
  });
  $("#fullheighttod").on("click", function () {
    document.getElementById("todbox").style.height = "100%";
    document.getElementById("todbox").style.zIndex = "1";
    document.getElementById("mtitletod").style.display = "block";
    document.getElementById("fullheighttod").style.display = "none";
    document.getElementById("nrheighttod").style.display = "block";
    document.getElementById("btitletod").style.display = "none";
  });
  $("#fullheightmtel").on("click", function () {
    document.getElementById("telemedia").style.height = "100%";
    document.getElementById("telemedia").style.zIndex = "1";
    document.getElementById("mtitlemtel").style.display = "block";
    document.getElementById("fullheightmtel").style.display = "none";
    document.getElementById("nrheightmtel").style.display = "block";
    document.getElementById("btitlemtel").style.display = "none";
  });
  $(".closeot").on("click", function () {
    $(".otserviceinfo").hide("fast");
    $("#exportalpromo").fadeOut("fast");
  });
  $("#oknav,#mwallImg").on("mouseover", function () {
    document.getElementById("myNav").style.width = "350px";
    document.getElementById("continueas").style.width = "0";
    document.getElementById("closecasinfo").style.display = "none";
    $(".falseback-nav").show();
    $(".mynvflback").slideDown("slow");
    document.getElementById("main").style.marginLeft = "0px";

    $("#dots").hide("fast");
    $("#togTest").show();
    $("#togTest2").hide();
    //  document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  });

  $(".botInline1,.botInline2,.botInline3,.botInline4").click(function () {
    $("#dots").hide("fast");
    $("#togTest").show();
    $("#togTest2").hide();
  });

  $("#continueas").on("mouseover", function () {
    document.getElementById("myNav").style.width = "0";
    document.getElementById("falseback-conas").style.display = "none";
    $(".falseback-nav").hide();
    $(".mynvflback").hide();
  });

  $(".falseback-nav").on("click", function () {
    document.getElementById("myNav").style.width = "0";
    document.getElementById("falseback-conas").style.display = "none";
    $(".falseback-nav").hide();
    $(".mynvflback").hide();
  });
  $("#bodyconv2").on("mouseover", function () {
    document.getElementById("myNav").style.width = "0";
    document.getElementById("continueas").style.width = "0";
    document.getElementById("closecasinfo").style.display = "none";
    $(".falseback-nav").hide();
    $(".mynvflback").hide();
    document.getElementById("main").style.marginLeft = "0";
  });
  $("#framenews").on("mouseover", function () {
    document.getElementById("myNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $(".falseback-nav").hide();
    $(".mynvflback").hide();
  });
  $("#telemedia").on("mouseover", function () {
    document.getElementById("myNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $(".falseback-nav").hide();
    $(".mynvflback").hide();
  });

  $("#linkins").on("mouseover", function () {
    document.getElementById("myNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $(".falseback-nav").hide();
    $(".mynvflback").hide();
  });
  $("#searchframe").on("mouseover", function () {
    document.getElementById("myNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $(".falseback-nav").hide();
    $(".mynvflback").hide();
  });
  $("#ac").click(function () {
    document.getElementById("searchframe").style.boxShadow =
      "0 1px 6px 1px #2202af";
    document.getElementById("searchframe").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
  });

  $("#sp").click(function () {
    document.getElementById("linkins").style.boxShadow =
      "0 1px 6px 1px #2202af";
    document.getElementById("linkins").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
  });

  $("#sg").click(function () {
    document.getElementById("telemedia").style.boxShadow =
      "0 1px 6px 1px #2202af";
    document.getElementById("telemedia").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
  });

  $(".closesearch").click(function () {
    document.getElementById("searchframe").style.boxShadow = "none";
    document.getElementById("searchframe").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    //  let stateObj = { id: "0" };
    // 			window.history.replaceState(stateObj,
    // 						"", "/");
    //             document.title = "Art of Learning | MASTROWALL";
  });

  $(".closelinkins").click(function () {
    document.getElementById("linkins").style.boxShadow = "none";
    document.getElementById("linkins").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    //  let stateObj = { id: "0" };
    //  window.history.replaceState(stateObj,
    //        "", "/");
    //        document.title = "Art of Learning | MASTROWALL";
  });

  $(".closetelemedia").click(function () {
    document.getElementById("telemedia").style.boxShadow = "none";
    document.getElementById("telemedia").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    //  let stateObj = { id: "0" };
    //  window.history.replaceState(stateObj,
    //        "", "/");
    //        document.title = "Art of Learning | MASTROWALL";
  });
  $("#closecas").click(function () {
    document.getElementById("continueas").style.width = "0";
    document.getElementById("closecas").style.display = "none";
    document.getElementById("closecasinfo").style.display = "none";
    document.getElementById("main").style.marginLeft = "0";
  });

  $("#gd").click(function () {
    $("#gdrivebox").slideDown("fast");
    $("#todbox").hide();
  });

  $(".closedrivebox").click(function () {
    $("#gdrivebox").hide();
  });
  $("#exmprtl").click(function () {
    $(".otservice").show();
    $("#falsesecback").show();
  });

  $(".closetodbox").click(function () {
    $("#todbox").slideUp("fast");
    // let stateObj = { id: "0" };
    // window.history.replaceState(stateObj,
    //       "", "/");
    //       document.title = "Art of Learning | MASTROWALL";
  });

  // $("#todbox").click(function() {
  //   $("#todbox").css('z-index','10');
  //   // let stateObj = { id: "0" };
  //   // window.history.replaceState(stateObj,
  //   //       "", "/");
  //   //       document.title = "Art of Learning | MASTROWALL";
  // });

  $("#pt").click(function () {
    $("#privacybox").toggle();
    $("#todbox").hide();
    $("#gdrivebox").hide();
  });

  $(".closeprivacybox").click(function () {
    $("#privacybox").hide();
  });

  $("#esq").click(function () {
    $("#jdbox").slideDown("slow");
    $("#dots").hide("fast");
    $("#togTest").show();
    $("#togTest2").hide();
    document.getElementById("btitlejd").innerHTML = "|| Journals";
    document.getElementById("jdframe").src =
      "https://www.openaccessjournals.com/";
    document.getElementById("hrefframejd").href =
      "https://www.openaccessjournals.com/";
  });
  $("#scd").click(function () {
    $("#jdbox").slideDown("slow");
    $("#dots").hide("fast");
    $("#togTest").show();
    $("#togTest2").hide();
    document.getElementById("btitlejd").innerHTML = "|| Journals";
    document.getElementById("jdframe").src =
      "https://www.sciencedirect.com/browse/journals-and-books?accessType=openAccess";
    document.getElementById("hrefframejd").href =
      "https://www.sciencedirect.com/browse/journals-and-books?accessType=openAccess";
  });
  $("#wikip").click(function () {
    $("#jdbox").slideDown("slow");
    $("#dots").hide("fast");
    $("#togTest").show();
    $("#togTest2").hide();
    document.getElementById("btitlejd").innerHTML = "|| Wikipedia";
    document.getElementById("jdframe").src = "https://www.wikipedia.org";
    document.getElementById("hrefframejd").href = "https://www.wikipedia.org";
  });
  $("#dictnr").click(function () {
    $("#jdbox").slideDown("slow");
    $("#dots").hide("fast");
    $("#togTest").show();
    $("#togTest2").hide();
    document.getElementById("btitlejd").innerHTML = "|| Dictionary";
    document.getElementById("jdframe").src = "https://www.dictionary.com/";
    document.getElementById("hrefframejd").href = "https://www.dictionary.com/";
  });

  $(".closejdbox").click(function () {
    $("#jdbox").slideUp("slow");
  });

  $("#examside").click(function () {
    $("#examsideq").slideDown("slow");
    document.getElementById("examsideq").style.background = "white";
    document.getElementById("hrefframe").href =
      "https://questions.examside.com/";
  });
  $("#mwquiz").click(function () {
    window.open("https://quiz.mastrowall.com", "_blank");
  });
  $(".closeexamsideq").click(function () {
    $("#examsideq").slideUp("slow");
  });
});

$(document).ready(function () {
  window.desktopcheck = function () {
    var check = false;
    if (window.innerWidth > 768) {
      check = true;
    }
    return check;
  };
  if (!window.desktopcheck()) {
    golight();
    document.getElementById("fullheighttod").style.display = "none";
    document.getElementById("emid").style.display = "none";
  } else {
    var today = new Date();
    var hours = today.getHours();
    if (hours >= 18) {
      godark();
    } else {
      golight();
    }
  }
});

$(document).ready(function () {
  $("#togTest").click(function () {
    $("#dots").show("fast");
    $("#togTest").hide();
    $("#closecasinfo").hide();
    document.getElementById("continueas").style.width = "0";
    document.getElementById("togTest2").style.display = "block";
    document.getElementById("myNav").style.width = "0";
    document.getElementById("falseback-conas").style.display = "none";
    $(".falseback-nav").hide();
    $(".mynvflback").hide();
    document.getElementById("dots").style.zIndex = "100";
  });
});
$(document).ready(function () {
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
  window.addEventListener("mouseup", function (event) {
    var pol = document.getElementById("myNav");
    if (event.target != pol && event.target.parentNode != pol) {
    }
  });
});

function golight() {
  $(".dashiconimg,.opntbtlmd").css({ filter: "invert(0)" });
  $(".dashiconex").css({ filter: "grayscale(0)" });
  document.getElementById("aol").style.backgroundColor = "white";
  document.getElementById("aol").style.boxShadow = "0 2px 10px 0px #2a26f1";
  document.getElementById("oknav").style.color = "#1a2ca5";
  document.getElementById("mwallImg").style.filter = "invert(0)";
  document.body.style.backgroundColor = "#e6e6e6";
  document.body.style.backgroundImage =
    "url('images/hexback-white-1200x900.gif')";
  document.body.style.backgroundRepeat = "repeat";
  document.body.style.backgroundSize = "100%";
  $(".con-one").addClass("con-one-light").removeClass("con-one");
  $(".con-one-main").addClass("con-one-main-light").removeClass("con-one-main");
  $(".con-two").addClass("con-two-light").removeClass("con-two");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById("continueas").style.backgroundImage =
    "linear-gradient(45deg,#1a2ca5,#be1531,#eff309)";
  document.getElementById("dlight1").style.display = "none";
  document.getElementById("dlight2").style.display = "block";
  document.getElementById("falsesecback").style.backgroundColor = "#d6d6d6";
  document.getElementById("myNav").style.backgroundImage =
    "linear-gradient(-45deg, #0c09c9,white,white)";
  document.getElementById("dots").style.backgroundColor = "#000000de";
  document.getElementById("signinuser").style.color = "#0b07df";
}
function godark() {
  $(".dashiconimg,.opntbtlmd").css({ filter: "invert(1)" });
  $(".dashiconex").css({ filter: "grayscale(1)" });
  document.getElementById("aol").style.backgroundColor = "#282828";
  document.getElementById("aol").style.boxShadow = "0 0px 0px 0px #2a26f1";
  document.getElementById("oknav").style.color = "#6a67fa";
  document.getElementById("mwallImg").style.filter = "invert(1)";
  document.body.style.backgroundColor = "#181818";
  document.body.style.backgroundImage =
    "url('images/hexback-blue-1200x900.gif')";
  document.body.style.backgroundRepeat = "repeat";
  document.body.style.backgroundSize = "100%";
  $(".con-one-light").addClass("con-one").removeClass("con-one-light");
  $(".con-one-main-light")
    .addClass("con-one-main")
    .removeClass("con-one-main-light");
  $(".con-two-light").addClass("con-two").removeClass("con-two-light");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById("dlight1").style.display = "block";
  document.getElementById("dlight2").style.display = "none";
  document.getElementById("continueas").style.backgroundImage =
    "linear-gradient(-45deg,#141414,#0a0a0a,#1a2ca5)";
  document.getElementById("falsesecback").style.backgroundColor = "black";
  document.getElementById("myNav").style.backgroundImage =
    "linear-gradient(-45deg,#1d1d1d,#ece7e7,#ece7e7)";
  document.getElementById("dots").style.backgroundColor = "#161616f4";
  document.getElementById("signinuser").style.color = "#4542f1";
}

$(document).ready(function () {
  $("#acdash").click(function () {
    document.getElementById("searchframe").style.boxShadow =
      "0 1px 6px 1px #2202af";
    document.getElementById("searchframe").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
  });

  $("#spdash").click(function () {
    document.getElementById("linkins").style.boxShadow =
      "0 1px 6px 1px #2202af";
    document.getElementById("linkins").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
  });

  var clkelement = document.getElementById("tlmdnw");

  $("#sgdash").click(function (event) {
    if (event.target === clkelement) {
      window.open("https://telemedia.mastrowall.com", "_blank");
      return;
    }

    document.getElementById("telemedia").style.boxShadow =
      "0 1px 6px 1px #2202af";
    document.getElementById("telemedia").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
  });
});

$("#botlinkins").click(function () {
  document.getElementById("linkins").style.boxShadow = "0 1px 6px 1px #2202af";
  document.getElementById("linkins").style.width = "100%";
  document.getElementById("main").style.marginLeft = "0";
  //  let stateObj = { id: "0" };
  //  window.history.replaceState(stateObj,
  //        "", "/e/linkins-updates/#");
  //        document.title = "New Linkins | MASTROWALL";
});

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if ($(window).width() < 960) {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      $("#footerholder,#aol").slideDown("slow");
    } else {
      $("#footerholder,#aol").slideUp("slow");
    }
  }
}
