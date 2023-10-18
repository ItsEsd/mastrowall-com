document.getElementById("svconnect").addEventListener("click", upConnect);
var script_eduProCon1 = "https://script.google.com/macros/s/";
var script_eduProCon2 ="AKfycbzYFq-RMcxnTTm7P3XdNET9QLbCAMXkDTgJYcT7emjfKr0hTGa3l5LbbA";
var script_eduProCon =script_eduProCon1 + script_eduProCon2+"/exec";
function upConnect() {
  var gconnect = $("#connectivity").val();
  var email1 = $("#email").val();
  var url = script_eduProCon + "?callback=ctrlq&email=" + email1 + "&connectivity=" + gconnect + "&action=upconnect";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
  document.getElementById("connectUp").innerHTML = "Connectivity Updated.<br><br>";
  inwallEdu();
}

document.getElementById("editEduPro").addEventListener("click", loadPrevData);
var script_url_eduPro1 = "https://script.google.com/macros/s/";
var script_url_eduPro2 ="AKfycbzYFq-RMcxnTTm7P3XdNET9QLbCAMXkDTgJYcT7emjfKr0hTGa3l5LbbA";
var script_url_eduPro = script_url_eduPro1+ script_url_eduPro2+"/exec";
function loadPrevData() {
  document.getElementById("loaderPro").style.visibility = "visible";
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  var url = script_url_eduPro + "?action=read";
  $.getJSON(url, function(json) {
    for (var i = 0; i < json.records.length - 1; i++) {
      if (email1 == json.records[i].Email && pass == json.records[i].Passcode) {
        document.getElementById("profilePic").innerHTML = '<img width="140px" src="' + json.records[i].ProfilePic + '">';
        document.getElementById("ppic").value = json.records[i].ProfilePic;
        document.getElementById("fname").value = json.records[i].FName;
        document.getElementById("lname").value = json.records[i].LName;
        document.getElementById("dob").value = json.records[i].DOB;
        document.getElementById("emailid").value = json.records[i].Email;
        document.getElementById("countrycode").value = json.records[i].CountryCode;
        document.getElementById("phoneno").value = json.records[i].PhoneNo;
        document.getElementById("class_").value = json.records[i].Class;
        document.getElementById("board_").value = json.records[i].Board;
        document.getElementById("subject_").value = json.records[i].Subject;
        document.getElementById("exidnote").value = json.records[i].ExternalNoteId;
        document.getElementById("exidlec").value = json.records[i].ExternalLecId;
        document.getElementById("pCodeEdu").value = json.records[i].Passcode;
        document.getElementById("loaderPro").style.visibility = "hidden";
      } else {
        return false;
      }
    }
  });
}

function update_pro() {
  var script_eduPro1 = "https://script.google.com/macros/s/";
  var script_eduPro2 = "AKfycbzYFq-RMcxnTTm7P3XdNET9QLbCAMXkDTgJYcT7emjfKr0hTGa3l5LbbA";
  var script_eduPro = script_eduPro1+ script_eduPro2+ "/exec";
  document.getElementById("loaderPro").style.visibility = "visible";
  var a = $("#fname").val();
  var b = $("#lname").val();
  var c = $("#dob").val();
  var d = $("#emailid").val();
  var e = $("#countrycode").val();
  var f = $("#phoneno").val();
  var g = $("#class_").val();
  var h = $("#board_").val();
  var i = $("#subject_").val();
  var j = $("#exidnote").val();
  var k = $("#exidlec").val();
  var m = $("#pCodeEdu").val();
  var o = $("#ppic").val();
  var email1 = $("#email").val();
  var url = script_eduPro + "?callback=ctrlq&email=" + email1 + "&fname=" + a + "&lname=" + b + "&dob=" + c + "&emailid=" + d + "&countrycode=" + e + "&phoneno=" + f + "&class_=" + g + "&board_=" + h + "&subject_=" + i + "&exidnote=" + j + "&exidlec=" + k + "&pCodeEdu=" + m + "&ppic=" + o + "&action=update";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
  document.getElementById("loaderPro").style.visibility = "hidden";
  document.getElementById("eduProUpdate").disabled = true;
  document.getElementById("updateNotice").innerHTML = "<br>Information updated successfully.<p>Refresh the page and sign in again.</p>";
}

function ctrlq(e) {
 // console.log(e);
  $("#re").html(e.result);
  $("#re").css("visibility", "visible");
}
document.getElementById("confirmPcode").addEventListener("input", enableSave);

function enableSave() {
  if ($('#pCodeEdu').val() == $('#confirmPcode').val()) {
    document.getElementById("eduProUpdate").disabled = false;
  } else {
    document.getElementById("eduProUpdate").disabled = true;
  }
}

var script_url1 = "https://script.google.com/macros/s/";
var script_url2 = "AKfycbzYFq-RMcxnTTm7P3XdNET9QLbCAMXkDTgJYcT7emjfKr0hTGa3l5LbbA";
var script_url = script_url1+script_url2+"/exec";
function inwallEdu() {
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  if (email1 != 0 && pass != 0) {
    document.getElementById("loader").style.display = "block";
    document.getElementById("loader").style.visibility = "visible";
    document.getElementById("checkP").innerHTML = "";
    var url = script_url + "?action=read";
    $.getJSON(url, function(json) {
      for (var i = 0; i < json.records.length - 1; i++) {
        if (email1 == json.records[i].Email && pass == json.records[i].Passcode) {
          document.getElementById("signInEdu").style.display = "none";
          document.getElementById("EduDashboard").style.display = "block";
          document.getElementById("showprofileInfoEdu").innerHTML = '<div align="center"><img id="propic" src="' + json.records[i].ProfilePic + '" width="170px" style="pointer-events:none;border:4px solid white;"><div id="name" style="padding-top:14px;"><h4 style="margin:0px;color:white;">' + json.records[i].FName + ' ' + json.records[i].LName + ' </h4></div><p style="font-size:18px;margin:0px;">' + json.records[i].Class + ' (' + json.records[i].Board + ') </p><h5 style="margin:0px;;">' + json.records[i].Subject + ' </h5></div>';
          document.getElementById("notes").innerHTML = '<a style="color:white;text-decoration:none;"target="_blank" href="' + json.records[i].ExternalNoteId + '"><button class="btn btn-danger ssbtn" style="width:100%;height:40px;background-color:#cc6600;border:none;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16"> <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/> <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/></svg> Notes</button></a>';
          document.getElementById("lecture").innerHTML = '<a style="color:white;text-decoration:none;"target="_blank" href="' + json.records[i].ExternalLecId + '"><button class="btn btn-danger ssbtn" style="width:100%;height:40px;background-color:#cc6600;border:none;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-play" viewBox="0 0 16 16"> <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z"/> <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/></svg> Lectures</button></a>';
          document.getElementById("golive").innerHTML = '<button class="btn btn-success ssbtn" style="width:100%;height:40px;background-color:#008000;border:none;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175l3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/></svg> Connectivity</button>';
          document.getElementById("tod").innerHTML = '<button class="btn btn-primary ssbtn" style="width:100%;height:40px;background-color:#1a2ca5;border:none;" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16"> <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/> <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg> Topic of The Day</button>';
          document.getElementById("loader").style.visibility = "hidden";
          document.getElementById("prepost").style.display = "none";
          document.getElementById("loader").style.display = "none";
          live_tod();
        } else {
          document.getElementById("checkP").innerHTML = "User email and password not found.";
          document.getElementById("loader").style.visibility = "hidden";
          document.getElementById("loader").style.display = "none";
        }
      }
    });
  } else {
    return false;
  }
}
document.getElementById("tod").addEventListener("click", live_tod);

function live_tod() {
  $('#LiveTOD').empty();
  document.getElementById("loaderTOD").style.visibility = "visible";
  document.getElementById("updatePro").style.display = "none";
  document.getElementById("goconnect").style.display = "none";
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  var url = script_url + "?action=read";
  $.getJSON(url, function(json) {
    for (var i = 0; i < json.records.length - 1; i++) {
      if (email1 == json.records[i].Email && pass == json.records[i].Passcode) {
        var TOD = JSON.parse(json.records[i].TOD);
        document.getElementById("LiveTOD").style.display = "block";
        for (var prop in TOD.title) {
          var j = 0;
          document.getElementById("LiveTOD").innerHTML = '<div class="wrapTOD"><div class="card"> <img class="card-img-top" src="' + TOD.thumb_ref[j] + '"><div class="card-body"><h4>' + TOD.title[j] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + TOD.brief_topic[j] + '</p></div> </div></div><br><a href="#" class="add_button_TOD">Show More</a><br>';
          document.getElementById("updateTOD").style.display = "block";
          var maxTOD = TOD.title.length;
          var wrapperTOD = $(".wrapTOD");
          var add_buttonTOD = $(".add_button_TOD");
          $(add_buttonTOD).on("click", function(e) {
            e.preventDefault();
            if (j < maxTOD) {
              j++;
              $(wrapperTOD).append('<br><div class="wrapTOD"><div class="card"> <img class="card-img-top" src="' + TOD.thumb_ref[j] + '"><div class="card-body"><h4>' + TOD.title[j] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + TOD.brief_topic[j] + '</p></div> </div></div>');
            }
            if (j == maxTOD - 1) {
              $(".add_button_TOD").hide();
            }
          });
          document.getElementById("loaderTOD").style.visibility = "hidden";
        }
      }
    }
  });
}

function ProTOD() {
  var TOD, k;
  k = unescape(document.getElementById("json_tod").value);
  TOD = JSON.parse(k);
  var error1 = TOD.thumb_ref[0];
  var error2 = TOD.thumb_ref[1];
  if (error1 == 'h' && error2 == 't') {
    document.getElementById("previewTOD").innerHTML = "<br><p style='color:red;'>Update or Add One More TOD</p><br>";
    document.getElementById("previewt").disabled = true;
    document.getElementById("post").disabled = true;
  } else {
    document.getElementById("previewt").disabled = false;
    document.getElementById("post").disabled = false;
    for (var prop in TOD.title) {
      var j = 0;
      document.getElementById("previewTOD").innerHTML = '<div class="wrapTODPre"><div class="card"> <img class="card-img-top" src="' + TOD.thumb_ref[j] + '"><div class="card-body"><h4>' + TOD.title[j] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + TOD.brief_topic[j] + '</p></div> </div></div><br><a href="#" class="add_button_PreTOD">Show More</a><br>';
      var maxTOD = TOD.title.length;
      var wrapperTOD = $(".wrapTODPre");
      var add_button_previewTOD = $(".add_button_PreTOD");
      $(add_button_previewTOD).on("click", function(e) {
        e.preventDefault();
        if (j < maxTOD) {
          j++;
          $(wrapperTOD).append('<br><div class="wrapTODPre"><div class="card"> <img class="card-img-top" src="' + TOD.thumb_ref[j] + '"><div class="card-body"><h4>' + TOD.title[j] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + TOD.brief_topic[j] + '</p></div> </div></div>');
        }
        if (j == maxTOD - 1) {
          $(".add_button_PreTOD").hide();
        }
      });
    }
  }
}

function openTOD() {
  var x = document.getElementById("updateTOD");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showServices() {
  document.getElementById("showServiceEdu").style.display = "block";
  document.getElementById("showprofileInfoEdu").style.display = "block";
  document.getElementById("updateTOD").style.display = "none";
}


$(document).ready(function() {
  var max_fields = 10;
  var wrapper = $(".input_fields_wrap");
  var add_button = $(".add_field_button");
  var x = 1;
  $(add_button).on("click", function(e) {
    e.preventDefault();
    if (x < max_fields) {
      x++;
      $(wrapper).append(`<div><br> <div class="input_fields_wrap"> <div class="container tod"> <input type="text" class="form-control border-hide todtitle" name="title" placeholder="Title of the topic" autocomplete="off" required> <textarea class="form-control todbrief" rows="4" name="brief_topic" placeholder="Topic briefing" id="tbrief" required></textarea> <div style="float:left;width:180px;"><input type="url" name="thumb_ref" id="tthumb" class="form-control border-hide thumbref" placeholder="&#10010; Add thumbnail link " autocomplete="off" required></div> <input id="next" onclick="enablePrePost()" type="submit" value="Update" style="float:right;width:80px;margin-right:5px;margin-top:4px;"><br><br> </div> </div><a href="#" class="remove_field">Remove</a><br></div>`);
    }
    if (x == max_fields) {
      $("#addtod").hide();
    }
  });
  $(wrapper).on("click", ".remove_field", function(e) {
    e.preventDefault();
    $(this).parent('div').remove();
    $("#addtod").show();
    x--;
    if (x == 1) {
      document.getElementById("previewt").disabled = true;
      document.getElementById("post").disabled = true;
      $("#prepost").hide();
    }
  })
});

function enablePrePost() {
  $('form').submit(function() {
    var TOD, k;
    k = unescape(document.getElementById("json_tod").value);
    TOD = JSON.parse(k);
    var error1 = TOD.thumb_ref[0];
    var error2 = TOD.thumb_ref[1];
    if (error1 == 'h' && error2 == 't' && k != 0) {
      document.getElementById("previewTOD").innerHTML = "<br><p style='color:red;'>Update or Add One More TOD</p><br>";
      document.getElementById("previewt").disabled = true;
      document.getElementById("post").disabled = true;
    } else {
      document.getElementById("previewt").disabled = false;
      document.getElementById("post").disabled = false;
    }
  });
}

var script_ur_tod1 = "https://script.google.com/macros/s/";
var script_ur_tod2 ="AKfycbzYFq-RMcxnTTm7P3XdNET9QLbCAMXkDTgJYcT7emjfKr0hTGa3l5LbbA";
var script_ur_tod = script_ur_tod1+script_ur_tod2+"/exec";
function update_tod() {
  document.getElementById("updateTOD").style.display = "none";
  var email1 = $("#email").val();
  var TOD = $("#json_tod").val();
  var url = script_ur_tod + "?callback=ctrlq&email=" + email1 + "&json_tod=" + TOD + "&action=uptod";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
  setTimeout(function() {
    live_tod()
  }, 4000);
}

$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};
$(function() {
  $('form').submit(function() {
    document.getElementById("json_tod").value = encodeURIComponent(JSON.stringify($('form').serializeObject()));
    document.getElementById("prepost").style.display = "block";
    return false;
  });
});

function reset_editor() {
  document.getElementById("text_editor").reset();
  document.getElementById("prepost").style.display = "none";
}

document.getElementById("editEduPro").addEventListener("click", updateEduPro);

function updateEduPro() {
  document.getElementById("updatePro").style.display = "block";
  document.getElementById("goconnect").style.display = "none";
}

$('form input[id="emailid"]').blur(function() {
  var email = $(this).val();
  var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
  if (re.test(email)) {
    $('.msg').hide();
  } else {
    $('.msg').hide();
    $('.error').show();
  }
});

$(document).ready(function() {
  $("#editEduPro").click(function() {
    $(".allHide").hide();
    $("#updatePro").show();
  });
});


$(document).ready(function() {
  var max_fi = 10;
  var wrap = $(".goconnect");
  var add_btn = $(".addmoreConnect");
  var k = 2;
  $(add_btn).on("click", function(e) {
    e.preventDefault();
    if (k < max_fi) {
      k++;
      $(wrap).append(`<div class="golive form-group" style="margin-bottom:16px; width:340px;margin-left:4px;margin-right:12px;"> <input class="form-control addconnect" type="text" style="width:120px; height:40px; display:inline-block;" placeholder="Link / ID" name="idConnect" required><select id="exidother" name="Connect" style=" display:inline-block;width:140px; height:40px;margin-left:6px;"> <option class="heading">Social & Other</option> <option value="https://play-lh.googleusercontent.com/fqYJHtyzZzA4vacRzeJoB93QNvA5-mvR-8UB5oVLxdYDSTpfLp_KgYD4IqVGJUgFEJo">Linkedin</option> <option value="https://img1.wsimg.com/isteam/ip/411ebfda-2fb6-4210-a3a0-0e46f9e24834/logo10.png/:/rs=w:1440,h:1440">Facebook</option> <option value="https://img1.wsimg.com/isteam/ip/411ebfda-2fb6-4210-a3a0-0e46f9e24834/logo1.png/:/rs=w:1440,h:1440">WhatsApp</option> <option value="https://img1.wsimg.com/isteam/ip/411ebfda-2fb6-4210-a3a0-0e46f9e24834/logo8.png/:/rs=w:1440,h:1440">Google Duo</option> <option value="https://img1.wsimg.com/isteam/ip/411ebfda-2fb6-4210-a3a0-0e46f9e24834/logo12.png/:/rs=w:1440,h:1440">Skype</option> <option value="https://img1.wsimg.com/isteam/ip/411ebfda-2fb6-4210-a3a0-0e46f9e24834/logo3.png/:/rs=w:1440,h:1440">YouTube</option> <option value="https://img1.wsimg.com/isteam/ip/411ebfda-2fb6-4210-a3a0-0e46f9e24834/logo2.png/:/rs=w:1440,h:1440">Vimeo</option> <option value="https://img1.wsimg.com/isteam/ip/411ebfda-2fb6-4210-a3a0-0e46f9e24834/logo9.png/:/rs=w:1440,h:1440">Messenger</option><option value="https://img1.wsimg.com/isteam/ip/411ebfda-2fb6-4210-a3a0-0e46f9e24834/logo5.png/:/rs=w:1440,h:1440">Teams</option><option value="https://img1.wsimg.com/isteam/ip/411ebfda-2fb6-4210-a3a0-0e46f9e24834/logo7.png/:/rs=w:1440,h:1440">Meets</option> </select> <button class="addmoreConnect btn-danger remove_field" style="width:40px; height:40px;margin-left:6px;background-color:#cc6600;color:white;border:none; border-radius:6px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></button> </div>`);
    }
  });
  $(wrap).on("click", ".remove_field", function(e) {
    e.preventDefault();
    $(this).parent('div').remove();
    $(".addmoreConnect").show();
    k--;
    if (k == 1) {
      $(".golive").hide();
    }
  })
});


$('#confirmPcode').on('keyup', function() {
  if ($('#pCodeEdu').val() == $('#confirmPcode').val()) {
    $('#message').html('Matching').css('font-size', '12px');
  } else $('#message').html('Not Matching').css('font-size', '12px');
});


$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};
$(function() {
  $('form[name="eduProConnect"]').submit(function() {
    document.getElementById("connectivity").value = JSON.stringify($('form[name="eduProConnect"]').serializeObject());
    document.getElementById("nxt").style.display = "none";
    document.getElementById("sv").style.display = "block";
    document.getElementsByClassName("addmoreConnect")[0].disabled = true;
    document.getElementsByClassName("addmoreConnect")[1].disabled = true;
    return false;
  });
});


document.getElementById("golive").addEventListener("click", openConnect);

function openConnect() {
  document.getElementById("goconnect").style.display = "block";
  document.getElementById("updatePro").style.display = "none";
  document.getElementById("LiveTOD").style.display = "none";
  document.getElementById("updateTOD").style.display = "none";
}


var script_url1 = "https://script.google.com/macros/s/";
var script_url2 = "AKfycbzYFq-RMcxnTTm7P3XdNET9QLbCAMXkDTgJYcT7emjfKr0hTGa3l5LbbA";
var script_url = script_url1+script_url2+"/exec";
document.getElementById("golive").addEventListener("click", showconnect);

function showconnect() {
  document.getElementById("loaderCON").style.visibility = "visible";
  $("#connect1").empty();
  $("#connect2").empty();
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  var url = script_url + "?action=read";
  $.getJSON(url, function(json) {
    for (var i = 0; i < json.records.length - 1; i++) {
      if (email1 == json.records[i].Email && pass == json.records[i].Passcode) {
        var Go = JSON.parse(json.records[i].Connectivity);
        for (var prop in Go.idConnect) {
          var j = 0;
          var totalConnect = Go.idConnect.length;
          document.getElementById("connect1").innerHTML = '<a href="tel:' + Go.idConnect[0] + '"><img class="connectIcon" src="' + Go.Connect[0] + '"></a><a href="mailto:' + Go.idConnect[1] + '"><img class="connectIcon" src="' + Go.Connect[1] + '"></a>';
        }
        for (j = 2; j < totalConnect; j++) {
          document.getElementById("connect2").innerHTML += '<a target="_blank" href="' + Go.idConnect[j] + '"><img class="connectIcon" src="' + Go.Connect[j] + '"></a>';
          document.getElementById("loaderCON").style.visibility = "hidden";
        }
      }
    }
  });
}

$(function() {
  $('.proThumb').on("click", function() {
    var z = document.getElementById("ppic").value;
    document.getElementById("profilePic").innerHTML = '<img width="140px" src="' + z + '">';
  });
});


function showavatarBrd() {
  var x = document.getElementById("avatarBrd");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



$('#editEduPro').click(function(){
document.body.scrollTop = 460;
document.documentElement.scrollTop = 460;
}) ;   
