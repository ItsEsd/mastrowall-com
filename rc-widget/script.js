$(document).ready(function() {
  var allowedDomains = ['mastrowall.com', 'educator.mastrowall.com', 'student.mastrowall.com'];
  var referringDomain = document.referrer.split('/')[2]; 
var resct = function(){
  if (allowedDomains.includes(referringDomain)) {
    return true;
  }}
  if(resct()){
  $("#togTest").click(function() {
    $("#dots").show('fast');
    $("#togTest").hide();
    $("#closecasinfo").hide();
    document.getElementById("togTest2").style.display = "block";
    document.getElementById("dots").style.zIndex = '100';
  });

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

$('.botInline1,.botInline2,.botInline3,.botInline4').click(function(){
$("#dots").hide('fast');
$("#togTest").show();
$("#togTest2").hide();
});

$("#scinewsorg").click(function() {
    openframenews(); 
  document.getElementById('frame').src='https://www.sciencenews.org';
});

$("#mntday").click(function() {
    openframenews(); 
    document.getElementById('frame').src='https://www.medicalnewstoday.com';
});

$("#twscience").click(function() {
    openframenews(); 
  document.getElementById('frame').src='https://science.thewire.in';
});

$("#scialrt").click(function() {
    openframenews();  
  document.getElementById('frame').src='https://www.sciencealert.com';
});

$("#popscie").click(function() {
    openframenews();  
  document.getElementById('frame').src='https://www.popsci.com';
});

$("#wirdns").click(function() {
    openframenews();  
  document.getElementById('frame').src='https://www.wired.com';
});

$("#scdaily").click(function() {
    openframenews();  
  document.getElementById('frame').src='https://www.scitechdaily.com';
});

$("#anainsgt").click(function() {
    openframenews();  
  document.getElementById('frame').src='https://www.ourworldindata.org/';
});



$("#bigth").click(function() {
    openframenews();  
  document.getElementById('frame').src='https://bigthink.com/';
});

$("#genennws").click(function() {
    openframenews();  
  document.getElementById('frame').src='https://www.genengnews.com';
});


$(".closeFrame").click(function(){
    $("#framenews").slideUp('slow');
});

$(".closejdbox").click(function() {
    $("#jdbox").slideUp('slow');
    });
$(".closeotbx").click(function() {
    $("#otbx").slideUp('slow');
    });
        
$("#esq").click(function() {
  opjdbox();
  document.getElementById('btitlejd').innerHTML="|| Journals";
  document.getElementById('jdframe').src = "https://www.openaccessjournals.com/";
});
$("#scd").click(function() {
  opjdbox();
  document.getElementById('btitlejd').innerHTML="|| Journals";
  document.getElementById('jdframe').src = "https://www.sciencedirect.com/browse/journals-and-books?accessType=openAccess";
}); 
$("#wikip").click(function() {
  opjdbox();
  document.getElementById('btitlejd').innerHTML="|| Wikipedia";
  document.getElementById('jdframe').src='https://www.wikipedia.org';
});
$("#dictnr").click(function() {
  opjdbox();
  document.getElementById('btitlejd').innerHTML="|| Dictionary";
  document.getElementById('jdframe').src='https://www.dictionary.com/';
});

$("#botcrtod").click(function() {
  opnotfrm();
  document.getElementById('otbtitle').innerHTML="|| Create TOD";
  document.getElementById('otframe').src='https://mastrowall.com/TOD/';
});
$("#botlinkins").click(function() {
  opnotfrm();
  document.getElementById('otbtitle').innerHTML="|| LinkIns & Update";
  document.getElementById('otframe').src='https://mastrowall.com/linkins/';
});

$("#masthome").click(function() {
  window.open('https://mastrowall.com','_blank');
});

$("#srchengn").click(function() {
  $('#srchengcon,#clssrceng').slideDown();
});
$("#clssrceng").click(function() {
  $('#srchengcon,#clssrceng').slideUp();
  });

function opnotfrm(){
  $("#otbx").slideDown('slow');
  $("#dots,#jdbox").hide('fast');
  $("#togTest").show();
  $("#togTest2").hide();
}

function opjdbox(){
  $("#jdbox").slideDown('slow');
    $("#dots").hide('fast');
    $("#togTest").show();
    $("#togTest2").hide();
}

function openframenews(){
  $('#framenews').slideDown('slow');
  }

  $('#srchengcon').load('https://mastrowall.com/src-engines/index.html');
  $('<link>', {
    rel: 'stylesheet',
    href: 'https://mastrowall.com/css/bootstrap.min.css'
  }).appendTo('head');

  $.getScript('https://mastrowall.com/src-engines/scrpt.js');
  
}
});
