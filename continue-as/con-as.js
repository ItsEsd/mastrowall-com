function formReset() {
    document.getElementById("formwall").reset();
  }

/* $(document).ready(function() {
    $('input').on('input', function() {
      if ($("#formwall").valid()) {
        $('#register').prop('disabled', false);
      } else {
        $('#register').prop('disabled', 'disabled');
      }
    });
  }); */

  $('#email').on('input',function() {
    var email = $(this).val();
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    if (re.test(email)) {
      $('.msg').hide();
      $('#resume').prop('disabled', false);
    } else {
      $('.msg').hide();
      $('.error').show();
      $('#resume').prop('disabled', 'disabled');
      $('#register').prop('disabled', 'disabled');
    }
  });

  formwall.addEventListener('submit', (event) => {
          $("#secondlgcheckedu").empty();
          document.getElementById("register").disabled = true;
          var ur1 = "https://script.google.com/macros/s/";
          var ur2 ="AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
          var url = ur1+ ur2+"/exec"+"?action=read";
          var emailch = $("#email").val();
          var flag =0;
          $.getJSON(url, function(json) {
             for (var i = 0; i < json.records.length - 1; i++) {
               if (emailch == json.records[i].Email) {

               flag = flag + 1;
           
               }}
    // console.log(flag);
    if(flag == 0){
      conasmwalledu();
    
    }else{
      document.getElementById('secondlgcheckedu').style.display = "block";
      document.getElementById('secondlgcheckedu').innerHTML ="User email already exist!<br>Please Sign In<br>"
      document.getElementById("register").disabled = false;
    }  });          
        });

        function conasmwalledu(){
          var script_url_edureg1 = "https://script.google.com/macros/s/";
          var script_url_edureg2 ="AKfycbxcb9RAuFYAyYt471GV9Jb3cLJGwI2D3HvrnzOO5Gv8-NSKcJm-eSa35-pjwF_-sEYJ1g";
          var script_url_edureg = script_url_edureg1 + script_url_edureg2 + "/exec";
          var email = $("#email").val();
          var fname = $("#fname").val();
          var lname = $("#lname").val();
          var dob =JSON.stringify(($("#dob").val()));
          var dtime = $("#eduregtime").val();
          var edid = $("#eduregid").val();
          var edpa = $("#confirmpasswrd").val();
          var edpap = $("#passwrd").val();
          var countryCode = $("#countrycode").val();
          var phoneNo = $("#phoneno").val();
          var Class = $("#class_").val();
          var Board = $("#board_").val();
          var Subject = $("#subject_").val();
          var Resume = $("#resume").val();
          var Storage = $("#storage").val();
          var TPic = $("#proPicT").val();
          if (email != 0 && fname != 0 && lname != 0 && dob != 0 && countryCode != 0 && phoneNo != 0 && Class != 0 && Board != 0 && Subject != 0 && Resume != 0 && Storage != 0 && edpa !=0 && edpap == edpa) {
            var url = script_url_edureg + "?callback=ctrlq&email=" + email + "&fname=" + fname + "&lname=" 
            + lname + "&dob=" + dob + "&countrycode=" + countryCode + "&phoneno=" + phoneNo + "&class_=" 
            + Class + "&board_=" + Board + "&subject_=" + Subject + "&resume=" + Resume + "&storage=" 
            + Storage + "&proPicT=" + TPic + "&eduregtime=" + dtime + "&eduregid=" + edid 
            + "&confirmpasswrd=" + edpa   + "&action=insert";
            var request = jQuery.ajax({
              crossDomain: true,
              url: url,
              method: "GET",
              dataType: "jsonp"
            });
            sendconfirmem(email);
          } else {
            document.getElementById("register").disabled = false;
            return false;
          }
        }
        function ctrlq(e) {
      //   console.log(e.result);
          $("#re").css("visibility", "visible");
            document.getElementById("formwall").reset();
            document.getElementById("formwall").style.display = "none";
            document.getElementById("successmsg").style.display = "block";
        }

  function formResetstu() {
            document.getElementById("formwallstu").reset();
          }
  /*$(document).ready(function() {
            $('input').on('input', function() {
              if ($("#formwallstu").valid()) {
                $('#registerstu').prop('disabled', false);
              } else {
                $('#registerstu').prop('disabled', 'disabled');
              }
            });
  });*/
  $('#emailstu').on('input',function() {
    var emailstu = $(this).val();
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    if (re.test(emailstu)) {
      $('.msg').hide();
      $('#phonenostu').prop('disabled', false);
    } else {
      $('.msg').hide();
      $('.error').show();
      $('#phonenostu').prop('disabled', 'disabled');
      $('#registerstu').prop('disabled', 'disabled');
    }
  });
  formwallstu.addEventListener('submit', (event) => {
    $("#secondlgcheckstu").empty();
    document.getElementById("registerstu").disabled = true;
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 ="AKfycbyEI27cuOCoOGf-hTzLpKjFDFgWCw8DHXrhfZuDYQ-Vdv32VvRxeZWzjvHOCZwy-yY9EQ";
    var url = ur1+ ur2+"/exec"+"?action=read";
    var emailch = $("#emailstu").val();
    var flag =0;
    $.getJSON(url, function(json) {
       for (var i = 0; i < json.records.length - 1; i++) {
         if (emailch == json.records[i].Email) {

         flag = flag + 1;
     
         }}
//console.log(flag);
if(flag == 0){
conasmwallstu();

}else{
document.getElementById('secondlgcheckstu').style.display = "block";
document.getElementById('secondlgcheckstu').innerHTML ="User email already exist!<br>Please Sign In<br>"
document.getElementById("registerstu").disabled = false;
}});
});
 
function conasmwallstu(){
  
  var script_url_stureg1 = "https://script.google.com/macros/s/";
  var script_url_stureg2 ="AKfycbygYOqMung5jMw8ISEWnRPA54bWfg10-hS4NFotAoyH-1YU0tVYK2Z44NmKGW5ERlSVug";
  var script_url_stureg =script_url_stureg1 + script_url_stureg2+ "/exec";
  var email = $("#emailstu").val();
  var fname = $("#fnamestu").val();
  var lname = $("#lnamestu").val();
  var dob =JSON.stringify(($("#dobstu").val()));
  var dtime = $("#stregtime").val();
  var stid = $("#stregid").val();
  var stpa = $("#confirmpasswrdst").val();
  var countryCode = $("#countrycodestu").val();
  var phoneNo = $("#phonenostu").val();
  var Class = $("#classstu_").val();
  var Board = $("#boardstu_").val();
  var TPic = $("#proPicT").val();
  if (email != 0 && fname != 0 && lname != 0 && dob != 0 && countryCode != 0 && phoneNo != 0 && Class != 0 && Board != 0 && stpa !=0) {
    var url = script_url_stureg + "?callback=ctrlqs&emailstu=" + email + "&fnamestu=" + fname + 
    "&lnamestu=" + lname + "&dobstu=" + dob + "&countrycodestu=" + countryCode + "&phonenostu=" +
     phoneNo + "&classstu_=" + Class + "&boardstu_=" + Board + "&proPicT=" + TPic 
     + "&stregtime=" + dtime + "&stregid=" + stid 
          + "&confirmpasswrdst=" + stpa+ "&action=insert";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
   
    sendconfirmem(email);
  } else {
    return false
  }
}
  function ctrlqs(e) {
   // console.log(e.result);
      document.getElementById("formwallstu").reset();
      document.getElementById("formwallstu").style.display = "none";
      document.getElementById("successmsgstu").style.display = "block";
  }
  $('#emailco').on('input',function() {
    var emailco = $(this).val();
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    if (re.test(emailco)) {
      $('.msg').hide();
      $('#resumeco').prop('disabled', false);
    } else {
      $('.msg').hide();
      $('.error').show();
      $('#resumeco').prop('disabled', 'disabled');
      $('#registerco').prop('disabled', 'disabled');
    }
  });
  /*$(document).ready(function() {
    $('input').on('blur', function() {
      if ($("#formwallco").valid()) {
        $('#registerco').prop('disabled', false);
      } else {
        $('#registerco').prop('disabled', 'disabled');
      }
    });
  });*/

  function formResetco() {
    document.getElementById("formwallco").reset();
  }
  function formReset() {
    document.getElementById("formwall").reset();
  }

  
  formwallco.addEventListener('submit', (event) => {
    $("#secondlgcheckco").empty();
    document.getElementById("registerco").disabled = true;
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 ="AKfycbxdN-3O6TgqnjSFLot6a3ePPXRZvxQFWNuZ1An7Ep5_f2cyLezJ-MDd6HeW0MV7gnrC";
    var url = ur1+ ur2+"/exec"+"?action=read";
    var emailch = $("#emailco").val();
    var flag =0;
    $.getJSON(url, function(json) {
       for (var i = 0; i < json.records.length - 1; i++) {
         if (emailch == json.records[i].Email) {

         flag = flag + 1;
     
         }}
//console.log(flag);
if(flag == 0){
conasmwallco();

}else{
document.getElementById('secondlgcheckco').style.display = "block";
document.getElementById('secondlgcheckco').innerHTML ="User email already exist!<br>Please Sign In<br>"
document.getElementById("registerco").disabled = false;
}});
  });
function conasmwallco(){
  var script_url_coreg1 = "https://script.google.com/macros/s/";
  var script_url_coreg2 ="AKfycbyWG_h-Wy2R-Li5h2oiskituiSC-0qHmOn9vpfzlKa-RfmeDPF-GEkF7Jtf7F47hU3v0Q";
  var script_url_coreg = script_url_coreg1+ script_url_coreg2 +"/exec";
    
    var email = $("#emailco").val();
    var fname = $("#fnameco").val();
    var lname = $("#lnameco").val();
    var dob = JSON.stringify($("#dobco").val());
    var dtime = $("#coregtime").val();
    var coid = $("#coregid").val();
    var copa = $("#confirmpasswrdco").val();
    var countryCode = $("#countrycodeco").val();
    var phoneNo = $("#phonenoco").val();
    var Class = $("#classco_").val();
    var Board = $("#boardco_").val();
    var Subject = $("#subjectco_").val();
    var Resume = $("#resumeco").val();
    var Storage = $("#storageco").val();
    var TPic = $("#proPicT").val();
    if (email != 0 && fname != 0 && lname != 0 && dob != 0 && countryCode != 0 && phoneNo != 0 && Class != 0 && Board != 0 && Subject != 0 && Resume != 0 && Storage != 0 && copa !=0) {
      var url = script_url_coreg + "?callback=ctrlqc&emailco=" + email + "&fnameco=" + fname + 
      "&lnameco=" + lname + "&dobco=" + dob + "&countrycodeco=" + countryCode + "&phonenoco=" + 
      phoneNo + "&classco_=" + Class + "&boardco_=" + Board + "&subjectco_=" + Subject + "&resumeco=" + 
      Resume + "&storageco=" + Storage + "&proPicT=" + TPic 
      + "&coregtime=" + dtime + "&coregid=" + coid 
      + "&confirmpasswrdco=" + copa+ "&action=insert";
      var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
      });
      sendconfirmem(email);
    } else {
      return false;
    }
}
  function ctrlqc(e) {
   // console.log(e.result); 
      document.getElementById("formwallco").reset();
      document.getElementById("formwallco").style.display = "none";
      document.getElementById("successmsgco").style.display = "block";
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  $(document).ready(function() {
    $(".show").click(function() {
      $(".collap").toggle();
    });
  });


  /*jQuery(function($) {
    $.fn.hScroll = function(amount) {
      amount = amount || 120;
      $(this).bind("DOMMouseScroll mousewheel", function(event) {
        var oEvent = event.originalEvent,
          direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
          position = $(this).scrollLeft();
        position += direction > 0 ? -amount : amount;
        $(this).scrollLeft(position);
        event.preventDefault();
      })
    };
  });
  $(document).ready(function() {
    $('.box').hScroll(40);
  }); */

 
  function myFunction() {
    var myVar;
    myVar = setTimeout(showPage, 0000);
  }

  function showPage() {
    document.getElementById("loader2").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

  $('#confirmpasswrd').on('keyup', function() {
    if ($('#passwrd').val() == $('#confirmpasswrd').val()) {
      $('#msgedreg').html('Matching').css('font-size', '12px');
      $('#register').prop('disabled', false);
    } else{ $('#msgedreg').html('Not Matching').css('font-size', '12px');
    $('#register').prop('disabled', true);
  }
    document.getElementById("eduregid").value = "ED-"+ Math.random().toString(26).substring(2, 6) + Math.random().toString(26).substring(2, 6);
  });

  function dateUp() {
    var d = new Date();
    var day = d.getDate();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
    document.getElementById('eduregtime').value = currentTime;
  }

  $('#confirmpasswrdst').on('keyup', function() {
    if ($('#passwrdst').val() == $('#confirmpasswrdst').val()) {
      $('#msgedregst').html('Matching').css('font-size', '12px');
      $('#registerstu').prop('disabled', false);
    } else {$('#msgedregst').html('Not Matching').css('font-size', '12px');
    $('#registerstu').prop('disabled', true);}
    document.getElementById("stregid").value = "ST-"+ Math.random().toString(26).substring(2, 6) + Math.random().toString(26).substring(2, 6);
    var d = new Date();
    var day = d.getDate();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
    document.getElementById('stregtime').value = currentTime;
  
  });

  $('#confirmpasswrdco').on('keyup', function() {
    if ($('#passwrdco').val() == $('#confirmpasswrdco').val()) {
      $('#msgedregco').html('Matching').css('font-size', '12px');
      $('#registerco').prop('disabled', false);
    } else{ $('#msgedregco').html('Not Matching').css('font-size', '12px');
    $('#registerco').prop('disabled', true);}
    document.getElementById("coregid").value = "CR-"+ Math.random().toString(26).substring(2, 6) + Math.random().toString(26).substring(2, 6);
    var d = new Date();
    var day = d.getDate();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
    document.getElementById('coregtime').value = currentTime;
  
  });

  function textLength(value){
    var maxLength = 10;
    if(value.length > maxLength) return false;
    return true;
 }
 var oldValue = '';
 document.getElementById('phoneno').onkeyup = function(){
      if(!textLength(this.value))
      {
          this.value = oldValue;
      }
      else oldValue = this.value;
 }
 document.getElementById('phonenostu').onkeyup = function(){
  if(!textLength(this.value))
  {
      this.value = oldValue;
  }
  else oldValue = this.value;
}
document.getElementById('phonenoco').onkeyup = function(){
  if(!textLength(this.value))
  {
      this.value = oldValue;
  }
  else oldValue = this.value;
}

function ccodeLength(value){
  var maxLength = 3;
  if(value.length > maxLength) return false;
  return true;
}
var oldValue = '';
document.getElementById('countrycode').onkeyup = function(){
  if(!ccodeLength(this.value))
  {
      this.value = oldValue;
  }
  else oldValue = this.value;
}
document.getElementById('countrycodestu').onkeyup = function(){
  if(!ccodeLength(this.value))
  {
      this.value = oldValue;
  }
  else oldValue = this.value;
}
document.getElementById('countrycodeco').onkeyup = function(){
    if(!ccodeLength(this.value))
    {
        this.value = oldValue;
    }
    else oldValue = this.value;
}

$(document).ready(function(){
  $('#promoreg').click(function(){
    $('#promoreg').hide();
  })
})


function sendconfirmem(mailat) {
  //var elemed = document.getElementById("studentpassdoc").innerHTML;
 // console.log(elemed);
    Email.send({
      SecureToken : "dce269d4-508e-4b89-bc50-2201fb9f60a8",
      To: mailat,
      From: "MASTROWALL<donotreply@mastrowall.com>",
        Subject: "Account Confirmation - MASTROWALL",
        Body:  "<!doctype html><html><head><title>M A S T R O W A L L | An Art of Learning<\/title><link rel=\"stylesheet\" href=\"../css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"style.css\"><\/head><body><div class=\"emsenduser\"\>Account Created Successfully. Sign In to Continue.<p>N.B Do not reply to this email</p><\div><\/body><\/html>",
    })
        .then(function (message) {
if(message == "OK"){

  document.getElementById('mailconfirm').style.display= 'block';
  document.getElementById('mailconf').innerHTML= 'Cofirmation sent to your email.';
  setTimeout(function() {
    jQuery('#mailconfirm').fadeOut('fast');
  }, 6000);

}      
        
        });
    }

    