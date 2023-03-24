const button = document.querySelector('.botao')
const retornar = document.querySelector('.retornar')
const biscoitoFechado = document.querySelector('.fechado')
const biscoitoAberto = document.querySelector('.aberto')
const resultado = document.querySelector('.resultado')

button.addEventListener('click', function() {
  const numero = randomSelector = Math.floor(Math.random() * 10);

  if (numero >= 5) {
    chamandoSucesso()
    .then(succeso())
  } else {
    chamandoFalha()
    .catch(falha())
  }
})

function succeso() {
  resultado.innerHTML = "SUCESSO!!!"
  verResultado()
}

function falha() {
  resultado.innerHTML = "FALHOU!!!"
  verResultado()
}

function chamandoSucesso() {
  return new Promise((resolve, reject) => resolve);
}

function chamandoFalha() {
  return new Promise((resolve, reject) => reject);
}


retornar.addEventListener('click', function() {
  retornarInicio();
})

function retornarInicio() {
  button.classList.remove("escondido")
  retornar.classList.add("escondido")
  biscoitoFechado.classList.remove("escondido")
  biscoitoAberto.classList.add("escondido")
  resultado.classList.add("escondido")
}

function verResultado() {
  biscoitoFechado.classList.add("escondido")
  biscoitoAberto.classList.remove("escondido")
  button.classList.add("escondido")
  retornar.classList.remove("escondido")
  resultado.classList.remove("escondido")
}