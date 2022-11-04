function createGame(player1, hour, player2) {
  return `
   <li>
     <img src="./assets/icon-${player1.image}.svg" alt="Bandeira do ${player1.name}" title="${player1.name}" />
     <strong>${hour}</strong>
     <img src="./assets/icon-${player2.image}.svg" alt="Bandeira da ${player2.name}" title="${player2.name}" />
   </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "Domingo",
    createGame({ image: "qatar", name: "Catar" }, "13:00", {
      image: "ecuador",
      name: "Equador",
    })
  ) +
  createCard(
    "21/11",
    "Segunda",
    createGame({ image: "england", name: "Inglaterra" }, "10:00", {
      image: "iran",
      name: "Irã",
    }) +
      createGame({ image: "senegal", name: "Senegal" }, "13:00", {
        image: "netherlands",
        name: "Países Baixos",
      }) +
      createGame({ image: "usa", name: "Estados Unidos" }, "16:00", {
        image: "wales",
        name: "Gales",
      })
  ) +
  createCard(
    "22/11",
    "Terça",
    createGame({ image: "argentina", name: "Argentina" }, "07:00", {
      image: "saudiArabia",
      name: "Arábia Saudita",
    }) +
      createGame({ image: "denmark", name: "Dinamarca" }, "10:00", {
        image: "tunisia",
        name: "Tunísia",
      }) +
      createGame({ image: "mexico", name: "México" }, "13:00", {
        image: "poland",
        name: "Polônia",
      }) +
      createGame({ image: "france", name: "França" }, "16:00", {
        image: "australia",
        name: "Austrália",
      })
  ) +
  createCard(
    "23/11",
    "Quarta",
    createGame({ image: "morocco", name: "Marrocos" }, "07:00", {
      image: "croatia",
      name: "Croácia",
    }) +
      createGame({ image: "germany", name: "Alemanha" }, "10:00", {
        image: "japan",
        name: "Japão",
      }) +
      createGame({ image: "spain", name: "Espanha" }, "13:00", {
        image: "costaRica",
        name: "Costa Rica",
      }) +
      createGame({ image: "belgium", name: "Bélgica" }, "16:00", {
        image: "canada",
        name: "Canadá",
      })
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame({ image: "switzerland", name: "Suiça" }, "07:00", {
      image: "cameroon",
      name: "Camarões",
    }) +
      createGame({ image: "uruguay", name: "Uruguai" }, "10:00", {
        image: "southKorea",
        name: "Coreia do Sul",
      }) +
      createGame({ image: "portugal", name: "Portugal" }, "13:00", {
        image: "ghana",
        name: "Gana",
      }) +
      createGame({ image: "brazil", name: "Brasil" }, "16:00", {
        image: "serbia",
        name: "Sérvia",
      })
  ) +
  createCard(
    "25/11",
    "Sexta",
    createGame({ image: "wales", name: "Gales" }, "07:00", {
      image: "iran",
      name: "Irã",
    }) +
      createGame({ image: "qatar", name: "Catar" }, "10:00", {
        image: "senegal",
        name: "Senegal",
      }) +
      createGame({ image: "netherlands", name: "Países Baixos" }, "13:00", {
        image: "ecuador",
        name: "Equador",
      }) +
      createGame({ image: "england", name: "Inglaterra" }, "16:00", {
        image: "usa",
        name: "Estados Unidos",
      })
  ) +
  createCard(
    "26/11",
    "Sabado",
    createGame({ image: "tunisia", name: "Tunísia" }, "07:00", {
      image: "australia",
      name: "Austrália",
    }) +
      createGame({ image: "poland", name: "Polônia" }, "10:00", {
        image: "saudiArabia",
        name: "Arábia Saudita",
      }) +
      createGame({ image: "france", name: "França" }, "13:00", {
        image: "denmark",
        name: "Dinamarca",
      }) +
      createGame({ image: "argentina", name: "Argentina" }, "16:00", {
        image: "mexico",
        name: "México",
      })
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame({ image: "japan", name: "Japão" }, "07:00", {
      image: "costaRica",
      name: "Costa Rica",
    }) +
      createGame({ image: "belgium", name: "Bélgica" }, "10:00", {
        image: "morocco",
        name: "Marrocos",
      }) +
      createGame({ image: "croatia", name: "Croácia" }, "13:00", {
        image: "canada",
        name: "Canadá",
      }) +
      createGame({ image: "spain", name: "Espanha" }, "16:00", {
        image: "germany",
        name: "Alemanha",
      })
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame({ image: "cameroon", name: "Camarões" }, "07:00", {
      image: "serbia",
      name: "Sérvia",
    }) +
      createGame({ image: "southKorea", name: "Coreia do Sul" }, "10:00", {
        image: "ghana",
        name: "Gana",
      }) +
      createGame({ image: "brazil", name: "Brasil" }, "13:00", {
        image: "switzerland",
        name: "Suiça",
      }) +
      createGame({ image: "portugal", name: "Portugal" }, "16:00", {
        image: "uruguay",
        name: "Uruguai",
      })
  ) +
  createCard(
    "29/11",
    "Terça",
    createGame({ image: "ecuador", name: "Equador" }, "12:00", {
      image: "serbia",
      name: "Sérvia",
    }) +
      createGame({ image: "netherlands", name: "Países Baixos" }, "12:00", {
        image: "qatar",
        name: "Catar",
      }) +
      createGame({ image: "iran", name: "Irã" }, "16:00", {
        image: "usa",
        name: "Estados Unidos",
      }) +
      createGame({ image: "wales", name: "Gales" }, "16:00", {
        image: "england",
        name: "Inglaterra",
      })
  ) +
  createCard(
    "30/11",
    "Quarta",
    createGame({ image: "tunisia", name: "Tunísia" }, "12:00", {
      image: "france",
      name: "França",
    }) +
      createGame({ image: "australia", name: "Austrália" }, "12:00", {
        image: "denmark",
        name: "Dinamarca",
      }) +
      createGame({ image: "poland", name: "Polônia" }, "16:00", {
        image: "argentina",
        name: "Argentina",
      }) +
      createGame({ image: "saudiArabia", name: "Arábia Saudita" }, "16:00", {
        image: "mexico",
        name: "México",
      })
  ) +
  createCard(
    "01/12",
    "Quinta",
    createGame({ image: "croatia", name: "Croácia" }, "12:00", {
      image: "belgium",
      name: "Bélgica",
    }) +
      createGame({ image: "canada", name: "Canadá" }, "12:00", {
        image: "morocco",
        name: "Marrocos",
      }) +
      createGame({ image: "japan", name: "Japão" }, "16:00", {
        image: "spain",
        name: "Espanha",
      }) +
      createGame({ image: "costaRica", name: "Costa Rica" }, "16:00", {
        image: "germany",
        name: "Alemanha",
      })
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame({ image: "southKorea", name: "Coreia do Sul" }, "12:00", {
      image: "portugal",
      name: "Portugal",
    }) +
      createGame({ image: "ghana", name: "Gana" }, "12:00", {
        image: "uruguay",
        name: "Uruguai",
      }) +
      createGame({ image: "serbia", name: "Sérvia" }, "16:00", {
        image: "switzerland",
        name: "Suiça",
      }) +
      createGame({ image: "brazil", name: "Brasil" }, "16:00", {
        image: "cameroon",
        name: "Camarões",
      })
  )
