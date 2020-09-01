const display=document.querySelector(".display");
const startButton=document.querySelector(".start");
const stopButton=document.querySelector(".stop");
const resetButton=document.querySelector(".reset");
console.log(resetButton);

let sec=0;
let min=0;
let hrs=0;

let disSec=0;
let disMin=0;
let disHrs=0;

let status=false;
let interval;

function watch(){
    sec++;
    if(sec/60 ==1){
        sec=0;
        min++;
    }
    if(min/60 ==1){
        min=0;
        hrs++;
    }

    if(sec<10){
        disSec='0'+sec;
    }else{
        disSec=sec;
    }

    if(min<10){
        disMin='0'+min;
    }else{
        disMin=min;
    }
    if(hrs<10){
        disHrs='0'+hrs;
    }else{
        disHrs=hrs;
    }

    display.innerHTML=disHrs+":"+disMin+":"+disSec
}




startButton.addEventListener("click",function(){

    if(status==false){
        interval=window.setInterval(watch,1000);
        status=true;
    }
});

stopButton.addEventListener("click",function(){

    if(status==true){
        window.clearInterval(interval);
        status=false;
    }
});

resetButton.addEventListener("click",function(){
    window.clearInterval(interval);
    sec=0;
    min=0;
    hrs=0;
    display.innerHTML="00:00:00";
    status=false;
})