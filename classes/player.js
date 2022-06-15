class Player{
    constructor(){
        this.pernas = createSprite(100,300)
        this.sprite = createSprite(100,300) 
        
        this.mira = createSprite(0,0)
        this.mira.addImage(mira)
        this.mira.scale = 0.1

        this.armas = []
        this.armaEmUso = flashlight;
        this.lanternaLigada = false;
        this.municoes = new Group()

        this.sprite.scale = 0.5;
        this.sprite.addAnimation("rifle", rifle);
        this.sprite.addAnimation("pistola", handgun);
        this.sprite.addAnimation("faca", knife);
        this.sprite.addAnimation("lanterna", flashlight);
        this.sprite.changeAnimation("lanterna")
        this.sprite.visible = false

        this.pernas.scale = 0.5;
        this.pernas.addAnimation("andando", walk);
        this.pernas.addAnimation("direita", strafe_right);
        this.pernas.changeAnimation("andando")
        this.pernas.visible = false;

        this.sprite.setCollider("rectangle" ,0,0,200,100)
        mira = loadImage("assets/mira.png");
    }

    mirar(){
        if(mouseX > this.sprite.x+100){
            this.sprite.pointTo(mouseX, mouseY);
            this.pernas.mirrorX(1)
        }else if(mouseX < this.sprite.x -100){
            this.sprite.pointTo(mouseX, mouseY);
            this.pernas.mirrorX(-1)
        } 
    }

    atirar(){
        var municao = createSprite(this.sprite.x, this.sprite.y, 10,10)
        municao.setSpeedAndDirection(50,this.sprite.rotation)
        municao.lifetime = 300
        this.municoes.add(municao)
    }

    exibir(){

        this.sprite.visible = true;
        this.pernas.visible = true;

        push()
        drawingContext.shadowBlur = 300;
        drawingContext.shadowColor = color(255, 255, 255)
        player.sprite.display()
        this.pernas.x = this.sprite.x
        this.pernas.y = this.sprite.y
        pop()
        this.andar()
        this.mirar()
       
    
    }


    ligarLanterna(){
        //fazer com que a distancia com que o zumbis aparecem seja maior
        //usar tint para deixar tudo mais clarro
        //mudar cor do background
        
    }

    pegarItem(item){
        
    }

    //O jogador troca de arma ao apertar espaço, acabar munição ou arma desgastar.
    trocarArma(gun){
        switch(gun){
            case "lanterna": this.sprite.changeAnimation("lanterna");
            break;
            case "faca": this.sprite.changeAnimation("faca");
            break;
            case "pistola": this.sprite.changeAnimation("pistola");
            break;
            case "rifle": this.sprite .changeAnimation("rifle");
            break;
          }
    }

    andar(){
        camera.x = this.sprite.x
        camera.y = this.sprite.y

        if(keyDown("d") || keyDown("right")){
            this.sprite.x += 3
            this.pernas.changeAnimation("andando") 
        }
        if(keyDown("a") || keyDown("left")){
            this.sprite.x -= 3
            this.pernas.changeAnimation("andando") 
        }
        if(keyDown("w") || keyDown("up")){
            this.sprite.y -= 3
            this.pernas.changeAnimation("direita") 
        }
        if(keyDown("s") || keyDown("down")){
            this.sprite.y += 3
            this.pernas.changeAnimation("direita")
        }
    }

   
    

}


