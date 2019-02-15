import CharService from "./charService.js";

let _charServ = new CharService()

function draw() {
  let characters = _charServ.Characters
  let template = ''
  for (let i = 0; i < _charServ.Characters.length; i++) {
    let character = characters[i]
    template += character.getTemplate()
  }
  document.querySelector('template').innerHTML = template

}


export default class CharController {
  constructor() {
    console.log('controller works')
    draw()
  }
  slap() {
    _charServ.slap()
    console.log(_charServ.Characters[0].health)
    draw()
  }
  punch() {
    _charServ.punch()
    draw()
  }
  kick() {
    _charServ.kick()
    draw()
  }
}