const sorteDoDia = {
  1: "A vida trará coisas boas se você tiver paciência.",
  2: "Demonstre amor e alegria em todas as oportunidades.",
  3: "Não compense na ira o que lhe falta em razão.",
  4: "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  5: "A maior de todas as torres começa no solo.",
  6: "Acredite em você mesmo e o universo conspirará a seu favor.",
  7: "Seja a mudança que você deseja ver no mundo.",
  8: "O sucesso não é acidental, é resultado de esforço e dedicação.",
  9: "Aprenda com o passado, viva o presente e sonhe com o futuro.",
  10: "Sua criatividade é ilimitada, explore novos horizontes.",
  11: "A jornada de mil quilômetros começa com um único passo.",
  12: "A sorte favorece a mente preparada.",
  13: "Seja corajoso, mesmo quando estiver com medo.",
  14: "A amizade é o maior tesouro da vida.",
  15: "Valorize cada momento, pois o tempo é um presente precioso.",
  16: "Sorria, a felicidade é contagiante.",
  17: "A verdadeira sabedoria está em reconhecer a própria ignorância.",
  18: "Aproveite as pequenas coisas, pois elas tornam a vida grande.",
  19: "A persistência é o caminho do êxito.",
  20: "A compaixão é a linguagem univesal do coração.",
  21: "Seja grato pelo que tem, e mais virá até você.",
  22: "Suas escolhas moldam seu destino, escolha sabiamente.",
  23: "Cada novo dia é uma página em branco, escreva uma boa história.",
  24: "O amor é a força mais poderosa do universo.",
  25: "A melhor maneira de prever o futuro é criá-lo.",
  26: "Seja gentil com cada pessoa que você encontrar.",
  27: "A verdadeira beleza está na simplicidade.",
  28: "O conhecimento é poder, compartilhe-o com o mundo.",
  29: "A gratidão transforma o que temos em suficiente.",
  30: "A cada desafio, surge uma oportunidade de crescimento.",
  31: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
};

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let dia = document.getElementById("dia").value.trim();
  let containerFrase = document.getElementById("container_frase");

  if (String(dia).length != 0) {
    if (!isNaN(dia)) {
      dia = Number(dia);
      if (Number.isInteger(dia)) {
        if (dia >= 1 && dia <= 31) {
          console.log(sorteDoDia[dia]);
          containerFrase.className = "container_resultado_sucesso";
          containerFrase.innerHTML = `${sorteDoDia[dia]}`;
        } else {
          console.log("O dia deve ser maior que 0 e menor ou igual a 31");
          containerFrase.className = "container_resultado_erro";
          containerFrase.innerHTML =
            "O dia deve ser maior que 0 e menor ou igual a 31";
        }
      } else {
        console.log("O dia deve ser um número inteiro");
        containerFrase.className = "container_resultado_erro";
        containerFrase.innerHTML = "O dia deve ser um número inteiro";
      }
    } else {
      console.log("O dia deve ser numérico");
      containerFrase.className = "container_resultado_erro";
      containerFrase.innerHTML = "O dia deve ser numérico";
    }
  } else {
    console.log("Informe o dia do seu aniversário");
    containerFrase.className = "container_resultado_erro";
    containerFrase.innerHTML = "Informe o dia do seu aniversário";
  }
});
