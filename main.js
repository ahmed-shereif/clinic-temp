var drop_one = document.getElementById("drop_one")
var menu = document.querySelector(".services_menu")

drop_one.addEventListener("mouseover",function(){
    drop_one.firstElementChild.style.transform = "rotate(0deg)"
    console.log(drop_one.firstElementChild.style.transform);
    var menu = document.querySelector(".services_menu")
    menu.style.display="flex"
 
})

menu.addEventListener("mouseleave",function(){
    drop_one.firstElementChild.style.transform = "rotate(180deg)"
    var menu = document.querySelector(".services_menu")
    menu.style.display="none"
    console.log(menu.style.display);
})

//bullets styling
var i =0;

var bullets= document.querySelectorAll("#bullets")[0].children


var img1= document.getElementById("img_change")
var imgArr=["./photo/4analyzes (1).png","./photo/syringe.png","./photo/4 stethoscope (1).png","./photo/ultrasound.png"]
var h1Arr=["Analyzes","Vaccination","Ultrasound","Patronage"]
var h2Arr=[
    " Diagnostics of the state of health for the prevention and control of the treatment of diseasesList of analyzes",
    "Vaccination of children according to the national calendar, as well as to protect the child from viruses and bacteria",
    "High-precision ultrasound diagnostics using expert-class equipment.",
    "Comprehensive individual medical support for a child in the clinic or with a visit of doctors at home."

]
var h1Text=document.getElementsByClassName("third_view_down_text")[0].children[0]
var h2Text=document.getElementsByClassName("third_view_down_text")[0].children[1]


console.log(h1Text);


function nextImge(){

   if(i<imgArr.length-1){
    for(var z=0 ; z<bullets.length;z++){
        bullets[z].style.opacity="0.5"
        console.log(bullets[z].style.opacity);
    }
    i++
    h1Text.innerHTML=h1Arr[i]
    h2Text.innerHTML=h2Arr[i]
    img1.src= imgArr[i]
    img1.style.transform="translateX(-50px)"
    img1.style.opacity="0"
    img1.style.transition="1s";
    img1.style.transitionTimingFunction="ease-in-out;"

    h1Text.style.transform="translateX(50px)"
    h1Text.style.opacity="0"
    h1Text.style.transition="1s";
    h1Text.style.transitionTimingFunction="ease-in-out;"

    h2Text.style.transform="translateX(50px)"
    h2Text.style.opacity="0"
    h2Text.style.transition="1s";
    h2Text.style.transitionTimingFunction="ease-in-out;"
   
    bullets[i].style.opacity='1'
    setTimeout(function(){
        img1.style.transform="translateX(00px)"
        img1.style.opacity="1"

        h1Text.style.opacity="1"
        h1Text.style.transform="translateX(0px)"

        h2Text.style.transform="translateX(0px)"
        h2Text.style.opacity="1"
    },400)


   }
 
  
}

function prevImge(){

   if(i>=1){
    for(var z=0 ; z<bullets.length;z++){
        bullets[z].style.opacity="0.5"
    }
    i--
    h1Text.innerHTML=h1Arr[i]
    img1.src= imgArr[i]
    bullets[i].style.opacity='1'
    img1.style.transform="translateX(50px)"
    img1.style.transition="1s";
    img1.style.opacity="0"
    img1.style.transitionTimingFunction="ease-in-out;"

        
    h1Text.style.transform="translateX(-50px)"
    h1Text.style.opacity="0"
    h1Text.style.transition="1s";
    h1Text.style.transitionTimingFunction="ease-in-out;"

    h2Text.style.transform="translateX(-50px)"
    h2Text.style.opacity="0"
    h2Text.style.transition="1s";
    h2Text.style.transitionTimingFunction="ease-in-out;"
    setTimeout(function(){
        img1.style.transform="translateX(00px)"
        img1.style.opacity="1"
        
        h1Text.style.opacity="1"
        h1Text.style.transform="translateX(0px)"

        h2Text.style.transform="translateX(0px)"
        h2Text.style.opacity="1"
    },400)
   }
  
}


console.log(bullets.children);
