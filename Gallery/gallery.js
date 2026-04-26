const overlay = document.getElementById("mediaOverlay");
const overlayImg = document.getElementById("overlayImage");
const overlayVideo = document.getElementById("overlayVideo");
const closeBtn = document.querySelector(".close-overlay");
const galleryVideos = document.querySelectorAll(".gallery video");

/* HELPER: PAUSE ALL GALLERY VIDEOS */
function pauseAllGalleryVideos() {
    galleryVideos.forEach(v => {
        v.pause();
        v.currentTime = 0; // Reset to "actual form" (thumbnail)
    });
}

/* ENSURE ONLY ONE GALLERY VIDEO PLAYS AT A TIME */
galleryVideos.forEach(video => {
    video.addEventListener("play", () => {
        galleryVideos.forEach(v => {
            if (v !== video) v.pause();
        });
        // Also pause overlay video if it's playing
        overlayVideo.pause();
    });
});

/* OPEN IMAGE */

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        pauseAllGalleryVideos();
        overlay.classList.add("active");

        overlayImg.src = img.src;
        overlayImg.style.display = "block";

        overlayVideo.style.display = "none";
        overlayVideo.pause();
        overlayVideo.currentTime = 0;

    });

});

/* OPEN VIDEO */

galleryVideos.forEach(video => {

    video.addEventListener("click", () => {

        pauseAllGalleryVideos();
        overlay.classList.add("active");

        const videoSrc = video.querySelector("source").src;

        overlayVideo.src = videoSrc;
        overlayVideo.style.display = "block";

        overlayImg.style.display = "none";

        overlayVideo.currentTime = 0;
        overlayVideo.play();   // auto play

    });

});

/* OVERLAY VIDEO PLAY LOGIC */

overlayVideo.addEventListener("play", () => {
    pauseAllGalleryVideos();
});

/* CLOSE OVERLAY WHEN VIDEO IS PAUSED */

overlayVideo.addEventListener("pause", () => {

    if(overlay.classList.contains("active") && overlayVideo.style.display === "block"){
        overlay.classList.remove("active");
        pauseAllGalleryVideos();
    }

});

/* RESET VIDEO WHEN FINISHED */

overlayVideo.addEventListener("ended", () => {

    overlay.classList.remove("active");
    pauseAllGalleryVideos();

});

/* CLOSE BUTTON */

closeBtn.addEventListener("click", () => {

    overlay.classList.remove("active");
    overlayVideo.pause();
    pauseAllGalleryVideos();

});

/* CLOSE WHEN CLICKING OUTSIDE */

overlay.addEventListener("click", (e) => {

    if(e.target === overlay || e.target.classList.contains("overlay-content")){

        overlay.classList.remove("active");
        overlayVideo.pause();
        pauseAllGalleryVideos();

    }

});