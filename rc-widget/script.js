"use strict";
$(document).ready(function() {
  $("#togTest").click(function() {
    $("#dots,#togTest2").show('fast');
    $("#togTest").hide();
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


$(".closeotbx").click(function() {
    $(".dircttb").slideUp('slow');
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
  opnotbxctd();
});

$("#botlinkins").click(function() {
  opnotbxlnk();
});

$("#masthome").click(function() {
  window.open('https://mastrowall.com','_blank');
});

$("#srchengn").click(function() {
  $('#srchengcon,#clssrceng').slideDown();
 $('.nbtbfrm').addClass('nbtbfrmwtsrc');
});

$("#clssrceng").click(function() {
  $('#srchengcon,#clssrceng').slideUp();
  $('.nbtbfrm').removeClass('nbtbfrmwtsrc');
  });

function opnotbxctd(){
  $("#ctdotbx,.nbtbfrm").slideDown('slow');
  $("#dots,#jdbox,#lnkotbx").hide('fast');
}

function opnotbxlnk(){
  $("#lnkotbx,.nbtbfrm").slideDown('slow');
  $("#dots,#jdbox,#ctdotbx").hide('fast');
}

function opjdbox(){
  $("#jdbox,.nbtbfrm").slideDown('slow');
    $("#dots,#ctdotbx,#lnkotbx,#framenews").hide('fast');
}

function openframenews(){
  $('#framenews,.nbtbfrm').slideDown('slow');
  $("#dots,#ctdotbx,#lnkotbx,#jdbox").hide('fast');
  }

  $('<link>', {
    rel: 'stylesheet',
    href: 'https://mastrowall.com/css/bootstrap.min.css'
  }).appendTo('head');
  
});
