// 1. Start the Celebration instantly on click
function startCelebration() {
    document.getElementById("countdown-screen").style.display = "none";
    document.getElementById("celebration-screen").style.display = "block";
    
    // Play back.mp3 safely
    const audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Audio playback delayed until user interaction"));
}

// 2. Interactive Candle Blowing
let candlesBlown = 0;
const totalCandles = 3;

function blowCandle(element) {
    if (!element.classList.contains("blown-out")) {
        element.classList.add("blown-out");
        candlesBlown++;

        // Once all candles are tapped (blown out), trigger the cutting sequence
        if (candlesBlown === totalCandles) {
            setTimeout(cutCake, 1000);
        }
    }
}

// 3. Cake Cutting & Background Swap
function cutCake() {
    const melody = document.getElementById("my-melody");
    melody.classList.add("cut-animation"); 

    setTimeout(() => {
        // Swap background
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#ffeaa7";

        // Generate and Show Collage
        const collageBg = document.getElementById("collage-bg");
        collageBg.innerHTML = ""; // Clear duplicates
        for (let i = 1; i <= 10; i++) {
            const img = document.createElement("img");
            img.src = chootu/image${i}.jpg; 
            img.className = "collage-img";
            collageBg.appendChild(img);
        }
        collageBg.style.display = "grid";
        setTimeout(() => { collageBg.style.opacity = "1"; }, 100);

        // Drop the Gift Box
        setTimeout(() => {
            document.getElementById("gift-box").style.display = "block";
        }, 1500);

    }, 2000); 
}

// 4. Open Personal Message
function openGift() {
    document.getElementById("gift-box").style.display = "none";
    document.getElementById("message-modal").style.display = "block";
}
