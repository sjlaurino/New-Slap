export default class Character {
  constructor(data) {
    this.name = data.name
    this.health = data.health
    this.attacks = data.attacks
    this.img = data.img
  }

  get AttackDmg() {
    return Math.floor(Math.random() * 15)
  }

  getTemplate() {
    return `
    <div class="row mt-2">
  <div class="col-5 d-flex justify-content-center">
    <h3 id="lucy-health">Health: ${this.health}</h3>
    <h3 id="lucy-hits">Hits: 0</h3>
  </div>
  <div class="col-2"></div>
  <div class="col-5 d-flex justify-content-center">
    <h3><span id="charlie-health">Health: ${this.health} </span></h3>
    <h3 id="hits">Hits: 0 </h3>
  </div>
</div>
<div class="row">
  <div class="col-5 d-flex justify-content-center">
    <div class="progress">
      <div id="progress-lucy" class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%"
        aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">100</div>
    </div>
  </div>
  <div class="col-2"></div>
  <div class="col-5 d-flex justify-content-center">
    <div class="progress">
      <div id="progress-number" class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
        style="width: 100%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">100</div>
    </div>
  </div>
</div>
</header>

<div class="container-fluid">
  <div class="row">
    <div class="col-5 d-flex justify-content-center img-fluid">
      <img id="lucy-img" src="${this.img}" alt="">
    </div>
    <div class="col-2">
    </div>
    <div class="col-5 d-flex align-items-end justify-content-center img-fluid">
      <img id="charlie-img" class="target-image" src="${this.img}" alt="Charlie Brown Photo">
    </div>
  </div>
</div>


<footer>
  <div class="row">
    <div class="col-5 d-flex justify-content-center text-center">
      <h4>Player 1</h4>
    </div>
    <div class="col-2 mb-2 d-flex justify-content-center text-center">
      <h3>Attacks:</h3>
    </div>
    <div class="col-5 d-flex justify-content-center text-center">
      <h4>CPU</h4>
    </div>
  </div>
    `
  }
}

