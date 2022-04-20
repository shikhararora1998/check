console.log("Welcome to spotify");
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgress');
let audioElement = new Audio('song/3.mp3');
let container = document.getElementsByClassName('container');
let gif = document.getElementById('gif');
let updown = document.getElementById('updown');
let songs = [
    { songName: "King Rocco", filePath: "song/1.mp3", coverPath: "image/1.jpg" },
    { songName: "Tera hua na ", filePath: "song/2.mp3", coverPath: "image/2.jpg" },
    { songName: "Main Royaa", filePath: "song/3.mp3", coverPath: "image/7.jpg" },
    { songName: "Balle Balle", filePath: "song/4.mp3", coverPath: "image/3.jpg" },
    { songName: "Baarishein", filePath: "song/5.mp3", coverPath: "image/4.jpg" },
    { songName: "Kudrat De Bande", filePath: "song/6.mp3", coverPath: "image/5.jpg" },
    { songName: "Runway", filePath: "song/7.mp3", coverPath: "image/6.jpg" },
    { songName: "Pasand", filePath: "song/8.mp3", coverPath: "image/7.jpg" },
    { songName: "kings", filePath: "song/9.mp3", coverPath: "image/7.jpg" },
]
let songItem = Array.from(document.getElementsByClassName('songItem'));
const randomColor = Math.floor(Math.random() * 16777215).toString(16);
songItem.forEach(function (element, i) {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    document.getElementsByClassName("songName")[i].innerHTML = songs[i].songName;
});


masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        document.body.style.backgroundImage = songs[songIndex].coverPath;



    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        document.body.style.background = "#" + randomColor;
    }

});

//Listen To Events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');

    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(Progress);
    myProgress.value = Progress;
}
);
myProgress.addEventListener('change', () => {
    audioElement.currentTime = myProgress.value * audioElement.duration / 100;
});


masterPlay.addEventListener('change', () => {
    if (Progress == 100) {
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 0;
    }
});
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex - 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        document.getElementById('PlaySection').innerText = songs[songIndex - 1].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        document.body.style.backgroundImage = "url('img_tree.png')";
    })
});


document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    makeAllPlays();
    audioElement.play();
    document.getElementById('PlaySection').innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    document.body.style.background = "green";

});
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
    }
    else {
        songIndex -= 1;

    }

    audioElement.src = `song/${songIndex - 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    makeAllPlays();
    document.getElementById('PlaySection').innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    document.container.style.background = "green";

});

