// Bài 1==========================================

for(let i = 4 ; i <= 20 ; i=i+2){
    if(i % 2==0){
        console.log(i + " là số chẵn")
    }
}
    
    


// Bài 2==================================================
document.getElementById('haha').onmouseenter = MouseEnter;
document.getElementById('haha').onmouseleave = MouseLeave;
function MouseEnter(){
    document.getElementById('haha').style.background = "blue";
}
function MouseLeave(){
    document.getElementById('haha').style.background = "red";
}





// Bài 3=================================================

function numberOneTriangle(height){
    let result = "";
    for (let i = 1 ; i <= height ; i++) {
        for (let k = height ; k > i ; k--) {
          result += "";
        }
        for (let j = 1 ; j<= i ; j++) {
            result += "1" + " ";
        }
        result += "\n";
    }
    return result;
}
console.log(numberOneTriangle(8));