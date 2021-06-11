const giris = document.querySelector("#box1");
const page = document.querySelector('.background-img');
const input = document.querySelector('input');
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
let yesClicked = new Boolean(false);
let noClicked = new Boolean(false);
const myAnswer = document.querySelector("#answer");
//console.log(yesClicked.valueOf());
yes.addEventListener('click', onClick)
function onClick(e) {
    yesClicked = true;

}
no.addEventListener('click', onNoClick)
function onNoClick(e) {
    noClicked = true;

}

input.addEventListener('input', onSubmit);
function onSubmit(e) {

    if (e.data == "?") {
        let url = 'https://yesno.wtf/api'
        if (yesClicked == true) url += '?force=yes'
        else if (noClicked == true) url += '?force=no'

        fetch(url)
            .then(response => response.json())
            .then(function (data) {
                page.style.cssText = `background-image: url('${data.image}');`;
                myAnswer.style.display = 'inline';
                myAnswer.innerHTML = `<h1>${data.answer}</h1>`;
                giris.style.cssText = "display:none";
                setTimeout(changes, 3000);
                yesClicked = false;
                noClicked = false;


            })
    }
}

function changes() {
    page.style.cssText = "background-image: url('/images/bground.jpeg');";
    giris.style.cssText = "display:inline";
    myAnswer.style.display = 'none';
}


