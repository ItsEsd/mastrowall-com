 /* M A S T R O W A L L */
 var url_string = window.location.href;
  var url = new URL(url_string);
  var q = url.searchParams.get("srvc");
  var d = url.searchParams.get("ed");
  var i = window.atob(d);
  if(q =="true"){
    getedlinkNT(i);
  }
var dd = url_string.split("#t/");
if(dd[1]!=""){
  document.getElementById('idlogedu_lec').value= window.atob(dd[1]);
  document.getElementById('idlogedu_note').value=window.atob(dd[1]);
  document.getElementById("upedit_edu_note").disabled = false;
  document.getElementById("upedit_edu").disabled = false;
}
  function getedlinkNT(edlnk){
        $("#re_lec").css("visibility", "hidden");
        document.getElementById("loader").style.visibility = "visible";
        var script_url_lec = "https://script.google.com/macros/s/AKfycbzovARmAJqod9O8JKcWqFbIs0y3MvlCgdsPoW7r8p8nbdRneCahk9fcbmi0JOU38hMX/exec";
        var script_url = "https://script.google.com/macros/s/AKfycby7WMOvKX38co6FPL3RWMYq7YZvzlqA6zLAx6u3xFIJeSnP4W-HJZqOsF38GD1ztzlFUA/exec";
        var url = script_url + "?action=read";
        var url2 = script_url_lec + "?action=readLec";
        $("#loadmore_note,#loadmore_lec").hide();
        $("#showhtml,#showhtml_lec").show();
        $.getJSON(url2, function(json) {
          var maxsearchVid = json.records.length;
          var k = 0;
          var topicVid = []; var alldatavid= [];
          for (k; k < maxsearchVid; k++) {
          topicVid.push(json.records[k]);
          alldatavid.push(json.records[k]); } 
          var topV = topicVid;
          $.getJSON(url, function(json) {
            var maxsearchNote = json.records.length;
            var z = 0;
            var topicNote = [];var alldatant= [];
            for (z; z < maxsearchNote; z++) {
              topicNote.push(json.records[z]);
              alldatant.push(json.records[z]);
            }
            var topN = topicNote; 
            var topic = topV.concat(topN);
            var maxresult = topic.length;
            var r = 0;
            for (r; r < maxresult; r++) {
                  if(topic[r].EmpId===edlnk && topic[r].LecTitle==undefined){ 
                  $("#showhtml").append('<div class="iteam "><div class="card " align="center"> <div class="card-title " id="cardheader"><a target="_blank" href="' + topic[r].NotesLink + '"><img class="swall card-img-top" onerror="this.onerror=null;this.src= `../images/thumbnail.png`;" id="thumbPic" src="' + topic[r].NotesPic + '" height="220px" ></a></div> <div class="card-des"><a target="_blank" href="' + topic[r].NotesLink + '"><h5 style="color:#0c09c9;">' + topic[r].NotesTitle + '</h5></a></div> <div class="card-footer"><p style="color:#44cc00;"><span>&#9673; </span><span>' + topic[r].Subject + ' </span><span style="color:#e65c00">&#9673; </span><span style="color:#e65c00">' + topic[r].Grade + '</span></p><span>Posted as <svg width="20px" height="20px" style="padding-right:4px;color:#0c09c9;" viewBox="0 0 16 16" class="bi bi-clipboard-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/></svg></span><span style="color:#0c09c9;cursor:pointer;" class="empnotenam" onclick="showpoasnote(this);">' + topic[r].PostAs + ' </span></div>'+
                  '<input class="empid_n" value="'+topic[r].EmpId+'" style="display:none;"></div></div>');
                  }else if(topic[r].EmpId===edlnk && topic[r].NotesTitle==undefined){
                  var link = topic[r].LecLink;
                  var title = topic[r].LecTitle;
                  var sub = topic[r].Subject;
                  var grade = topic[r].Grade;
                  var postas = topic[r].PostAs;
                  var vidid = getId(link);
                  $("#showhtml_lec").append( '<div class="iteamvid "> <div class="card " align="center"><a class="youvidframeout" onclick="showyouvid(this)";"> <div class="card-title holds-iframe">'+
                  '<img class="youvubthumb" src="http://img.youtube.com/vi/'+vidid+'/0.jpg">'+
                  '<input class="youvidid" value="'+vidid+'" style="display:none;">'+
                  '</div> <div class="card-des"> <h5 style="color:#0c09c9;">' + title + '</h5> </div></a><div class="card-footer"> <p style="color:#44cc00;"><span>&#9673; </span><span>' + sub + ' </span><span style="color:#e65c00">&#9673; </span><span style="color:#e65c00">' + grade + '</span></p><span>Posted as <svg width="20px" height="20px" style="padding-right:4px;color:#0c09c9;" viewBox="0 0 16 16" class="bi bi-clipboard-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" /> <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" /></svg></span><span style="color:#0c09c9;cursor:pointer;" class="empvidnam" onclick="showpoasvid(this);">' + postas + ' </span></div>'+
                  '<input class="empid_v" value="'+topic[r].EmpId+'" style="display:none;"></div></div>');
                  }
                  $('html,body').animate({
                  scrollTop: $("#showhtml").offset().top
                  }, 0);
                      }
            document.getElementById("loader").style.visibility = "hidden";
            }); });
  }