'use strict'
// var $=require("jquery-3.6.3.js")


// $(document).ready(function(){
//   $(".jo").click(function(){
//     // $(this).hide();

// function urlrep(ur,keva,ta=""){

//  var ur1,ke1,ke2
//  for(var k in keva){
//  ke1 = new RegExp(k+"(?=\=)","i")
//  ke2 = new RegExp("(?<="+k+"\=).+(?=[&#\s]|$)","i")
//  ke3 = new RegExp("(?<=/).{3,5}(?=\.html)","i")

//  if(ke1.test(ur)){
//  ur=ur.replace(ke2,keva[k])
//  }else{
//   ur=ur+"&"+k+"="+keva[k]
//  }
//  }
//  if(ta!=""){
//   ur=ur.replace(ke3,ta)
//  }
//  return ur
// }

//     let url ="db.html?t=uni&fi=unit";
//     $(this).load(url);

//   });
// document
//   .getElementById("tad")
//   .addEventListener("keydown", function(event) {
//     if (event.ctrlKey && event.key === "z") {
//       // Do Something, may be an 'Undo' operation
//       $.datepicker()
//     }
// });


$(document).ready(function () {

  var xTriggered = 0;
  $(document).keyup(function(event){
    if ( event.which == 27 ) {
      $("#c9").focus().select()
      }
  })
  $(document).keyup(function (event) {
    if (event.which == 120) {

      const inp = document.activeElement;
      const text = inp.value;
      const start_index = inp.selectionStart;
      const end_index = inp.selectionEnd;
      const previous_space_index = text.lastIndexOf(" ", start_index - 1);
      const next_space_index = text.indexOf("", end_index);
      const begin = previous_space_index < 0 ? 0 : previous_space_index + 1;
      const end = next_space_index < 0 ? text.length : next_space_index;
      const between_spaces = text.substring(begin, end);

      function setSelection(el, begin, end) {
        if ("selectionStart" in el) {
          el.selectionStart = begin;
          el.selectionEnd = end;
        } else if (document.selection) {
          var range = el.createTextRange();
          range.collapse(true);
          range.moveEnd('character', end + 1);
          range.moveStart('character', begin);
          range.select();
        }
      }
      var te = document.activeElement;
      setSelection(te, begin, end)
      function replaceSelectedText(text) {
        var txtArea = document.activeElement;
        if (txtArea.selectionStart != undefined) {
          var startPos = txtArea.selectionStart;
          var endPos = txtArea.selectionEnd;
          var selectedText = txtArea.value.substring(startPos, endPos);
          txtArea.value = txtArea.value.slice(0, startPos) + text + txtArea.value.slice(endPos);
        }
      }
      replaceSelectedText(make_date(between_spaces))
      // window.getSelection().modify( "extend","right", select.value);
      // textarea.innerHTML=textarea.innerHTML.replace(window.getSelection,"ddd")
      // console.log( between_spaces );
      // };
      // alert(between_spaces)

      // $("#c9").focus().select()
    }
  })


  // $("#tad").keyup(function(event){
  //   if ( event.which == 27 ) {
  //     $("#tad").datepicker()
  //     }
  // })
  let vv = $(this).val()
  $("#c9").keyup(function (event) {

    // 
    if (event.which == 13) {  // enter
      var cmd = $("#c9").val()
      // if(/\s/.test(cmd)){
      //   let cmds=cmd.split(" ")
      //   for(let cmd2 in cmds){
      //     cmd3(cmd2)
      //   }
      // }else{
      cmd3(cmd)
      // }
    }
  });

});



//9 $(document).ready(function () {
function cmd3(cmd) {
  var ur=window.location.href
  var cmds=cmd.trim().split(" ")

  if (Object.keys(doo2).includes(cmd)) {
    let di = "#i" + doo2[cmd]["descr"]  // link id
  ur = $(di).attr('href')

  } else if (/^i\d+/.test(cmd)) {
    ur="setnu.html?nu="+cmd.slice(1)+"&uuu="+ur

      
      

  } else if (/^\d{1,2}$/.test(cmd)) {
    //  event.preventDefault();
    let di = "#i" + cmd  // link id
    ur = $(di).attr('href')
    
  } else  {
    ur = "sea.html?t="+$("#tbl").html().trim() +"&sw="+cmd
  }
  if (ur!= undefined) {
    
    return window.location.href = ur
  }
}

function dup() {
  $(":input").select(function () {
    $("div").text("Something was selected").show().fadeOut(1000);
  });
  var allvalue = $('#ac').val();
  var invalue = $("#ac").select();
  alert(JSON.stringify(invalue))
  $('#ac').val(allvalue.replace(invalue, invalue + '\n' + invalue))

}
// })



function newtim(oid) {
  localStorage.setItem('hh', $.now())
  let url = "timins.html?oid=" + oid
  window.location.href = url

  // $(this).css({"color": "green"})
}
function timer() {
  // alert("?")
  let asec = ["-", "\\", "/"]
  let i = 1
  if (document) {

    setInterval(() => {
      if (i < asec.length - 1) {
        i++
      } else {
        i = 0
      }

      localStorage.setItem("sec", asec[i])
      $("#hh").html((($.now() - localStorage.getItem("hh")) / 3600000.0).toFixed(2))
      $("#sec").html(asec[i])

      // $("#sec").html($.now())

    }, 1000);
  }
}
timer()


function isnumb(cmd) {
  if (Number.isFinite(Number(cmd))) {
    return true
  } else {
    return false
  }
}

// select
// $("#c9").focus().select()

// update form fields
$(document).ready(function () {
  $("input:not(#c9), textarea:not(#cadi), select, textarea").change(function () {
    let formnam = $(this).closest("form").attr("name")
    let frmid = $(this).closest("form").attr("id")
    let fie = $(this).attr("name")
    // if ($(this).attr("id")=="c9") {
    //   return
    // }
    if (/[eo]d[kcidp][voey]/.test(fie)) {
      let va = make_date($(this).val())
      $(this).val(va)
    }
    if ($.isNumeric($(this).val().slice(-1))) {
      $(this).val($(this).val().replace(",", "."))
    }

    //  dont update in insert form
    if (frmid != "fff1") {
      if (confirm("Change Data?\nESC = No\nEnter = Yes ")) {


        let url = "updfie.html"
        let vaa = {
          "tblid": formnam,
          "t": formnam.split(".")[0],
          "id": formnam.split(".")[1],

          "fie": fie,
          "val": $(this).val()
        }
        $.get(url, vaa)
        $(this).css({ "border-color": "green" })
        // $("#d5").load(url)
      } else {
        let fie = $(this).val($(this).attr("value"))

      }
    }

  });
});

function make_date(iin) {
  var today = new Date().toISOString().substring(0, 10);
  let yy = today.split("-")[0]
  let mm = today.split("-")[1]
  if (iin == "0") {
    iin = "0"
  } else if (iin == "t") {
    iin = today
  } else if (iin.length == 2) {
    iin = yy + "-" + mm + "-" + iin
  } else if (iin.length == 4) {
    iin = yy + "-" + iin.slice(0, 2) + "-" + iin.slice(2)
  } else if (iin.length == 6) {
    iin = "20" + iin.slice(0, 2) + "-" + iin.slice(2, 4) + "-" + iin.slice(4)
  } else if (iin.length == 1) {
    var today2 = new Date();
    today2.setDate(today2.getDate() - iin);
    iin = today2.toISOString().substring(0, 10)
  } else if (iin == "c") {// cancel
    return
  }


  return iin
}





function mklink(pa, pa2 = "edit") {
  var bt = ` <a href="${pa}">` + pa2 + `</a>`
  return bt
}

function snd2id(idd, vv, addto = 0) {
  if (addto == 0) {
    document.getElementById(idd).innerHTML = vv
  } else {
    document.getElementById(idd).innerHTML += vv
  }
}



function getmax(ar, it = "id") {
  var maxi = 0
  maxi = Math.max(...ar.map(item => item.id))
  snd2id("info2", maxi)
  return maxi
}


