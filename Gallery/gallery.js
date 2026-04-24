const overlay = document.getElementById("mediaOverlay");
const overlayImg = document.getElementById("overlayImage");
const overlayVideo = document.getElementById("overlayVideo");
const closeBtn = document.querySelector(".close-overlay");

/* OPEN IMAGE */

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        overlay.classList.add("active");

        overlayImg.src = img.src;
        overlayImg.style.display = "block";

        overlayVideo.style.display = "none";
        overlayVideo.pause();
        overlayVideo.currentTime = 0;

    });

});

/* OPEN VIDEO */

document.querySelectorAll(".gallery video").forEach(video => {

    video.addEventListener("click", () => {

        overlay.classList.add("active");

        const videoSrc = video.querySelector("source").src;

        overlayVideo.src = videoSrc;
        overlayVideo.style.display = "block";

        overlayImg.style.display = "none";

        overlayVideo.currentTime = 0;
        overlayVideo.play();   // auto play

    });

});

/* RESET VIDEO WHEN FINISHED */

overlayVideo.addEventListener("ended", () => {

    overlayVideo.currentTime = 0;

});

/* RESET IF USER PAUSES */

overlayVideo.addEventListener("pause", () => {

    if(!overlayVideo.ended){
        overlayVideo.currentTime = 0;
    }

});

/* CLOSE BUTTON */

closeBtn.addEventListener("click", () => {

    overlay.classList.remove("active");

    overlayVideo.pause();
    overlayVideo.currentTime = 0;

});

/* CLOSE WHEN CLICKING OUTSIDE */

overlay.addEventListener("click", (e) => {

    if(e.target === overlay){

        overlay.classList.remove("active");

        overlayVideo.pause();
        overlayVideo.currentTime = 0;

    }

});