AOS.init({ delay: 1000, once: true });

var i = 0;
var p = 0;
var gived = "Hi! I am Christopher.";
var pos = "A front-end developer.";
var speed = 100;

var type = (function nm() {
  if (i < gived.length) {
    document.getElementById("name").innerHTML += gived.charAt(i);
    i++;
    setTimeout(nm, speed);
  }

  return nm;
})();

var type = (function ps() {
  if (p < pos.length) {
    document.getElementById("position").innerHTML += pos.charAt(p);
    p++;
    setTimeout(ps, speed);
  }

  return ps;
})();
