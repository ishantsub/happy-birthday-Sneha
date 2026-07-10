// 1. Start the Celebration instantly when button is clicked
function startCelebration() {
    document.getElementById("countdown-screen").style.display = "none";
    document.getElementById("celebration-screen").style.display = "block";
    
    // Play back.mp3 audio smoothly
    const audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Audio waiting for user tap interaction"));
}

// 2. Interactive Candle Blowing
let candlesBlown = 0;
const totalCandles = 3;

function blowCandle(element) {
    if (!element.classList.contains("blown-out")) {
        element.classList.add("blown-out");
        candlesBlown++;

        // Once all 3 candles are blown out, trigger the cutting sequence
        if (candlesBlown === totalCandles) {
            setTimeout(cutCake, 1000);
        }
    }
}

// 3. Cake Cutting & Background Swap to Collage
function cutCake() {
    const melody = document.getElementById("my-melody");
    melody.classList.add("cut-animation"); 

    setTimeout(() => {
        // Remove standard background template
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#ffeaa7";

        // Generate the 10-photo grid from the 'chootu' folder
        const collageBg = document.getElementById("collage-bg");
        collageBg.innerHTML = ""; 
        
        for (let i = 1; i <= 10; i++) {
            const img = document.createElement("img");
            img.src = chootu/image${i}.jpg; 
            img.className = "collage-img";
            collageBg.appendChild(img);
        }
        collageBg.style.display = "grid";
        setTimeout(() => { collageBg.style.opacity = "1"; }, 100);

        // Bring down the falling gift box asset
        setTimeout(() => {
            document.getElementById("gift-box").style.display = "block";
        }, 1500);

    }, 2000); 
}

// 4. Open Personal Birthday Message
function openGift() {
    document.getElementById("gift-box").style.display = "none";
    document.getElementById("message-modal").style.display = "block";
}
