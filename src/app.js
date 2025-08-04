import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 let pronoun = ['the','your', 'our ', 'his', 'she'];
 let adj = ['great', 'big', 'amazing' ,'awesome'];
 let noun = ['jogger', 'racoon', 'dog', 'rabbit', 'cat'];
  
  // generating the domains
  let rdm1 = Math.floor(Math.random() * pronoun.length);
  let rdm2 = Math.floor(Math.random() * adj.length);
  let rdm3 = Math.floor(Math.random() * noun.length);
  
  document.querySelector("#dominio").innerHTML = pronoun[rdm1] + adj[rdm2] + noun[rdm3] + ".com";
}

