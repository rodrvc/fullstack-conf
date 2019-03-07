function saludar() {
  var saludo = 'Hola todos como estan'
  console.log(saludo);
  return saludo;
}

saludar()

function perro() {
  var a = 2;
  return a
}

perro() //?

x=perro()
x 

function conversation() {
  var romperHielo = 'hola me gustaria ser tu amigo';
  return romperHielo;
}

function cuantosPerros() {
  let pregunta = 'cuantos perros tienes ? '
  return pregunta;
}

cuantosPerros() //?

function empiezaConversacion() {
  let says = conversation() + ', ' + cuantosPerros()
  return says

}
hola = 0;
empiezaConversacion() //?

var argumentos = {
  clima: 'meteoritos caeran del cielo ',
  series: 'do you see stranger things allready ',
  question: 'why is the sky blue? '
}

argumentos.clima //?

const meses = [
  "enero",
  "febrero",
  'marzo',
  'abril',
  'mayo',
  'junio'
]

meses[1]; //?

const food = {
  init: function(type) {
    this.type = type
  },
  eat: function() {
    console.log('you ate the ' + this.type)
  }

}
food.init('waffle')
food.eat() // you ate the waffle

const waffle = Object.create(food)

food.eat = function() {
  console.log('te comiste mi comida' + ' ' + this.type.toUpperCase())
}

waffle.init('waffle')
waffle.eat()
