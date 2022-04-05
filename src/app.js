/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const domaingenerator = () => {
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        let domain = `${pronoun[p]}${adj[a]}${noun[n]}.com`;
        document.write(
          `<div class="container"><p class="text-center mt-5">${domain}</p></div>`
        );
      }
    }
  }

  return;
};
domaingenerator();
