var rnd =Math.floor( (Math.random()*6)+1);
var rng =Math.floor( (Math.random()*6)+1);
console.log(rnd);


document.querySelector("img").setAttribute("src",  "images/dice" + rnd + ".png");
document.querySelector("img.img2").setAttribute("src",  "images/dice" + rng + ".png");
if(rnd > rng){
    document.querySelector("h1").textContent="Player 1 WIN";
}else if(rnd <rng){
    document.querySelector("h1").textContent="Player 2 WIN";
}else{
    document.querySelector("h1").textContent="Equal Score";
}

//src = "images/dice" + rng + ".png";



