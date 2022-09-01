
$(document).ready(function() {
$(".closeFrame").click(function(){
  $("#framenews").slideUp('slow');
  $('#framenw-back').hide();
});
});
/*
$(".botInline2").click(function(){
  $('header').hide();
}); */


function openframenews(){
$('#framenews').slideDown('slow');
$('#framenw-back').show();
//document.getElementById('framenews').style.display="block";

}

if (navigator.onLine) {
  document.getElementById('framecontainer').innerHTML='<iframe id="frame" src="" width="100%" frameborder=0></iframe>';

}
else{
  document.getElementById('framecontainer').innerHTML ="<div align='center'><div style='max-width:400px;margin-top:140px;border:none;box-shadow:0 2px 6px 0 grey;padding:40px;'><p style='font-size:60px'>&#9785;</p><h2 style='padding:10px;'>No Internet</h2></div></div>";
}

window.addEventListener("online", function() {
  window.location.reload();
  document.getElementById('framenews').style.display = 'none';
 document.getElementById('framecontainer').innerHTML='<iframe id="frame" src="" width="100%" frameborder=0></iframe>';
});

window.addEventListener("offline", function() {
  alert('You are offline now!\nConnect to the internet.');
  document.body.style.backgroundImage="linear-gradient(0deg,black,white)";
  document.body.innerHTML ="<div align='center'><div style='color:white;max-width:400px;margin-top:180px;border:none;box-shadow:0 2px 6px 0 grey;padding:40px;'><p style='font-size:60px'>&#9785;</p><h2 style='padding:10px;'>No Internet</h2></div>"+
  "<br><br><h4 style='text-align:center;color:#0c29cd;'>M A S T R O W A L L</h4></div>";
  document.getElementById('framecontainer').innerHTML ="<div align='center'><div style='max-width:400px;margin-top:180px;border:none;box-shadow:0 2px 6px 0 grey;padding:40px;'><p style='font-size:60px'>&#9785;</p><h2 style='padding:10px;'>No Internet</h2></div></div>";
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

$(document).ready(function() {
$('.frameback').on('click', function() {
  window.location.reload();
});
$('#fullheight').on('click', function() {
  document.getElementById('examsideq').style.height= "100%";
  document.getElementById('fullheight').style.display="none";
  document.getElementById('mtitle').style.display="block";
  document.getElementById('btitleexam').style.display="none";
});

$('#fullheightnews').on('click', function() {
  document.getElementById('framenews').style.maxHeight= "100%";
  document.getElementById('frame').style.height= "100%";
  document.getElementById('framecontainer').style.height= "100%";
  document.getElementById('framenews').style.zIndex = "8";
  document.getElementById('fullheightnews').style.display="none";
  document.getElementById('mtitlenews').style.display="block";
  document.getElementById('btitlefnews').style.display="none";
});

$('#fullheightjd').on('click', function() {
  document.getElementById('jdbox').style.height= "100%";
  document.getElementById('fullheightjd').style.display="none";
  document.getElementById('mtitlejd').style.display="block";
  document.getElementById('btitlejd').style.display="none";
});

$('#fullheightsearch').on('click', function() {
  document.getElementById('searchframe').style.height= "100%"; 
  document.getElementById('containsframe').style.height= "100%";
  document.getElementById('sframe').style.paddingBottom= "10px";
  document.getElementById('searchframe').style.zIndex="1";
  document.getElementById('mtitlesearch').style.display="block";
  document.getElementById('btitlesearch').style.display="none";
  document.getElementById('fullheightsearch').style.display="none";
});
$('#fullheighttod').on('click', function() {
  document.getElementById('todbox').style.height= "100%"; 
  document.getElementById('todbox').style.zIndex="1";
  document.getElementById('mtitletod').style.display="block";
  document.getElementById('fullheighttod').style.display="none";
  document.getElementById('nrheighttod').style.display="block";
  document.getElementById('btitletod').style.display="none";
});
$('#fullheightmtel').on('click', function() {
  document.getElementById('telemedia').style.height= "100%"; 
  document.getElementById('telemedia').style.zIndex="1";
  document.getElementById('mtitlemtel').style.display="block";
  document.getElementById('fullheightmtel').style.display="none";
  document.getElementById('nrheightmtel').style.display="block";
  document.getElementById('btitlemtel').style.display="none";
});
$('.closeot').on('click', function() {
  $('.otserviceinfo').hide("fast");
$('#exportalpromo').fadeOut("fast");
});
$('#oknav,#mwallImg').on('mouseover',function(){
  document.getElementById("myNav").style.width = "350px";
  document.getElementById("continueas").style.width = "0";
  document.getElementById("closecasinfo").style.display = "none";
  $('.falseback-nav').show();
  $('.mynvflback').slideDown('slow');
  document.getElementById("main").style.marginLeft = "0px";

  $("#dots").hide('fast');
  $("#togTest").show();
    $("#togTest2").hide();
  //  document.body.scrollTop = 0;
   // document.documentElement.scrollTop = 0;
});

$('#continueas').on('mouseover',function(){
  document.getElementById("myNav").style.width = "0";
  document.getElementById("falseback-conas").style.display = "none";
  $('.falseback-nav').hide(); $('.mynvflback').hide();
});

$('.falseback-nav').on('click',function(){
  document.getElementById("myNav").style.width = "0";
  document.getElementById("falseback-conas").style.display = "none";
  $('.falseback-nav').hide();$('.mynvflback').hide();
});
$('#bodyconv2').on('mouseover',function(){
  document.getElementById("myNav").style.width = "0";
  document.getElementById("continueas").style.width = "0";
  document.getElementById("closecasinfo").style.display = "none";
  $('.falseback-nav').hide();$('.mynvflback').hide();
  document.getElementById("main").style.marginLeft = "0";
});
$('#framenews').on('mouseover',function(){
  document.getElementById("myNav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  $('.falseback-nav').hide();$('.mynvflback').hide();
});
$('#telemedia').on('mouseover',function(){
  document.getElementById("myNav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  $('.falseback-nav').hide();$('.mynvflback').hide();
});

$('#linkins').on('mouseover',function(){
  document.getElementById("myNav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  $('.falseback-nav').hide();$('.mynvflback').hide();
});
$('#searchframe').on('mouseover',function(){
  document.getElementById("myNav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  $('.falseback-nav').hide();$('.mynvflback').hide();
});
$("#ac").click(function() {
  document.getElementById('searchframe').style.boxShadow ="0 1px 6px 1px #2202af";
  document.getElementById('searchframe').style.width = '100%';
 document.getElementById('main').style.marginLeft= '0';
});

$("#sp").click(function() {
  document.getElementById('linkins').style.boxShadow ="0 1px 6px 1px #2202af";
 document.getElementById('linkins').style.width = '100%';
 document.getElementById('main').style.marginLeft= '0';
});

$("#sg").click(function() {
  document.getElementById('telemedia').style.boxShadow ="0 1px 6px 1px #2202af";
  document.getElementById('telemedia').style.width = '100%';
 document.getElementById('main').style.marginLeft= '0';
});

$(".closesearch").click(function() {
  document.getElementById('searchframe').style.boxShadow ="none";
  document.getElementById('searchframe').style.width = '0';
 document.getElementById('main').style.marginLeft= '0';
 let stateObj = { id: "0" };
			window.history.replaceState(stateObj,
						"", "/");
            document.title = "Art of Learning | MASTROWALL";
});

$(".closelinkins").click(function() {
  document.getElementById('linkins').style.boxShadow ="none";
  document.getElementById('linkins').style.width = '0';
 document.getElementById('main').style.marginLeft= '0';
 let stateObj = { id: "0" };
 window.history.replaceState(stateObj,
       "", "/");
       document.title = "Art of Learning | MASTROWALL";
});

$(".closetelemedia").click(function() {
  document.getElementById('telemedia').style.boxShadow ="none";
  document.getElementById('telemedia').style.width = '0';
 document.getElementById('main').style.marginLeft= '0';
 let stateObj = { id: "0" };
 window.history.replaceState(stateObj,
       "", "/");
       document.title = "Art of Learning | MASTROWALL";
});
$("#closecas").click(function() {
  document.getElementById('continueas').style.width = '0';
  document.getElementById('closecas').style.display = 'none';
 document.getElementById('closecasinfo').style.display = 'none';
 document.getElementById('main').style.marginLeft= '0';
});

$("#gd").click(function() {
  $("#gdrivebox").toggle('fast');
  $("#todbox").hide();
});

$(".closedrivebox").click(function() {
  $("#gdrivebox").hide();
});

$("#td").click(function() {
  $("#todbox").toggle('fast');
  $("#gdrivebox").hide();
  let stateObj = { id: "0" };
			window.history.replaceState(stateObj,
						"", "/e/create-TOD/#");
            document.title = "Create TOD | MASTROWALL";
});
$("#botcrtod").click(function() {
  $("#todbox").toggle('fast');
  let stateObj = { id: "0" };
			window.history.replaceState(stateObj,
						"", "/e/create-TOD/#");
            document.title = "Create TOD | MASTROWALL";        
});
$("#exmprtl").click(function() {
  $('.otservice').show();
  $('#falsesecback').show();
});

$(".closetodbox").click(function() {
  $("#todbox").hide();
  let stateObj = { id: "0" };
  window.history.replaceState(stateObj,
        "", "/");
        document.title = "Art of Learning | MASTROWALL";
});

$("#pt").click(function() {
  $("#privacybox").toggle();
  $("#todbox").hide();
  $("#gdrivebox").hide();
});

$(".closeprivacybox").click(function() {
  $("#privacybox").hide();
});

$("#esq").click(function() {
  $("#jdbox").slideDown('slow');
  $("#dots").hide('fast');
  $("#togTest").show();
  $("#togTest2").hide();
  document.getElementById('jdframe').src = "https://www.openaccessjournals.com/";
  document.getElementById('hrefframejd').href ="https://www.openaccessjournals.com/";
});
$("#scd").click(function() {
  $("#jdbox").slideDown('slow');
  $("#dots").hide('fast');
  $("#togTest").show();
  $("#togTest2").hide();
  document.getElementById('jdframe').src = "https://www.sciencedirect.com/browse/journals-and-books?accessType=openAccess";
  document.getElementById('hrefframejd').href ="https://www.sciencedirect.com/browse/journals-and-books?accessType=openAccess";
});

$(".closejdbox").click(function() {
  $("#jdbox").slideUp('slow');
});

$("#examside").click(function() {
  $("#examsideq").slideDown('slow');
  document.getElementById('examsideq').style.background = "white";
  document.getElementById('hrefframe').href="https://questions.examside.com/";
});

$(".closeexamsideq").click(function() {
  $("#examsideq").slideUp('slow');
});

});

$(document).ready(function() {
window.desktopcheck = function() {
  var check = false;
  if(window.innerWidth>768){
      check=true;
  }
  return check;
}
if(!window.desktopcheck()){
  golight();
  document.getElementById('fullheighttod').style.display="none";
  document.getElementById('emid').style.display="none";
}

else{
  var today = new Date();
  var hours = today.getHours();
  if(hours >=18){
    godark();
  }
  else{
    golight();
  }

}

});

$(document).ready(function() {
  $("#togTest").click(function() {
    $("#dots").show('fast');
    $("#togTest").hide();
    $("#closecasinfo").hide();
    document.getElementById("continueas").style.width = "0";
    document.getElementById("togTest2").style.display = "block";
  document.getElementById("myNav").style.width = "0";
  document.getElementById("falseback-conas").style.display = "none";
  $('.falseback-nav').hide();$('.mynvflback').hide();
  document.getElementById("dots").style.zIndex = '100';
  });
});
$(document).ready(function() {
window.addEventListener('mouseup', function(event) {
  var pol = document.getElementById('dots');
  if (event.target != pol && event.target.parentNode != pol) {
    pol.style.display = 'none';
    $("#togTest").show();
    $("#togTest2").hide();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});
window.addEventListener('mouseup', function(event) {
  var pol = document.getElementById('myNav');
  if (event.target != pol && event.target.parentNode != pol) {
  }
});
});

function golight(){
document.getElementById('aol').style.backgroundColor ="white";
document.getElementById('aol').style.boxShadow ="0 2px 10px 0px #2a26f1";
document.getElementById('oknav').style.color ="#0c29cd";
document.getElementById('mwallImg').style.filter ="invert(0)";
document.body.style.backgroundColor ="#e6e6e6";
document.body.style.backgroundImage ="url('images/hexback-white-1200x900.gif')";
document.body.style.backgroundRepeat = "repeat";
document.body.style.backgroundSize = "100%";
$('.con-one').addClass('con-one-light').removeClass('con-one');
$('.con-one-main').addClass('con-one-main-light').removeClass('con-one-main');
$('.con-two').addClass('con-two-light').removeClass('con-two');
document.body.scrollTop = 0; document.documentElement.scrollTop = 0;
document.getElementById('continueas').style.backgroundImage = "linear-gradient(45deg,#0c29cd,#be1531,#eff309)"
document.getElementById('dlight1').style.display ="none";
document.getElementById('dlight2').style.display ="block";
document.getElementById('falsesecback').style.backgroundColor ="#d6d6d6";
document.getElementById('myNav').style.backgroundImage = "linear-gradient(-45deg, #0c09c9,white,white)";
document.getElementById('dots').style.backgroundColor ="#000000de";
document.getElementById('signinuser').style.color = "#0b07df";
}
function godark(){
  document.getElementById('aol').style.backgroundColor ="#282828";
  document.getElementById('aol').style.boxShadow ="0 0px 0px 0px #2a26f1";
document.getElementById('oknav').style.color ="#6a67fa";
document.getElementById('mwallImg').style.filter ="invert(1)";
document.body.style.backgroundColor ="#181818";
document.body.style.backgroundImage ="url('images/hexback-blue-1200x900.gif')";
document.body.style.backgroundRepeat = "repeat";
document.body.style.backgroundSize = "100%";
$('.con-one-light').addClass('con-one').removeClass('con-one-light');
$('.con-one-main-light').addClass('con-one-main').removeClass('con-one-main-light');
$('.con-two-light').addClass('con-two').removeClass('con-two-light');
document.body.scrollTop = 0; document.documentElement.scrollTop = 0;
document.getElementById('dlight1').style.display ="block";
document.getElementById('dlight2').style.display ="none";
document.getElementById('continueas').style.backgroundImage = "linear-gradient(-45deg,#141414,#0a0a0a,#0c29cd)";
document.getElementById('falsesecback').style.backgroundColor ="black";
document.getElementById('myNav').style.backgroundImage = "linear-gradient(-45deg,#1d1d1d,#ece7e7,#ece7e7)";
document.getElementById('dots').style.backgroundColor ="#161616f4";
document.getElementById('signinuser').style.color = "#4542f1";
}

$(document).ready(function() {
$("#acdash").click(function() {
  document.getElementById('searchframe').style.boxShadow ="0 1px 6px 1px #2202af";
  document.getElementById('searchframe').style.width = '100%';
 document.getElementById('main').style.marginLeft= '0';
 let stateObj = { id: "0" };
			window.history.replaceState(stateObj,
						"", "/e/topic-search/#");
            document.title = "Search Topic | MASTROWALL";
});

$("#spdash").click(function() {
  document.getElementById('linkins').style.boxShadow ="0 1px 6px 1px #2202af";
 document.getElementById('linkins').style.width = '100%';
 document.getElementById('main').style.marginLeft= '0';
 let stateObj = { id: "0" };
 window.history.replaceState(stateObj,
       "", "/e/linkins-updates/#");
       document.title = "New Linkins | MASTROWALL";
});

$("#sgdash").click(function() {
  document.getElementById('telemedia').style.boxShadow ="0 1px 6px 1px #2202af";
  document.getElementById('telemedia').style.width = '100%';
 document.getElementById('main').style.marginLeft= '0';
 let stateObj = { id: "0" };
 window.history.replaceState(stateObj,
       "", "/e/tele-media/#");
       document.title = "Tele Media | MASTROWALL";
});

});

$("#botlinkins").click(function() {
  document.getElementById('linkins').style.boxShadow ="0 1px 6px 1px #2202af";
 document.getElementById('linkins').style.width = '100%';
 document.getElementById('main').style.marginLeft= '0';
 let stateObj = { id: "0" };
 window.history.replaceState(stateObj,
       "", "/e/linkins-updates/#");
       document.title = "New Linkins | MASTROWALL";
});