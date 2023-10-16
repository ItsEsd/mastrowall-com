 /* M A S T R O W A L L */
function logas_Note() {
  var logAs_note = document.getElementById("log_as_note").value;
  if (logAs_note == "Educator") {
    document.getElementById("divcard_note_edu").style.display = "block";
    document.getElementById("logas_note").style.display = "none";
  }
  if (logAs_note == "Coordinator") {
    document.getElementById("divcard_note_co").style.display = "block";
    document.getElementById("logas_note").style.display = "none";
  }
}


function enablecardedu_note(id) {
  var upedit_edu_note = document.getElementById("upedit_edu_note");
  if (id.value.trim() != "") {
    upedit_edu_note.disabled = false;
  } else {
    upedit_edu_note.disabled = true;
  }
};

function enablecardco_note(id) {
  var upedit_co_note = document.getElementById("upedit_co_note");
  if (id.value.trim() != "") {
    upedit_co_note.disabled = false;
  } else {
    upedit_co_note.disabled = true;
  }
};


function logas_edu_note() {
var ured1 = "https://script.google.com/macros/s/";
var ured2 ="AKfycbwo9dhamwfIFczvhdFS55V613TSRttO8CJK4l8SXTCR6a5bPX3SSAcV5K_0kqiJV4F6KA";
  document.getElementById("loader").style.visibility = "visible";
  var logas1 = $("#idlogedu_note").val();
  var url = ured1+ured2+"/exec"+"?callback=ctrlqeducon&checid="+logas1+"&action=rdeduc";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}

function ctrlqeducon(e){
  var res = e.records;
  var logas1 = $("#idlogedu_note").val();
  if(res != "ID not found!"){
    document.getElementById("divinsert").style.display = "block";
    document.getElementById("divcard_note_edu").style.display = "none";
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("idnot_note").style.display = "none";
    document.getElementById("m_id").innerHTML = 'Name: ' + res[0].FName +' '+res[0].LName;
    document.getElementById("empower").value = res[0].FName +' '+res[0].LName;
    document.getElementById("empid_note").value= logas1 ;
  }
  else{
    document.getElementById("idnot_note").innerHTML = "ID not found!";
    document.getElementById("note_log").style.display = "block";
    document.getElementById("loader").style.visibility = "hidden";
  }
}

function logas_co_note() {
var urco1 = "https://script.google.com/macros/s/";
var urco2 ="AKfycbyUrt3FK__ffY3wUBhcwAk-50uWB327H9UIjstyNmX1_gRGFumWvSKCZvbX4HXb-S76";
  document.getElementById("loader").style.visibility = "visible";
  var logasco1 = document.getElementById("idlogco_note").value;
  var url = urco1+urco2+"/exec"+"?callback=ctrlqcocon&chcoid="+logasco1+"&action=rdcord";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });

}
function ctrlqcocon(e){
  var res = e.records;
  var logasco1 = document.getElementById("idlogco_note").value;
  if(res != "ID not found!"){
    document.getElementById("divinsert").style.display = "block";
    document.getElementById("divcard_note_co").style.display = "none";
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("idnot_note").style.display = "none";
    document.getElementById("m_id").innerHTML = 'Name: ' + res[0].FName+' '+res[0].LName;
    document.getElementById("empower").value = res[0].FName +' '+res[0].LName;
    document.getElementById("empid_note").value= logasco1 ;
  }
  else{
    document.getElementById("idnot_note").innerHTML = "ID not found!";
    document.getElementById("note_log").style.display = "block";
    document.getElementById("loader").style.visibility = "hidden";
  }
}

function logas_Lec() {
  var logAs = document.getElementById("log_as_lec").value;
  if (logAs == "Educator") {
    document.getElementById("divcard_lec_edu").style.display = "block";
    document.getElementById("logas_lec").style.display = "none";
  }
  if (logAs == "Coordinator") {
    document.getElementById("divcard_lec_co").style.display = "block";
    document.getElementById("logas_lec").style.display = "none";
  }
}


function enablecardedu_lec(id) {
  var upedit_edu = document.getElementById("upedit_edu");
  if (id.value.trim() != "") {
    upedit_edu.disabled = false;
  } else {
    upedit_edu.disabled = true;
  }
};

function enablecardco_lec(id) {
  var upedit_co = document.getElementById("upedit_co");
  if (id.value.trim() != "") {
    upedit_co.disabled = false;
  } else {
    upedit_co.disabled = true;
  }
};

function logas_edu() {
  document.getElementById("loader").style.visibility = "visible";
  var logas = $("#idlogedu_lec").val();
  var ured1 = "https://script.google.com/macros/s/";
  var ured2 ="AKfycbwo9dhamwfIFczvhdFS55V613TSRttO8CJK4l8SXTCR6a5bPX3SSAcV5K_0kqiJV4F6KA";
  var url = ured1+ured2+"/exec"+"?callback=ctrlqeduconvid&checid="+logas+"&action=rdeduc";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}
function ctrlqeduconvid(e){
  var res = e.records;
  var logas = $("#idlogedu_lec").val();
  if(res != "ID not found!"){
    document.getElementById("divinsert_lec").style.display = "block";
    document.getElementById("divcard_lec_edu").style.display = "none";
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("idnot").style.display = "none";
    document.getElementById("m_id_lec").innerHTML ='Name: ' + res[0].FName+' '+res[0].LName;
    document.getElementById("empowered").value = res[0].FName +' '+res[0].LName;
    document.getElementById("empid_vid").value= logas ;
  }
  else{
    document.getElementById("idnot").innerHTML = "ID not found!";
    document.getElementById("lec_log").style.display = "block";
    document.getElementById("loader").style.visibility = "hidden";
  }
}

var urco1 = "https://script.google.com/macros/s/";
var urco2 ="AKfycbxdN-3O6TgqnjSFLot6a3ePPXRZvxQFWNuZ1An7Ep5_f2cyLezJ-MDd6HeW0MV7gnrC";
var logco_url =urco1+urco2+"/exec";

function logas_co() {
  document.getElementById("loader").style.visibility = "visible";
  var logasco = document.getElementById("idlogco_lec").value;
  var urco1 = "https://script.google.com/macros/s/";
  var urco2 ="AKfycbyUrt3FK__ffY3wUBhcwAk-50uWB327H9UIjstyNmX1_gRGFumWvSKCZvbX4HXb-S76";
  var url = urco1+urco2+"/exec"+"?callback=ctrlqcoconvid&chcoid="+logasco+"&action=rdcord";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });

}
function ctrlqcoconvid(e){
  var res = e.records;
  var logasco = document.getElementById("idlogco_lec").value;
  if(res != "ID not found!"){
    document.getElementById("divinsert_lec").style.display = "block";
    document.getElementById("divcard_lec_co").style.display = "none";
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("idnot").style.display = "none";
    document.getElementById("m_id_lec").innerHTML ='Name: ' + res[0].FName+' '+res[0].LName;
    document.getElementById("empowered").value = res[0].FName +' '+res[0].LName;
    document.getElementById("empid_vid").value= logasco ;
  }
  else{
    document.getElementById("idnot").innerHTML = "ID not found!";
        document.getElementById("lec_log").style.display = "block";
        document.getElementById("loader").style.visibility = "hidden";
  }
}

document.getElementById("npic").addEventListener("input", PreviewThumb);

function PreviewThumb() {
  var title = document.getElementById("ntitle").value;
  var thumbnail = document.getElementById("npic").value;
  var refaddress = document.getElementById("nlink").value;
  var cl = document.getElementById("grade").value;
  var sub = document.getElementById("subject").value;
  var emp = document.getElementById("empower").value;
  document.getElementById("preview").style.display = "block";
  document.getElementById("preview").innerHTML = '<br><div id="preview_thumb" align="center"><a target="_blank" href="' + refaddress + '"><img id="preview_img" onerror="failed_img_load()" onload="success()" width="240px" height="200px" src="' + thumbnail + '"><h5 class="a" style="padding-top:5px;">' + title + '</a></h5></div>';
}

function failed_img_load() {
  document.getElementById("preview_thumb").innerHTML = '<div style="min-height:400px;"><img width="220px" height="210px" style="object-fit:cover;" src="https://pbs.twimg.com/profile_images/425274582581264384/X3QXBN8C.jpeg"><br><p id="error_msg" align="center" style="color:red;" >Image failed to load!</p></div>';
  document.getElementById("empower").disabled = true;
}

function success() {
  document.getElementById("empower").disabled = false;
}
document.getElementById("empower").addEventListener("input", ThumbFinal);

function ThumbFinal() {
  var emp = document.getElementById("empower").value;
  if (emp == 0) {
    document.getElementById("insertt").disabled = true;
  } else {
    document.getElementById("insertt").disabled = false;
  }
}


var script_url = "https://script.google.com/macros/s/AKfycby7WMOvKX38co6FPL3RWMYq7YZvzlqA6zLAx6u3xFIJeSnP4W-HJZqOsF38GD1ztzlFUA/exec";
document.getElementById("insertt").addEventListener("click", insert_value);

function insert_value() {
  var id1 = $("#id").val();
  var grade = $("#grade").val();
  var empid = $("#empid_note").val();
  var row1 = escape($("#ntitle").val());
  var row2 =escape($("#npic").val());
  var row3 = escape($("#nlink").val());
  var row4 = $("#subject").val();
  var row5 = $("#empower").val();
  if (row1 != 0 && row2 != 0 && row3 != 0 && row4 != 0 && row5 != 0) {
    var url = script_url + "?callback=ctrlq&id=" + id1 + "&grade=" + grade + "&subject=" + row4 + "&ntitle=" + row1 + "&npic=" + row2 + "&nlink=" + row3 + "&empower=" + row5 + "&empid_note=" + empid + "&action=insert";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
    document.getElementById("myNav").style.display = "none";
    document.getElementById("Insertion").style.display = "block";
    document.getElementById("Insertion").innerHTML = "Insertion successful!";
    document.getElementById("note_log").style.display = "block";
    document.getElementById("navBtn").style.display = "block";
    document.getElementById("editwall").reset();
    var ednmstr = document.getElementById('m_id').innerText;
    var ednm = ednmstr.split(':');
    document.getElementById('empower').value= ednm[1];
  } else {
    return false;
  }
  setTimeout(function() {
    $('#Insertion').fadeOut('fast');
  }, 2000);
}

function genId() {
  document.getElementById("id").value = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function delete_value() {
  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  $('#mySpinner').addClass('spinner');
  var id1 = $("#id").val();
  var ntitle = $("#ntitle").val();
  var url = script_url + "?callback=ctrlq&id=" + id1 + "&ntitle=" + ntitle + "&action=delete";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}

function ctrlq(e) {
  $("#re").html(e.result);
  $("#re").css("visibility", "visible");
}

function read_value() {
  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  var url = script_url + "?action=read";
  $.getJSON(url, function(json) {
    json.records.reverse();
    for (var i = 0; i < json.records.length - 1; i++) {}
  });
}

function show_wall() {
  $("#loadmore_note,#loadmore_lec").show();
  $("#re_lec").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  var url = script_url + "?action=read";
  $.getJSON(url, function(json) {
    json.records.reverse();
    var maxresult = json.records.length;
    var resultperList = 12;
    var numberofList = Math.ceil(maxresult / resultperList);
    var ListIndex = 1;
    var btn_notesmore = $("#loadmore_note");
    var r = 1;
    var currentIndex = ListIndex * resultperList;
    for (r; r <= resultperList; r++) {
      document.getElementById("showhtml").innerHTML += '<div class="iteam "><div class="card " align="center"> <div class="card-title " id="cardheader"><a target="_blank" href="' + json.records[r].NotesLink + '"><img class="swall card-img-top" onerror="this.onerror=null;this.src= `../images/thumbnail.png`;" id="thumbPic" src="' + json.records[r].NotesPic + '" height="220px" ></a></div> <div class="card-des"><a target="_blank" href="' + json.records[r].NotesLink + '"><h5 style="color:#0c09c9;">' + json.records[r].NotesTitle + '</h5></a></div> <div class="card-footer"><p style="color:#44cc00;"><span>&#9673; </span><span>' + json.records[r].Subject + ' </span><span style="color:#e65c00">&#9673; </span><span style="color:#e65c00">' + json.records[r].Grade + '</span></p><span>Posted as <svg width="20px" height="20px" style="padding-right:4px;color:#0c09c9;" viewBox="0 0 16 16" class="bi bi-clipboard-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/></svg></span><span style="color:#0c09c9;cursor:pointer;" class="empnotenam" onclick="showpoasnote(this);">' + json.records[r].PostAs + ' </span></div>'+
      '<input class="empid_n" value="'+json.records[r].EmpId+'" style="display:none;"></div></div>';
      $('html,body').animate({
        scrollTop: $("#showhtml").offset().top
      }, 0);
    }
    $(btn_notesmore).on("click", function(e) {
      if (ListIndex < numberofList) {
        ListIndex++;
        var i = currentIndex + 1;
        currentIndex = ListIndex * resultperList;
        for (i; i <= currentIndex; i++) {
          $("#showhtml").append('<div class="iteam"><div class="card " align="center"> <div class="card-title "id="cardheader"><a target="_blank" href="' + json.records[i].NotesLink + '"><img class="swall card-img-top" id="thumbPic" onerror="this.onerror=null;this.src= `../images/thumbnail.png`;" src="' + json.records[i].NotesPic + '" height="220px" ></a></div> <div class="card-des"><a target="_blank" href="' + json.records[i].NotesLink + '"><h5 style="color:#0c09c9;">' + json.records[i].NotesTitle + '</h5></a></div> <div class="card-footer"><p style="color:#44cc00;"><span>&#9673; </span><span>' + json.records[i].Subject + ' </span><span style="color:#e65c00">&#9673; </span><span style="color:#e65c00">' + json.records[i].Grade + '</span></p><span>Posted as <svg width="20px" height="20px" style="padding-right:4px;color:#0c09c9;" viewBox="0 0 16 16" class="bi bi-clipboard-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/></svg></span><span style="color:#0c09c9;cursor:pointer;" class="empnotenam" onclick="showpoasnote(this);">' + json.records[i].PostAs + ' </span></div>'+
          '<input class="empid_n" value="'+json.records[i].EmpId+'" style="display:none;"></div></div>');
          if (ListIndex == numberofList) {
            $("#loadmorenotesdiv").hide();
          }
          if (ListIndex != numberofList) {
            $("#loadmorenotesdiv").show();
          }
        }
      }
    });
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("showData").style.display = "none";
    document.getElementById("note_log").style.display = "none";
    document.getElementById("showhtml").style.display = "block";
    document.getElementById("loadmorenotesdiv").style.display = "block";
  });
}

function imageFailedLoad_note() {
  document.getElementsByClassName("card-title").innerHTML = '<img width="220px" height="210px" style="object-fit:cover;" src="https://pbs.twimg.com/profile_images/425274582581264384/X3QXBN8C.jpeg"><br>';
}


$(document).ready(function() {
  $("button").click(function() {
    $("#showhtml").empty();
    $("#showData").empty();
    $("#re").empty();
    $("#preview").empty();
    document.getElementById("preview").style.display = "none";
  });
});


function openNav() {
  document.getElementById("myNav").style.display = "block";
  document.getElementById("note_log").style.display = "none";
  document.getElementById("navBtn").style.display = "none";
}

function closeNav() {
  document.getElementById("navBtn").style.display = "block";
  document.getElementById("note_log").style.display = "block";
  document.getElementById("myNav").style.display = "none";
}


document.getElementById("leclink").addEventListener("input", PreviewThumb_lec);

function getId(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return 'error';
  }
}

function PreviewThumb_lec() {
  var title = document.getElementById("lectitle").value;
  var refaddress = document.getElementById("leclink").value;
  var cl = document.getElementById("grade").value;
  var sub = document.getElementById("subject").value;
  var emp = document.getElementById("empowered").value;
  document.getElementById("preview_lec").style.display = "block";
  var link = document.getElementById("leclink").value;
  var myId = getId(link);
  if (link != '' && link != 'http://') {
    document.getElementById("preview_lec").innerHTML = '<br><iframe width="100%" src="//www.youtube.com/embed/' + myId + '" frameborder="0" allowfullscreen onerror="failed_img_load_lec()" onload="success_lec()"></iframe><h5 class="a" style="padding-top:5px;" >' + title + '</a></h5>';
  } else {
    return false;
  }
}

function failed_img_load_lec() {
  document.getElementById("preview_thumb_lec").innerHTML = '<div style="min-height:400px;"><img width="220px" height="210px" style="object-fit:cover;" src="https://pbs.twimg.com/profile_images/425274582581264384/X3QXBN8C.jpeg"><br><p id="error_msg" align="center" style="color:red;" >Video failed to load!</p></div>';
  document.getElementById("empowered").disabled = true;
}

function success_lec() {
  document.getElementById("empowered").disabled = false;
}
document.getElementById("empowered").addEventListener("input", ThumbFinal);

function ThumbFinal_lec() {
  var emp = document.getElementById("empowered").value;
  if (emp == 0) {
    document.getElementById("insertt_lec").disabled = true;
  } else {
    document.getElementById("insertt_lec").disabled = false;
  }
}


function enableinput_lec(id) {
  var insert_data_lec = document.getElementById("insert_data_lec");
  var deletecon_lec = document.getElementById("deletecon_lec");
  if (id.value.trim() != "") {
    insert_data_lec.disabled = false;
    deletecon_lec.disabled = false;
  } else {
    insert_data_lec.disabled = true;
    deletecon_lec.disabled = true;
  }
};


var script_url_lec = "https://script.google.com/macros/s/AKfycbzovARmAJqod9O8JKcWqFbIs0y3MvlCgdsPoW7r8p8nbdRneCahk9fcbmi0JOU38hMX/exec";
document.getElementById("insertt_lec").addEventListener("click", insert_value_lec);

function insert_value_lec() {
  var id1 = $("#id_lec").val(); 
  var grade = $("#grade_lec").val();
  var empid = $("#empid_vid").val();
  var row1 = escape($("#lectitle").val());
  var row2 = escape($("#leclink").val());
  var row4 = $("#subject_lec").val();
  var row5 = $("#empowered").val();
  if (row1 != 0 && row2 != 0 && row4 != 0 && row5 != 0) {
    var url = script_url_lec + "?callback=ctrlq_lec&id_lec=" + id1 + "&grade=" + grade + "&subject=" + row4 + "&lectitle=" + row1 + "&leclink=" + row2 + "&empowered=" + row5 + "&empid_vid=" + empid +"&action=insertLec";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
    document.getElementById("myNav_lec").style.display = "none";
    document.getElementById("Insertion_lec").style.display = "block";
    document.getElementById("Insertion_lec").innerHTML = "Insertion successful!";
    document.getElementById("lec_log").style.display = "block";
    document.getElementById("navBtn").style.display = "block";
    document.getElementById("editwall_lec").reset();
    var ednmstr = document.getElementById('m_id_lec').innerText;
    var ednm = ednmstr.split(':');
    document.getElementById('empowered').value= ednm[1];
  } else {
    return false;
  }
  setTimeout(function() {
    $('#Insertion_lec').fadeOut('fast');
  }, 2000);
}

function genId_lec() {
  document.getElementById("id_lec").value = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function delete_value_lec() {
  $("#re_lec").css("visibility", "hidden");
  document.getElementById("loader_lec").style.visibility = "visible";
  $('#mySpinner_lec').addClass('spinner');
  var id1 = $("#id_lec").val();
  var lectitle = $("#lectitle").val();
  var url = script_url_lec + "?callback=ctrlq_lec&id_lec=" + id1 + "&lectitle=" + lectitle + "&action=deleteLec";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}

function ctrlq_lec(e) {
  $("#re_lec").html(e.result);
  $("#re_lec").css("visibility", "visible");
}

function read_value_lec() {
  $("#re_lec").css("visibility", "hidden");
  document.getElementById("loader_lec").style.visibility = "visible";
  var url = script_url_lec + "?action=readLec";
  $.getJSON(url, function(json) {});
}

function getId(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return 'error';
  }
}

function show_wall_lec() {
  $("#loadmore_note,#loadmore_lec").show();
  $("#re_lec").css("visibility", "hidden");
  document.getElementById("loader_lec").style.visibility = "visible";
  var url = script_url_lec + "?action=readLec";
  $.getJSON(url, function(json) {
    json.records.reverse();
    var maxresult = json.records.length;
    var resultperList = 12;
    var numberofList = Math.ceil(maxresult / resultperList);
    var ListIndex = 1;
    var btn_lecmore = $("#loadmore_lec");
    var v = 1;
    var currentIndex = ListIndex * resultperList;
    for (v; v <= resultperList; v++) {
      var link = json.records[v].LecLink;
      var title = json.records[v].LecTitle;
      var sub = json.records[v].Subject;
      var grade = json.records[v].Grade;
      var postas = json.records[v].PostAs;
      var vidid = getId(link);
      document.getElementById("showhtml_lec").innerHTML += '<div class="iteamvid "> <div class="card " align="center"><a class="youvidframeout" onclick="showyouvid(this)";"> <div class="card-title holds-iframe">'+
      '<img class="youvubthumb" onerror="this.onerror=null;this.src= `../images/thumbnail.png`;"  src="http://img.youtube.com/vi/'+vidid+'/0.jpg">'+
      '<input class="youvidid" value="'+vidid+'" style="display:none;">'+
      '</div> <div class="card-des"> <h5 style="color:#0c09c9;">' + title + '</h5> </div></a><div class="card-footer"> <p style="color:#44cc00;"><span>&#9673; </span><span>' + sub + ' </span><span style="color:#e65c00">&#9673; </span><span style="color:#e65c00">' + grade + '</span></p><span>Posted as <svg width="20px" height="20px" style="padding-right:4px;color:#0c09c9;" viewBox="0 0 16 16" class="bi bi-clipboard-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" /> <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" /></svg></span><span style="color:#0c09c9;cursor:pointer;" class="empvidnam" onclick="showpoasvid(this);">' + postas + ' </span></div>'+
      '<input class="empid_v" value="'+json.records[v].EmpId+'" style="display:none;"></div></div>';
      $('html,body').animate({
          scrollTop: $("#showhtml_lec").offset().top
        }, 0);
  
  }
    $(btn_lecmore).on("click", function(e) {
      if (ListIndex < numberofList) {
        ListIndex++;
        var i = currentIndex + 1;
        currentIndex = ListIndex * resultperList;
        for (i; i <= currentIndex; i++) {
          var link = json.records[i].LecLink;
          var title = json.records[i].LecTitle;
          var sub = json.records[i].Subject;
          var grade = json.records[i].Grade;
          var postas = json.records[i].PostAs;
          var vidid = getId(link);
          document.getElementById("showhtml_lec").innerHTML += '<div class="iteamvid "><div class="card " align="center"> <a class="youvidframeout" onclick="showyouvid(this)";"><div class="card-title holds-iframe">'+
      '<img class="youvubthumb" onerror="this.onerror=null;this.src= `../images/thumbnail.png`;"  src="http://img.youtube.com/vi/'+vidid+'/0.jpg">'+
      '<input class="youvidid" value="'+vidid+'" style="display:none;">'+'</div><div class="card-des"> <h5 style="color:#0c09c9;">' + title + '</h5> </div></a> <div class="card-footer"> <p style="color:#44cc00;"><span>&#9673; </span><span>' + sub + ' </span><span style="color:#e65c00">&#9673; </span><span style="color:#e65c00">' + grade + '</span></p><span>Posted as <svg width="20px" height="20px" style="padding-right:4px;color:#0c09c9;" viewBox="0 0 16 16" class="bi bi-clipboard-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" /> <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" /></svg></span><span style="color:#0c09c9;cursor:pointer;" class="empvidnam" onclick="showpoasvid(this);">' + postas + ' </span> </div>'+
          '<input class="empid_v" value="'+json.records[i].EmpId+'" style="display:none;"></div></div>';
          if (ListIndex == numberofList) {
            $("#loadmorelecdiv").hide();
          }
          if (ListIndex != numberofList) {
            $("#loadmorelecdiv").show();
          }
        }
      }
    });
    document.getElementById("loader_lec").style.visibility = "hidden";
    document.getElementById("showData_lec").style.display = "none";
    document.getElementById("lec_log").style.display = "none";
    document.getElementById("showhtml_lec").style.display = "block";
    document.getElementById("loadmorelecdiv").style.display = "block";
  });
}

function showpoasnote(label){
  document.getElementById('empnamblk').style.display = "block";
  document.getElementById('empnamblkmain').innerHTML='<div id="loaderempnam" class="spinner-border text-primary"></div>';
  var list=document.getElementsByClassName("empnotenam");
  list = [].slice.call(list); 
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName('empid_n');
  var emid = x[posofinput].value;
  var etake = emid.split('-');
  var et = etake[0];
  var ur1 ="https://script.google.com/macros/s/";
  var ur2="AKfycbwo9dhamwfIFczvhdFS55V613TSRttO8CJK4l8SXTCR6a5bPX3SSAcV5K_0kqiJV4F6KA";
  var ur3="AKfycbyUrt3FK__ffY3wUBhcwAk-50uWB327H9UIjstyNmX1_gRGFumWvSKCZvbX4HXb-S76";
  if(et == "ED"){

    var url = ur1+ur2+"/exec"+"?callback=linkpostased&checid="+emid+"&action=rdeduc";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });


  }

  else if(et == "CR"){
    var url = ur1+ur3+"/exec"+"?callback=linkpostasco&chcoid="+emid+"&action=rdcord";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });

  }
}

function showpoasvid(label){
  closeyouvid();
  document.getElementById('empnamblk').style.display = "block";
  document.getElementById('empnamblkmain').innerHTML='<div id="loaderempnam" class="spinner-border text-primary"></div>';
  var list=document.getElementsByClassName("empvidnam");
  list = [].slice.call(list); 
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName('empid_v');
  var emid = x[posofinput].value;
  var etake = emid.split('-');
  var et = etake[0];
  var ur1 ="https://script.google.com/macros/s/";
  var ur2="AKfycbwo9dhamwfIFczvhdFS55V613TSRttO8CJK4l8SXTCR6a5bPX3SSAcV5K_0kqiJV4F6KA";
  var ur3="AKfycbyUrt3FK__ffY3wUBhcwAk-50uWB327H9UIjstyNmX1_gRGFumWvSKCZvbX4HXb-S76";
  if(et == "ED"){

    var url = ur1+ur2+"/exec"+"?callback=linkpostased&checid="+emid+"&action=rdeduc";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });


  }

  else if(et == "CR"){
    var url = ur1+ur3+"/exec"+"?callback=linkpostasco&chcoid="+emid+"&action=rdcord";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });

  }
}

function linkpostased(e){
  var res = e.records;
  if(res != "ID not found!"){
    
   document.getElementById('empnamblkmain').innerHTML ="<div class='empnamblck'><div><span><img class='empnamimg' onerror='this.onerror=null;this.src= `../images/logoCircleBW.png`'  src="+res[0].ProfilePic+"></span>"+
"<div class='empnaminfo'><span class='empnamtitle'>"+res[0].FName+" "+res[0].LName+"</span><br><span class='empnamlitinfo'>&#9679; "+ res[0].Board + " &#9679; "+res[0].Class+" &#9679; "+res[0].Subject+
"</span><p style='margin-top:10px;'><a target='_blank' href='https://educator.mastrowall.com'><span class='empnamblcsign'>Educator</span></a></p></div></div>"
  }
}

function linkpostasco(e){
  var res = e.records;
  if(res != "ID not found!"){
    
    document.getElementById('empnamblkmain').innerHTML ="<div class='empnamblck'><div><span><img class='empnamimg' onerror='this.onerror=null;this.src= `../images/logoCircleBW.png`'  src="+res[0].ProfilePic+"></span>"+
    "<div class='empnaminfo'><span class='empnamtitle'>"+res[0].FName+" "+res[0].LName+"</span><br><span class='empnamlitinfo'>&#9679; "+ res[0].Board + " &#9679; "+res[0].Class+" &#9679; "+res[0].Subject+
    "</span><p style='margin-top:10px;'><a target='_blank' href='https://coordinator.mastrowall.com'><span class='empnamblcsignco'>Coordinator</span></a></p></div></div>"
  }
}


function showyouvid(label){
  document.getElementById('iframeholder').style.display="block";
var list=document.getElementsByClassName("youvidframeout");
  list = [].slice.call(list); 
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName('youvidid');
 var vidid =  x[posofinput].value;
 document.getElementById('youvidfrid').src ="https://www.youtube.com/embed/"+vidid;
 
}

function closeyouvid(){
  $('#iframeholder').hide();
}


$('#empnamblk').click(function(){
$('#empnamblk').hide();
});


$('#minmzyouvidfrm').click(function(){
  document.getElementById('iframeholder').style.top="0px";
  document.getElementById('iframeholder').style.width="33%";
  document.getElementById('iframeholder').style.height="100%";
  document.getElementById('iframeholder').style.left="0px";
  document.getElementById('iframeholder').style.position="fixed";
  document.getElementById('minmzyouvidfrm').style.display = "none";
  document.getElementById('maxmzyouvidfrm').style.display = "block";
 document.getElementById('youvidfrid').style.height="300px";
  });

  $('#maxmzyouvidfrm').click(function(){
    document.getElementById('iframeholder').style.top="0px";
    document.getElementById('iframeholder').style.width="100%";
    document.getElementById('iframeholder').style.height="100%";
    document.getElementById('iframeholder').style.left="0px";
    document.getElementById('iframeholder').style.position="fixed";
    document.getElementById('minmzyouvidfrm').style.display = "block";
    document.getElementById('maxmzyouvidfrm').style.display = "none";
    document.getElementById('youvidfrid').style.height="400px";
 
    });

  $('#clsyouviffrm').click(function(){
    $('#iframeholder').hide();
    document.getElementById('youvidfrid').src = "";
    });
  
var decodedCookie = decodeURIComponent(document.cookie); 
var ca = decodedCookie.split(';'); 
var getcookie = function(){
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].split('mwallced=')[1];
    var d = ca[i].split('mwallcstu=')[1];
  if(c=="true"){
  return true;
  }
    } 
}
if(getcookie() != true){
  $('#note_log,#lec_log').empty();
  $('#content_notes').click(function(){
    show_wall();
  });
  $('#content_lecture').click(function(){
    show_wall_lec();
  });
}