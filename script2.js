// Add event listener for the forward button
document.getElementById("forwardBtn").addEventListener("click", function() {
    // Adjust as needed
    document.getElementById("bgVideo").currentTime += 10; // Forward 10 seconds
});

// Add event listener for the backward button
document.getElementById("backwardBtn").addEventListener("click", function() {
    // Adjust as needed
    document.getElementById("bgVideo").currentTime -= 10; // Backward 10 seconds
});

// Add event listener for the play/pause button in the video control panel
document.getElementById("playBtn").addEventListener("click", function() {
    var video = document.getElementById("bgVideo");
    var playBtn = document.getElementById("playBtn");
    if (video.paused) {
        video.play(); // Play the video if paused
        playBtn.innerHTML = '<i class="fa fa-pause"></i>'; // Change button icon to pause
        playBtn.classList.add("playing");
    } else {
        video.pause(); // Pause the video if playing
        playBtn.innerHTML = '<i class="fa fa-play"></i>'; // Change button icon to play
        playBtn.classList.remove("playing");
    }
});

// Add event listener for the play/pause button in the music control panel
document.getElementById("musicPlayBtn").addEventListener("click", function() {
    var music = document.getElementById("bgMusic");
    var musicPlayBtn = document.getElementById("musicPlayBtn");
    if (music.paused) {
        music.play(); // Play the music if paused
        musicPlayBtn.innerHTML = 'Pause'; // Change button text to pause
        musicPlayBtn.classList.add("playing");
    } else {
        music.pause(); // Pause the music if playing
        musicPlayBtn.innerHTML = 'Play'; // Change button text to play
        musicPlayBtn.classList.remove("playing");
    }
});

// Add event listener for the repeat button
document.getElementById("repeatBtn").addEventListener("click", function() {
    var music = document.getElementById("bgMusic");
    music.loop = !music.loop; // Toggle loop property
});
