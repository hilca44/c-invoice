'use strict'

//////////////////////////////////////////
//////////////////////////////////////////
const { homedir } = require('os');
 var home = homedir() + "/c-invoice/"
//var home =  "~/c-invoice/"
var ddb = home+"db/"
//////////////////////////////////////////
//////////////////////////////////////////
var express = require('express');
var rou = express.Router()
// const pp = "public/db/"
const pp = ddb

// session
var s = {
  // c: {},  // configuration
  // m: {},
  // a: {},
  // o: {},
  // e: {},
  // n: {},  // session
  // r: {}  // request
}

var conf = require("../public/settings")
var m = require("../public/mod")
var fs = require("fs");
var PDF = require('pdfkit');
var cookieParser = require('cookie-parser');
rou.use(cookieParser('my secret here'));
rou.use(express.urlencoded({ extended: false }))

function loa(s) {
  for (let e of "AOEcmaoenr") {
    if (s[e]) { continue }
    getTblObj(e, function (jjj) {

      s[e] = jjj
    })
  }
  return s
}
var nulll=("" || null || undefined)
dd(ddb)
var fs = require('fs');


if (!fs.existsSync(ddb)){
    fs.mkdirSync(ddb, { recursive: true });
}

s = loa(s)

dd(home)
function restrict2(req, res, next) {
  s.r[0] = req.query
  // 
  if (s.r[0].addto) {
    s.c[0].addto = Number(s.c[0].addto) * -1
  }

  if (
    s.r[0].id!=nulll
    && Number(s.r[0].id) > 0 
    && s.r[0].t
    && "aoe".includes(s.r[0].t)
    ) {
    var rl = s.n[0]["rec" + s.r[0].t]
      if (rl.includes(s.r[0].id) && s.r[0].id>1) {
        //  collect last ids
        rl.splice(rl.indexOf(s.r[0].id), 1)

        rl.unshift(Number(s.r[0].id))
      } else {
        rl.unshift(s.r[0].id)

      }

      if (s.c[0].addto > 0) {
        s.n[0].frm.push(s.r[0].id)
        // } else if(s.r[0].ida){
        //   s.c[0].frm = {}
        //   s.c[0].frm[9999]=conf.def[s.r[0].t]
      } else {
        s.n[0].frm = [s.r[0].id]
      }
    s.n[0]["rec" + s.r[0].t] = rl
  }
  let it = ["a", "o", "t", "e", "m", "z", "n", "i", "f"]
  s.c[0].mainmen = mkmen(req, it)
  if (s.r[0].t) {

    s.c[0].t = s.r[0].t
  }
  // s.c[0].def2 = conf.def2

  // let gg= __path.split("/")
  let tte = __dirname.split("/")
  s.c[0].scrnme = tte.slice(tte.length - 2, tte.length - 1)
  s.dd = dd(s.c[0].nu) // dump
  savObj("r", s.r)
  savObj("n", s.n)
  s.n[0].abbre = makeFileNameFromStr
  // sess.rr1=dd(g)
  res.cookie('remember', 1, {
    maxAge: 60000 * 300
  }); // millisec 60000=60s
  // if (r) {
  res.cookie('q', s.r
  );

  if (req.cookies.remember) {

    next();
  } else {
    // req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}

rou.all("*", restrict2)
///////////////////////


function urlrep(ur, keva, ta, cb) {
  /**
   * 
   */
  var tq = ur.split("?")
  // tq[1]=""
  qs2o(tq[1], function (oo) {
    var ur1, ke1, ke2
    for (var k in keva) {
      ke1 = new RegExp(k + "\=", "i")
      ke2 = new RegExp("(?<=" + k + "\=).+(?=[&]|$)", "i")
      oo[k] = keva[k]
      // if(oo.includes(k)){

      // ur=ur.replace(ke2,keva[k])
      // }else{
      //   ur=ur+"&"+k+"="+keva[k]
      // }
    }
    o2qs(oo, function (u1) {

      var ke3 = new RegExp(".{2,7}(?=\.html)", "i")
      ur = tq[0] + "?" + u1
      if (ta != "") {
        ur = ur.replace(ke3, ta)
      }


      cb(ur)
    })
  })
}

function getPropByString(obj, propString) {
  if (!propString)
    return obj;

  var prop, props = propString.split('.');

  for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
    prop = props[i];

    var candidate = obj[prop];
    if (candidate !== undefined) {
      obj = candidate;
    } else {
      break;
    }
  }
  return obj[props[i]];
}

function mkmen(req, it) {
  let refs = {}
  var bb, cc, aa
  var wll = req.url
  for (let cmd of it) {
    let c = m.doo2[cmd]
    let u = c.targ + ".html?"
    let kv = []
    for (var k in c.keva) {
      let vv = c.keva[k]
      // get obj property from doo2.cmd.keva , f.i r.id=s.r[0].id
      if (/\./.test(c.keva[k])) {
        vv = getPropByString(s, c.keva[k])
      }

      kv.push(k + "=" + vv)
    }
    u += kv.join("&")
    // urlrep(req.url, c.keva, c.targ, function (ui) {
    m.doo2[cmd]["url"] = u
    refs[cmd] = m.doo2[cmd]
    // })
  }
  return refs
}


function getoitfromaccess(tex, cb) {
  var oacc = {
    net: 0, ust: 0, bru: 0, ite: []
  }
  var ltxt = []
  let rows = tex.trim().split("\n")
  for (var roo of rows) {
    if (roo.trim() == "") continue
    let ob = {
      id: 33,
      einh: 1,
      idtpp: 1,
      ep: 0,
      gp: 0,
      amount: 0
    }
    let rr = roo.trim().split(" ")
    ob.item = rows.indexOf(roo)

    ob.einh = rr[1]
    if (/^[a-z]/i.test(roo)) {
      ob.amount = 77
      ob.idtpp = 3
      ob.description = roo
    } else {
      ob.amount = rr[0]
      ob.ep = rr[2]
      ob.gp = rr[0] * rr[2]
      ob.description = rr.slice(3).join(" ")
      // ob.description=roo.split(/(?<=[ ])(?=[ a-z]{5,})/ig)[1]
    }
    oacc.net = Number(eval(oacc.net) + eval(ob.gp)).toFixed(2)
    oacc.ite.push(Object.assign({}, ob))
  }
  oacc.ust = Number(oacc.net * 0.19).toFixed(2)
  oacc.bru = Number(eval(oacc.net) + eval(oacc.ust)).toFixed(2)
  cb(oacc)
}


rou.get('/doc2.html?', function (req, res) {
  s.c[0].oid = s.r[0].id
  let oms = s.m[0]
  s.c[0].doc = s.r[0].doc
  let obje = s.o[s.r[0].id]
  for (let e in s.O[0]) {
    if (!obje[e]) {
      obje[e] = ""
    }
  }
  var cols = 42 //+11//+5
  var iden = 6 + 3 + 9 + 3
  obje["adr"] = s.a[obje["ida"]]["adr"]
  obje["adr"] = obje["adr"].split(/\n\s*/igm).join("\n" + " ".repeat(6))
  getoitfromaccess(obje["ite"], function (oacc) {
    s.c[0].ite = oacc

    let docs = {
      co: {
        nme: " ".repeat(iden + 53) + "AUFTRAGSBESTÄTIGUNG",
        docdate: obje["dco"],
        footer: s.m[0]["abhint"]
      },
      kv: {
        nme: " ".repeat(iden + 41) + "KOSTENVORANSCHLAG",
        docdate: obje["dkv"],
        footer: oms["kvaval"]
      },
      iv: {
        nme: " ".repeat(iden + 50) + "RECHNUNG",
        docdate: obje["div"],
        footer: s.m[0].cpayhint
          + "\n" + " ".repeat(6) + s.m[0].bank_account_holder
          + ", " + s.m[0].bank
          + "\n" + " ".repeat(6) + "IBAN: " + s.m[0].iban
          + "\n" + " ".repeat(6) + "Steuernummer: " + s.m[0].tax_number
      },
      sr: {
        nme: " ".repeat(iden + 62) + "SCHLUSSRECHNUNG",
        docdate: obje["div"],
        footer: s.m[0].cpayhint
          + "\n" + " ".repeat(6) + s.m[0].bank_account_holder
          + ", " + s.m[0].bank
          + "\n" + " ".repeat(6) + s.m[0].iban
          + "\n" + " ".repeat(6) + s.m[0].tax_number
      },
      de: {
        nme: " ".repeat(iden + 62) + "LIEFERSCHEIN",
        docdate: obje["dde"],
        footer: s.m[0].delnote + "\n"
          + "\n..........................................................."
      }
    }

    let doc = s.r[0]["doc"]
    tdy(docs[s.r[0].doc]["docdate"], function (tdd) {
      docs[doc]["docdate"] = tdd
      for (let e in oacc) {
        oms[e] = oacc[e]
      }
      let ree = ""
      for (var ro of oacc.ite) {
        if (doc == "ls") {
          ro.ep = " "
          ro.gp = " "
        }

        if (ro.idtpp == 1) {
          wordwrap(ro.description, cols, iden, " ", function (tw) {
            ree += "\n" + " ".repeat(6)
              + printBox(ro.item, 3) + " "
              + printBox(ro.amount, 6, "r") + " "
              + printBox(ro.einh, 3, "r") + " "
              + printBox(tw[0], 43) + " "
              + printBox(Number(ro.ep).toFixed(2), 9, "r") + " "
              + printBox(Number(ro.gp).toFixed(2), 9, "r")
              + "\n"
            for (let e of tw.slice(1)) {
              ree += " " + " ".repeat(iden)
              ree += printBox(e, 43) + " \n"
            }
          })

          // text
        } else if (ro.idtpp == 3) {
          wordwrap(ro.description, cols, 5, " ", function (tw) {
            // ree += "\n"+" ".repeat(iden) + tw 
            for (let e of tw) {
              ree += " " + " ".repeat(iden)
              ree += printBox(e, 43) + " \n"
            }
          })

        } else if (ro.idtpp == 4) {
          ree += "\n" + " ".repeat(6)
            + printBox(ro.item, 3) + " "
            + printBox(ro.amount, 6, "r") + " "
            + printBox(ro.einh, 3, "r") + " "
            + printBox("", 37) + " "
            + printBox("(" + ro.ep + ")", 9, "r") + " "
            + printBox("(" + ro.gp + ")", 9, "r") + "\n"
          wordwrap("***Bitte extra bestellen, "
            + "diese Position ist nicht im Preis enthalten*** "
            + ro.description, cols, iden, " ", function (tw) {

              ree += tw + "\n"
            })
        }
      }
      // set brub
      s.o[s.r[0].id]["bru"] = Number(oacc["bru"]).toFixed(2)
      savObj("o", s.o)
      let oii = ree
      oms.ro = oii // put oit to adr and ord
      let fn = "views/iv.tpl"
      fs.readFile(fn, 'utf8', (err, sf) => {
        for (let e in docs[doc]) {
          sf = sf.replace("{{" + e + "}}", docs[doc][e])
        }

        for (let e in oacc) {
          let boxx = printBox(Number(oacc[e]).toFixed(2), 12, "r")
          sf = sf.replace("{{" + e + "}}", boxx)
        }

        for (let e in s.O[0]) {
          sf = sf.replace("{{" + e + "}}", obje[e])
        }
        sf = sf.replace("{{iii}}", s.o[s.r[0].id].iii)
        sf = sf.replace("{{adr}}", obje["adr"])
        // must be on the end because of oms iii
        for (let e in oms) {
          let r4 = new RegExp("{{" + e + "}}", 'gim')
          sf = sf.replace(r4, oms[e])
        }
        let fnn = makeFileNameFromStr(obje["ord"], 22)
        s.c[0].fullpa = home + s.r[0].id + "_" + fnn
        wFile(s.c[0].fullpa + ".txt", sf)
        let it = ["p"]
        s.c[0].hmen = mkmen(req, it)

        s.c[0].sf = sf
        s.c[0].rr1 = obje
        s.c[0].rr2 = obje // for pdf
        s.c[0].data = obje // for pdf
        savObj("c", s.c)
        makePdf(s.c[0].sf)
        res.render("ord3", { s })
      });
    });
  });
});


function makeFileNameFromStr(st, maxx = 14, maxwrd = 3, lenfirst = 4) {
  st = st.slice(0, maxx)
  let see = new RegExp(/[=;(,)\[\]]/, "ig")

  // st = st.replace(see, "_")
  st = st.replace(/[,{[()]}]/ig, "_")
  st = st.replace("]", "_")
  st = st.replace("]", "_")
  st = st.replace("\n", "_")
  st = st.replace(/[äöüÄÖÜß]/g, "")
  if (st == null) {
    return ""
  }
  let lst = st.split(/[\s-]/gim)
  let nwd = lst.length
  if (nwd > maxwrd) {
    lst = lst.slice(0, maxwrd)
    nwd = maxwrd
  }
  let lre = []
  let re = ""
  let eachwrd = Math.ceil(maxx / nwd)
  for (let e of lst) {
    let firs = e.slice(0, lenfirst)
    let seco = e.slice(lenfirst)
    seco = seco.replace(/[aeiou]/gi, '');
    e = firs + seco
    if (e.length > 4) {
      e = e.slice(0, eachwrd)

    }
    lre.push(e)

  }
  re = lre.join("_")
  return re
}

rou.get('/downl.html?', function (req, res) {
  dd(s.c[0].pa)
  res.download(s.c[0].pa)
});


rou.get('/setnu.html?', function (req, res) {
  s.c[0].nu = req.query.nu
  res.redirect(s.r[0].uuu + "&xx")
});

rou.get('/setdb.html?', function (req, res) {
  loa(s)
  res.redirect(s.r[0].uuu + "&xx")
});


rou.get('/removefromview.html?', function (req, res) {
  s.n[0].frm.splice(s.n[0].frm.indexOf(s.r[0].id), 1)
  res.redirect("form.html?t=" + s.c[0].t)
});


rou.get('/newexp.html?', function (req, res) {
  res.redirect('form.html?t=e&cp=2&ida=' + s.n[0].reca[0])
});


rou.get('/pdf.html?', function (req, res) {
  // get adr

  res.redirect("downl.html?t=" + s.r[0].t)
});


function getMaxOfObjKeys(obj) {
  return Math.max(...Object.keys(obj))
}


rou.get('/wFile.html?', function (req, res) {
  let mx = 0
  let nid, ur

  // for copy and new
  if (s.r[0].cp > 0) {
    let mx = getMaxOfObjKeys(s[s.r[0].t])
    nid = mx + 1
    var oj = {}
    for (let e in s[s.r[0].t.toUpperCase()][0]) {
      oj[e] = s.r[0][e]
    }
    oj["iii"] = nid
    s[s.r[0].t][nid] = oj
    s.c[0].cp = 0

    // for edit
  } else {
    for (let e in s[s.r[0].t.toUpperCase()][0]) {
      s[s.r[0].t][s.r[0].iii][e] = s.r[0][e]
    }
  }
  savObj(s.r[0].t, s[s.r[0].t])
  savObj("c", s.c)
  savObj("n", s.n)

  if (s.r[0].t == "e") {
    ur = "form.html?t=e&cp=2"
  } else {
    ur = "show.html?t=" + s.r[0].t + "&max=" + mx
  }
  res.redirect(ur)
})


rou.get('/form.html?', function (req, res) {
  s.c[0].cp = 0
  if (s.r[0].cp) {
    s.c[0].cp = s.r[0].cp
  }

  s.c[0].prbo = printBox
  s.c[0].rr = s[s.r[0].t][s.r[0].id]
  s.c[0].def = conf.def[s.r[0].t]
  let it = ["k", "b", "r", "c", "ne", "ad"]
  s.c[0].hmen = mkmen(req, it)
  s.c[0].addto = -1
  res.render("frm", { s });
})

function dd(ppj, descr = 'ch-log') {
  let rr = JSON.stringify(ppj)
  console.log(rr)
  return rr
}


function wFile(fn, st) {
  fs.writeFile(fn, st, (err) => {
    if (err) {
      console.log(err);
    }
  })
}

function savObj(fn, ob) {
  /**
   * fn=name, fi, "c"
   */
  fs.writeFile(
    pp + fn + ".json",
    JSON.stringify(ob, null, " "),
    (err) => {
      if (err) {
        console.log(err);
      }
    })
  dd(pp + fn)
}


rou.get('/show.html?*', function (req, res) {
  savObj("c", s.c)
  let it = ["o2"]
  s.c[0].hmen = mkmen(req, it)
  s.c[0].reg = new RegExp(s.r[0].sw, "ig")
  s.c[0].ooak = Object.keys(s[s.r[0].t]).reverse().slice(0, 22)
  s.c[0].ooakk = Object.keys(s[s.r[0].t][0]).slice(0, s.c[0].nu)
  res.render("sho", { s });
});


function getTblObj(tbl, cb) {
  let fle = ddb + tbl + ".json"
  if (!fs.existsSync(fle)) {
    let ob = {}
    ob["0"] = conf.def[tbl.toUpperCase()]

    // savObj(tbl, ob)
    dd(fle)
    fs.writeFile(fle, JSON.stringify(ob, null, " "), function (err) {
      if (err) {
        console.log(err)
      }
    })
    return loa(s)

  } else {
    dd('read')
    fs.readFile(fle, 'utf8', (err, oobs) => {
      let ret = JSON.parse(oobs.toString())
      cb(ret)
    })
  }
}

function findSw(sw, cb) {
  var reg = new RegExp(sw, "igm")
  s.c[0].Regex2 = reg
  var rr = []
  var tt = s[s.r[0].t]
  for (let e in tt) {
    var ob = 0
    for (let ee in tt[e]) {
      let tx
      if (ee == "ida") {
        // dd(tt[e][ee])
        tx = s.a[tt[e][ee]]["adr"]
      } else {
        tx = tt[e][ee]
      }
      if (reg.test(tx)) {
        ob++
      }
    }
    if (ob > 0) {
      rr.push(e)
    }
  }

  cb(rr)
}

rou.get('/sea.html?*', function (req, res) {
  // if (s.r[0].sw.slice(0, 4) == "lim") {
  //   lim = s.r[0].sw.split(4)
  // }
  s.r[0].t = s.c[0].t

  findSw(s.r[0].sw, function (rr) {

    s.c[0].seaa = rr.reverse()
    res.render("sea", { s })
  })
});


function printBox(st, wid, al = "l", il = ' ', fix = 0) {
  let re = "", diff = 0
  if (st == null) {
    st = "\n"
  }
  if (fix > 0) {
    st = Number(st).toFixed(fix)
  }
  let lenn = st.toString().length
  diff = (wid - lenn)
  if (lenn > wid) {
    return re = String(st).slice(0, wid)
  }
  // console.log("diff"+diff)
  if (al == "l") {
    re = st + il.repeat(diff)
  } else if (al == "r") {
    re = il.repeat(diff) + st
  }
  return re
}


function wordwrap(str, cols, ind = 6, splitter = " ", callback) {
  var formatedString = ''
  var aw = []
  var currl = ""
  var atext = [];
  if (str == null) {
    return ""
  }
  splitter = /\s/
  aw = str.split(splitter);
  for (var e of aw) {
    let ll = (currl + e).length
    if (ll <= cols) {
      currl += ' ' + e;
    } else {
      atext.push(currl)
      currl = e
    }
  }
  atext.push(currl)
  formatedString = " ".repeat(ind) + atext.join("\n" + " ".repeat(ind + 1))
  // callback(formatedString)
  callback(atext)
}


function qs2o(qs, cb) {
  /**
   * querystring to object
   */
  var ob = {}
  for (var a of qs.split("&")) {
    var aa = a.split("=")
    ob[aa[0]] = aa[1]
  }
  cb(ob)
}

function o2qs(ob, cb) {
  /*
  obj to query string
  */
  var st, qs
  var aa = []
  for (var a in ob) {
    st = a + "=" + ob[a]
    if (ob[a] != null
    ) {
      aa.push(st)
    }
  }
  qs = aa.join("&")
  cb(qs)
}


function makePdf(text) {

  var text = s.c[0].sf

  let pdfs = {
    size: 'A4',
    margin: 11,
    font: 'Courier'
  }
  var doc = new PDF(pdfs); //creating a new PDF object
  s.c[0].pa = s.c[0].fullpa + '.pdf'
  doc.pipe(fs.createWriteStream(s.c[0].pa)); //creating a write stream
  // doc.pipe(fs.createWriteStream(sess.rr2)); //creating a write stream
  //to write the content on the file system
  doc.fontSize(10)
  doc.text(text, {
    align: 'left',
    continued: true
    // more things can be added here including new pages
  }); //adding the text to be written,
  doc.end(); //we end the document writing.
  tdy(s.o[s.r[0].id]["d" + s.r[0].doc], function (tdd) {
    s.o[s.r[0].id]["d" + s.r[0].doc] = tdd
  });
}

function tdy(dat, cb) {
  if (dat == "") {
    let d = new Date()
    let td = d.toISOString().slice(0, 10)
    cb(td)
  } else {
    cb(dat)
  }
}

module.exports = rou// important
