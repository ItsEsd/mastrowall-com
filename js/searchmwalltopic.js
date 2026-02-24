$(document).ready(function () {
  setTimeout(function () {
    var furl = "https://script.google.com/macros/s/";
    var aplec =
      "AKfycbxmsOyDjjcCXu0O1l3l2_FjoaTm8f650MGD7jX0wxzsWNchamdybBuPwqvg5JfAq7e9/exec";
    var apnote =
      "AKfycbwVY8W9kRA5EXGEoFJApnqurbiIfSjewQxEz0OPnStDgIi29QASCaX_SW7V4AWCKoC5BA/exec";
    var url =
      "https://api.amrit-corp.com/_header/gate/mastrowall/?target_url=" +
      encodeURIComponent(furl + apnote + "?action=read");
    var url2 =
      "https://api.amrit-corp.com/_header/gate/mastrowall/?target_url=" +
      encodeURIComponent(furl + aplec + "?action=readLec");
    document
      .getElementById("srctopichead")
      .setAttribute("placeholder", "Loading topics ..");
    $.getJSON(url2, function (json) {
      var maxsearchVid = json.records.length;
      var k = 0;
      var topicVid = [];
      var alldatavid = [];
      for (k; k < maxsearchVid; k++) {
        topicVid.push(json.records[k].LecTitle);
        alldatavid.push(json.records[k]);
      }
      var topV = topicVid;
      $.getJSON(url, function (json) {
        var maxsearchNote = json.records.length;
        var z = 0;
        var topicNote = [];
        var alldatant = [];
        for (z; z < maxsearchNote; z++) {
          topicNote.push(json.records[z].NotesTitle);
          alldatant.push(json.records[z]);
        }
        var inpelem = document.createElement("input");
        inpelem.id = "rrdata";
        inpelem.style.display = "none";
        inpelem.value = JSON.stringify(alldatavid.concat(alldatant));

        document.body.appendChild(inpelem);
        var topN = topicNote;
        var topic = topV.concat(topN);
        function autocomplete(inp, arr) {
          var currentFocus;
          inp.addEventListener("input", function (e) {
            var a,
              b,
              i,
              val = this.value;
            closeAllLists();
            if (!val) {
              return false;
            }
            currentFocus = -1;
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);
            for (i = 0; i < arr.length; i++) {
              if (
                arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
              ) {
                b = document.createElement("DIV");
                b.innerHTML =
                  "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += '<input type="hidden" value="' + arr[i] + '">';
                b.addEventListener("click", function (e) {
                  inp.value = this.getElementsByTagName("input")[0].value;
                  closeAllLists();
                });
                a.appendChild(b);
              }
            }
          });
          inp.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
              currentFocus++;
              addActive(x);
            } else if (e.keyCode == 38) {
              currentFocus--;
              addActive(x);
            } else if (e.keyCode == 13) {
              e.preventDefault();
              if (currentFocus > -1) {
                if (x) x[currentFocus].click();
              }
            }
          });

          function addActive(x) {
            if (!x) return false;
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = x.length - 1;
            x[currentFocus].classList.add("autocomplete-active");
          }

          function removeActive(x) {
            for (var i = 0; i < x.length; i++) {
              x[i].classList.remove("autocomplete-active");
            }
          }

          function closeAllLists(elmnt) {
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
              if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
              }
            }
          }
          document.addEventListener("click", function (e) {
            closeAllLists(e.target);
          });
        }
        var todtop = autocomplete(
          document.getElementById("srctopichead"),
          topic,
        );
        document
          .getElementById("srctopichead")
          .setAttribute("placeholder", "Topic Search");
      });
    });
  }, 5000);
});
topicsearchmw.addEventListener("submit", (event) => {
  result_tp();
});

function result_tp() {
  document.getElementById("loader").style.display = "none";
  $("#re").show();
  $("#search_results").empty();
  $("#search_results_vid").empty();
  $("#search_results_not").empty();
  $("#mwallresult").show();
  var search = $("#srctopichead").val();
  if (search != 0) {
    document.getElementById("loader").style.display = "block";
    document.getElementById("loader").style.visibility = "visible";
    var rawdata = JSON.parse($("#rrdata").val());
    var maxReVid = rawdata.length;
    var v = 0;
    for (v; v < maxReVid - 1; v++) {
      if (rawdata[v].LecTitle === search || rawdata[v].NotesTitle === search) {
        if (rawdata[v].LecTitle === search) {
          $("#search_results_not").empty();
          var link = rawdata[v].LecLink;
          var title = rawdata[v].LecTitle;
          var sub = rawdata[v].Subject;
          var grade = rawdata[v].Grade;
          var postas = rawdata[v].PostAs;
          var vidid = getId(link);
          document.getElementById("search_results_vid").innerHTML =
            '<div class="iteamvid "> <div class="card " align="center"> <div class="card-title holds-iframe"><iframe src="//www.youtube.com/embed/' +
            vidid +
            '" frameborder="0" allowfullscreen ></iframe></div> <div class="card-des"> <h5 style="color: #0c09c9; padding-bottom:10px;">' +
            title +
            '</h5> </div> <div class="card-footer"> <p style="color:#44cc00;"><span>&#9673; </span><span>' +
            sub +
            ' </span><span style="color:#e65c00">&#9673; </span><span style="color:#e65c00">' +
            grade +
            '</span></p><span>Posted as <svg width="20px" height="20px" style="padding-right:4px;color:#0c09c9;" viewBox="0 0 16 16" class="bi bi-clipboard-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" /> <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" /></svg></span><span style="color:#0c09c9;cursor:pointer;" class="empvidnam" onclick="showpoasvid(this);">' +
            postas +
            " </span></div>" +
            '<input class="empid_v" value="' +
            rawdata[v].EmpId +
            '" style="display:none;"></div></div>';
          document.getElementById("loader").style.visibility = "hidden";
          document.getElementById("loader").style.display = "none";
          break;
        } else if (rawdata[v].NotesTitle === search) {
          $("#search_results_not").empty();
          document.getElementById("search_results").innerHTML =
            '<div class="iteam "><div class="card " align="center"> <div class="card-title " id="cardheader"><a target="_blank" href="' +
            rawdata[v].NotesLink +
            '"><img class="swall card-img-top" onerror="this.onerror=null;this.src= `../images/thumbnail.png`;" id="thumbPic" src="' +
            rawdata[v].NotesPic +
            '" height="220px" ></a></div> <div class="card-des"><a target="_blank" href="' +
            rawdata[v].NotesLink +
            '"><h5 style="color:#0c09c9;">' +
            rawdata[v].NotesTitle +
            '</h5></a></div> <div class="card-footer"><p style="color:#44cc00;"><span>&#9673; </span><span>' +
            rawdata[v].Subject +
            ' </span><span style="color:#e65c00">&#9673; </span><span style="color:#e65c00">' +
            rawdata[v].Grade +
            '</span></p><span>Posted as <svg width="20px" height="20px" style="padding-right:4px;color:#0c09c9;" viewBox="0 0 16 16" class="bi bi-clipboard-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/></svg></span><span style="color:#0c09c9;cursor:pointer;" class="empnotenam" onclick="showpoasnote(this);">' +
            rawdata[v].PostAs +
            " </span></div>" +
            '<input class="empid_n" value="' +
            rawdata[v].EmpId +
            '" style="display:none;"></div></div><br><br>';
          document.getElementById("loader").style.visibility = "hidden";
          document.getElementById("loader").style.display = "none";
          break;
        }
      } else {
        document.getElementById("search_results_not").innerHTML =
          "<div class='nocontentmwall'>No content found!</div>";
        document.getElementById("loader").style.visibility = "hidden";
        document.getElementById("loader").style.display = "none";
      }
    }
  }
}

function getId(url) {
  var regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return "error";
  }
}

document.body.addEventListener("click", closetopicsrcwall);

function closetopicsrcwall(event) {
  var searchResultsDiv = document.querySelector("#search_results");
  var searchResultsDivVD = document.querySelector("#search_results_vid");
  var searchResultsDivNT = document.querySelector("#search_results_not");
  var isClickedOutside = !searchResultsDiv.contains(event.target);
  var isClickedOutsideVD = !searchResultsDivVD.contains(event.target);
  var isClickedOutsideNT = !searchResultsDivNT.contains(event.target);

  if (isClickedOutside || isClickedOutsideVD || isClickedOutsideNT) {
    $("#mwallresult").hide("fast");
    $("#search_results").empty();
    $("#search_results_vid").empty();
  }
}

function showpoasnote(label) {
  document.getElementById("empnamblk").style.display = "block";
  document.getElementById("empnamblkmain").innerHTML =
    '<div id="loaderempnam" class="spinner-border text-primary"></div>';
  var list = document.getElementsByClassName("empnotenam");
  list = [].slice.call(list);
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName("empid_n");
  var emid = x[posofinput].value;
  var etake = emid.split("-");
  var et = etake[0];
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbwo9dhamwfIFczvhdFS55V613TSRttO8CJK4l8SXTCR6a5bPX3SSAcV5K_0kqiJV4F6KA";
  var ur3 =
    "AKfycbyUrt3FK__ffY3wUBhcwAk-50uWB327H9UIjstyNmX1_gRGFumWvSKCZvbX4HXb-S76";
  if (et == "ED") {
    var url =
      ur1 +
      ur2 +
      "/exec" +
      "?callback=linkpostased&checid=" +
      emid +
      "&action=rdeduc";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  } else if (et == "CR") {
    var url =
      ur1 +
      ur3 +
      "/exec" +
      "?callback=linkpostasco&chcoid=" +
      emid +
      "&action=rdcord";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  }
}

function showpoasvid(label) {
  document.getElementById("empnamblk").style.display = "block";
  document.getElementById("empnamblkmain").innerHTML =
    '<div id="loaderempnam" class="spinner-border text-primary"></div>';
  var list = document.getElementsByClassName("empvidnam");
  list = [].slice.call(list);
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName("empid_v");
  var emid = x[posofinput].value;
  var etake = emid.split("-");
  var et = etake[0];
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbwo9dhamwfIFczvhdFS55V613TSRttO8CJK4l8SXTCR6a5bPX3SSAcV5K_0kqiJV4F6KA";
  var ur3 =
    "AKfycbyUrt3FK__ffY3wUBhcwAk-50uWB327H9UIjstyNmX1_gRGFumWvSKCZvbX4HXb-S76";
  if (et == "ED") {
    var url =
      ur1 +
      ur2 +
      "/exec" +
      "?callback=linkpostased&checid=" +
      emid +
      "&action=rdeduc";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  } else if (et == "CR") {
    var url =
      ur1 +
      ur3 +
      "/exec" +
      "?callback=linkpostasco&chcoid=" +
      emid +
      "&action=rdcord";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  }
}

function linkpostased(e) {
  var res = e.records;
  if (res != "ID not found!") {
    document.getElementById("empnamblkmain").innerHTML =
      "<div class='empnamblck'><div><span><img class='empnamimg' onerror='this.onerror=null;this.src= `../images/logoCircleBW.png`'  src=" +
      res[0].ProfilePic +
      "></span>" +
      "<div class='empnaminfo'><span class='empnamtitle'>" +
      res[0].FName +
      " " +
      res[0].LName +
      "</span><br><span class='empnamlitinfo'>&#9679; " +
      res[0].Board +
      " &#9679; " +
      res[0].Class +
      " &#9679; " +
      res[0].Subject +
      "</span><p style='margin-top:10px;'><a target='_blank' href='https://educator.mastrowall.com'><span class='empnamblcsign'>Educator</span></a></p></div></div>";
  }
}

function linkpostasco(e) {
  var res = e.records;
  if (res != "ID not found!") {
    document.getElementById("empnamblkmain").innerHTML =
      "<div class='empnamblck'><div><span><img class='empnamimg' onerror='this.onerror=null;this.src= `../images/logoCircleBW.png`'  src=" +
      res[0].ProfilePic +
      "></span>" +
      "<div class='empnaminfo'><span class='empnamtitle'>" +
      res[0].FName +
      " " +
      res[0].LName +
      "</span><br><span class='empnamlitinfo'>&#9679; " +
      res[0].Board +
      " &#9679; " +
      res[0].Class +
      " &#9679; " +
      res[0].Subject +
      "</span><p style='margin-top:10px;'><a target='_blank' href='https://coordinator.mastrowall.com'><span class='empnamblcsignco'>Coordinator</span></a></p></div></div>";
  }
}
$("#empnamblk").click(function () {
  $("#empnamblk").hide();
});
