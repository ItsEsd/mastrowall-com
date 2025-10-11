$(".closeotserv").click(function () {
  $(".otservice").slideUp("fast");
  $("#falsesecback").hide();
  $(".otserviceinfo").hide("fast");
});
// $("#titlehd").click(function () {
//   $(".otservice").slideDown("fast");
//   $("#falsesecback").show();
//   // $(".otserviceinfo").show("fast");
// });
$("#exmpcreatid").click(function () {
  $("#contactdesk").hide();
  $("#exportalpromo").show();
  $("#prereq").hide();
  $("#createid").show("fast");
});
$("#exmpprereq").click(function () {
  $("#contactdesk").hide();
  $("#exportalpromo").show();
  $("#prereq").show("fast");
  $("#createid").hide();
});
$("#exampconmasd").click(function () {
  $("#contactdesk").show("fast");
  $("#exportalpromo").show();
  $("#prereq").hide();
  $("#createid").hide();
});
$(".closeot").on("click", function () {
  $(".otserviceinfo").hide("fast");
  $("#exportalpromo").fadeOut("fast");
  $("#exportalpromo").fadeOut("fast");
});
$("#navicon").click(function () {
  $(".otservice").slideDown("fast");
  $("#falsesecback").show();
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
cridone.addEventListener("submit", (event) => {
  $("#cridtwo").show();
  $("#cridone").hide();
  var hr = $("#timedurhr").val();
  var min = $("#timedurmin").val();
  var tmsec = (hr * 3600 + min * 60) * 1000;
  var str = hr + " " + "Hour" + " " + min + " " + "Minutes";
  document.getElementById("totalsec").value = tmsec;
  document.getElementById("timestr").value = str;
});
cridtwo.addEventListener("submit", (event) => {
  var examid = $("#examid").val();
  var name = $("#eduname").val();
  var title = $("#extitle").val();
  var descp = $("#exdescp").val();
  var youkey = $("#confirmpasskey").val();
  var examp = $("#exampass").val();
  var ttmstr = $("#timestr").val();
  $("#crtestfour").show();
  $("#crtestthree").hide();
  document.getElementById("examidFin").innerHTML =
    "Exam ID: " +
    "<span style='background-color:#1a2ca5;padding:4px 6px;font-style:italic;'>" +
    examid +
    "</span>";
  document.getElementById("edunameFin").innerHTML =
    "Name: " +
    "<span style='padding:4px 6px;font-style:italic;'>" +
    name +
    "</span>";
  document.getElementById("examtitleFin").innerHTML =
    "Title: " +
    "<span style='padding:4px 6px;font-style:italic;'>" +
    title +
    "</span>";
  document.getElementById("examdescpFin").innerHTML =
    "Description: " +
    "<span style='padding:4px 6px;font-style:italic;'>" +
    descp +
    "</span>";
  document.getElementById("mykeyFin").innerHTML =
    "Your Key: " +
    "<span style='padding:4px 6px;font-style:italic;'>" +
    youkey +
    "</span>";
  document.getElementById("exampassFin").innerHTML =
    "Exam Pass For Students: " +
    "<span style='padding:4px 6px;font-style:italic;'>" +
    examp +
    "</span>";
  document.getElementById("tsdur").innerHTML =
    "Test Duration: " +
    "<span style='padding:4px 6px;font-style:italic;'>" +
    ttmstr +
    "</span>";
  document.getElementById("studentpassdoc").innerHTML =
    "<div style=padding:20px;>" +
    "Exam ID: " +
    "<span style='color:blue;font-style:italic;'>" +
    examid +
    "</span>" +
    "<span style='float:right;margin-left:10px;'>Test Duration: " +
    ttmstr +
    "</span>" +
    "<hr>" +
    "Name: " +
    "<span style='font-size:20px;'>" +
    name +
    "</span><hr>" +
    "Title: " +
    "<span style='font-weight:bold;'>" +
    title +
    "</span><hr>" +
    "Description: " +
    "<span style='font-weight:bold;'>" +
    descp +
    "</span><hr>" +
    "Exam Pass For Students: " +
    "<span style='color:blue;'>" +
    examp +
    "</span>" +
    "<hr>" +
    "<span style='float:left;'>M A S T R O W A L L | <a target='_blank' href='https://mastrowall.com/online-test' style='text-decoration:none;'>Online Test</a></span>" +
    "<span style='float:right;'>" +
    "<span style='font-size:16px;color:#1a2ca5;padding:4px 6px;'>" +
    title +
    " </span> " +
    "By " +
    " " +
    "<span style='font-size:18px;color:#1a2ca5;padding:4px 6px;'>" +
    name +
    " </span>" +
    "|||||||||||||||||||||||||||</span>" +
    "</div><hr><hr>";
  sendEdmail();
});
function sendEdmail() {
  var elemed = document.getElementById("studentpassdoc").innerHTML;
  var mailat = $("#edueid").val();
  var passk = $("#confirmpasskey").val();
  var embody =
    elemed +
    "<p style='text-align:right;margin:10px;font-size:14px;'>Your Key/Password: " +
    passk +
    "</p><br><span style='float:left;font-size:14px;'>N.B. Do not reply to this email</span>";

  var formData = {
    to: mailat,
    subject: "Exam Portal - MASTROWALL",
    text: embody,
  };

  $.ajax({
    type: "POST",
    url: "https://api.amrit-corp.com/_email/noreply/mastrowall/",
    data: JSON.stringify(formData),
    contentType: "application/json",
    success: function (response) {
      document.getElementById("mailsented").style.display = "block";
      document.getElementById("mailsented").innerHTML =
        "Credentials sent to your email. Check Junk folder also. Do not forget to save or take a print.";
      setTimeout(function () {
        jQuery("#mailsented").fadeOut("fast");
      }, 10000);
    },
    error: function (error) {
      document.getElementById("mailsented").style.display = "none";
      alert(
        "Error sending verification email! Please check Internet connection."
      );
    },
  });
}

cridtwo.addEventListener("submit", (event) => {
  var name = $("#eduname").val();
  var title = $("#extitle").val();
  var descp = $("#exdescp").val();
  var emid = $("#edueid").val();
  var tmilisec = $("#totalsec").val();
  var tmstr = $("#timestr").val();
  var epass = encodeURIComponent(JSON.stringify($("#confirmpasskey").val()));
  var spass = encodeURIComponent(JSON.stringify($("#exampass").val()));
  var examid = $("#examid").val();
  var time = $("#dateQ").val();
  var url1 = "https://script.google.com/macros/s/";
  var url2 =
    "AKfycbyjZr_GlLG5IEBabVp79cQHSwIDovEoZc5KHEBFI2vpI5cb2H14qkqkdPI-quXuIKtn";
  var url3 = url1 + url2 + "/exec";
  if (
    name != 0 &&
    title != 0 &&
    descp != 0 &&
    emid != 0 &&
    epass != 0 &&
    examid != 0 &&
    time != 0 &&
    spass != 0
  ) {
    var url =
      url3 +
      "?callback=ctrlq&examid=" +
      examid +
      "&eduname=" +
      name +
      "&extitle=" +
      title +
      "&exdescp=" +
      descp +
      "&edueid=" +
      emid +
      "&confirmpasskey=" +
      epass +
      "&exampass=" +
      spass +
      "&dateQ=" +
      time +
      "&totalsec=" +
      tmilisec +
      "&timestr=" +
      tmstr +
      "&action=gentestin";
    var request = jQuery.ajax({
      crossDomain: true,
      url:
        "https://api.amrit-corp.com/_header/gate/mastrowall/?target_url=" +
        encodeURIComponent(url),
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    return false;
  }
});
function dateUp() {
  var d = new Date();
  var day = d.getDate();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var currentTime =
    days[d.getDay()] +
    ", " +
    months[d.getMonth()] +
    " " +
    d.getDate() +
    " - " +
    d.getFullYear();
  document.getElementById("dateQ").value = currentTime;
}
$("#svprtstpass").click(function () {
  infoexampdf();
});
function infoexampdf() {
  var elem = document.getElementById("studentpassdoc");
  var oPrntWin = window.open(
    "",
    "_blank",
    "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes"
  );
  oPrntWin.document.open();
  oPrntWin.document.write(
    '<!doctype html><html><head><title>M A S T R O W A L L - Exam Portal</title><link rel="stylesheet" href="css/vendor/bootstrap.min.css"><link rel="stylesheet" href="style.css"></head><body onload="print();">' +
      elem.innerHTML +
      "</body></html>"
  );
  oPrntWin.document.close();
}
// mquearytest.addEventListener("submit", (event) => {
//   $("#qmsgsent").show();
//   $("#mquearytest").hide();
// });
jQuery("#confirmpasskey").on("keyup", function () {
  if (jQuery("#createpasskey").val() == jQuery("#confirmpasskey").val()) {
    jQuery("#matched").html("Matching").css("font-size", "12px");
    document.getElementById("psconfirmed").disabled = false;
  } else {
    jQuery("#matched").html("Not Matching").css("font-size", "12px");
    document.getElementById("psconfirmed").disabled = true;
  }
  var k =
    Math.random().toString(26).substring(2, 7) +
    Math.random().toString(26).substring(2, 7);
  document.getElementById("examid").value = k;
});

// var url_stringn = window.location.href;
// var urlex = new URL(url_stringn);
// var dig = urlex.searchParams.get("e");
// var key = urlex.searchParams.get("p");
// var rtv = urlex.searchParams.get("valid");
// if (rtv == "true") {
//   setTimeout(function () {
//     document.getElementById("assignstuexam").style.display = "block";
//     $("#falsesecback").show();
//     document.getElementById("exid").value = decodeURIComponent(dig);
//     document.getElementById("exid").disabled = true;
//     document.getElementById("expass").value = key;
//     document.getElementById("expass").disabled = true;
//   }, 2000);
// }

var url_stringn = window.location.href;
var urlex = new URL(url_stringn);
var eid = urlex.searchParams.get("id");
var erid = urlex.searchParams.get("enroll");
var eip = urlex.searchParams.get("pass");
var mid = urlex.searchParams.get("mid");
var rtv = urlex.searchParams.get("valid");

if (rtv == "true") {
  setTimeout(function () {
    document.getElementById("chexid").value = atob(eid);
    document.getElementById("chpass").value = atob(eip);
    document.getElementById("chenid").value = atob(erid);
    $("#tstgtone").click();
    document.getElementById("tstgtone").disabled = true;
  }, 1000);
}

function getCookie() {
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    const cookie = ca[i].trim();
    if (
      cookie.startsWith("mwallpswstud=") ||
      cookie.startsWith("mwallpswedud=")
    ) {
      return true;
    }
  }
  return false;
}
if (getCookie() === false) {
  window.open("https://mastrowall.com/", "_self");
}
