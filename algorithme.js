let nombre = prompt("saisir un nombre <= 25");
let str="";
if (nombre <=25) {
  for (i = 1; i <= nombre; i++) {
    for (let k = 1; k < nombre-i ; k++) {
      str+=" "
    }
    for (let j = 1; j <= i; j++) {
      str+="# ";
    }
    str+="\n"
   
  }
  console.log(str);
}
