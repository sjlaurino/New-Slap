import CharController from "./components/charController.js";


class App {
  constructor() {
    this.controllers = {
      charController: new CharController()
    }
    console.log('main works')
  }
}

// @ts-ignore
window['app'] = new App() 