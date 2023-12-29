
$('#conasmwall').click(function(){
    document.getElementById('continueas').style.width='100%'; 
    document.getElementById('myNav').style.width='0';  
    document.getElementById('main').style.marginLeft= '0'; 
    document.getElementById('closecas').style.display='block';
    document.getElementById('closecasinfo').style.display='block';
});

$('#signregpre').click(function(){
  $('#intro').slideUp('slow');
  // document.getElementById('continueas').style.width='100%'; 
  document.getElementById("myNav").style.width = "350px";
  document.getElementById("continueas").style.width = "0";
  document.getElementById("closecasinfo").style.display = "none";
  $('.falseback-nav').show();
  $('.mynvflback').slideDown('slow');
  document.getElementById("main").style.marginLeft = "0px";

  $("#dots").hide('fast');
  $("#togTest").show();
    $("#togTest2").hide();
});

$('#goinmastro').click(function(){
  window.open('https://mastrowall.in', '_blank', 'location=center,height=570,width=1200,left=0,top=0,scrollbars=yes,status=yes');
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
  var objDiv = document.getElementById("myNav-two");
objDiv.scrollTop = objDiv.scrollHeight;
   
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

$('#stopvc1,#signregpre').click(function(){
    document.getElementById('vcone').play();document.getElementById('stopvc1').style.display= 'none';document.getElementById('playvc1').style.display= 'block';
});


$("#td").click(function() {
  $("#todbox").slideDown('fast');
  $("#gdrivebox").hide();closeNav();
  // let stateObj = { id: "0" };
	// 		window.history.replaceState(stateObj,
	// 					"", "/e/create-TOD/#");
  //           document.title = "Create TOD | MASTROWALL";
});


$('#crtod,#botcrtod').click(function(){
  $('#framenews,#framenw-back').slideUp('slow');
  var fstelm = document.getElementById('todbox');
  if(fstelm.style.display =='block'){
    $('#todbox').slideUp('fast');
  }
  else{
    $('#todbox').slideDown('fast');

  }
    // let stateObj = { id: "0" };
    // window.history.replaceState(stateObj,
    //       "", "/e/create-TOD/#");
    //       document.title = "Create TOD | MASTROWALL";
});

function changezpostd(){
  $('#todbox').slideUp('fast');
  // var fstelm = document.getElementById('todbox');
  // if(fstelm.style.display =='block'){
  //   $('#framenews').css('zIndex','20');
  // }
  // else{
  //   $('#framenews').css('zIndex','100');
  // }

}

$('#prosign,#exammwall').click(function(){
    window.open('https://exam-portal.mastrowall.com/', '_blank', 'location=center,height=570,width=1200,left=0,top=0,scrollbars=yes,status=yes');
});

$('#signtomdrive').click(function(){
    signInToOneDrive();
});

$('#oplibrary').click(function(){
    window.open('https://library.mastrowall.in', '_blank', 'location=center,height=570,width=1200,left=0,top=0,scrollbars=yes,status=yes');
});

$('#opblog').click(function(){
    window.open('https://blog.mastrowall.in', '_blank', 'location=center,height=570,width=1200,left=0,top=0,scrollbars=yes,status=yes');
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
    move(); openframenews(); changezpostd();
    document.getElementById('frame').src='https://www.sciencenews.org';
    document.getElementById('hrefframenews').href ='https://www.sciencenews.org';
  });

  $("#mntday").click(function() {
    move(); openframenews(); changezpostd();
     document.getElementById('frame').src='https://www.medicalnewstoday.com';
     document.getElementById('hrefframenews').href='https://www.medicalnewstoday.com';
  });

  $("#twscience").click(function() {
    move(); openframenews(); changezpostd();
    document.getElementById('frame').src='https://science.thewire.in';
    document.getElementById('hrefframenews').href='https://science.thewire.in';
  });

  $("#scialrt").click(function() {
    move(); openframenews();  changezpostd();
    document.getElementById('frame').src='https://www.sciencealert.com';
    document.getElementById('hrefframenews').href='https://www.sciencealert.com';
  });
//////////////
 
  $("#popscie").click(function() {
    move(); openframenews();  changezpostd();
    document.getElementById('frame').src='https://www.popsci.com';
    document.getElementById('hrefframenews').href='https://www.popsci.com';
  });

  $("#wirdns").click(function() {
    move(); openframenews();  changezpostd();
    document.getElementById('frame').src='https://www.wired.com';
    document.getElementById('hrefframenews').href='https://www.wired.com';
  });

  $("#scdaily").click(function() {
    move(); openframenews();  changezpostd();
    document.getElementById('frame').src='https://www.scitechdaily.com';
    document.getElementById('hrefframenews').href='https://www.scitechdaily.com';
  });

  $("#anainsgt").click(function() {
    move(); openframenews();  changezpostd();
    document.getElementById('frame').src='https://www.ourworldindata.org/';
    document.getElementById('hrefframenews').href='https://www.ourworldindata.org/';
  });

 

  $("#bigth").click(function() {
    move(); openframenews();  changezpostd();
    document.getElementById('frame').src='https://bigthink.com/';
    document.getElementById('hrefframenews').href='https://bigthink.com/';
  });

  $("#genennws").click(function() {
    move(); openframenews();  changezpostd();
    document.getElementById('frame').src='https://www.genengnews.com';
    document.getElementById('hrefframenews').href='https://www.genengnews.com';
  });

  $("#masthome").click(function() {
    window.open('https://home.mastrowall.in', '_blank', 'location=center,height=570,width=1200,left=0,top=0,scrollbars=yes,status=yes');
  });
  $("#astroforum").click(function() {
    window.open('https://www.astro.mastrowall.in/forum', '_blank', 'location=center,height=570,width=1200,left=0,top=0,scrollbars=yes,status=yes');
  });
  $("#opabout").click(function() {
    window.open('about/', '_blank');
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
    window.open('online-test/', '_self', 'location=center,height=570,width=1200,left=0,top=0,scrollbars=yes,status=yes');
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

  $("#exmpsamptst").click(function() {
    window.open("https://exam-portal.mastrowall.com?q=sampletest", "_blank");
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

$('#chngbcgrnd').click(function(){
  $('#chbcground').toggle('fast');
  $('#framenews,#framenw-back,#todbox').hide();
})
$('#clschbc').click(function(){
  $('#chbcground').hide('fast');
})
$(document).ready(function(){
  var chsbc =[
    "../images/background/img-29.jpg",
    "../images/background/img-30.jpg",
    "../images/background/img-31.png",
    "../images/background/img-32.jpg",
    "../images/background/img-33.jpg",
    "../images/background/img-34.jpg",
    "../images/background/img-35.jpg",
    "../images/background/img-1.jpg",
  "../images/background/img-2.jpg",
  "../images/background/img-3.jpg",
  "../images/background/img-4.jpg",
  "../images/background/img-5.jpg",
  "../images/background/img-6.jpg",
  "../images/background/img-7.jpg",
  "../images/background/img-8.jpg",
  "../images/background/img-9.jpg",
  "../images/background/img-10.jpg",
  "../images/background/img-11.jpg",
  "../images/background/img-12.jpg",
  "../images/background/img-13.jpg",
  "../images/background/img-14.jpg",
  "../images/background/img-15.jpg",
  "../images/background/img-16.jpg",
  "../images/background/img-17.jpg",
  "../images/background/img-18.jpg",
  "../images/background/img-19.jpg",
  "../images/background/img-20.jpg",
  "../images/background/img-21.jpg",
  "../images/background/img-22.jpg",
  "../images/background/img-23.jpg",
  "../images/background/img-24.jpg",
  "../images/background/img-25.jpg",
  "../images/background/img-26.jpg",
  "../images/background/img-27.jpg",
  "../images/background/img-28.jpg",
  "../images/background/img-36.jpg",
  "../images/background/img-37.jpg",
  "../images/background/img-38.jpg",
  "../images/background/img-39.jpg",
  "../images/background/img-40.jpg",
  "../images/background/img-41.jpg",
  "../images/background/img-42.jpg",
  "../images/background/img-43.jpg",
  "../images/background/img-44.jpg",
  "../images/background/img-45.jpg",
  "../images/background/img-46.jpg",
  "../images/background/img-47.jpg",
  "../images/background/img-48.png",
  "../images/background/img-49.jpg",
  "../images/background/img-50.jpg"];
  var exmplen =chsbc.length;
  for (var a=[],i=0;i<exmplen;++i) a[i]=i;
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}
a = shuffle(a);
var fin;
for(var d=0;d<a.length;d++){
  fin = a[d];
    document.getElementById('choosebcgr').innerHTML +="<img onerror='this.src= `../images/imgonerror.svg`' class='chsbcg' src='"+chsbc[fin]+"' onclick='chngbackground(this)'>";
  }
    });
    function chngbackground(label){
      var list=document.getElementsByClassName("chsbcg");
      list = [].slice.call(list); 
      var posofimg = list.indexOf(label);
      var srcimg = document.getElementsByClassName("chsbcg")[posofimg].src;
      document.body.style.backgroundImage= 'url("'+ srcimg +'")';
      document.body.style.backgroundRepeat = "repeat";
      document.body.style.backgroundSize = "100% 100%";
      $('#chbcground').hide('fast');
    }
  

    /// GetGames ///////////////
    var gmdsh =[
      ["../images/gaming/gm1.png",
              "https://testtubegames.com/velocityraptor.html"],

      ["../images/gaming/gm2.png",
              "https://testtubegames.com/shocktopus_web.html"],

      ["../images/gaming/gm3.png",
              "https://www.funbrain.com/games/"],

      ["../images/gaming/chess.png",
              "/e-games/stockfish-chess-web-gui-master/index.html"],

      ["../images/gaming/gm5.png",
              "https://littlealchemy2.com/"],

      ["../images/gaming/gm7.png",
              "https://kids.nationalgeographic.com/games/"],

      ["../images/gaming/gm6.png",
              "https://www.roythezebra.com/english-ks1"],

      ["../images/gaming/gm8.png",
              "https://www.roomrecess.com/"],

      ["../images/gaming/gm9.gif",
              "https://toytheater.com/"],

      ["../images/gaming/gm10.png",
              "https://draw.tate.org.uk/"],

      ["../images/gaming/gm11.png",
              "https://www.turtlediary.com/"],

      ["../images/gaming/gm12.png",
              "https://www.spellingcity.com/spelling-games-vocabulary-games.html"],

      ["../images/gaming/gm13.png",
              "https://www.mathplayground.com/"],

      ["../images/gaming/gm14.png",
              "https://www.cellsalive.com/"],

      ["../images/gaming/gm15.png",
              "https://www.physicsgames.net/"],

      ["../images/gaming/gm16.png",
              "https://kids.niehs.nih.gov/games/"],

      ["../images/gaming/gm17.png",
              "https://education.jlab.org/indexpages/elementgames.html"],
              
      ["../images/gaming/gm18.png",
              "https://mathworld.wolfram.com/"],
      
      ["../images/gaming/gm20.png",
              "https://www.mathnook.com/math/boatcoordinates.html"],

      ["../images/gaming/gm21.png",
               "https://www.brainpop.com/games/"],

      ["../images/gaming/gm19.png",
              "https://www.thatquiz.org/"],
      ["../images/gaming/stellarium.org.png",
              "https://stellarium-web.org/"],        
      
            ];
    $(document).ready(function(){
      var gmdshlen =gmdsh.length;
      for(var g=0;g<=gmdshlen;g++){
        document.getElementById('gmicon').innerHTML +="<img onerror='this.onerror=null;this.src= `../images/imgonerror.svg`' class='gtgmic' src='"+gmdsh[g][0]+"' onclick='goplgm(this)'>";
      }
        });

        function goplgm(label){
          document.getElementById("opgm").style.backgroundImage = 'url(/images/loading-gif.gif)';
          var list=document.getElementsByClassName("gtgmic");
          list = [].slice.call(list); 
          var posofimg = list.indexOf(label);
          document.getElementById("opgm").src=gmdsh[posofimg][1];
          $('#gmcnsl').slideDown();
          if(gmdsh[posofimg][1] == "https://toytheater.com/"){
            document.getElementById("opgm").style.backgroundColor = 'white';
            document.getElementById("opgm").style.backgroundImage = 'none';
          }
          else{
            document.getElementById("opgm").style.backgroundColor = '#161616be';
          }
        }         
  
      $('#getgames').click(function(){
      $('#gmdiv,#gmdash').slideDown();
      });
      $('#gobcm').click(function(){
      $('#gmdiv,#gmdash').slideUp();
      $('#gmcnsl').hide();
      document.getElementById("opgm").src="";
      });

   $('#srchengn').click(function(){
    $('#srchengcon,#clssrceng').slideDown();
   });
   $('#clssrceng').click(function(){
    $('#srchengcon,#clssrceng').slideUp();
   })
