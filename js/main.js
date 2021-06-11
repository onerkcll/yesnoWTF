const giris = document.querySelector("#box1");
const page = document.querySelector('.backgroundimg');
const input = document.querySelector('input');
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
let yesClicked = new Boolean(false);
let noClicked = new Boolean(false);
const myAnswer = document.querySelector("#answer");
//console.log(yesClicked.valueOf());
yes.addEventListener('click',onClick)
function onClick(e){
    yesClicked=true;

}
no.addEventListener('click',onNoClick)
function onNoClick(e){
    noClicked=true;

}

input.addEventListener('input',onSubmit);
function onSubmit(e){
   if(e.data=="?"&& yesClicked==true){
       var apiYes = fetch("https://yesno.wtf/api?force=yes")
       .then(response => response.json())
       .then(function(data){
        page.style.cssText="background-image: url('" +data.image+"');";
        myAnswer.style.display='inline';     
        myAnswer.innerHTML='<h1>'+data.answer+'</h1>';
        giris.style.cssText="display:none";
        setTimeout(changes,3000);
        yesClicked=false;
       })
   
    
   
   }else if(e.data=="?"&& noClicked==true) {
       var apiNO = fetch("https://yesno.wtf/api?force=no")
       .then(response => response.json())
       .then(function(data){
        page.style.cssText="background-image: url('" +data.image+"');";
        myAnswer.style.display='inline';     
        myAnswer.innerHTML='<h1>'+data.answer+'</h1>';
        giris.style.cssText="display:none";
        setTimeout(changes,3000);
        noClicked=false;
       })
    

   }else if(e.data=="?") {
       var api = fetch("https://yesno.wtf/api")
       .then(response => response.json())
       .then(function(data){
        page.style.cssText="background-image: url('" +data.image+"');";
        myAnswer.style.display='inline';     
        myAnswer.innerHTML='<h1>'+data.answer+'</h1>';
        giris.style.cssText="display:none";
        setTimeout(changes,3000);
       })
   }
  
}

function changes(){
    page.style.cssText="background-image: url('/images/bground.jpeg');";
    giris.style.cssText="display:inline";
    myAnswer.style.display='none';
    
   
}


