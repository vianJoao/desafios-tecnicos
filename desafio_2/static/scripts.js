// Relógio dinâmico
if (document.getElementById("clock")) {
    function updateClock() {
        const clock = document.getElementById("clock");
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();

    document.getElementById("clock").addEventListener("mouseover", () => {
        document.getElementById("clock").style.color = "red";
    });
    document.getElementById("clock").addEventListener("mouseout", () => {
        document.getElementById("clock").style.color = "";
    });
}

// Acesso à câmera
if (document.getElementById('video')) {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const snap = document.getElementById('snap');
    const context = canvas.getContext('2d');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.srcObject = stream;
            video.play();
        });
    }

    snap.addEventListener("click", () => {
        context.drawImage(video, 0, 0, 640, 480);
    });
}
