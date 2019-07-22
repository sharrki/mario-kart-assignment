//java script
"strict user"

// eventlistener
document.getElementById("gen").addEventListener('click',mario)

// function
function mario(){
    let random = Math.random();
    if(random < 0.25){
        document.getElementById('item').innerHTML += "<img src='images/Banana_(Mario_Kart_Wii).png' width='40px' height='40px'>";
        document.getElementById("collect").innerHTML = "Banana";
    }else if(random < 0.5){
        document.getElementById('item').innerHTML += "<img src='images/Green_Shell_-_Mario_Kart_DS.png' width='40px' height='40px'>";
        document.getElementById("collect").innerHTML = "Green Shell";
    }else if(random < 0.65){
        document.getElementById('item').innerHTML += "<img src='images/Star3dworld.png' width='40px' height='40px'>";
        document.getElementById("collect").innerHTML = "Star";
    }else if(random < 0.8){
        document.getElementById('item').innerHTML += "<img src='images/download.jfif' width='40px' height='40px'>";
        document.getElementById("collect").innerHTML = "Golden Mushroom";
    }else{
        document.getElementById('item').innerHTML += "<img src='images/download (1).jfif' width='40px' height='40px'>";
        document.getElementById("collect").innerHTML = "Bullet Bill";
    }

}