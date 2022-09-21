// DESCRIPTION:
// Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

// Examples:

// var sleigh = new Sleigh();
// sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)
// FUNDAMENTALS

//my solution
function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  if (name === "Santa Claus" && password === "Ho Ho Ho!") {
    return true;
  } else {
    return false;
  }
};

// other solutions
function Sleigh() {
  this.name = "Santa Claus";
  this.password = "Ho Ho Ho!";
}

Sleigh.prototype.authenticate = function (name, password) {
  return this.name == name && this.password == password;
};

//

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  var _name = "Santa Claus",
    _salt = "RudolphWithYourNoseSoBright",
    _pass = "60b5b967f0752b9429bfe701b6801ce0b4524f35";
  // Don't use SHA1 in production, kids!  Be on Santa's Good list and do some research...
  return _name === name && this.sha1(_salt + password) === _pass;
};

// SHA1 implementation minified from source here: http://pajhome.org.uk/crypt/md5/sha1.html
Sleigh.prototype.sha1 = (function () {
  function r(r) {
    return t(n(o(r)));
  }

  function n(r) {
    return a(f(e(r), 8 * r.length));
  }

  function t(r) {
    try {
    } catch (n) {
      C = 0;
    }
    for (
      var t, o = C ? "0123456789ABCDEF" : "0123456789abcdef", e = "", a = 0;
      a < r.length;
      a++
    )
      (t = r.charCodeAt(a)), (e += o.charAt((t >>> 4) & 15) + o.charAt(15 & t));
    return e;
  }

  function o(r) {
    for (var n, t, o = "", e = -1; ++e < r.length; )
      (n = r.charCodeAt(e)),
        (t = e + 1 < r.length ? r.charCodeAt(e + 1) : 0),
        n >= 55296 &&
          56319 >= n &&
          t >= 56320 &&
          57343 >= t &&
          ((n = 65536 + ((1023 & n) << 10) + (1023 & t)), e++),
        127 >= n
          ? (o += String.fromCharCode(n))
          : 2047 >= n
          ? (o += String.fromCharCode(192 | ((n >>> 6) & 31), 128 | (63 & n)))
          : 65535 >= n
          ? (o += String.fromCharCode(
              224 | ((n >>> 12) & 15),
              128 | ((n >>> 6) & 63),
              128 | (63 & n)
            ))
          : 2097151 >= n &&
            (o += String.fromCharCode(
              240 | ((n >>> 18) & 7),
              128 | ((n >>> 12) & 63),
              128 | ((n >>> 6) & 63),
              128 | (63 & n)
            ));
    return o;
  }

  function e(r) {
    for (var n = Array(r.length >> 2), t = 0; t < n.length; t++) n[t] = 0;
    for (var t = 0; t < 8 * r.length; t += 8)
      n[t >> 5] |= (255 & r.charCodeAt(t / 8)) << (24 - (t % 32));
    return n;
  }

  function a(r) {
    for (var n = "", t = 0; t < 32 * r.length; t += 8)
      n += String.fromCharCode((r[t >> 5] >>> (24 - (t % 32))) & 255);
    return n;
  }

  function f(r, n) {
    (r[n >> 5] |= 128 << (24 - (n % 32))), (r[(((n + 64) >> 9) << 4) + 15] = n);
    for (
      var t = Array(80),
        o = 1732584193,
        e = -271733879,
        a = -1732584194,
        f = 271733878,
        C = -1009589776,
        g = 0;
      g < r.length;
      g += 16
    ) {
      for (var v = o, d = e, A = a, l = f, m = C, S = 0; 80 > S; S++) {
        t[S] =
          16 > S ? r[g + S] : i(t[S - 3] ^ t[S - 8] ^ t[S - 14] ^ t[S - 16], 1);
        var y = c(c(i(o, 5), u(S, e, a, f)), c(c(C, t[S]), h(S)));
        (C = f), (f = a), (a = i(e, 30)), (e = o), (o = y);
      }
      (o = c(o, v)), (e = c(e, d)), (a = c(a, A)), (f = c(f, l)), (C = c(C, m));
    }
    return Array(o, e, a, f, C);
  }

  function u(r, n, t, o) {
    return 20 > r
      ? (n & t) | (~n & o)
      : 40 > r
      ? n ^ t ^ o
      : 60 > r
      ? (n & t) | (n & o) | (t & o)
      : n ^ t ^ o;
  }

  function h(r) {
    return 20 > r
      ? 1518500249
      : 40 > r
      ? 1859775393
      : 60 > r
      ? -1894007588
      : -899497514;
  }

  function c(r, n) {
    var t = (65535 & r) + (65535 & n),
      o = (r >> 16) + (n >> 16) + (t >> 16);
    return (o << 16) | (65535 & t);
  }

  function i(r, n) {
    return (r << n) | (r >>> (32 - n));
  }
  var C = 0;
  return r;
})();
