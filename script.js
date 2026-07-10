// 1. Safe ISO Date Format for July 11, 2026
const targetDate = new Date("2026-07-11T00:00:00").getTime();

function checkTime() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // If the countdown is finished (It's July 11 or later)
    if (distance <= 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "It's Time! 🎉";
        document.getElementById("start-btn").style.display = "block";
    } else {
        // If there's still time left (depending on timezone)
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    }
}

// Run instantly the moment the page loads so it isn't blank
checkTime();

// Keep updating every second just in case
const timerInterval = setInterval(checkTime, 1000);

// 2. Start the Celebration
function startCelebration() {
    document.getElementById("countdown-screen").style.display = "none";
    document.getElementById("celebration-screen").style.display = "block";
    
    // Play back.mp3 safely
    const audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Audio playback delayed until user interaction"));
}

// 3. Interactive Candle Blowing
let candlesBlown = 0;
const totalCandles = 3;

function blowCandle(element) {
    if (!element.classList.contains("blown-out")) {
        element.classList.add("blown-out");
        candlesBlown++;

        if (candlesBlown === totalCandles) {
            setTimeout(cutCake, 1000);
        }
    }
}

// 4. Cake Cutting & Background Swap
function cutCake() {
    const melody = document.getElementById("my-melody");
    melody.classList.add("cut-animation"); 

    setTimeout(() => {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#ffeaa7";

        const collageBg = document.getElementById("collage-bg");
        collageBg.innerHTML = ""; // Clear any duplicates
        for (let i = 1; i <= 10; i++) {
            const img = document.createElement("img");
            img.src = chootu/image${i}.jpg; 
            img.className = "collage-img";
            collageBg.appendChild(img);
        }
        collageBg.style.display = "grid";
        setTimeout(() => { collageBg.style.opacity = "1"; }, 100);

        setTimeout(() => {
            document.getElementById("gift-box").style.display = "block";
        }, 1500);

    }, 2000); 
}

// 5. Open Personal Message
function openGift() {
    document.getElementById("gift-box").style.display = "none";
    document.getElementById("message-modal").style.display = "block";
}
