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

/* OPEN MEDIA HELPER */
function openMedia(type, src) {
    pauseAllGalleryVideos();
    overlay.classList.add("active");

    if (type === "image") {
        overlayImg.src = src;
        overlayImg.style.display = "block";
        overlayVideo.style.display = "none";
        overlayVideo.pause();
    } else {
        overlayVideo.src = src;
        overlayVideo.style.display = "block";
        overlayImg.style.display = "none";
        overlayVideo.currentTime = 0;
        overlayVideo.play().catch(err => {
            console.warn("Autoplay was prevented:", err);
        });
    }
}

/* OPEN IMAGE */
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        openMedia("image", img.src);
    });
});

/* OPEN VIDEO */
galleryVideos.forEach(video => {
    video.addEventListener("click", (e) => {
        e.preventDefault();
        const sourceTag = video.querySelector("source");
        const videoSrc = sourceTag ? sourceTag.src : video.src;
        if (videoSrc) {
            openMedia("video", videoSrc);
        }
    });

    // Mobile specific: Listen for touchstart to trigger overlay faster
    video.addEventListener("touchstart", (e) => {
        // Only trigger if not already active
        if(!overlay.classList.contains("active")) {
            const sourceTag = video.querySelector("source");
            const videoSrc = sourceTag ? sourceTag.src : video.src;
            if (videoSrc) {
                openMedia("video", videoSrc);
            }
        }
    }, { passive: true });
});

/* OVERLAY VIDEO PLAY LOGIC */

overlayVideo.addEventListener("play", () => {
    pauseAllGalleryVideos();
});

/* CLOSE OVERLAY WHEN VIDEO IS PAUSED - REMOVED */
/*
overlayVideo.addEventListener("pause", () => {
    if(overlay.classList.contains("active") && overlayVideo.style.display === "block"){
        overlay.classList.remove("active");
        pauseAllGalleryVideos();
    }
});
*/

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