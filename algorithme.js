let nombre = prompt("saisir un nombre <= 25");
let arr = [];
if (nombre <= 25) {
  for (i = 0; i <= nombre; i++) {
    for (let j = 0; j < i; j++) {
      arr.push("#");
    }
    for (let k = nombre; k >= 0; k--) {
      arr.push("g");
    }
    console.log(arr.join(" "));
  }
}
