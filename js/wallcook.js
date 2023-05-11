    var decodedCookie = decodeURIComponent(document.cookie); 
    var ca = decodedCookie.split(';'); 
    for (var i = 0; i < ca.length; i++) {
       var c = ca[i].split('mwallced=')[1];
       var d = ca[i].split('mwallcstu=')[1];
    if(c=="true"){
        actionforuser();
        rmvrestrictfn();
    }
    else if(d=="true"){
      actionforuser();
    }
      } 
  function actionforuser(){
    $('#intro').slideUp('slow');
  }
  
  function rmvrestrictfn(){
    $('#chexid,#chkey,#conexedited').removeAttr('disabled');
    $('#eduname,#extitle,#exdescp,#timedurhr,#timedurmin,#edueid,#crtidone').removeAttr('disabled');
  }
   
  var url_string = window.location.href;
  var url = new URL(url_string);
  var q = url.searchParams.get("onlineTest");
  if(q =="true"){
      $('.otservice').show();
      $('#falsesecback').show();
  }

  var decodedCookie = decodeURIComponent(document.cookie); 
  var ca = decodedCookie.split(';');
  function chkck(){for (var i = 0; i < ca.length; i++) {
     var c = ca[i].split('mwallced=')[1];
     var d = ca[i].split('mwallcstu=')[1];
  if(c =="true" || d =="true"){
    return true;
  }}}
  if(chkck() !=true){
   /// Do restriction
  }
  /*
      $(document).ready(function(){
        var cookies = document.cookie.split(";");
          for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i];
              var eqPos = cookie.indexOf("=");
              var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
              document.cookie = name + "=true;"+"expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
          }
      });
      */