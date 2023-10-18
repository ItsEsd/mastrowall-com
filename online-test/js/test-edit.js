$(window).on('selectstart', function (evt) {
  return (evt.target.contentEditable === 'true');
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
qst.addEventListener('input',(event) =>{
  $('#qtstfalse').hide();
});
conq.addEventListener('input',(event) =>{
    $('#qtstfalse').hide();
  document.getElementById('conq').style.border='2px solid #6a67fa';
  var innerh = document.getElementById('conq').innerHTML;
  document.getElementById('qst').value = innerh;
  });
  $(document).ready(function(){
    document.querySelector('[contenteditable]').addEventListener('paste', function(event) {
      event.preventDefault();
      document.execCommand('inserttext', false, event.clipboardData.getData('text/plain'));
    });
  });
  
  
    function readImage(input) {
      if ( input.files) {
          var FR= new FileReader();
          FR.onload = function(e) {
               $('#img').show().attr( "src", e.target.result );
               $('#base').show().text( e.target.result );
          };       
          FR.readAsDataURL( input.files[0] );
      }
  }
   
      $("#stimg").change(function(){
                readImage( this );
            });
  
      $("#opsimg").change(function(){
              readImage( this );
          });
      $('document').ready(function () {
            $('#stimg').on('change', function () {
              var $files = $(this).get(0).files;
                 readImage( this );
              if ($files.length) {
                // Reject big files
                if ($files[0].size > $(this).data('max-size') * 1024) {
                 // console.log('Please select a smaller file');
                  return false;
                }
                var apiUrl = 'https://api.imgur.com/3/image';
                var apiKey = 'f1fb111ea7f4e5b';
                var settings = {
                  async: false,
                  crossDomain: true,
                  processData: false,
                  contentType: false,
                  type: 'POST',
                  url: apiUrl,
                  headers: {
                    Authorization: 'Client-ID ' + apiKey,
                    Accept: 'application/json',
                  },
                  mimeType: 'multipart/form-data',
                };
                var formData = new FormData();
                formData.append('image', $files[0]);
                settings.data = formData;
                $.ajax(settings).done(function (response) {
                var k = response;
                var url = JSON.parse(response);
                document.getElementById('qstimg').value = url.data.link ;
                });}});});
   $('document').ready(function () {
    $('#opsimg').on('change', function () {
      var $files = $(this).get(0).files;
      for(var k=0;k<=3;k++){
        document.getElementsByClassName('optionss')[k].removeAttribute('required');
        document.getElementsByClassName('optionss')[k].value="null";
      }
         readImage( this );
      if ($files.length) {
        // Reject big files
        if ($files[0].size > $(this).data('max-size') * 1024) {
         // console.log('Please select a smaller file');
          return false;
        }
        var apiUrl = 'https://api.imgur.com/3/image';
        var apiKey = 'f1fb111ea7f4e5b';
  
        var settings = {
          async: false,
          crossDomain: true,
          processData: false,
          contentType: false,
          type: 'POST',
          url: apiUrl,
          headers: {
            Authorization: 'Client-ID ' + apiKey,
            Accept: 'application/json',
          },
          mimeType: 'multipart/form-data',
        };
        var formData = new FormData();
        formData.append('image', $files[0]);
        settings.data = formData;
        $.ajax(settings).done(function (response) {
        var k = response;
        var url = JSON.parse(response);
        document.getElementById('opimg').value = url.data.link ;
        });}});});
  quesfrm.addEventListener('submit', (event) => { 
    document.getElementById('falsesecback-mq').style.display="block";
  var exid=$("#chexamidedu").val();
  var ekey=JSON.stringify($("#chkey").val());
  var quST=encodeURIComponent(JSON.stringify($("#qst").val()+"{qfin}"));
  var quSTimg=encodeURIComponent(JSON.stringify($("#qstimg").val()+"{qfin}"));
  var OPA=encodeURIComponent(JSON.stringify($("#opa").val()+"{qfin}"));
  var OPB=encodeURIComponent(JSON.stringify($("#opb").val()+"{qfin}"));
  var OPC=encodeURIComponent(JSON.stringify($("#opc").val()+"{qfin}"));
  var OPD=encodeURIComponent(JSON.stringify($("#opd").val()+"{qfin}"));
  var OPImg=encodeURIComponent(JSON.stringify($("#opimg").val()+"{qfin}"));
  var ANQST=encodeURIComponent(JSON.stringify($("#anqs").val().toUpperCase()+"{qfin}"));
  var url1="https://script.google.com/macros/s/";
  var url2 ="AKfycbxYC7rpKpnZmgpNVsmgoCu-Wi9Bt604MjkH9LaH0Gd9LA5QLtH1bjgUfvRlQGyIKCiQ";
  var urlgt = url1+ url2+"/exec"+"?callback=ctrlqs&chexid=" +exid+"&chkey="+ekey+"&qst="+quST+"&qstimg="+quSTimg+"&opa="+OPA+"&opb="+OPB+"&opc="+OPC+"&opd="+OPD+"&opimg="+OPImg+"&anqs="+ANQST+"&action=gentestup";
  
  var request = jQuery.ajax({
    crossDomain: true,
    url: urlgt,
    method: "GET",
    dataType: "jsonp"
  });
  
  setTimeout(function() {
    $('#falsesecback-mq').fadeOut('slow');
  }, 4000);
  quesfrm.reset();
  document.getElementById('conq').innerText = '';
  // previewqset();
  
  });
  
  function ctrlqs(e){
    var re = e.result;
  if(re === "Value updated successfully!"){
    document.getElementById('qupdated').style.display="block";
  
    setTimeout(function() {
      $('#qupdated').fadeOut('slow');
    }, 4000);
    quesfrm.reset();
    previewqset();
  }
  
  }
  
  
  function displayQST(){
    var QST = $("#qst").val();
    var QSTIMG = $("#qstimg").val();
    var OPSA = $("#opa").val();
    var OPSB = $("#opb").val();
    var OPSC = $("#opc").val();
    var OPSD = $("#opd").val();
    var OPSIMG = $("#opimg").val();
    var ANST = $("#anqs").val().toUpperCase();
  
    if(QST != "" && OPSA !="" && OPSB != ""  && OPSC != "" && OPSD != "" && ANST !="" && QSTIMG == "null" && OPSIMG == "null"){
      document.getElementById("displayqst").innerHTML= "<div style='padding:10px;padding-top:20px;font-size:16px;'><br><p style='font-size:16px;'>"
      +QST+"</p><br><div><div><p>A. "
      + OPSA +"</p></div><div><p>B. "
      + OPSB+"</p></div><div><p>C. "
      + OPSC+"</p></div><div><p>D. "
      +OPSD+"</p></div></div><div><p class='preans'>Answer: "
      + ANST+"</p></div></div>";
    }
    else if(QST != "" && QSTIMG != "null" && OPSA =="null" && OPSB == "null"  && OPSC == "null" && OPSD == "null" && OPSIMG !="null" && ANST !=""){
    
      document.getElementById("displayqst").innerHTML= "<div style='padding:10px;padding-top:20px;font-size:16px;'><br><p style='font-size:16px;'>"
      +QST+"</p><img class='preqimg' src='"
      + QSTIMG+"'><br><img class='propimg' src='"
      + OPSIMG+"'><div><p class='preans'>Answer: "
      + ANST+"</p></div></div>";
    
    }
    else if(QST != "" && QSTIMG != "null" && OPSA !="" && OPSB != ""  && OPSC != "" && OPSD != ""  && OPSIMG == "null" && ANST !=""){
      document.getElementById("displayqst").innerHTML= "<div style='padding:10px;padding-top:20px;font-size:16px;'><br><p style='font-size:16px;'>"
      +QST+"</p><img class='preqimg' src='"
      + QSTIMG+"'><br><div><div><p>A. "
      + OPSA +"</p></div><div><p>B. "
      + OPSB+"</p></div><div><p>C. "
      + OPSC+"</p></div><div><p>D. "
      +OPSD+"</p></div></div><div><p class='preans'>Answer: "
      + ANST+"</p></div></div>";
    
    }
    else if(QST != "" && QSTIMG == "null" && OPSA =="null" && OPSB == "null"  && OPSC == "null" && OPSD == "null"  && OPSIMG != "null" && ANST !=""){
      document.getElementById("displayqst").innerHTML= "<div style='padding:10px;padding-top:20px;font-size:16px;'><br><p style='font-size:16px;'>"
      +QST+"</p><br><img class='propimg' src='"
      + OPSIMG+"'><div><p class='preans'>Answer: "
      + ANST+"</p></div></div>";
    
    }
    
    else{
    
      document.getElementById("displayqst").innerHTML= "<center><h4 style='text-align:center;font-size:20px;padding-top:140px;'>Please complete all fields</h4></center>";
      return false;
    }
    }
  
  
  function previewqset() {
  $('#previewqset').empty();
    var exid=$("#chexamidedu").val();
  var ekey=JSON.stringify($("#chkey").val());
  var url1 = "https://script.google.com/macros/s/";
  var url2 = "AKfycbxYC7rpKpnZmgpNVsmgoCu-Wi9Bt604MjkH9LaH0Gd9LA5QLtH1bjgUfvRlQGyIKCiQ";
  var url = url1+url2+"/exec"+ "?action=gentestrd";
  document.getElementById('loaderCon').style.display = "block";
  $.getJSON(url, function(json) {
    for (var i = 0; i < json.records.length - 1; i++) {
      if (exid === json.records[i].ExamID && ekey === json.records[i].PKey) {
        document.getElementById('loaderCon').style.display = "none";
        document.getElementById("eduexname").innerHTML = json.records[i].EducatorName;
        document.getElementById("eduextitle").innerHTML =json.records[i].ExamTitle;
        document.getElementById("eduexdescp").innerHTML =json.records[i].ExamDescp;
        document.getElementById("eduextimedur").innerHTML =json.records[i].TDuration;
  var qststr = json.records[i].QuesSTFinal;
  var qststrlen =qststr.length;
  if(qststr != ""){
  var qstoreused = (qststrlen/46000)*100;
  document.getElementById("qststorage").innerHTML = qstoreused.toFixed(2)+"%";
  }
  else{document.getElementById("qststorage").innerHTML = "0%";}
  if(qststrlen>46000){
    document.getElementById("qststorage").innerHTML = "100%";
    document.getElementById("addQ").disabled = true;
  }
  var enststr = json.records[i].EnrolledStuFinal;
  var enstlimit = enststr.length;
  var enstustr = JSON.parse(JSON.stringify(json.records[i].EnrolledStuFinal));
  var enstusingle = enstustr.split(',');
  var enstustrlen =enstusingle.length;
  if(enststr != ""){
    var numofstu = (enstustrlen-1)/3;
  document.getElementById("enrolledstuall").innerHTML = numofstu;
  }
  else{document.getElementById("enrolledstuall").innerHTML = "0";}
  var stuansstr = JSON.parse(JSON.stringify(json.records[i].StuAnsFinal));
  var stuansstrlen =stuansstr.length;
  if(stuansstr != "" && stuansstrlen<46000 ){
  var troomsize = (stuansstrlen/46000)*100;
  document.getElementById("troomsize").innerHTML = troomsize.toFixed(2)+"%";
  }
  else{document.getElementById("troomsize").innerHTML = "0%";}
  if(stuansstrlen>46000){
    document.getElementById("crtnewexid").value = "Create Another Exam ID";
    document.getElementById("crtnewexid").disabled = false;
    $("#crtnewexid").removeClass("btn-outline-primary");
    $("#crtnewexid").addClass("btn-outline-warning");
    document.getElementById("troomsize").innerHTML ="100%";
  }
  else{
    document.getElementById("crtnewexid").value = "Test Room Size Health: GOOD!";
    document.getElementById("crtnewexid").disabled = true;
  }
        var qstate = JSON.parse(JSON.stringify(json.records[i].QuesSTFinal));
        var qstateimg = JSON.parse(JSON.stringify(json.records[i].QSTimgFinal));
        var qstateops = JSON.parse(JSON.stringify(json.records[i].OPfinal));
        var qstateopimg = JSON.parse(JSON.stringify(json.records[i].OPimgfinal));
        var qstateanst = JSON.parse(JSON.stringify(json.records[i].AnsSTfinal));
        var qstate2 = qstate.split('{qfin}"');
        var qstateimg2 = qstateimg.split('{qfin}"');
        var qstateops2 = qstateops.split('{qfin}"');
        var qstateopimg2 = qstateopimg.split('{qfin}"');
        var qstateanst2 = qstateanst.split('{qfin}"');
        var qstateanstprev = qstateanst.split('{qfin}",');
        var len = qstate2.length;
        var oplen = qstateops2.length;
        var opq= 4;
  if(qstate ==""){
    document.getElementById('loaderCon').style.display = "none";
    document.getElementById('previewqset').innerHTML = '<div align="center" style="color:#d9d8db;margin-top:120px;">'+
    '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">'+
    '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>'+
    '</svg></div>';
    document.getElementById('qsetanst').innerHTML = "";
  }
  else{
    $('#qsetanst').empty();
    for(var ast=0;ast<qstateanstprev.length-1;ast++){
      document.getElementById('qsetanst').innerHTML += "Question No."+(ast+1)+": <b>"+qstateanstprev[ast].substring(1)+"</b> | ";
    }
        for(var i = 0; i<len-2;i++){
          if(i == 0){
          var qs =qstate2[i].substring(1);
          var qsimg =qstateimg2[i].substring(1);
          var qsopsimg =qstateopimg2[i].substring(1);
          var qsanst =qstateanst2[i].substring(1);
  if(qsopsimg =="null"){
    var i1 = i+1;
           document.getElementById("previewqset").innerHTML = "<div style='font-size:16px;padding-top:20px;padding:10px;'>"+
           "<p style='font-size:14px;font-weight:bold;padding-bottom:20px;'>Question No."+i1+"</p><p>"+qs +"</p><div id='showqstimg' align='center'><img style='pointer-events:none;padding-bottom:10px;' "+
           "src='"+qsimg+"' onerror='this.onerror=null;this.style.display=`none`;'></div>"+
           "<div><p>A. "+qstateops2[i].substring(1)+"</p></div>"+
           "<div><p>B. "+qstateops2[i+1].substring(2)+"</p></div>"+
           "<div><p>C. "+qstateops2[i+2].substring(2)+"</p></div>"+
           "<div><p>D. "+qstateops2[i+3].substring(2)+"</p></div>"+
           "<br><div id='showqstimg'><img style='pointer-events:none;' "+
           "src='"+qsopsimg+"' onerror='this.onerror=null;this.style.display=`none`;'></div>"+
           "<hr></div>";
  }
  else{
    var i1 = i+1;
    document.getElementById("previewqset").innerHTML = "<div style='font-size:16px;padding-top:20px;padding:10px;'>"+
    "<p style='font-size:14px;font-weight:bold;padding-bottom:20px;'>Question No."+i1+"</p><p>"+qs +"</p><div id='showqstimg' align='center'><img style='pointer-events:none;padding-bottom:10px;' "+
    "src='"+qsimg+"' onerror='this.onerror=null;this.style.display=`none`;'></div>"+
    "<br><div id='showqstimg'><img style='pointer-events:none;' "+
    "src='"+qsopsimg+"' onerror='this.onerror=null;this.style.display=`none`;'></div>"+
    "<hr></div>";
  }
          }
           else{
            var iq = i +1;
            var qs = qstate2[i].substring(2);       
            var qsimg =qstateimg2[i].substring(2);
            var qsopsimg =qstateopimg2[i].substring(2);
            var qsanst =qstateanst2[i].substring(2);
            if(qsopsimg =="null"){
            document.getElementById("previewqset").innerHTML += "<div style='font-size:16px;padding-top:20px;padding:10px;'>"+
            "<p style='font-size:14px;font-weight:bold;padding-bottom:20px;'>Question No."+iq+"</p><p>"+qs +"</p><div id='showqstimg' align='center'><img style='pointer-events:none;padding-bottom:10px;' "+
            "src='"+qsimg+"' onerror='this.onerror=null;this.style.display=`none`;'></div>"+
            "<div><p>A. "+qstateops2[opq].substring(2)+"</p></div>"+
            "<div><p>B. "+qstateops2[opq+1].substring(2)+"</p></div>"+
            "<div><p>C. "+qstateops2[opq+2].substring(2)+"</p></div>"+
            "<div><p>D. "+qstateops2[opq+3].substring(2)+"</p></div>"+
            "<br><div id='showqstimg'><img style='pointer-events:none;' "+
            "src='"+qsopsimg+"' onerror='this.onerror=null;this.style.display=`none`;'></div>"+
            "<hr></div>";
             opq= opq +4;
            }
          else{
            document.getElementById("previewqset").innerHTML += "<div style='font-size:16px;padding-top:20px;padding:10px;'>"+
            "<p style='font-size:14px;font-weight:bold;padding-bottom:20px;'>Question No."+iq+"</p><p>"+qs +"</p><div id='showqstimg' align='center'><img style='pointer-events:none;padding-bottom:10px;' "+
            "src='"+qsimg+"' onerror='this.onerror=null;this.style.display=`none`;'></div>"+
            "<br><div id='showqstimg'><img style='pointer-events:none;' "+
            "src='"+qsopsimg+"' onerror='this.onerror=null;this.style.display=`none`;'></div>"+
            "<hr></div>";
             opq= opq +4;
          } }}
        break;}}
  else{
    document.getElementById('loaderCon').style.display = "none";
    document.getElementById('previewqset').innerHTML = '<div align="center" style="color:#d9d8db;margin-top:120px;">'+
    '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">'+
    '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>'+
    '</svg></div>';
  }}});}
   function clrqsetcomplete(){
    document.getElementById('loader-clrq').style.display = "block";
    var exid=$("#chexamidedu").val();
    var ekey=JSON.stringify($("#chkey").val());
    var url1 = "https://script.google.com/macros/s/";
    var url2 = "AKfycbxasNKsISZaoyEB8o9ccmCsWD91PjXLH2vlnREfKXgxTIopCnBR9_RciSfj3pEsy-Zv";
    var url = url1+url2+"/exec"+ "?callback=ctrlqset&chexid=" +exid+"&chkey="+ekey+"&action=clrqdata";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });   }
   function ctrlqset(e) {
    previewqset();
    $("#clrqsetnotify").hide();
    $("#falsesecback-two").hide();
    document.getElementById('loader-clrq').style.display = "none";
   }
  
   $("#crtnewexid").click(function() {
    createnewexid();
  });
  
  function createnewexid(){
    document.getElementById("crtnewexid").disabled = true;
    var d = new Date();
    var day = d.getDate();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
    document.getElementById('dateQ').value = currentTime;
    var exid=$("#chexamidedu").val();
    var ekey=JSON.stringify($("#chkey").val());
    var timecrtex = $('#dateQ').val();
    var url1 = "https://script.google.com/macros/s/";
    var url2 = "AKfycbxYC7rpKpnZmgpNVsmgoCu-Wi9Bt604MjkH9LaH0Gd9LA5QLtH1bjgUfvRlQGyIKCiQ";
    var url3 = "AKfycbwhAhuet3qAdjJcXFkMcUmvqcW5tBtc5SdKjpl1xycysG4DjbjN2j76deSClGyZ4Tgi";
    var url = url1+url2+"/exec"+ "?action=gentestrd";
    //document.getElementById('loaderCon').style.display = "block";
    $.getJSON(url, function(json) {
      for (var i = 0; i < json.records.length - 1; i++) {
        if (exid === json.records[i].ExamID && ekey === json.records[i].PKey) {      
      var k =Math.random().toString(26).substring(2, 7) + Math.random().toString(26).substring(2, 7);
      document.getElementById('examid').value = k;
      var newid = $('#examid').val();
      var name = json.records[i].EducatorName;
      var title = json.records[i].ExamTitle;
      var descp = json.records[i].ExamDescp;
      var youkey = JSON.parse(json.records[i].PKey);
      var examp = JSON.parse(json.records[i].ExamPass);
      var ttmstr = json.records[i].TDuration;
      document.getElementById('createid').style.zIndex = "4000";
      document.getElementById('exportalpromo').style.zIndex = "4000";
      $("#createid").show();
      $("#cridone").hide();
      $("#crtestthree").hide();
      $("#cridtwo").show();
      $("#crtestfour").show();
      $('#exportalpromo').show();
      document.getElementById("examidFin").innerHTML="Exam ID: "+"<span style='background-color:#1a2ca5;padding:4px 6px;font-style:italic;'>"+newid+"</span>";
      document.getElementById("edunameFin").innerHTML="Name: " + "<span style='padding:4px 6px;font-style:italic;'>"+name+"</span>";
      document.getElementById("examtitleFin").innerHTML="Title: "+"<span style='padding:4px 6px;font-style:italic;'>"+title+"</span>";
      document.getElementById("examdescpFin").innerHTML="Description: "+"<span style='padding:4px 6px;font-style:italic;'>"+descp+"</span>";
      document.getElementById("mykeyFin").innerHTML="Your Key: "+"<span style='padding:4px 6px;font-style:italic;'>"+youkey+"</span>";
      document.getElementById("exampassFin").innerHTML="Exam Pass For Students: "+"<span style='padding:4px 6px;font-style:italic;'>"+examp+"</span>";
      document.getElementById("tsdur").innerHTML = "Test Duration: "+"<span style='padding:4px 6px;font-style:italic;'>"+ttmstr+"</span>";  
      document.getElementById("studentpassdoc").innerHTML ="<div style=padding:20px;>"+"Exam ID: "+"<span style='color:blue;font-style:italic;'>"+newid +"</span>"+
      "<span style='float:right;margin-left:10px;'>Test Duration: "+ttmstr+"</span>"+
      "<hr>"+"Name: " +"<span style='font-size:20px;'>"+ name+
      "</span><hr>"+"Title: "+"<span style='font-weight:bold;'>"+title+"</span><hr>"+
      "Description: "+"<span style='font-weight:bold;'>"+descp+"</span><hr>"+
      "Exam Pass For Students: "+"<span style='color:blue;'>"+examp+"</span>"+"<hr>"+
      "<span style='float:left;'>M A S T R O W A L L | <a target='_blank' href='https://mastrowall.com/online-test' style='text-decoration:none;'>Online Test</a></span>"+
      "<span style='float:right;'>"+"<span style='font-size:16px;color:#1a2ca5;padding:4px 6px;'>"+title+" </span> "+
      "By "+" "+"<span style='font-size:18px;color:#1a2ca5;padding:4px 6px;'>"+name+" </span>"+
      "|||||||||||||||||||||||||||</span>"+"</div><hr><hr>";
      var url = url1+ url3+"/exec"+"?callback=ctrlcrtexid&chexid=" +exid+ "&examid="+newid+"&dateQ="+timecrtex+"&action=crtexid";
          var request = jQuery.ajax({
            crossDomain: true,
            url: url,
            method: "GET",
            dataType: "jsonp"
          });
    document.getElementById("crtnewexid").value = "New Exam ID: "+ newid;
    $("#crtnewexid").removeClass("btn-outline-warning");
    $("#crtnewexid").addClass("btn-outline-primary");
        }
      }
    });
  }
  function ctrlcrtexid(e){
   // console.log(e.result);
  }
