class Game{
    constructor(){
        this.telaCheia = 0
        this.estado = 0;
        this.fase = 1;
        this.luminosidade = 200;
    }

    configurarAnimacoes(){

        walk.frameDelay = 2
        strafe_right.frameDelay = 2
        zombieAndando.frameDelay = 2;
        rifle.frameDelay = 2
        handgun.frameDelay = 2;
        knife.frameDelay = 2
        flashlight.frameDelay = 2
    }

    iniciar(){
           player = new Player()
           var botao = createButton("jogar")
           botao.position(width/2-100, height/2-25)
           botao.size(200,50)
           botao.mousePressed(()=>{
               this.mostrarHistoriaInicial()
                botao.hide()
                
            })
    }

    mostrarHistoriaInicial(){
        fullscreen(!this.telaCheia)
        
        // noCanvas()
        // var video = createVideo("assets/videoInicial.mp4", ()=>{
        //     console.log(video)
        //     video.volume(0);
        //     video.play();
        // });

        // video.onended(()=>{
        //     this.estado = 2;
        // })
        this.estado = 2
    }

    comecarJogo(){
    
        
        player.exibir()
    }

    gameOver(){

    }


}