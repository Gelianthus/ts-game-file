// 

const songCollection = [{PTB: "PICTURE TO BURN"}, {TOMG: "TEARDROPS ON MY GUITAR"}, {APITW:"A PLACE IN THIS WORLD"}, {CAY: "COLD AS YOU"}, {TTWAS: "TIED TOGETHER WITH A SMILE"}, {SSN: "SHOULD'VE SAID NO"}, {IOMWIWY: "I'M ONLY ME WHEN I'M WITH YOU"}, {APGH: "A PERFECTLY GOOD HEART"}, {YBWM: "YOU BELONG WITH ME"}, {TMW: "TELL ME WHY"}, {YNS: "YOU'RE NOT SORRY"}, {TWILY: "THE WAY I LOVED YOU"}, {TBD: "THE BEST DAY"}, {BTD:"BACK TO DECEMBER"}, {TSOU: "THE STORY OF US"}, {NGU: "NEVER GROW UP"}, {BTR: "BETTER THAN REVENGE"}, {SOG: "STATE OF GRACE"}, {IKYWT: "I KNEW YOU WERE TROUBLE"}, {ATW: "ALL TOO WELL"}, {IAD: "I ALMOST DO"}, {WANEGBT: "WE ARE NEVER EVER GETTING BACK TOGETHER"}, {SSS: "STAY STAY STAY"}, {TLT: "THE LAST TIME"}, {SBT: "SAD BEAUTIFUL TRAGIC"}, {TLO: "THE LUCKY ONE"}, {EHC: "EVERYTHING HAS CHANGED"}, {WTNY: "WELCOME TO NEW YORK"}, {OOTW: "OUT OF THE WOODS"}, {AYHTDWS: "ALL YOU HAD TO DO WAS STAY"}, {SIO: "SHAKE IT OFF"}, {IWYW: "I WISH YOU WOULD"}, {HYGTG: "HOW YOU GET THE GIRL"}, {IKP: "I KNOW PLACES"}, {IDSB: "I DID SOMETHING BAD"}, {DBM: "DON'T BLAME ME"}, {LWYMMD: "LOOK WHAT YOU MADE ME DO"}, {KOMH: "KING OF MY HEART"}, {DWOHT: "DANCING WITH OUR HANDS TIED"}, {TIWWCHNT: "THIS IS WHY WE CAN'T HAVE NICE THINGS"}, {CIWYW: "CALL IT WHAT YOU WANT"}, {NYD: "NEW YEAR'S DAY"}, {IFTYE: "I FORGOT THAT YOU EXISTED"}, {ITHK: "I THINK HE KNOWS"}, {DBATC: "DEATH BY A THOUSAND CUTS"}, {SYGB: "SOON YOU'LL GET BETTER"}, {YNTCD: "YOU NEED TO CALM DOWN"}, {INTHAF: "IT'S NICE TO HAVE A FRIEND"}, {TLGAD: "THE LAST GREAT AMERICAN DYNASTY"}, {MTR: "MY TEARS RICOCHET"}, {TIMT: "THIS IS ME TRYING"}, {CLM: "COWBOY LIKE ME"}, {LSS: "LONG STORY SHORT"}, {RWYLM: "RIGHT WHERE YOU LEFT ME"}, {MIAB: "MESSAGE IN A BOTTLE"}, {IBYTAM: "I BET YOU THINK ABOUT ME"}, {TVFN: "THE VERY FIRST NIGHT"}, {TMIK: "THE MOMENT I KNEW"}, {GAH: "GIRL AT HOME"}, {ITTG: "IT'S TIME TO GO"}, {TMG: "TIM MCGRAW"}, {JTF: "JUMP THEN FALL"}, {CIWTR: "COME IN WITH THE RAIN"}, {TOSOTD: "THE OTHER SIDE OF THE DOOR"}, {ITWAM: "IF THIS WAS A MOVIE"}, {YAIL: "YOU ARE IN LOVE"}, {CTF: "CHRISTMAS TREE FARM"}, {OTY: "ONLY THE YOUNG"}];

// HTML Elements

const gameOverScreen = document.getElementById("game-over-screen");
const score = document.getElementById("score_js");
const gameOverMessage = document.getElementById("game-over-message");
const restartButton = document.getElementById("restart-button");
const gameplaySection = document.getElementById("gameplay-section");
const timer = document.getElementById("timer_js");
const acronymDisplay = document.getElementById("acronym-display");
const textInput = document.getElementById("text-input");
const startButton = document.getElementById("start-button");
// const scoreDisplay = document.getElementById("temporaryScoreDisplay");
const indexNum = document.getElementById("indexNum");
const revealedAnswer = document.getElementById("revealedAnswer");
const lastAnswer = document.getElementById("lastAnswer");
const ruleBook = document.getElementById("ruleBook");
const ruleContainer = document.getElementById("ruleContainer");

// randomly select 13 elements from songCollection

const selectRandom = songCollection.sort((a, b) => 0.5 - Math.random()).splice(0, 14);

// Global Variables

var points = 0;
var currentIndex = 0;
var countdown = 22;

// Functions 

function startGame(){
    acronymDisplay.textContent = Object.keys(selectRandom[currentIndex]);
    startButton.setAttribute("disabled", "");
    startButton.setAttribute("data-disabled", "true");
    textInput.removeAttribute("disabled");
    textInput.focus();
    timer.textContent = countdown;
    indexNum.textContent = currentIndex + 1 + "/13";

    // Interval

    const timeInterval = setInterval(function(){
	    countdown--;
	    timer.textContent = countdown;
	    if (countdown == 0) {
            textInput.removeAttribute("placeholder");
            textInput.focus();
	        countdown = 23;
	        currentIndex++;
	        acronymDisplay.textContent = Object.keys(selectRandom[currentIndex]);
            indexNum.textContent = currentIndex + 1 + "/13";
            revealedAnswer.textContent = Object.values(selectRandom[currentIndex - 1]).toString();
            lastAnswer.textContent = Object.values(selectRandom[currentIndex - 1]).toString();
	        if(textInput.value.toUpperCase() == Object.values(selectRandom[currentIndex - 1]).toString()) {
                points++;
                textInput.value = "";
            textInput.focus(); 
        } else {
            textInput.value = "";
            textInput.focus();
        }}
        score.textContent = points + " points";
	    if (currentIndex == 13) {
            gameOverScreen.classList.remove("display-none");
            acronymDisplay.textContent = "game over";
            if(points == 0) {
                gameOverMessage.textContent = "congrats on being a normal person";
            } else if (points <= 4) {
                gameOverMessage.textContent = "improve your music taste, https://open.spotify.com/playlist/31Yd3wGF87ZOp7I7U9JAJq";
            } else if (points <= 7) {
                gameOverMessage.textContent = "good job ms. pick-me girl";
            } else if (points == 8) {
                gameOverMessage.textContent = "can 100% relate to 'august'";
            } else if (points <= 10) {
                gameOverMessage.textContent = "fucked in the head for sure";
            } else if (points <= 12){
                gameOverMessage.textContent = "you're a walking red flag";
            } else if (points == 13){
                gameOverMessage.textContent = "get a life, socialize, touch grass";
            }
            clearInterval(timeInterval);
        }  
    }, 1000)
}

function checkInput() {
    if(textInput.value.toUpperCase() == Object.values(selectRandom[currentIndex]).toString()) {
        textInput.removeAttribute("placeholder");
        currentIndex++;
        acronymDisplay.textContent = Object.keys(selectRandom[currentIndex]);
        countdown = 23;
        points++;
        textInput.value = "";
        textInput.focus();
        indexNum.textContent = currentIndex + 1 + "/13";
        revealedAnswer.textContent = Object.values(selectRandom[currentIndex - 1]).toString();
        lastAnswer.textContent = Object.values(selectRandom[currentIndex - 1]).toString();
    }
}

// Event Listeners

startButton.addEventListener("click", startGame)

textInput.addEventListener("input", checkInput)

restartButton.addEventListener("click", function() {
    window.location.reload();
})

ruleBook.addEventListener("mouseover", function(){
    ruleContainer.style.transform = "translateX(0)";
})

ruleBook.addEventListener("mouseout", function(){
    ruleContainer.style.transform = "translateX(200%)";
})