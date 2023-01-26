 /* Bugs
 1_ cenario que não aparece
 2_ problema no gameover
 3_ colocar arbustos como parte do cenario
 */

// Declaração de variáveis
var cenario, cenario_png
var chao_fake
var arbusto
var palmeira
var moeda_yoshi, moeda_yoshiimg
var moeda, moedaimg
var goomba
var ponteiro = 0
var gameState = "PLAY"
var vegetaçãoG, inimigosG, vegetacao, inimigos


function preload(){
cenario_png = loadImage("Cenario.png");
mario_correndo = loadAnimation("Mario correndo 1.png", "Mario correndo 2.png")
nuvemimg = loadImage("Nuvem.png")
//moeda_yoshiimg = loadAnimation("Yoshi.c1.png", "Yoshi.c2.png", "Yoshi.c3.png", "Yoshi.c4.png")
goomba_png = loadAnimation("Goomba1.png", "Goomba2.png")
}


function setup() {
// Tela do jogo
createCanvas(windowWidth, windowHeight);
//CENARIO
cenario = createSprite(width-150, 746 ,100,100);
cenario.addImage("cenario", cenario_png);
cenario.scale = 0.3;
//Mario
mario = createSprite(50, 790, 100, 100)
mario.addAnimation("mario_corre", mario_correndo)

vegetaçãoG=createGroup();
inimigosG=createGroup();

}

function draw() {
background("lightblue");
drawSprites()

//PONTUAÇÃO
text("Pontuação: " + ponteiro, width/2 - 100, 41 )

//GameState Play
if (gameState === "PLAY") {

ponteiro = ponteiro + Math.round(getFrameRate()/50);
//cenario se movendo
if(cenario.x < 0){
    cenario.x = width+150
}
cenario.velocityX = -4

inimigos();

//spawn de nuvem
if (frameCount % 60 === 0) {
    nuvem = createSprite(width, 120, 40, 10)
    nuvem.addImage("nuvem_img", nuvemimg)
    nuvem.y = Math.round(random(52,696))
    nuvem.x = Math.round(random(5000, 10000))
    nuvem.velocityX = -15
    nuvem.scale = 2
}

}

//gameState GameOver
if (gameState === "GAME_OVER") {
    cenario.velocityX = 0
    console.log("game_over")
}

/*POSIÇÃO DO MOUSE
console.log(mouseX);
console.log(mouseY);*/
console.log(cenario.x)
}

// Spawna Inimigos
function inimigos() {
    if (World.frameCount % Math.round(random(10, 80)) === 0){
    goomba = createSprite(2400, 799, 100, 100)
    goomba.addAnimation("goomba.img", goomba_png)
    goomba.scale = 2 
    goomba.velocityX = -5
    inimigosG.add(goomba);
    }
}


//Fazer o cenario picotado

//criar inimigos 

//Fazer a flor de fogo

//Fazer UM boos 