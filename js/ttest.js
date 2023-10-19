conq.addEventListener('input',(event) =>{
  $('#qtstfalse').hide();
document.getElementById('conq').style.border='2px solid #6a67fa';
var innerh = document.getElementById('conq').innerHTML;
document.getElementById('qst').value = innerh;
});
const editableDiv = document.getElementById("conq");
  editableDiv.addEventListener("input", function() {
    const content = editableDiv.textContent;
    const modifiedContent = content.replace(/"/g, "'");
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const startOffset = range.startOffset;
    editableDiv.textContent = modifiedContent;
    range.setStart(editableDiv.firstChild, startOffset);
    range.setEnd(editableDiv.firstChild, startOffset);
    selection.removeAllRanges();
    selection.addRange(range);
  });
$(document).ready(function(){
  document.querySelector('[contenteditable]').addEventListener('paste', function(event) {
    event.preventDefault();
    document.execCommand('inserttext', false, event.clipboardData.getData('text/plain'));
  });
});
cridone.addEventListener('submit', (event) => {
var hr = $('#timedurhr').val();
var min = $('#timedurmin').val();
var tmsec = ((hr*3600) + (min*60))*1000;
if(tmsec!==0){
  $("#cridtwo").show();
  $("#cridone").hide();
var str = hr+" "+"Hour"+" "+min+" "+"Minutes";
document.getElementById('totalsec').value= tmsec;
document.getElementById('timestr').value= str;
}
  });
  jQuery('#confirmpasskey').on('keyup', function() {
    if (jQuery('#createpasskey').val() == jQuery('#confirmpasskey').val()) {
      jQuery('#matched').html('Matching').css('font-size', '12px');
      document.getElementById('psconfirmed').disabled = false;
    } else {
      jQuery('#matched').html('Not Matching').css('font-size', '12px');
      document.getElementById('psconfirmed').disabled = true;
    }
    var k =Math.random().toString(26).substring(2, 7) + Math.random().toString(26).substring(2, 7);
    document.getElementById('examid').value = k;
  });

  cridtwo.addEventListener('submit', (event) => {
var examid = $("#examid").val();
var name = $("#eduname").val();
var title = $("#extitle").val();
var descp = $("#exdescp").val();
var youkey = $("#confirmpasskey").val();
var examp = $("#exampass").val();
var ttmstr = $("#timestr").val();
    $("#crtestfour").show();
    $("#crtestthree").hide();
document.getElementById("examidFin").innerHTML="Exam ID: "+"<span style='background-color:#1a2ca5;padding:4px 6px;font-style:italic;'>"+examid+"</span>";
document.getElementById("edunameFin").innerHTML="Name: " + "<span style='padding:4px 6px;font-style:italic;'>"+name+"</span>";
document.getElementById("examtitleFin").innerHTML="Title: "+"<span style='padding:4px 6px;font-style:italic;'>"+title+"</span>";
document.getElementById("examdescpFin").innerHTML="Description: "+"<span style='padding:4px 6px;font-style:italic;'>"+descp+"</span>";
document.getElementById("mykeyFin").innerHTML="Your Key: "+"<span style='padding:4px 6px;font-style:italic;'>"+youkey+"</span>";
document.getElementById("exampassFin").innerHTML="Exam Pass For Students: "+"<span style='padding:4px 6px;font-style:italic;'>"+examp+"</span>";
document.getElementById("tsdur").innerHTML = "Test Duration: "+"<span style='padding:4px 6px;font-style:italic;'>"+ttmstr+"</span>";  
document.getElementById("studentpassdoc").innerHTML ="<div style='padding:40px 40px;font-family:verdana;background-color: #f5f5f5;border:1px dashed black;'><div style='display:block;text-align: left;line-height:160%;'><p><span style='float:left;'><img src='https://mastrowall.com/images/logoRecBWsvg.svg' style='width:25px;'></span><span style='margin-left:5px;font-size:16px;color:#666666;'><b>M A S T R O W A L L | <a target='_blank' href='https://mastrowall.com/online-test/' style='text-decoration:none;color:#0c29cd;'>Online Test</a></b></a></span></p>"+
"<p style='text-align: left;display:block;line-height:200%;width:100%;'>"+"<span style='font-size:16px;color:#0c29cd;'>"+title+" </span> "+
"By "+" "+"<span style='font-size:18px;color:#0c29cd;line-height:160%;'>"+name+" </span>"+
"</p></div><hr><div><p>"+"Name: " +"<span style='font-size:16px;line-height:160%;'><b>"+ name+
  "</b></span></p><hr><p>Exam ID: "+"<span style='color:#0c29cd;font-style:italic;line-height:160%;'>"+examid +"</span></p>"+
"<p style='width:100%;text-align:right;margin-left:10px;display:block;margin:0px;'>Test Duration: "+"<span style='line-height:160%;color:#0c29cd;font-style:italic;'>"+ttmstr+"</span></p>"+
"<hr><p>"+"Exam Title: "+"<span style='font-weight:bold;line-height:160%;'>"+title+"</span></p><hr><p>"+
"Description: "+"<span style='font-weight:bold;line-height:160%;'>"+descp+"</span></p><hr><p>"+
"Exam Pass For Students: "+"<span style='color:#0c29cd;line-height:160%;'>"+examp+"</span></p><hr><hr></div><p style='width:100%;text-align: center;font-size:14px;'>©️ M A S T R O W A L L</p></div>";
sendEdmail();});
   function infoexampdf() {
    var elem = document.getElementById("studentpassdoc");
    var oPrntWin = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
        oPrntWin.document.open();
        oPrntWin.document.write("<!doctype html><html><head><title>M A S T R O W A L L - Exam Portal<\/title><link rel=\"stylesheet\" href=\"css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"style.css\"><\/head><body onload=\"print();\">" + elem.innerHTML + "<\/body><\/html>");
        oPrntWin.document.close();
   }
  //  mquearytest.addEventListener('submit', (event) => {
  //   $("#qmsgsent").show();
  //   $("#mquearytest").hide();   });
   function sendEdmail() {
    var elemed = document.getElementById("studentpassdoc").innerHTML;
    var mailat = $('#edueid').val(); var passk = $('#confirmpasskey').val();
     var embody = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta name="x-apple-disable-message-reformatting"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <title></title> <style type="text/css"> @media only screen and (min-width: 620px) { .u-row { width: 600px !important; } .u-row .u-col { vertical-align: top; } .u-row .u-col-100 { width: 600px !important; } } @media (max-width: 620px) { .u-row-container { max-width: 100% !important; padding-left: 0px !important; padding-right: 0px !important; } .u-row .u-col { min-width: 320px !important; max-width: 100% !important; display: block !important; } .u-row { width: 100% !important; } .u-col { width: 100% !important; } .u-col>div { margin: 0 auto; } } body { margin: 0; padding: 0; } table, tr, td { vertical-align: top; border-collapse: collapse; } p { margin: 0; } .ie-container table, .mso-container table { table-layout: fixed; } * { line-height: inherit; } a[x-apple-data-detectors='true'] { color: inherit !important; text-decoration: none !important; } table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 87% !important; } #u_content_heading_1 .v-container-padding-padding { padding: 40px 10px 0px !important; } #u_content_text_2 .v-container-padding-padding { padding: 5px 10px 10px !important; } #u_content_text_deprecated_1 .v-container-padding-padding { padding: 40px 10px 10px !important; } } </style> <link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet" type="text/css"> </head> <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ecf0f1;color: #000000"> <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ecf0f1;width:100%" cellpadding="0" cellspacing="0"> <tbody> <tr style="vertical-align: top"> <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"> <div class="u-row-container" style="padding: 0px;background-color: transparent"> <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"></div> </div> <div class="u-row-container" style="padding: 0px;background-color: transparent"> </div> <div class="u-row-container" style="padding: 0px;background-color: transparent"> <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"> <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;"> <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;"> <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"> <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"> <table id="u_content_text_deprecated_1" style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 20px 10px;font-family:'Raleway',sans-serif;" align="left"> <div style="font-size: 14px; line-height: 100%; text-align: left; word-wrap: break-word;"> <div style="background-color: #e0e0e0;">`+ elemed +`</div> </div> </td> </tr> </tbody> </table> <p style='text-align:right;margin:10px;font-size:14px;'>Your Key / Password: <em style="color:#0c29cd;"><b>`+passk+`</b></em></p> <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 0px;font-family:'Raleway',sans-serif;" align="left"> <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%"> <tbody> <tr style="vertical-align: top"> <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%"> <span>&nbsp;</span> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 40px;font-family:'Raleway',sans-serif;" align="left"> <div style="font-size: 14px; line-height: 160%; text-align: center; word-wrap: break-word;"> <p style="font-size: 14px; line-height: 160%;">N.B: Do not reply to this email.</p> <p style="font-size: 14px; line-height: 160%;"><br>Contact: <a rel="noopener" href="mailto:mail@mastrowall.com" target="_blank">mail@mastrowall.com</a><br>Arambagh. Hooghly. WB. India.<br>PIN: 712601</p> <p style="font-size: 14px; line-height: 160%;"> </p> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> </td> </tr> </tbody> </table> </body></html>`;
      Email.send({
        SecureToken : "dce269d4-508e-4b89-bc50-2201fb9f60a8",
        To: mailat,
        From: "MASTROWALL<examportal@mastrowall.com>",
          Subject: "Exam Portal - MASTROWALL",
          Body:  embody,
          // Body:  elemed+"<p style='text-align:right;margin:10px;font-size:14px;'>Your Key/Password: "+passk+"</p><br><span style='float:left;font-size:14px;'>N.B. Do not reply to this email</span>",
      })
          .then(function (message) {
            if(message == "OK"){
              document.getElementById('mailsented').style.display= 'block';
              document.getElementById('mailsented').innerHTML= 'Credentials sent to your email. Check Junk folder also. Do not forget to save or take a print.';
              setTimeout(function() {
                jQuery('#mailsented').fadeOut('fast');
              }, 20000);}});}
   cridtwo.addEventListener('submit', (event) => {
    var name =$('#eduname').val();
    var title =$('#extitle').val();
    var descp =$('#exdescp').val();
    var emid =$('#edueid').val();
    var tmilisec = $("#totalsec").val();
    var tmstr = $("#timestr").val();
    var epass =encodeURIComponent(JSON.stringify($('#confirmpasskey').val()));
    var spass =encodeURIComponent(JSON.stringify($('#exampass').val()));
    var examid =$('#examid').val();
    var time =$('#dateQ').val();
    var url1="https://script.google.com/macros/s/";
    var url2 ="AKfycbxYC7rpKpnZmgpNVsmgoCu-Wi9Bt604MjkH9LaH0Gd9LA5QLtH1bjgUfvRlQGyIKCiQ";
    var url3 =url1+url2+"/exec";
    if (name != 0 && title != 0 && descp != 0 && emid != 0 && epass != 0 && examid != 0 && time != 0 && spass != 0 ) {
      var url = url3 + "?callback=ctrlq&examid=" + examid + "&eduname=" + name + "&extitle=" + title + "&exdescp=" + descp + "&edueid=" + emid + 
      "&confirmpasskey=" + epass +  "&exampass=" + spass + "&dateQ=" + time +
      "&totalsec=" + tmilisec + "&timestr=" + tmstr +"&action=gentestin";
      var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
      });
    }
      else {
        return false;
      }   });
   function dateUp() {
    var d = new Date();
    var day = d.getDate();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
    document.getElementById('dateQ').value = currentTime;
  }
checkexid.addEventListener('submit', (event) => {
var exid =$("#chexid").val();
var pkey =JSON.stringify($("#chkey").val());
var url1 = "https://script.google.com/macros/s/";
var url2 = "AKfycbyk5-v8saRtU7SACQGMem9tV-msnLr1eiHqxYNpsjTQuCS5UA2bzwhazxMeiN46cxL3";
var url = url1+url2+"/exec"+"?callback=ctrlqexeditin&chexid=" +exid+"&chkey="+pkey+"&action=chexid";
document.getElementById('loader-exid').style.display = "block";
var request = jQuery.ajax({
  crossDomain: true,
  url: url,
  method: "GET",
  dataType: "jsonp"
});});
function ctrlqexeditin(e){
  var res = e.records;
if(res != "ID not found!"){
  document.getElementById('continueexamid').style.display = "none";
  document.getElementById('otserviceexamid').style.display = "block";
  document.getElementById('loader-exid').style.display = "none";
  previewqset();
}
else{
  document.getElementById('loader-exid').style.display = "none";
}}
  function readImage(input) {
    if ( input.files) {
        var FR= new FileReader();
        FR.onload = function(e) {
             $('#img').show().attr( "src", e.target.result );
             $('#base').show().text( e.target.result );
        };       
        FR.readAsDataURL( input.files[0] );}}
    $("#stimg").change(function(){
              readImage( this ); });
    $("#opsimg").change(function(){
            readImage( this );});
 $('document').ready(function () {
          $('#stimg').on('change', function () {
            var $files = $(this).get(0).files;
               readImage( this );
            if ($files.length) {
              // Reject big files
              if ($files[0].size > $(this).data('max-size') * 1024) {
               // console.log('Please select a smaller file');
                return false;}
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
      });
    }  });});
quesfrm.addEventListener('submit', (event) => { 
  document.getElementById('falsesecback-mq').style.display="block";
var exid=$("#chexid").val();
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
var url = url1+ url2+"/exec"+"?callback=ctrlqs&chexid=" +exid+"&chkey="+ekey+"&qst="+quST+"&qstimg="+quSTimg+"&opa="+OPA+"&opb="+OPB+"&opc="+OPC+"&opd="+OPD+"&opimg="+OPImg+"&anqs="+ANQST+"&action=gentestup";
var request = jQuery.ajax({
  crossDomain: true,
  url: url,
  method: "GET",
  dataType: "jsonp"});
setTimeout(function() {
  $('#falsesecback-mq').fadeOut('slow');
}, 4000);
quesfrm.reset();
document.getElementById('conq').innerText = '';
previewqset();});
function ctrlqs(e){
  var re = e.result;
if(re === "Value updated successfully!"){
  document.getElementById('qupdated').style.display="block";

  setTimeout(function() {
    $('#qupdated').fadeOut('slow');
  }, 4000);
  quesfrm.reset();
  previewqset();
}}
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
  }}
function previewqset() {
$('#previewqset').empty();
  var exid=$("#chexid").val();
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
      document.getElementById("eduexmpss").innerHTML =JSON.parse(json.records[i].ExamPass);
      document.getElementById('stdassign').disabled=false;
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

if(json.records[i].Live == "LIVE"){
  document.getElementById('exlvnt').checked="true";
  }
  if(json.records[i].Calculator == "Enabled"){
    document.getElementById('excalnt').checked="true";
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
}}
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
        }}}
      break;}}
else{
  document.getElementById('loaderCon').style.display = "none";
  document.getElementById('previewqset').innerHTML = '<div align="center" style="color:#d9d8db;margin-top:120px;">'+
  '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">'+
  '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>'+
  '</svg></div>';
}}});}
function genenrollid(){
  var k =Math.random().toString(26).substring(2, 7) + Math.random().toString(26).substring(2, 7);
  document.getElementById('enrollid').value = k;}
stuassign.addEventListener('submit', (event) => { 
  document.getElementById('loader-enst').style.display="block";
var namestu = encodeURIComponent(JSON.stringify($('#stuname').val()));
var eid  =encodeURIComponent(JSON.stringify($('#stueid').val()));
var examid  =$('#exid').val();
var epass  =JSON.stringify($('#expass').val());
var enid  =encodeURIComponent(JSON.stringify($('#enrollid').val()));
var url1 = "https://script.google.com/macros/s/";
var url2 = "AKfycbxYC7rpKpnZmgpNVsmgoCu-Wi9Bt604MjkH9LaH0Gd9LA5QLtH1bjgUfvRlQGyIKCiQ";
var url = url1+url2+"/exec"+"?callback=ctrlq&exid=" +examid+"&expass="+epass+"&stuname="+namestu+"&stueid="+eid+"&enrollid="+enid+"&action=gentestenroll";
var request = jQuery.ajax({
  crossDomain: true,
  url: url,
  method: "GET",
  dataType: "jsonp"
});});
function ctrlq(e) {
  document.getElementById('loader-enst').style.display="none";
  var d = new Date();
  var day = d.getDate();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var currentTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
  var namestu = $('#stuname').val();
var eid  =$('#stueid').val();
var examid  =$('#exid').val();
var enid  =$('#enrollid').val();
var cat = e.result;
if(cat === "Value updated successfully!"){
  document.getElementById('stuassign').style.display ="none";
  document.getElementById('assignstuexform').style.backgroundImage="linear-gradient(0deg,white,white)";
  document.getElementById('enrolledinfo').innerHTML = "<div style='padding:20px;min-height:300px;font-family: verdana;' align='center'><div style='max-width:1000px;text-align:left;'>"+
"<hr><p><span style='float:left;'><img src='https://mastrowall.com/images/logoRecBWsvg.svg' style='width:25px;'></span><span style='margin-left:5px;font-size:16px;color:#666666;'><b>M A S T R O W A L L | <a target='_blank' href='https://mastrowall.com/online-test/' style='text-decoration:none;color:#0c29cd;'>Online Test</a></b></a></span><span style='float:right;font-size:12px;'>"+currentTime+"</span></p><hr>"+
"<br><p style='font-size:16px;'>Enrollment ID: <span style='color:#0c29cd;'><b>" +enid+"</b></span></p>" +
"<p style='font-size:16px;'>Name: <b>" +namestu+"</b></p>" +
"<p style='font-size:16px;'>Exam ID: <b>" +examid+"</b></p>" +
"<p style='font-size:16px;'>Registered Email ID: <em>" +eid+"</em></p><br><hr>"+
"<div><p style='font-size:14px;width:100%;line-height:160%;display:block;'><span style='float:left;line-height:160%;display:block;'>©️ M A S T R O W A L L</span><a style='font-size:16px;color:#0c29cd;text-decoration:none;float:right;line-height:160%;display:block;' target='_blank' href='https://mastrowall.com/online-test/'>Go to Test >></a></p></div><br></div></div>";
  document.getElementById('actionbtnenroll').style.display="block";
  sendStmail();
}
else{
}
return false;}
function sendStmail() {
  var elemed = document.getElementById("enrolledinfo").innerHTML;
  var mailat = $('#stueid').val(); 
    Email.send({
      SecureToken : "dce269d4-508e-4b89-bc50-2201fb9f60a8",
      To: mailat,
      From: "MASTROWALL<examportal@mastrowall.com>",
        Subject: "Exam Portal - MASTROWALL",
        Body:  elemed+"<br><p style='text-align:center;font-size:14px;'>N.B. Do not reply to this email</p>",
    })
        .then(function (message) {
          if(message == "OK"){
      document.getElementById('mailsentstu').style.display= 'block';
      document.getElementById('mailsentstu').innerHTML= 'Credentials sent to your email. Check Junk folder also. Do not forget to save or take a print.';
      setTimeout(function() {
        jQuery('#mailsentstu').fadeOut('fast');
      }, 20000);
          }
        
        });
    }
function enrollmentinfo() {
  var elem = document.getElementById("enrolledinfo");
  var oPrntWin = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
      oPrntWin.document.open();
      oPrntWin.document.write("<!doctype html><html><head><title>Exam Portal<\/title><link rel=\"stylesheet\" href=\"css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"style.css\"><\/head><body onload=\"print();\">" + elem.innerHTML + "<\/body><\/html>");
      oPrntWin.document.close();
 }

 chresult.addEventListener('submit', (event) => { 
  var exid=$("#checkexamid").val();
  var enid=JSON.stringify($("#chechenid").val());
var url1 = "https://script.google.com/macros/s/";
var url2 = "AKfycbxYC7rpKpnZmgpNVsmgoCu-Wi9Bt604MjkH9LaH0Gd9LA5QLtH1bjgUfvRlQGyIKCiQ";
var url = url1+url2+"/exec"+ "?action=gentestrd";
document.getElementById('loader-res').style.display = "block";
$.getJSON(url, function(json) {
  for (var i = 0; i < json.records.length - 1; i++) {
    if (exid === json.records[i].ExamID) {
      var stustring = JSON.parse(JSON.stringify(json.records[i].EnrolledStuFinal));
      var sstring = stustring.split(',');
      var lenstrk = sstring.length;
    var restr = JSON.parse(JSON.stringify(json.records[i].StuAnsFinal));
    var sprestr = restr.split('{anst},');
    var lenstr = sprestr.length;
    var ansk = JSON.parse(JSON.stringify(json.records[i].AnsSTfinal));
    var anskey = ansk.split('{qfin}",');
    var lenstrkey = anskey.length;
for(var k =0; k<lenstr;k+=2){
if(enid==sprestr[k]){ 
var res = sprestr[k+1];
var resone = JSON.parse(res);
var count = 0;
for(var j=0; j<lenstrkey-1;j++){
if(resone.qnst[j] === anskey[j].substring(1)){
count = count+1;
}
else{
  count = count;
}
}
document.getElementById('chresform').style.display = "none";
  document.getElementById('scrbrd').style.display = "block";
document.getElementById('crtans').style.display = "block";
document.getElementById('crtans').innerHTML= "<div><p style='text-align:left;font-size:14px;'>Educator: "+json.records[i].EducatorName+
"<br>Exam Title: "+json.records[i].ExamTitle+"<br>Description: "+json.records[i].ExamDescp+"</p></div>"+
"<p style='font-size:20px;color:green;'>Correct Answer: "+ count+"</p>";
}
  }
  for(var h =0; h<lenstrk;h++){
  if(enid==sstring[h]){
    document.getElementById('stunamek').style.display = "block";
  document.getElementById('stunamek').innerHTML="<p style='color:black;font-size:20px;'>Name: <span style='color:blue;font-style:italic;'>"+JSON.parse(sstring[h-2])+"</span></p>";
}
  }
    }
  }
  
  document.getElementById('loader-res').style.display = "none";
});
});

 function clrqsetcomplete(){
  document.getElementById('loader-clrq').style.display = "block";
  var exid=$("#chexid").val();
  var ekey=JSON.stringify($("#chkey").val());
  var url1 = "https://script.google.com/macros/s/";
  var url2 = "AKfycbxasNKsISZaoyEB8o9ccmCsWD91PjXLH2vlnREfKXgxTIopCnBR9_RciSfj3pEsy-Zv";
  var url = url1+url2+"/exec"+ "?callback=ctrlqset&chexid=" +exid+"&chkey="+ekey+"&action=clrqdata";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
 }
 function ctrlqset(e) {
  previewqset();
  $("#clrqsetnotify").hide();
  $("#falsesecback-two").hide();
  document.getElementById('loader-clrq').style.display = "none";
 }
 conexeducator.addEventListener('submit', (event) => { 
   $('#stresultall').empty();
  var exid=$("#cpexid").val();
  var expass=JSON.stringify($("#cppass").val());
var url1 = "https://script.google.com/macros/s/";
var url2 = "AKfycbxYC7rpKpnZmgpNVsmgoCu-Wi9Bt604MjkH9LaH0Gd9LA5QLtH1bjgUfvRlQGyIKCiQ";
var url = url1+url2+"/exec"+ "?action=gentestrd";
document.getElementById('loader-cp').style.display = "block";
$.getJSON(url, function(json) { 
for (var i = 0; i < json.records.length - 1; i++) {
  if (exid === json.records[i].ExamID && expass === json.records[i].ExamPass) {
    var restren = JSON.parse(JSON.stringify(json.records[i].EnrolledStuFinal));
    var sprestren = restren.split(',');
    var lenstren = sprestren.length;
    var restr = JSON.parse(JSON.stringify(json.records[i].StuAnsFinal));
    var sprestr = restr.split('{anst},');
    var lenstr = sprestr.length;
    var ansk = JSON.parse(JSON.stringify(json.records[i].AnsSTfinal));
    var anskey = ansk.split('{qfin}",');
    var lenstrkey = anskey.length;
    for(var k =0; k<lenstr;k+=2){
      
      var stenid = JSON.parse(sprestr[k]);
      var res = sprestr[k+1];
      var resone = JSON.parse(res);
      var count = 0;
      for(var j=0; j<lenstrkey-1;j++){
      if(resone.qnst[j] === anskey[j].substring(1)){
      count = count+1;
      }
      else{
        count = count;
      }
      }
    for(var v=0;v<lenstren;v++){
           if(stenid == JSON.parse(sprestren[v+2])){
            var stname = sprestren[v];break;
        }}
    document.getElementById('eduexloginform').style.display = "none";
    document.getElementById('loadercp').style.display = "block";
    document.getElementById('stresultall').innerHTML += "<p style='font-size:14px;color:black;text-align:left;'>("+(k+2)/2+") Enrollment ID: "+JSON.parse(sprestr[k])+"</p><br><p style='font-size:14px;color:black;'><span style='float:left;'>Name: <span style='text-transform:uppercase;color:blue;'>"+JSON.parse(stname)+"</span></span><span <span style='float:right;color:green;'>Correct Answer: <span style='font-weight:bold;'>"+ count+"</span></span></p><br><hr>"  ;   
    document.getElementById('backcp').style.display = "block";
    document.getElementById('loader-cp').style.display = "none";
    }}}});});
function createnewexid(){
  document.getElementById("crtnewexid").disabled = true;
  var d = new Date();
  var day = d.getDate();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var currentTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
  document.getElementById('dateQ').value = currentTime;
  var exid=$("#chexid").val();
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
    $("#createid").show();
    $("#cridone").hide();
    $("#crtestthree").hide();
    $("#cridtwo").show();
    $("#crtestfour").show();
    document.getElementById("examidFin").innerHTML="Exam ID: "+"<span style='background-color:#1a2ca5;padding:4px 6px;font-style:italic;'>"+newid+"</span>";
    document.getElementById("edunameFin").innerHTML="Name: " + "<span style='padding:4px 6px;font-style:italic;'>"+name+"</span>";
    document.getElementById("examtitleFin").innerHTML="Title: "+"<span style='padding:4px 6px;font-style:italic;'>"+title+"</span>";
    document.getElementById("examdescpFin").innerHTML="Description: "+"<span style='padding:4px 6px;font-style:italic;'>"+descp+"</span>";
    document.getElementById("mykeyFin").innerHTML="Your Key: "+"<span style='padding:4px 6px;font-style:italic;'>"+youkey+"</span>";
    document.getElementById("exampassFin").innerHTML="Exam Pass For Students: "+"<span style='padding:4px 6px;font-style:italic;'>"+examp+"</span>";
    document.getElementById("tsdur").innerHTML = "Test Duration: "+"<span style='padding:4px 6px;font-style:italic;'>"+ttmstr+"</span>";  
    document.getElementById("studentpassdoc").innerHTML ="<div style=padding:20px;>"+"Exam ID: "+"<span style='color:blue;font-style:italic;'>"+examid +"</span>"+
    "<span style='float:right;margin-left:10px;'>Test Duration: "+ttmstr+"</span>"+
    "<hr>"+"Name: " +"<span style='font-size:20px;'>"+ name+
    "</span><hr>"+"Title: "+"<span style='font-weight:bold;'>"+title+"</span><hr>"+
    "Description: "+"<span style='font-weight:bold;'>"+descp+"</span><hr>"+
    "Exam Pass For Students: "+"<span style='color:blue;'>"+examp+"</span>"+"<hr>"+
    "<span style='float:left;'>M A S T R O W A L L | <a href='https://mastrowall.com/online-test' style='text-decoration:none;'>Go to Test</a></span>"+
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
function examresultpdf() {
  var elem = document.getElementById("stresultall");
  var oPrntWin = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
      oPrntWin.document.open();
      oPrntWin.document.write("<!doctype html><html><head><title>M A S T R O W A L L - Test Result<\/title><link rel=\"stylesheet\" href=\"css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"style.css\"><\/head><body style=\"width:100%;padding:10px;\" onload=\"print();\"><div align=\"center\"><div style=\"max-width:800px;padding:10px;border:2px solid grey;\">" + elem.innerHTML + "<\/div><\/div><\/body><\/html>");
      oPrntWin.document.close();
 }
 function downloadqset() {
  var elem1 = document.getElementById("previews");
  var elem2 = document.getElementById("eduinfofordqset");
  var elem3 = document.getElementById("qsetanst");
  var pdnme = document.getElementById("eduextitle").innerText;
  var pdby = document.getElementById("eduexname").innerText;
  var title = pdnme +" by "+pdby;
  var oPrntWin = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
      oPrntWin.document.open();
      oPrntWin.document.write("<!doctype html><html><head><title>"+title+" - MASTROWALL - Service Portal<\/title><link rel=\"stylesheet\" href=\"online-test/css/vendor/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"online-test/css/dqset.css\"><\/head><body onload=\"print();\" style=\"margin:20px;\"><center><div class='row' style='background-color:#d6d6d6;padding:10px;width:100%;max-width:1000px;'><div class='col-md-6'><div style=\"text-align:left;font-size:18px;font-weight:400;\">" + elem2.innerHTML + "<\/div></div><div class='col-md-6'><a target='_blank' href=\"https://mastrowall.com\" style='cursor:pointer;'><img src=\"https://mastrowall.com/images/logoRecBWsvg.svg\" style='width:80px;float:right;display:block;' oncontextmenu=\"return false;\"><\/a></div></div><hr style=\"max-width:1000px;\"><div align=\"center\" style=\"max-width:1000px;\"><div>" + elem1.innerHTML + "<\/div><div align=\"left\" style=\"max-width:1000px;background-color:#d6d6d6;padding:10px;\">Answer Key:<br>"+elem3.innerHTML+"<\/div><hr style=\"max-width:1000px;\"><h4><a target=\"_blank\" href=\"https://mastrowall.com\" style=\"text-decoration:none;color:#d6d6d6;\"><b>M A S T R O W A L L</b><\/a><\/h4><\/div><\/center><\/body><\/html>");
      oPrntWin.document.close();
 }

 
 function lvexnt() {
  var checkBox = document.getElementById("exlvnt");
  var eeid=$("#chexid").val();
  var ppid=JSON.stringify($("#chkey").val());
  if (checkBox.checked == true){
    var ssid="LIVE";
    setvallv(ssid);
  } else {
    var ssid="";
    setvallv(ssid);
  }
  function setvallv(stv){
    ur1="https://script.google.com/macros/s/";
    ur2="AKfycbxwrQPRltyMBhzQEk6N4fIL4FQN-IoVGRxWPFwuEWTZ3muUj_1R636WabQgq6E5zn0_";
      var url = ur1+ ur2+"/exec"+"?callback=liveup&edid="+eeid+"&pdid="+ppid+"&stid="+stv+"&action=uplv";
        var request = jQuery.ajax({
          crossDomain: true,
          url: url,
          method: "GET",
          dataType: "jsonp"
        });
  }
}

function calexnt() {
  var checkBox = document.getElementById("excalnt");
  var eeid=$("#chexid").val();
    var ppid=JSON.stringify($("#chkey").val());
  if (checkBox.checked == true){
    var ssid="Enabled";
    setcalv(ssid);
 
  } else {
    var ssid="";
    setcalv(ssid);
  }
  function setcalv(stv){
    ur1="https://script.google.com/macros/s/";
    ur2="AKfycbxwrQPRltyMBhzQEk6N4fIL4FQN-IoVGRxWPFwuEWTZ3muUj_1R636WabQgq6E5zn0_";
      var url = ur1+ ur2+"/exec"+"?callback=liveupcl&edid="+eeid+"&pdid="+ppid+"&stid="+ssid+"&action=upcl";
        var request = jQuery.ajax({
          crossDomain: true,
          url: url,
          method: "GET",
          dataType: "jsonp"
        });
  }
}

  function liveup(e){
  if(e.result == "Value updated successfully!" && document.getElementById("exlvnt").checked==true){
  var elem = document.createElement('div');
  elem.id="notifyact";
  elem.innerHTML="This Exam is now LIVE ✅"
  $('body').append(elem);
  setTimeout(function(){$(elem).slideUp('fast')},5000)
  }
  else{
    var elem = document.createElement('div');
    elem.id="notifyact";
    elem.innerHTML="This Exam is not LIVE ❎"
    $('body').append(elem);
    setTimeout(function(){$(elem).slideUp('fast')},5000)
  }
  }
  
  function liveupcl(e){
    if(e.result == "Value updated successfully!" && document.getElementById("excalnt").checked==true){
    var elem = document.createElement('div');
    elem.id="notifyact";
    elem.innerHTML="Calculator ENABLED ✅"
    $('body').append(elem);
    setTimeout(function(){$(elem).slideUp('fast')},5000);
    }else{
      var elem = document.createElement('div');
      elem.id="notifyact";
      elem.innerHTML="Calculator DISABLED ❎"
      $('body').append(elem);
      setTimeout(function(){$(elem).slideUp('fast')},5000);
    }
    }

    const openModalButton = document.getElementById("admntl");
    const modalep = document.getElementById("amntlmdl");
    openModalButton.addEventListener("click", () => {
    modalep.style.display = "block";
    });
    window.addEventListener("click", (event) => {
    if (event.target === modalep) {
        modalep.style.display = "none";
    }
    });

     
  const editor = document.getElementById("conq");
  const openDialogButton = document.getElementById("openDialog");

  const dialog = document.createElement("div");
  dialog.classList.add("math-operator-dialog");
  dialog.id = "dialog";
  document.body.appendChild(dialog);

  const operators = [
    '∀', '∁', '∂', '∃', '∄', '∅', '∆', '∇', '∈', '∉', '∊', '∋', '∌', '∍', '∎', '∏', '∐', '∑',
    '−', '∓', '∔', '∕', '∖', '∗', '∘', '∙', '√', '∛', '∜', '∝', '∞', '∟', '∠', '∡', '∢', '∣', '∤', '∥',
    '∦', '∧', '∨', '∩', '∪', '∫', '∬', '∭', '∮', '∯', '∰', '∱', '∲', '∳',  'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π',
    'ρ', 'ς', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω', 'ϕ', 'π', 'Ω','∴', '∵', '∶', '∷', '∸', '∹',
    '∺', '∻', '∼', '∽', '∾', '∿', '≀', '≁', '≂', '≃', '≄', '≅', '≆', '≇', '≈', '≉', '≊', '≋', '≌', '≍',
    '≎', '≏', '≐', '≑', '≒', '≓', '≔', '≕', '≖', '≗', '≘', '≙', '≚', '≛', '≜', '≝', '≞', '≟', '≠', '≡',
    '≢', '≣', '≤', '≥', '≦', '≧', '≨', '≩', '≪', '≫', '≬', '≭', '≮', '≯', '≰', '≱', '≲', '≳', '≴', '≵',
    '≶', '≷', '≸', '≹', '≺', '≻', '≼', '≽', '≾', '≿', '⊀', '⊁', '⊂', '⊃', '⊄', '⊅', '⊆', '⊇', '⊈',
    '⊉', '⊊', '⊋', '⊌', '⊍', '⊎', '⊏', '⊐', '⊑', '⊒', '⊓', '⊔', '⊕', '⊖', '⊗', '⊘', '⊙', '⊚',
    '⊛', '⊜', '⊝', '⊞', '⊟', '⊠', '⊡', '⊢', '⊣', '⊤', '⊥', '⊦', '⊧', '⊨', '⊩', '⊪', '⊫', '⊬',
    '⊭', '⊮', '⊯', '⊰', '⊱', '⊲', '⊳', '⊴', '⊵', '⊶', '⊷', '⊸', '⊹', '⊺', '⊻', '⊼', '⊽', '⊾', '⊿',
    '⋀', '⋁', '⋂', '⋃', '⋄', '⋅', '⋆', '⋇', '⋈', '⋉', '⋊', '⋋', '⋌', '⋍', '⋎', '⋏', '⋐', '⋑', '⋒',
    '⋓', '⋔', '⋕', '⋖', '⋗', '⋘', '⋙', '⋚', '⋛', '⋜', '⋝', '⋞', '⋟', '⋠', '⋡', '⋢', '⋣', '⋤', '⋥',
    '⋦', '⋧', '⋨', '⋩', '⋪', '⋫', '⋬', '⋭', '⋮', '⋯', '⋰', '⋱', '⋲', '⋳', '⋴', '⋵', '⋶', '⋷', '⋸', '⋹',
    '⋺', '⋻', '⋼', '⋽', '⋾', '⋿','←', '↑', '→', '↓', '↔', '↕', '↗', '↙', '↚', '↛', '↜', '↝', '↞', '↟', '↠', '↡', '↢', '↣',
    '↤', '↥', '↦', '↧', '↨', '↫', '↬', '↭', '↮', '↯', '↰', '↱', '↲', '↳', '↴', '↵', '↶', '↷',
    '↸', '↹', '↺', '↻', '↼', '↽', '↾', '↿', '⇀', '⇁', '⇂', '⇃', '⇄', '⇅', '⇆', '⇇', '⇈', '⇉', '⇊', '⇋',
    '⇌', '⇍', '⇎', '⇏', '⇐', '⇑', '⇒', '⇓', '⇔', '⇕', '⇖', '⇗', '⇘', '⇙', '⇚', '⇛', '⇜', '⇝', '⇞', '⇟',
    '⇠', '⇡', '⇢', '⇣', '⇤', '⇥', '⇦', '⇧', '⇨', '⇩', '⇪', '⇫', '⇬', '⇭', '⇮', '⇯', '⇰', '⇱', '⇲', '⇳',
    '⇴', '⇵', '⇶', '⇷', '⇸', '⇹', '⇺', '⇻', '⇼', '⇽', '⇾', '⇿'
  ];

  function createDialog() {
    dialog.innerHTML = "";
    operators.forEach((operator) => {
        const operatorButton = document.createElement("button");
        operatorButton.textContent = operator;
        operatorButton.addEventListener("click", () => {
            insertOperator(operator);
            dialog.style.display = "none";
        });
        dialog.appendChild(operatorButton);
    });
}

openDialogButton.addEventListener("click", (e) => {
    createDialog();
    dialog.style.display = "block";
    e.stopPropagation();
});

function insertOperator(operator) {
  const selection = window.getSelection();
  if (editor.contains(selection.anchorNode)) {
      const range = selection.getRangeAt(0);
      const operatorNode = document.createTextNode(operator);
      range.insertNode(operatorNode);
      range.collapse();
      selection.removeAllRanges();
      selection.addRange(range);
      editor.focus();
  }
  dialog.style.display = "none";
}

window.addEventListener("click", (event) => {
    if (event.target !== openDialogButton && event.target !== dialog) {
        dialog.style.display = "none";
    }
});


document.getElementById('stdassign').addEventListener('click', function() {
  var button =document.getElementById('stdassign');
  var exmid = document.getElementById('chexid').value;
  var exps = document.getElementById('eduexmpss').innerText;
  var aslnk = 'https://mastrowall.com' + "?e=" + encodeURIComponent(exmid) + "&p=" + encodeURIComponent(exps) + "&valid=true";
  var tempTextArea = document.createElement('textarea');
  tempTextArea.value = aslnk; console.log(aslnk);
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  try {
    document.execCommand('copy'); 
    console.log('Link copied to clipboard: ' + aslnk);
    button.innerText = "Copied!";
    setTimeout(function() {
      button.innerText = "Get link: Student Enroll";
    }, 10000); 
  } catch (err) {
    console.error('Unable to copy link to clipboard');
  }
  document.body.removeChild(tempTextArea); 
});

  var url_stringn = window.location.href;
  var urlex = new URL(url_stringn);
  var dig = urlex.searchParams.get("e");
  var key = urlex.searchParams.get("p");
  var rtv = urlex.searchParams.get("valid");
  if (rtv == "true") {
    setTimeout(function(){
      document.getElementById('falsesecback').style.display = 'block';
      document.getElementById('exmprtl').click();
      document.getElementById('assgntst').click();
      document.getElementById('exid').value = decodeURIComponent(dig); 
      document.getElementById('exid').disabled =true;
      document.getElementById('expass').value = key; 
      document.getElementById('expass').disabled =true;
    },2000);
  }
