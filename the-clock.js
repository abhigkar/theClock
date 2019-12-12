var current="";
var images="c00,c01,c02,c03".split(",");
var lastPress = 0;

for(let i=0;i<4;i++){
  for(let j=0;j<4;j++){
	let img = require("Storage").read("c"+i+j);
    g.drawImage(img,i*60,j*60);
  }
}

