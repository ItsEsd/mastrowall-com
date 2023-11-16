
// M A S T R O W A L L /////////////////////
var rB = "https://script.google.com/macros/s/";
var rShow = "AKfycbz9XUzdTUILZDwU_hy1_JdRyjvA7zgLYZl1smOuUw4WmwDL9BOrkLnIQqn5XybdGEpm/exec";

function telemed(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $('#inm1,#inm2,#vid').empty();
    $(".box").css('background-color','#000');
    document.getElementById("loader_in").style.visibility = "visible";
    document.getElementById("showhtml").style.display = "block";
    var url = rB+rShow +
    "?callback=getData&action=rdtmin";
    var request = jQuery.ajax({
     crossDomain: true,
     url: url,
     method: "GET",
     dataType: "jsonp"
   });

}


function getData(e){
    var nwone = e.resmedone[0];
    var nwtwo = e.resmedtwo[0];
    var mdvd = e.resmedvd[0];
    var mdqt = e.resmedqt[0];
    var mdex = e.resmedexin[0];
  
    var dnumbmd1 = Object.keys(nwone).length;
    var dnumbmd2 = Object.keys(nwtwo).length;
    var dnumbvd = Object.keys(mdvd).length;
    var dnumbqt = Object.keys(mdqt).length;
    var dnumbex = Object.keys(mdex).length;
   
  var db = 'data';
  
  // Med News #1 /////////////////////
  
 
  var maxMedia = dnumbmd1; 
  for (var a = [], i = 0; i < maxMedia; ++i) a[i] = i;
    function shuffle(array) {
      var tmp, current, top = array.length;
      if (top) {
        while (--top) {
          current = Math.floor(Math.random() * (top + 1)) + 1; 
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      }
      return array;
    }

    a = shuffle(a);
    var dataset = db+1;
    var data = nwone[dataset];
    var innews = JSON.parse(data[0].InMedia1);
    document.getElementById("inm1").innerHTML = '<div class="inm1con"><p style="color:black;" class="telenewsblock">' + innews.conTitle1 + '<a target="_blank" class="readmore" href="' + innews.conLink1 + '">' + innews.conSiteName1 + '</a> </p><hr></div>';
    document.getElementById("inm1").innerHTML += '<div class="inm1confrm"><p class="telenewsblock"><iframe class="frmdcon" src="https://telemedia.mastrowall.com/qrcontent/index.html"></iframe></p></div>';
     var styles = {
      frmdcon: {
        border: '0px',
        width: '100%',
        height: '485px'
      },
      inm1confrm: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '5px',
        overflow: 'hidden',
        display: 'block',
        marginBottom: '40px',
        maxHeight: '498px'
      }
    };

    Object.keys(styles).forEach(function(elementClass) {
      var element = document.querySelector('.' + elementClass);
      Object.assign(element.style, styles[elementClass]);
    });

    var fin;
    for(var d=0;d<a.length;d++){
      fin = a[d]+1;
      if(fin!=0 && fin!=1){
        var dataset = db+fin;
        var data = nwone[dataset];
        var innews = JSON.parse(data[0].InMedia1);
        document.getElementById("inm1").innerHTML += '<div class="inm1con"><p style="color:black;" class="telenewsblock">' + innews.conTitle1 + '<a target="_blank" class="readmore" href="' + innews.conLink1 + '">' + innews.conSiteName1 + '</a> </p><hr></div>';
      }
  }
  
  // Med News #2 /////////////////////
  
  for(var k=1;k<=dnumbmd2;k++){
    var dataset = db+k;
    var data = nwtwo[dataset];
    var innews = JSON.parse(data[0].InMedia2);
    document.getElementById("inm2").innerHTML += '<p style="color:black;" class="telenewsblock">' + innews.conTitle1 + '<a target="_blank" class="readmore" href="' + innews.conLink1 + '">' + innews.conSiteName1 + '</a> </p><hr> ';
    }
  
  // Med Video  /////////////////////
  var vid = document.getElementById('vid');
  for(var k=1;k<=dnumbvd;k++){
    var dataset = db+k;
    var data = mdvd[dataset];
    var invid = JSON.parse(data[0].YouVidWall);
    var vslen = invid.inmediamwallVid.length;
    var elem = document.createElement('div');
    vid.append(elem);
    for (var m = 0; m < vslen; m++) {
    var link = invid.inmediamwallVid[m];
    var vidid = link; 
    vid.innerHTML += '<div class="iteam"><div class="embed-responsive embed-responsive-16by9"><iframe width="100%"class="embed-responsive-item" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; autoplay ;picture-in-picture" allowfullscreen src="//www.youtube.com/embed/' + vidid + '" frameborder="0" allowfullscreen></iframe></div></div>';
  }  
  }
  
  // Quotes /////////////////////////
  
    // var QT = document.getElementById('dquote');
    var y1 = Math.floor((Math.random() * (dnumbqt-1)) + 1);
    // for(var k=1;k<=dnumbqt;k++){
      var dataset = db+y1;
      var data = mdqt[dataset];
      var inqt = JSON.parse(data[0].Quotes);
      var qtlen = inqt.dquoteWall.length;
        var y = Math.floor((Math.random() * 3) + 1);
        for (prop in inqt) {
            var link = inqt.dquoteWall[y];
        document.getElementById("dquote").innerHTML = '<div class="qu">' + link + '</div> ';
        }
    //   }
  
  // Exam Info /////////////////////////
  
  // var ets = document.getElementById('exinfos');
  // for(var k=1;k<=dnumbex;k++){
  //   var dataset = db+k;
  //   var data = mdex[dataset];
  //   var inqt = JSON.parse(data[0].ExamInfo);
  //   document.getElementById("exinfoin").innerHTML += '<div class="exinf">' + inqt.exminfo + '</div> ';
  //   }
    $(".box").css('background-color','#6d0404');
  document.getElementById("loader_in").style.visibility = "hidden";
  }
  