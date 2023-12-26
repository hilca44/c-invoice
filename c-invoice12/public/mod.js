

var doo2 = {
    "ad": { targ: "show", keva: {t:"r.0.t", addto: -1 }, descr: "Add" },
    "a": { targ: "show", keva: { t: "a" }, descr: "Adr" },
    "m": { targ: "show", keva: { t: "m" }, descr: "Adm" },
    "f": { targ: "show", keva: { t: "c" }, descr: "Config" },
    "o": { targ: "show", keva: { t: "o" }, descr: "Ord" },
    "o2": { targ: "show", keva: { t: "ord2" }, descr: "OrdBup" },
    "ox": { targ: "showo", keva: { t: "o" }, descr: "Ord" },
    "db": { targ: "db", keva: { t: "o" }, descr: "DB" },
    "t": { targ: "show", keva: { t: "o" }, descr: "ToDo" },
    "j": { targ: "cad", keva: { t: "cad", id: 2 }, descr: "CAD" },
    "ti": { targ: "show", keva: { t: "tim" }, descr: "Time" },
    "no": { targ: "newexp", keva: { cp: 2, t: "o" }, descr: "NewOrd" },
    "i": { targ: "show", keva: { nu: 2, t: "o" }, descr: "i3" },
    "ne": { targ: "newexp", keva: { t: "e", ida:"n.reca.0" }, descr: "NewExp" },
    "si": { targ: "new", keva: { t: "e" }, descr: "NewExp" },
    "b": { targ: "doc2", keva: { t: "o", doc: "co", id:"r.0.id"  }, descr: "AB" },
    "k": { targ: "doc2", keva: { t: "o", id: "r.0.id", doc: "kv" }, descr: "KVA" },
    "r": { targ: "doc2", keva: { t: "o", doc: "iv", id:"r.0.id" }, descr: "Rech" },
    "sr": { targ: "doc2", keva: { t: "o", doc: "sr", id:"r.0.id"  }, descr: "SchlussRech" },
    "se": { targ: "set", keva: { t: "o", doc: "ls" , id:"r.0.id" }, descr: "Set" },
    "ls": { targ: "doc2", keva: { t: "o", doc: "de" }, descr: "LS" },
    "p": { targ: "pdf", keva: { pdf: 1, t: "o", id:"r.0.id"  }, descr: "PDF" },
    "rr": { targ: "restart", keva: { t: "o" }, descr: "pm2Restart" },
    "e": { targ: "show", keva: { t: "e" }, descr: "Exp" },
    "e2": { targ: "show", keva: { t: "exp2" }, descr: "ExpBup" },
    "nu": { targ: "", keva: { nu: "c.nu" }, descr: "NumberOfFie" },
    "z": { targ: "form", keva: { id: "n.0.reco.0", t: "o" }, descr: "LastOrd" },
    "y": { targ: "analyse", keva: {}, descr: "Ausw" },
    "c": { targ: "form", keva: { cp: 1, t:"r.0.t", id:"r.0.id" }, descr: "CpFrm" },
    "n": { targ: "form", keva: { cp: 2, t:"r.0.t", ida:"n.0.reca.0", id: 0 }, descr: "New" }
  }
  
module.exports={
    doo2
}