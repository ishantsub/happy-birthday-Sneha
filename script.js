// 1. Interactive Candle Blowing & Music Trigger
let candlesBlown = 0;
const totalCandles = 3;

function blowCandle(element) {
    // Try to trigger audio on the very first user interaction (tap)
    const audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Audio playing..."));

    if (!element.classList.contains("blown-out")) {
        element.classList.add("blown-out");
        candlesBlown++;

        // Once all 3 candles are blown out, trigger the cutting sequence
        if (candlesBlown === totalCandles) {
            setTimeout(cutCake, 1000);
        }
    }
}

// 2. Cake Cutting & Background Swap to Collage
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

// 3. Open Personal Birthday Message
function openGift() {
    document.getElementById("gift-box").style.display = "none";
    document.getElementById("message-modal").style.display = "block";
}
