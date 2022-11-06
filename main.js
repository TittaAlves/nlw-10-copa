function createGame(player1, hour, player2, group = "x") {
  return `
   <li>
   <div class="group">
   <span>Grupo ${group}</span>
   </div>
   <div class="teams">
     <img src="./assets/icon-${player1.image}.svg" alt="Bandeira do ${player1.name}" title="${player1.name}" />
     <strong>${hour}</strong>
     <img src="./assets/icon-${player2.image}.svg" alt="Bandeira da ${player2.name}" title="${player2.name}" />
   </div>
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
    createGame(
      { image: "qatar", name: "Catar" },
      "13:00",
      {
        image: "ecuador",
        name: "Equador",
      },
      "A"
    )
  ) +
  createCard(
    "21/11",
    "Segunda",
    createGame(
      { image: "england", name: "Inglaterra" },
      "10:00",
      {
        image: "iran",
        name: "Irã",
      },
      "B"
    ) +
      createGame(
        { image: "senegal", name: "Senegal" },
        "13:00",
        {
          image: "netherlands",
          name: "Países Baixos",
        },
        "A"
      ) +
      createGame(
        { image: "usa", name: "Estados Unidos" },
        "16:00",
        {
          image: "wales",
          name: "Gales",
        },
        "B"
      )
  ) +
  createCard(
    "22/11",
    "Terça",
    createGame(
      { image: "argentina", name: "Argentina" },
      "07:00",
      {
        image: "saudiArabia",
        name: "Arábia Saudita",
      },
      "C"
    ) +
      createGame(
        { image: "denmark", name: "Dinamarca" },
        "10:00",
        {
          image: "tunisia",
          name: "Tunísia",
        },
        "D"
      ) +
      createGame(
        { image: "mexico", name: "México" },
        "13:00",
        {
          image: "poland",
          name: "Polônia",
        },
        "C"
      ) +
      createGame(
        { image: "france", name: "França" },
        "16:00",
        {
          image: "australia",
          name: "Austrália",
        },
        "D"
      )
  ) +
  createCard(
    "23/11",
    "Quarta",
    createGame(
      { image: "morocco", name: "Marrocos" },
      "07:00",
      {
        image: "croatia",
        name: "Croácia",
      },
      "F"
    ) +
      createGame(
        { image: "germany", name: "Alemanha" },
        "10:00",
        {
          image: "japan",
          name: "Japão",
        },
        "E"
      ) +
      createGame(
        { image: "spain", name: "Espanha" },
        "13:00",
        {
          image: "costaRica",
          name: "Costa Rica",
        },
        "E"
      ) +
      createGame(
        { image: "belgium", name: "Bélgica" },
        "16:00",
        {
          image: "canada",
          name: "Canadá",
        },
        "F"
      )
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame(
      { image: "switzerland", name: "Suiça" },
      "07:00",
      {
        image: "cameroon",
        name: "Camarões",
      },
      "G"
    ) +
      createGame(
        { image: "uruguay", name: "Uruguai" },
        "10:00",
        {
          image: "southKorea",
          name: "Coreia do Sul",
        },
        "H"
      ) +
      createGame(
        { image: "portugal", name: "Portugal" },
        "13:00",
        {
          image: "ghana",
          name: "Gana",
        },
        "H"
      ) +
      createGame(
        { image: "brazil", name: "Brasil" },
        "16:00",
        {
          image: "serbia",
          name: "Sérvia",
        },
        "G"
      )
  ) +
  createCard(
    "25/11",
    "Sexta",
    createGame(
      { image: "wales", name: "Gales" },
      "07:00",
      {
        image: "iran",
        name: "Irã",
      },
      "B"
    ) +
      createGame(
        { image: "qatar", name: "Catar" },
        "10:00",
        {
          image: "senegal",
          name: "Senegal",
        },
        "A"
      ) +
      createGame(
        { image: "netherlands", name: "Países Baixos" },
        "13:00",
        {
          image: "ecuador",
          name: "Equador",
        },
        "A"
      ) +
      createGame(
        { image: "england", name: "Inglaterra" },
        "16:00",
        {
          image: "usa",
          name: "Estados Unidos",
        },
        "B"
      )
  ) +
  createCard(
    "26/11",
    "Sabado",
    createGame(
      { image: "tunisia", name: "Tunísia" },
      "07:00",
      {
        image: "australia",
        name: "Austrália",
      },
      "D"
    ) +
      createGame(
        { image: "poland", name: "Polônia" },
        "10:00",
        {
          image: "saudiArabia",
          name: "Arábia Saudita",
        },
        "C"
      ) +
      createGame(
        { image: "france", name: "França" },
        "13:00",
        {
          image: "denmark",
          name: "Dinamarca",
        },
        "D"
      ) +
      createGame(
        { image: "argentina", name: "Argentina" },
        "16:00",
        {
          image: "mexico",
          name: "México",
        },
        "C"
      )
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame(
      { image: "japan", name: "Japão" },
      "07:00",
      {
        image: "costaRica",
        name: "Costa Rica",
      },
      "E"
    ) +
      createGame(
        { image: "belgium", name: "Bélgica" },
        "10:00",
        {
          image: "morocco",
          name: "Marrocos",
        },
        "F"
      ) +
      createGame(
        { image: "croatia", name: "Croácia" },
        "13:00",
        {
          image: "canada",
          name: "Canadá",
        },
        "F"
      ) +
      createGame(
        { image: "spain", name: "Espanha" },
        "16:00",
        {
          image: "germany",
          name: "Alemanha",
        },
        "E"
      )
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame(
      { image: "cameroon", name: "Camarões" },
      "07:00",
      {
        image: "serbia",
        name: "Sérvia",
      },
      "G"
    ) +
      createGame(
        { image: "southKorea", name: "Coreia do Sul" },
        "10:00",
        {
          image: "ghana",
          name: "Gana",
        },
        "H"
      ) +
      createGame(
        { image: "brazil", name: "Brasil" },
        "13:00",
        {
          image: "switzerland",
          name: "Suiça",
        },
        "G"
      ) +
      createGame(
        { image: "portugal", name: "Portugal" },
        "16:00",
        {
          image: "uruguay",
          name: "Uruguai",
        },
        "H"
      )
  ) +
  createCard(
    "29/11",
    "Terça",
    createGame(
      { image: "ecuador", name: "Equador" },
      "12:00",
      {
        image: "serbia",
        name: "Sérvia",
      },
      "A"
    ) +
      createGame(
        { image: "netherlands", name: "Países Baixos" },
        "12:00",
        {
          image: "qatar",
          name: "Catar",
        },
        "A"
      ) +
      createGame(
        { image: "iran", name: "Irã" },
        "16:00",
        {
          image: "usa",
          name: "Estados Unidos",
        },
        "B"
      ) +
      createGame(
        { image: "wales", name: "Gales" },
        "16:00",
        {
          image: "england",
          name: "Inglaterra",
        },
        "B"
      )
  ) +
  createCard(
    "30/11",
    "Quarta",
    createGame(
      { image: "tunisia", name: "Tunísia" },
      "12:00",
      {
        image: "france",
        name: "França",
      },
      "D"
    ) +
      createGame(
        { image: "australia", name: "Austrália" },
        "12:00",
        {
          image: "denmark",
          name: "Dinamarca",
        },
        "D"
      ) +
      createGame(
        { image: "poland", name: "Polônia" },
        "16:00",
        {
          image: "argentina",
          name: "Argentina",
        },
        "C"
      ) +
      createGame(
        { image: "saudiArabia", name: "Arábia Saudita" },
        "16:00",
        {
          image: "mexico",
          name: "México",
        },
        "C"
      )
  ) +
  createCard(
    "01/12",
    "Quinta",
    createGame(
      { image: "croatia", name: "Croácia" },
      "12:00",
      {
        image: "belgium",
        name: "Bélgica",
      },
      "F"
    ) +
      createGame(
        { image: "canada", name: "Canadá" },
        "12:00",
        {
          image: "morocco",
          name: "Marrocos",
        },
        "F"
      ) +
      createGame(
        { image: "japan", name: "Japão" },
        "16:00",
        {
          image: "spain",
          name: "Espanha",
        },
        "E"
      ) +
      createGame(
        { image: "costaRica", name: "Costa Rica" },
        "16:00",
        {
          image: "germany",
          name: "Alemanha",
        },
        "E"
      )
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame(
      { image: "southKorea", name: "Coreia do Sul" },
      "12:00",
      {
        image: "portugal",
        name: "Portugal",
      },
      "H"
    ) +
      createGame(
        { image: "ghana", name: "Gana" },
        "12:00",
        {
          image: "uruguay",
          name: "Uruguai",
        },
        "H"
      ) +
      createGame(
        { image: "serbia", name: "Sérvia" },
        "16:00",
        {
          image: "switzerland",
          name: "Suiça",
        },
        "G"
      ) +
      createGame(
        { image: "brazil", name: "Brasil" },
        "16:00",
        {
          image: "cameroon",
          name: "Camarões",
        },
        "G"
      )
  )

let selectedColor = "yellow"

function changeColor(event) {
  let button = event.target
  document.body.className = ""
  document.body.classList.add(button.id)

  selectedColor = button.id
  button.classList.add("active")

  let buttons = document.querySelectorAll(".color-button button")
  buttons.forEach((btn) => {
    if (btn.id !== selectedColor){
      btn.className = ""
    }
  })
}

let buttons = document.querySelectorAll(".color-button button")
buttons.forEach((button) => {
  button.addEventListener("click", changeColor)
})
