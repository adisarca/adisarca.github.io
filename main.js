let img = document.getElementById("myImg");
let opt = document.getElementById("options");



let greyscale = document.getElementById("greyScale");
let greyVal = document.getElementById("greyValue");




let blurr = document.getElementById("blur");
let blurVal = document.getElementById("blurVal");

let bright = document.getElementById("brightness");
let brightVal = document.getElementById("brightVal");

let sepia = document.getElementById("sepia");
let sepiaVal = document.getElementById("sepiaVal");

let saturate = document.getElementById("saturate");
let satVal = document.getElementById("satVal");

let hue = document.getElementById("hueRotate");
let hueVal = document.getElementById("hueVal");

let opacity = document.getElementById("opacity");
let opVal = document.getElementById("opVal");

let contrast = document.getElementById("contrast");
let conVal = document.getElementById("conVal");

let invert = document.getElementById("invert");
let inVal = document.getElementById("inVal");


gText = document.getElementById("filterText");
mText = document.getElementById("mozText");
wText = document.getElementById("webText");


function copyText(){
    document.execCommand("copy");
}

function showText() {
    let grey = `greyscale(${greyscale.value}%)`
    let sep = `sepia(${sepia.value}%)`
    let blu = `blur(${blurr.value}px)`
    let sat = `saturation(${saturate.value}%)`
    let con = `contrast(${contrast.value}%)`
    let hu = `hue-rotate(${hue.value}deg)`
    let op = `opacity(${opacity.value}%)`
    let inv = `invert(${invert.value}%)`
    let bri = `brightness(${bright.value}%)`

    



    if (sepia.value == 0) {
        sep = "";
    }
    if (greyscale.value == 0) {
        grey = "";
    }
    if (blurr.value == 0) {
        blu = "";
    }
    if (saturate.value == 100) {
        sat = "";
    }
    if (contrast.value == 100) {
        con = "";
    }
    if (hue.value == 0) {
        hu = "";
    }
    if (invert.value == 0) {
        inv = "";
    }
    if (opacity.value == 100) {
        op = "";
    }
    if (bright.value == 100) {
        bri = "";
    }
    gText.innerHTML = "filter: " + grey + sep + blu + sat + con + hu + inv + op + bri + ";";
    wText.innerHTML = "-webkit-filter: " + grey + sep + blu + sat + con + hu + inv + op + bri + ";";
    mText.innerHTML = "-moz-filter: " + grey + sep + blu + sat + con + hu + inv + op + bri + ";";
    if(sepia.value == 0 && greyscale.value == 0 && blurr.value == 0 && saturate.value == 100 && hue.value == 0 && invert.value == 0 && opacity.value == 100 && bright.value == 100 && contrast.value == 100){
        gText.innerHTML = "";
        mText.innerHTML = "";
        wText.innerHTML = "";
    }
}



opt.oninput = () => {



    greyscale.oninput = () => {
        greyVal.innerHTML = greyscale.value + "%";
        img.style.setProperty('--grey', `${greyscale.value}%`);

    }

    sepia.oninput = () => {
        sepiaVal.innerHTML = sepia.value + "%";
        img.style.setProperty('--sepia', `${sepia.value}%`);
    }


    blurr.oninput = () => {
        blurVal.innerHTML = blurr.value + "px";
        img.style.setProperty('--blur', ` ${blurr.value}px`);

    }

    bright.oninput = () => {
        brightVal.innerHTML = bright.value + "%";
        img.style.setProperty('--bright', ` ${bright.value}%`);

    }

    hue.oninput = () => {
        hueVal.innerHTML = hue.value + "°";
        img.style.setProperty('--hue', ` ${hue.value + "deg"}`);

    }

    saturate.oninput = () => {
        satVal.innerHTML = saturate.value + "%";
        img.style.setProperty('--saturate', ` ${saturate.value}%`);

    }

    opacity.oninput = () => {
        opVal.innerHTML = opacity.value + "%";
        img.style.setProperty('--opacity', ` ${opacity.value}%`);

    }

    contrast.oninput = () => {
        conVal.innerHTML = contrast.value + "%";
        img.style.setProperty('--contrast', ` ${contrast.value}%`);

    }

    invert.oninput = () => {
        inVal.innerHTML = invert.value + "%";
        img.style.setProperty('--invert', ` ${invert.value}%`);

    }



    showText();


}