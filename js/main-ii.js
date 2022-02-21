$('#conasmwall').click(function(){
    document.getElementById('continueas').style.width='100%'; 
    document.getElementById('myNav').style.width='0';  
    document.getElementById('main').style.marginLeft= '0'; 
    document.getElementById('closecas').style.display='block';
    document.getElementById('closecasinfo').style.display='block';
});
$('#signinuser').click(function(){
  document.getElementById('continueas').style.width='100%'; 
  document.getElementById('myNav').style.width='0';  
  document.getElementById('main').style.marginLeft= '0'; 
  document.getElementById('closecas').style.display='block';
  document.getElementById('closecasinfo').style.display='block';
});
$('#conlivem').click(function(){
    $('#golive').toggle();
});
 
$('.closebtn').click(function(){
    closeNav();
});

$('#oknav,#mwallImg').click(function(){
    openNav();$('#todbox').hide();$('#privacybox').hide();$('#jdbox').hide();$('#examsideq').hide();document.getElementById('bodyconv2').style.scrollBehavior = 'hidden';
});

$('#playvc1').click(function(){
    document.getElementById('vcone').pause();document.getElementById('vcone').currentTime = 0; document.getElementById('playvc1').style.display= 'none';document.getElementById('stopvc1').style.display= 'block';
});

$('#stopvc1').click(function(){
    document.getElementById('vcone').play();document.getElementById('stopvc1').style.display= 'none';document.getElementById('playvc1').style.display= 'block';
});

$('#crtod').click(function(){
    $('#todbox').toggle('fast');
});

$('#prosign').click(function(){
    window.open('https://exam-portal.mastrowall.com/', '_blank', 'location=center,height=570,width=1200,left=80,top=100,scrollbars=yes,status=yes');
});

$('#signtomdrive').click(function(){
    signInToOneDrive();
});

$('#oplibrary').click(function(){
    window.open('https://library.mastrowall.in', '_blank', 'location=center,height=570,width=1200,left=80,top=100,scrollbars=yes,status=yes');
});

$('#opblog').click(function(){
    window.open('https://blog.mastrowall.in', '_blank', 'location=center,height=570,width=1200,left=80,top=100,scrollbars=yes,status=yes');
});

$('#opabout').click(function(){
    $('#bodyConOne').show('fast');
    document.getElementById('bodyConOne').scrollTop = '0px';
    document.documentElement.scrollTop = 0;
});

function openNav() {
    // document.getElementById('aol').style.boxShadow = "0px 1px 4px 1px #8f8f8f";
     document.getElementById("myNav").style.width = "350px";
     document.getElementById("main").style.marginLeft = "0px";
   }

   function closeNav() {
   // document.getElementById('aol').style.boxShadow = "none";
     document.getElementById("myNav").style.width = "0";
     document.getElementById("main").style.marginLeft = "0";
    $('.falseback-nav').hide();
   }

   $("#mf").click(function() {
     $("#mfiles").toggle('fast');
   });

   $("#checkres").click(function() {
    $('#resbrd').show();$('#falsesecback').show();
  });

  $("#clsbodycon").click(function() {
    $('#bodyConOne').hide();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  $("#dlight1").click(function() {
    golight();
  });

  $("#dlight2").click(function() {
    godark();
  });

  $("#nrheightmtel").click(function() {
    document.getElementById('telemedia').style.zIndex= '0';
    document.getElementById('telemedia').style.height= '580px';
    document.getElementById('nrheightmtel').style.display= 'none'; 
    document.getElementById('fullheightmtel').style.display= 'block'; 
    document.getElementById('mtitlemtel').style.display='none';
    document.getElementById('btitlemtel').style.display='block';
  });

  $("#scinewsorg").click(function() {
    move(); openframenews(); 
    document.getElementById('frame').src='https://www.sciencenews.org';
    document.getElementById('hrefframenews').href ='https://www.sciencenews.org';
  });

  $("#mntday").click(function() {
    move(); openframenews();
     document.getElementById('frame').src='https://www.medicalnewstoday.com';
     document.getElementById('hrefframenews').href='https://www.medicalnewstoday.com';
  });

  $("#twscience").click(function() {
    move(); openframenews();
    document.getElementById('frame').src='https://science.thewire.in';
    document.getElementById('hrefframenews').href='https://science.thewire.in';
  });

  $("#scialrt").click(function() {
    move(); openframenews(); 
    document.getElementById('frame').src='https://www.sciencealert.com';
    document.getElementById('hrefframenews').href='https://www.sciencealert.com';
  });
//////////////
  $("#spcecom").click(function() {
    move(); openframenews(); 
    document.getElementById('frame').src='https://www.space.com';
    document.getElementById('hrefframenews').href='https://www.space.com';
  });

  $("#popscie").click(function() {
    move(); openframenews(); 
    document.getElementById('frame').src='https://www.popsci.com';
    document.getElementById('hrefframenews').href='https://www.popsci.com';
  });

  $("#wirdns").click(function() {
    move(); openframenews(); 
    document.getElementById('frame').src='https://www.wired.com';
    document.getElementById('hrefframenews').href='https://www.wired.com';
  });

  $("#scdaily").click(function() {
    move(); openframenews(); 
    document.getElementById('frame').src='https://www.scitechdaily.com';
    document.getElementById('hrefframenews').href='https://www.scitechdaily.com';
  });

  $("#anainsgt").click(function() {
    move(); openframenews(); 
    document.getElementById('frame').src='https://www.analyticsinsight.net/';
    document.getElementById('hrefframenews').href='https://www.analyticsinsight.net/';
  });

  $("#thescitst").click(function() {
    move(); openframenews(); 
    document.getElementById('frame').src='https://www.the-scientist.com';
    document.getElementById('hrefframenews').href='https://www.the-scientist.com';
  });

  $("#lvscien").click(function() {
    move(); openframenews(); 
    document.getElementById('frame').src='https://www.livescience.com';
    document.getElementById('hrefframenews').href='https://www.livescience.com';
  });

  $("#genennws").click(function() {
    move(); openframenews(); 
    document.getElementById('frame').src='https://www.genengnews.com';
    document.getElementById('hrefframenews').href='https://www.genengnews.com';
  });

  $("#masthome").click(function() {
    window.open('https://mwall.mastrowall.in', '_blank', 'location=center,height=570,width=1200,left=80,top=100,scrollbars=yes,status=yes');
  });

  $(".closeotserv").click(function() {
    $('.otservice').hide('fast');
    $('#falsesecback').hide('fast');
    $('.otserviceinfo').hide('fast');
  });

  $("#expeducon").click(function() {
    $('#ttside').toggle('fast');$('#gtside').hide();
  });

  $("#conwexid").click(function() {
    document.getElementById('continueexamid').style.display='block';
    $('.otservice').hide();
  });

  $("#chperfexp").click(function() {
    $('#continueeducator').show();$('.otservice').hide();
  });

  $("#expstucon").click(function() {
    $('#gtside').toggle('fast');$('#ttside').hide();
  });

  $("#assgntst").click(function() {
    $('#assignstuexam').show();$('.otservice').hide();
  });

  $("#expgtotst").click(function() {
    window.open('exam-portal/', '_blank', 'location=center,height=570,width=1200,left=80,top=100,scrollbars=yes,status=yes');
  });

  $("#exmpcreatid").click(function() {
    $('#termuse').hide();
    $('#contactdesk').hide();
    $('#prereq').hide();$('#createid').show('fast');
    $('#exportalpromo').show();
  });

  $("#exmpprereq").click(function() {
    $('#termuse').hide();
    $('#contactdesk').hide();
    $('#prereq').show('fast');$('#createid').hide();
    $('#exportalpromo').show();
  });

  $("#exampconmasd").click(function() {
    $('#termuse').hide();
    $('#contactdesk').show('fast');
    $('#prereq').hide();$('#createid').hide();
    $('#exportalpromo').show();
  });

  $("#svprtstpass").click(function() {
    infoexampdf();
  });

  $("#addQ").click(function() {
    $('#qtstfalse').show();
    if(document.getElementById('qst').value ==''){
      document.getElementById('qtstfalse').innerHTML='** Required';
      document.getElementById('conq').style.border='2px solid #f75858';
    }
    else{
      $('#qtstfalse').hide();
      document.getElementById('conq').style.border='2px solid #6a67fa';
    }
    document.getElementById('formcontainer').scrollTop = '0px';
  });

  $("#crtnewexid").click(function() {
    createnewexid();
  });

  $(document).ready(function(){
var exptimg =["../images/examportal/exmpt-1.jpg",
"../images/examportal/exmpt-2.jpg",
"../images/examportal/exmpt-3.jpg",
"../images/examportal/exmpt-4.jpg",
"../images/examportal/exmpt-5.jpg",
"../images/examportal/exmpt-6.jpg",
"../images/examportal/exmpt-7.jpg",
"../images/examportal/exmpt-8.jpg",
"../images/examportal/exmpt-9.jpg",
"../images/examportal/exmpt-10.jpg"];
var exmplen =exptimg.length;
for(var k=0;k<=exmplen-1;k++){
  document.getElementById('exportalpromo').innerHTML +="<img class='exmpproimg' src='"+exptimg[k]+"' onclick='enlargeempimg(this)'>";
}
  });

function enlargeempimg(label){
  var list=document.getElementsByClassName("exmpproimg");
  list = [].slice.call(list); 
  var posofimg = list.indexOf(label);
  var srcimg = document.getElementsByClassName("exmpproimg")[posofimg].src;
  $('#enlrgimg').show('fast');
  document.getElementById('emprimgenlrg').src= srcimg;
}
$("#enlrgimg").click(function() {
  $('#enlrgimg').hide();
  
});