// Intialize the variables
let songIndex = 0;
const audioElement = new Audio('songs/1.mp3');
const Masterplay = document.getElementById("masterplay");
const myprogressBar = document.getElementById("ProgressBar");
const gif = document.getElementById("gif");
const songItems = Array.from(document.getElementsByClassName("songItem"));
const Mastersongname = document.getElementById("Mastersongname");

let songs = [
    { songname: "Master of puppets - Metallica", filepath: "songs/1.mp3", coverpath: "cover/1.jpg" },
    { songname: "Pasoori - Shae gill", filepath: "songs/2.mp3", coverpath: "cover/2.jpg" },
    { songname: "Thunder - Imagine Dragons", filepath: "songs/3.mp3", coverpath: "cover/3.jpg" },
    { songname: "Friends - Anne marie x marshmellow", filepath: "songs/4.mp3", coverpath: "cover/4.jpg" },
    { songname: "Lean on - Major Lazer n DJ snake", filepath: "songs/5.mp3", coverpath: "cover/5.jpg" },
    { songname: "Believer - Imagine Dragons", filepath: "songs/6.mp3", coverpath: "cover/6.jpg" },
    { songname: "Audio - LSD ft.Sia", filepath: "songs/7.mp3", coverpath: "cover/7.jpg" },
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname
});

// audioElement.play();

// Handle pause/play click
Masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        Masterplay.classList.remove("fa-circle-play");
        Masterplay.classList.add("fa-circle-pause");
        gif.style.opacity = "1"
    } else {
        audioElement.pause();
        Masterplay.classList.remove("fa-circle-pause");
        Masterplay.classList.add("fa-circle-play");
        gif.style.opacity = "0"
    }
})

// Listen to events
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener("change", () => {
    audioElement.currentTime = myprogressBar.value * audioElement.duration / 100;
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.add("fa-circle-play");
        element.classList.remove("fa-circle-pause");
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        Mastersongname.innerText=songs[songIndex].songname;
        audioElement.currentTime = "0";
        audioElement.play();
        gif.style.opacity = "1"
        Masterplay.classList.remove("fa-circle-play");
        Masterplay.classList.add("fa-circle-pause");
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if (songIndex >= 7) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    Mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime = "0";
    audioElement.play();
    Masterplay.classList.remove("fa-circle-play");
    Masterplay.classList.add("fa-circle-pause");
});
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    Mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime = "0";
    audioElement.play();
    Masterplay.classList.remove("fa-circle-play");
    Masterplay.classList.add("fa-circle-pause");
});
 