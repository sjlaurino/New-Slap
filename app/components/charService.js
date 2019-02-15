import Character from "../modules/character.js";

let _state = {
  characters: [
    new Character({
      name: 'Charlie', health: 100, attacks: {}, img: 'assets/Charlie Brown Transparent.png'
    }),
    new Character({
      name: 'Lucy', health: 100, attacks: {
        slap: 1,
        punch: 5,
        kick: 10
      }, img: 'assets/Lucy.png'
    })
  ]
}

// charlie.health -= lucy.AttackDmg()




export default class CharService {
  constructor() {
    console.log('service works')
  }

  get Characters() {
    return _state.characters
  }

  //need to get enemy to attack back each time an attack is made...
  slap() {
    _state.characters[0].health -= _state.characters[1].attacks.slap
    // _state.characters[1].health -= _state.AttackDmg()
  }
  punch() {
    _state.characters[0].health -= _state.characters[1].attacks.punch
    // _state.characters[1].health -= _state.AttackDmg()

  }
  kick() {
    _state.characters[0].health -= _state.characters[1].attacks.kick
    // _state.characters[1].health -= _state.AttackDmg()

  }
}