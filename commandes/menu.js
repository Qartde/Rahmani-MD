// Font changed by Danny
const _0x2540d9 = _0x4d09;
function _0x4d09(_0x38e9ef, _0xb910cb) {
  const _0x1a7777 = _0x1a77();
  return _0x4d09 = function (_0x4d09cd, _0x28ee51) {
    _0x4d09cd = _0x4d09cd - 0x10b;
    let _0x57fc67 = _0x1a7777[_0x4d09cd];
    return _0x57fc67;
  }, _0x4d09(_0x38e9ef, _0xb910cb);
}

let fontStyle = "𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫"; // Using the new font
let createdBy = "Rahmani"; // Changing to Rahmani

let _0x1fe2de = _0x2540d9;

// Update the messages to use the new name and font style
let _0x1d9110 = 
  "╭────💯\n" +
  "|📱│  _Proprio_ : " + s['PREFIXE'] + "\n" +
  "╰─────────────⊷\n" +
  "Platform: " + s['PLATFORM'] + "\n" +
  "Date: " + moment().format("DD/MM/YYYY") + "\n" +
  "Owner: " + fontStyle + " " + createdBy + "\n" +
  "Prefix: " + s['PREFIXE'] + "\n" +
  "Memory: " + format(os.totalmem() - os.freemem()) + "/" + format(os.totalmem()) + "\n" +
  "RAM: " + os.totalmem() + "MB";


// Example of changing lines/borders
let borderLine = "❖━━━━━✧ 𝑹𝑨𝑯𝑴𝑨𝑵𝑰_𝑴𝑫 ✧━━━━━❖"; // New border line style

let _0x16a4c9 = `${borderLine}\n` +
  "*Here is the list of commands below*\n" +
  "🔹 Command1: Use it like this\n" +
  "🔹 Command2: Use it like this too\n" +
  "🔹 Command3: Another one\n" +
  borderLine;

// Final response
if (_0x2c1aa7 && _0x2c1aa7.match(/\.(mp4|gif)$/i)) {
  try {
    _0x50389c.sendMessage(_0x309e08, {
      video: { url: _0x2c1aa7 },
      caption: _0x1d9110 + _0x16a4c9,
      footer: "©️ " + createdBy,
      gifPlayback: true
    });
  } catch (err) {
    console.log("Error: " + err);
    _0x4d03a7("Error: " + err);
  }
} else {
  // Adjust for image type
  if (_0x2c1aa7.match(/\.(jpeg|png|jpg)$/i)) {
    try {
      _0x50389c.sendMessage(_0x309e08, {
        image: { url: _0x2c1aa7 },
        caption: _0x1d9110 + _0x16a4c9,
        footer: "©️ " + createdBy
      });
    } catch (err) {
      console.log("Error: " + err);
      _0x4d03a7("Error: " + err);
    }
  } else {
    _0x4d03a7(_0x1d9110 + _0x16a4c9);
  }
}