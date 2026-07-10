let musicStarted = false;

// 1. Unblock Audio safely on screen tap
function startMusic() {
    if (!musicStarted) {
        const audio = document.getElementById("bg-music");
        audio.play()
           .then(() => { musicStarted = true; })
           .catch(error => console.log("Audio waiting for screen interaction..."));
    }
}

// 2. Trigger the Cake Cutting Sequence Automatically 1.5 seconds after page loads
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(cutCake, 1500);
});

// 3. Automatic Cake Cutting & Background Swap to Collage
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
            img.className = "collage-img";
            
            // Smart fallback strategy: Attempt to load.jpg, but if it fails, try.png
            // This automatically handles 'image7.png' in your folder!
            img.src = chootu/image${i}.jpg;
            img.onerror = function() {
                if (this.src.endsWith('.jpg')) {
                    this.src = chootu/image${i}.png;
                }
            };
            
            collageBg.appendChild(img);
        }
        collageBg.style.display = "grid";
        setTimeout(() => { collageBg.style.opacity = "1"; }, 100);

        // Drop the falling gift box asset
        setTimeout(() => {
            const giftBox = document.getElementById("gift-box");
            giftBox.classList.add("gift-drop");
        }, 1500);

    }, 2200); // Give Melody enough time to slide in fully
}

// 4. Open Personal Birthday Message
function openGift(event) {
    if (event) event.stopPropagation(); // Stop click from restarting music logic
    document.getElementById("gift-box").style.display = "none";
    document.getElementById("message-modal").style.display = "block";
}
