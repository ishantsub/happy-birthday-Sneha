// 1. Unblock Audio on screen tap
function startMusic() {
    const audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Audio playing..."));
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
            img.src = chootu/image${i}.jpg; 
            img.className = "collage-img";
            collageBg.appendChild(img);
        }
        collageBg.style.display = "grid";
        setTimeout(() => { collageBg.style.opacity = "1"; }, 100);

        // Drop the falling gift box asset
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
