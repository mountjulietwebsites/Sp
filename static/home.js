//defining
let boyA = document.getElementById('boyA');
let boyB = document.getElementById('boyB');
let boyC = document.getElementById('boyC');
let girlA = document.getElementById('girlA');
let girlB = document.getElementById('girlB');
let girlC = document.getElementById('girlC');
let timeP = document.getElementById('timerP');

let CTEGirl = document.getElementById("CTEG");
let CTEBoy = document.getElementById("CTEB");

let Ab = document.getElementById('Ab');
let Bb = document.getElementById('Bb');
let Cb = document.getElementById('Cb');

let topText = document.getElementById('floorP');

let change = document.getElementById('changeB');
//functions
function aMain() {
    boyA.style.visibility = 'visible';
    girlA.style.visibility = 'visible';
    boyB.style.visibility = "hidden";
    girlB.style.visibility = 'hidden';
    boyC.style.visibility = 'hidden';
    girlC.style.visibility = 'hidden';
    timeP.style.visibility = "visible";
    document.getElementById('CTEB').style.visibility = "visible";
    document.getElementById('CTEG').style.visibility = "visible";

}
function bMain() {
    boyB.style.visibility = 'visible';
    girlB.style.visibility = 'visible';
    boyA.style.visibility = "hidden";
    girlA.style.visibility = 'hidden';
    boyC.style.visibility = 'hidden';
    girlC.style.visibility = 'hidden';
    timeP.style.visibility = "visible";
    document.getElementById('CTEB').style.visibility = "hidden";
    document.getElementById('CTEG').style.visibility = "hidden";
}
function cMain() {
    boyC.style.visibility = 'visible';
    girlC.style.visibility = 'visible';
    boyB.style.visibility = "hidden";
    girlB.style.visibility = 'hidden';
    boyA.style.visibility = 'hidden';
    girlA.style.visibility = 'hidden';
    timeP.style.visibility = "visible";
    document.getElementById('CTEB').style.visibility = "hidden";
    document.getElementById('CTEG').style.visibility = "hidden";
}
function firstChange() {
    Ab.style.visibility = "visible";
    Bb.style.visibility = "visible";
    Cb.style.visibility = "visible";
    change.style.visibility= 'hidden';
    document.getElementById('textBox1').style.visibility = "hidden";
    document.getElementById('textBox2').style.visibility = "hidden";
    document.getElementById('textBox3').style.visibility = "hidden";
    document.getElementById('textBox4').style.visibility = "hidden";
    topText.innerText = ('Choose your floor');
    document.getElementById('specificationDiv').style.visibility = "hidden";
    document.getElementById('caution').innerText = '(no information is sent. This info appears at the top of the screen.)'
}

function aBoy() {
    const urlABoy = document.getElementById('aBoyUrl').value;
    window.location.href = urlABoy;
}
function aGirl() {
    const urlAGirl = document.getElementById('aGirlUrl').value;
    window.location.href = urlAGirl;
}
function bBoy() {
    const urlBBoy = document.getElementById('bBoyUrl').value;
    window.location.href = urlBBoy;
}
function bGirl() {
    const urlBGirl = document.getElementById('bGirlUrl').value;
    window.location.href = urlBGirl;
}
function cBoy() {
    const urlCBoy = document.getElementById('cBoyUrl').value;
    window.location.href = urlCBoy;
}
function cGirl() {
    const urlCGirl = document.getElementById('cGirlUrl').value;
    window.location.href = urlCGirl;
}
function cteBoyFunc() {
    const urlCTEBoy = document.getElementById('cteBoyUrl').value;
    window.location.href = urlCTEBoy;
}
function cteGirlFunc() {
    const urlCTEGirl = document.getElementById('cteGirlUrl').value;
    window.location.href = urlCTEGirl;
}
//loading definitions
boyA.style.visibility = 'hidden';
boyB.style.visibility = 'hidden';
boyC.style.visibility = 'hidden';
girlA.style.visibility = 'hidden';
girlB.style.visibility = 'hidden';
girlC.style.visibility = 'hidden';
timeP.style.visibility = 'hidden';

Ab.style.visibility = "hidden";
Bb.style.visibility = "hidden";
Cb.style.visibility = "hidden";
document.getElementById('CTEB').style.visibility = "hidden";
document.getElementById('CTEG').style.visibility = 'hidden';

topText.innerText = "Choose the specifications"
//event listeners
change.addEventListener('click', firstChange);
Ab.addEventListener('click', aMain);
Bb.addEventListener('click', bMain);
Cb.addEventListener('click', cMain);

boyA.addEventListener('click', aBoy);
girlA.addEventListener('click', aGirl);
boyB.addEventListener('click', bBoy);
girlB.addEventListener('click', bGirl);
boyC.addEventListener('click', cBoy);
girlC.addEventListener('click', cGirl);
CTEBoy.addEventListener('click', cteBoyFunc);
CTEGirl.addEventListener('click', cteGirlFunc);
//port = int(os.environ.get("PORT", 5000))
 //   app.run(host='0.0.0.0', port=port)