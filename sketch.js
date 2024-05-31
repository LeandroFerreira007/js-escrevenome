//Familia, aventura, Romance, comédia, Animação, Terror, Suspense

// Bob Esponja: O Filme, LIVRE, familia
// Ratatouille, Livre, Animação

// Five Nights At Freddy's: O Pesadelo Sem Fim, 14, Suspense, Terror
// O Massacre da Serra Elétrica, 18, Terror
// Tudo em Todo O Lugar ao Mesmo Tempo, 14, comédia
// Your Name, 12, Romance
// Minha Querida Oni, 12, aventura

let campoIdade;
let campoRomance;
let campoFamilia
let campoSuspense
let campoTerror

function setup() {
  createCanvas(700, 400);
  createElement("h2", "Recomendador de Filmes")
  createSpan("Sua Idade:");
campoIdade = createInput("5");
 campoRomance = createCheckbox ("Gosta de Romance?")
 campoFamilia = createCheckbox ("Gosta de Familia?")
 campoSuspense = createCheckbox ("Gosta de Suspense?")
 campoTerror= createCheckbox ("Gosta de Terror?")
}

function draw() {
  background("black");
  let idade = campoIdade. value();
  let gostaDeRomance = campoRomance. checked();
  let gostaDeFamilia = campoFamilia. checked();
  let gostaDeSuspense = campoSuspense. checked();
  let gostaDeTerror = campoTerror. checked();
  let recomendacao = geraRecomendacao(idade, gostaDeRomance, gostaDeFamilia, gostaDeSuspense, gostaDeTerror);
  fill(color(26,200,200));
  textAlign(CENTER,CENTER);
  textSize(30);
  text(recomendacao, width / 2, height / 2);
}
function geraRecomendacao(idade, gostaDeRomance, gostaDeFamilia, gostaDeSuspense, gostaDeTerror) {
    if(idade >= 12) {
        if(idade >= 18) {
               return "O Massacre da Serra Elétrica";
    } else {
      if (idade >= 14) {
        if(gostaDeSuspense || gostaDeTerror) {
         return "Five Nights At Freddy's: O Pesadelo Sem Fim";
      } else {
         return "Tudo em Todo O Lugar ao Mesmo Tempo";
      }
      } else {
            if(gostaDeRomance){
                return "Your Name";
            } else {
                return "Minha Querida Oni";
            }
          }
        }
    } else {
        if(gostaDeFamilia) {
            return "Bob Esponja: O Filme";
        } else {
            return "Ratatouille";
        }
    }
}