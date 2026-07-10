// 1. Countdown Logic to July 11, 2026
const targetDate = new Date("July 11, 2026 00:00:00").getTime();

const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "It's Time!";
        document.getElementById("start-btn").style.display = "block";
    } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    }
}, 1000);

// 2. Start the Celebration
function startCelebration() {
    document.getElementById("countdown-screen").style.display = "none";
    document.getElementById("celebration-screen").style.display = "block";
    document.getElementById("bg-music").play(); // Play back.mp3
}

// 3. Interactive Candle Blowing
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

// 4. Cake Cutting & Background Swap
function cutCake() {
    const melody = document.getElementById("my-melody");
    melody.classList.add("cut-animation"); // My Melody slides in to cut

    setTimeout(() => {
        // Hide Cinnamoroll background
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#ffeaa7";

        // Generate and Show Collage
        const collageBg = document.getElementById("collage-bg");
        for (let i = 1; i <= 10; i++) {
            const img = document.createElement("img");
            img.src = chootu/image${i}.jpg; // Points to your chootu folder
            img.className = "collage-img";
            collageBg.appendChild(img);
        }
        collageBg.style.display = "grid";
        setTimeout(() => { collageBg.style.opacity = "1"; }, 100);

        // Drop the Gift Box
        setTimeout(() => {
            document.getElementById("gift-box").style.display = "block";
        }, 1500);

    }, 2000); // Wait for My Melody animation to finish
}

// 5. Open Personal Message
function openGift() {
    document.getElementById("gift-box").style.display = "none";
    document.getElementById("message-modal").style.display = "block";
}