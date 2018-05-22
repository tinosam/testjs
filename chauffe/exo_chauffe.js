// Fonction qui retourne le nombre maximum
function my_max(arr) {
  return arr.reduce(function(a,b) {
    return Math.max(a, b);
  });
}

// Fonction qui retourne le nombre de voyel en utilisant un regex
function vowel_count(str) {
  var m = str.match(/[aeiyou]/gi);
  return m === null ? 0 : m.length;
}

// Fonction qui renvoie une chaine de caractere en inverse, a l'aide de la fonction reverse() de javascript 
// en transformant la chaine en array puis de nouveau en une chaine de caractere
function reverse(str){
  return str.split("").reverse().join("");
}

// Tests
var tab = [1,3,2,7,9,0]
console.log("Le nombre max dans [1,3,2,7,9,0] est: "+my_max(tab))

var string1 = "the hacking project"
console.log("Le nombre de voyel dans \"the hacking project\" est : "+vowel_count(string1))
console.log("\"the hacking project\" en inverse : \""+reverse(string1)+"\"")