function handleStart() {
    // 1. Play background audio instantly
    var audio = document.getElementById("bg-music");
    if (audio) {
        audio.play().catch(function(error) {
            console.log("Audio play blocked: ", error);
        });
    }

    // 2. Hide start button so the user cannot double-click it
    var btn = document.getElementById("action-btn");
    if (btn) {
        btn.style.display = "none";
    }

    // 3. Make My Melody slide in to cut the cake
    var melody = document.getElementById("my-melody");
    if (melody) {
        melody.classList.add("melody-in");
    }

    // 4. Wait 2.5 seconds for cutting animation, then show photo collage
    setTimeout(function() {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#ffeaa7";

        var collageBg = document.getElementById("collage-bg");
        if (collageBg) {
            collageBg.innerHTML = ""; // Clear duplicates
            
            for (var i = 1; i <= 10; i++) {
                var img = document.createElement("img");
                img.className = "collage-img";
                
                // Try.jpg first (relative paths only)
                img.src = "chootu/image" + i + ".jpg";
                
                // Smart fallback check: If image fails, switch automatically to.png
                // This will perfectly display image7.png from your screenshot!
                img.onerror = (function(index) {
                    return function() {
                        if (this.src.indexOf(".jpg")!== -1) {
                            this.src = "chootu/image" + index + ".png";
                        }
                    };
                })(i);

                collageBg.appendChild(img);
            }
            
            collageBg.style.display = "grid";
            setTimeout(function() {
                collageBg.style.opacity = "1";
            }, 50);
        }

        // 5. Drop the falling gift box 1.5 seconds after collage loads
        setTimeout(function() {
            var gift = document.getElementById("gift-box");
            if (gift) {
                gift.classList.add("gift-active");
            }
        }, 1500);

    }, 2500);
}

function showMessage() {
    var popup = document.getElementById("message-popup");
    if (popup) {
        popup.style.display = "flex";
    }
}

function closeMessage() {
    var popup = document.getElementById("message-popup");
    if (popup) {
        popup.style.display = "none";
    }
}
