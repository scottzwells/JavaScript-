const x =10;
if(x === '10'){
    console.log("x is 10");
}
else console.log("x isn't 10") ;
const color = x>10 ? "red" : "blue";
switch(color){
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is neither red nor blue")
}