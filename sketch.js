var player, mira, tiro, muro;

var zombies = []
var zombieAndando, zombieMorto;
var paredes;
//animations
var idle, run, strafe_left, strafe_right, walk;
var flashlight, handgun, knife, rifle, shotgun;
var arma = 0 ;
var armas = ["faca", "pistola"];

var jogo = new Game();

function preload(){
  walk = loadAnimation("assets/survivor-walk_0.png", "assets/survivor-walk_19.png" );
  idle = loadAnimation("assets/survivor-idle_0.png")
  strafe_right = loadAnimation("assets/survivor-strafe_right_0.png", "assets/survivor-strafe_right_19.png")

  rifle = loadAnimation("assets/survivor-move_rifle_0.png", "assets/survivor-move_rifle_19.png");
  handgun = loadAnimation("assets/survivor-move_handgun_0.png", "assets/survivor-move_handgun_19.png")
  knife = loadAnimation("assets/survivor-move_knife_0.png", "assets/survivor-move_knife_19.png");
  flashlight = loadAnimation("assets/survivor-move_flashlight_0.png", "assets/survivor-move_flashlight_19.png");

  mira = loadImage("assets/mira.png");
  

  zombieAndando = loadAnimation("zombieWalk/0.png", "zombieWalk/16.png")
  zombieMorto= loadAnimation("assets/bloodsplat.png")
  muro = loadImage("assets/muro.png")

  jogo.configurarAnimacoes()
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  paredes = new Group()
  desenharMapa()
  jogo.iniciar()
  
  
}

function draw() {
  background(0,10,0);

  console.log(drawSprites)
  //tint(80,255), /rifl/ if(distancia < 255){zumbi.visibilidade = 255 - distancia}

  if(jogo.estado == 2){
    jogo.comecarJogo()
  }
  
  if(mouseWentDown("leftButton")){
    player.atirar()
    
  }

  if(keyWentDown("space")){
    (arma < armas.length) ? arma+=1 : arma = 0;
    player.trocarArma(armas[arma])
  }

  criarZombies()

  for(var i = 0; i < zombies.length; i++){
    if(!zombies[i].morto){
      zombies[i].andar()
    }
    player.municoes.overlap(zombies[i].sprite,(municao, zombie)=>{
      zombies[i].morrer()
      municao.destroy()
    })
  }

 player.sprite.collide(paredes)
  drawSprites()
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function criarZombies(){
  if(frameCount % 100 === 0){
    var posY = random(0,height)
    var zombie = new Zombie(width,posY)
    zombies.push(zombie)
  }
}

