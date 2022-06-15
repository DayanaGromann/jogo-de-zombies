class Zombie{
    constructor(x,y){
        this.sprite = createSprite(x,y);
        this.sprite.addAnimation("andando", zombieAndando)
        this.sprite.addAnimation("morto", zombieMorto)

        this.morto = false;
    }

    andar(){
        this.sprite.pointTo(player.sprite.x, player.sprite.y);
        this.sprite.setSpeedAndDirection(5,this.sprite.rotation)
    }

    atacar(){

    }

    morrer(){
        this.sprite.changeAnimation("morto")
        this.sprite.setVelocity(0,0);
        this.morto = true;

        setTimeout(()=>{  
            this.sprite.destroy()
        }, 1000)
        
    }
}