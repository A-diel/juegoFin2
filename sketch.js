var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombi, zom;
var heart, hearA, hearB, HearC;
var hearAImg, hearBImg, hearCImg;
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  //precargar las img de heart como heart
  hearAImg = loadImage("assets/hear_1.png")
  hearBImg = loadImage("assets/hear_2.pn")
  hearCImg = loadImage("assets/hear_3.pn")
  bgImg = loadImage ("assets/bg.jpeg")
  zom = loadImage("assets/zombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //Añadir la imagen de fondo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
 
  //crear los sprites de los corasones a b c 
  heartA = createSprite(displayWidth-150,40,20,20)
   heartA.visible = false
    heartA.addImage("heartA",heartAImg)
    heartA.scale = 0.4

    heartB = createSprite(displayWidth-100,40,20,20)
    heartB.visible = false
    heartB.addImage("heartB",heartBImg)
    heartB.scale = 0.4

    heartC = createSprite(displayWidth-150,40,20,20)
    heartC.addImage("heartC",heartCImg)
    heartC.scale = 0.4
   
  zombi = createSprite(displayWidth-150, displayHeight-300, 50, 50);
  zombi.addImage(zom);
  zombi.scale = 0.1;
  zombi.velocityX = -8;
 

//Crear el sprite del jugador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
 
  player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)
zombiGroup=new Group();
  //agreagar los zombies

}

function draw() {
  background(0);      //if
if (life === 1){
  hearA = true
}



  //Mover al jugador arriba y abajo y hacer que el juego móvil sea compatible de forma táctil.
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if (zombi.isTouching(player)){
//generandolo de manera aleatoria 
//crear un bucle para que aparescan los sprites 
}

//Liberar las balas y cambiar la imagen del tirador a la posición de disparo cuando la barra espaciadora se presiona.
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//El jugador regresa a la imagen de posición original una vez que dejamos de presionar la barra de espacio.
else if(keyDown("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
  player.addImage(shooterImg)
 //player.addImage(shooter_1.png)

}
enemy();
drawSprites();

}
function enemy(){
  if (frameCount % 50 === 0){
    zombi=createSprite(random(500,100),random(200,500),30,30);
    //añadir la img del zombi, la escala tipo de vida , grupo de zombies
    zombi.addImage(zom);
    zombi.scale = 0.1;
    zombi.velocityX = -8;
    zombi.lifetime = 400;
    zombiGroup.add(zom) 
    zombi.debug=true;
    zombi.setCollider("rectangle",0,0,300,300);
  }
}