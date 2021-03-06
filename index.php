<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Spotify - Listen Your Favourite Song</title>
</head>

<body>
    <nav>
        <ul>
            <a href="index.html">
                <li class="brand"><img src="image/logo.png" alt="Spotify"> <span class="brandtagline">Spotify</span>
                </li>
            </a>
            <!-- <li>Home</li>
            <li>About</li> -->

        </ul>
    </nav>

    <div class="container">
        <div class="songList">
            <h1>Best Of NCS - No Copyright Sounds</h1>

        </div>
        <div class="songItem">

            <img alt="">
            <span class="songName">Hey Baby</span>
            <span class="songlistplay"><span class="timestamp">5:34 <i class="far songItemPlay  fa-play-circle"
                        id="1"></i></span> </span>
        </div>
        <div class="songItem">

            <img alt="">
            <span class="songName">Hey Baby</span>
            <span class="songlistplay"><span class="timestamp">5:34 <i class="far songItemPlay  fa-play-circle"
                        id="2"></i></span> </span>
        </div>
        <div class="songItem">

            <img alt="">
            <span class="songName">Hey Baby</span>
            <span class="songlistplay"><span class="timestamp">5:34 <i class="far songItemPlay  fa-play-circle"
                        id="3"></i></span> </span>
        </div>
        <div class="songItem">

            <img alt="">
            <span class="songName">Hey Baby</span>
            <span class="songlistplay"><span class="timestamp">5:34 <i class="far songItemPlay  fa-play-circle"
                        id="4"></i></span> </span>
        </div>
        <div class="songItem">

            <img alt="">
            <span class="songName">Hey Baby</span>
            <span class="songlistplay"><span class="timestamp">5:34 <i class="far songItemPlay  fa-play-circle"
                        id="5"></i></span> </span>
        </div>
        <div class="songItem">

            <img alt="">
            <span class="songName">Hey Baby</span>
            <span class="songlistplay"><span class="timestamp">5:34 <i class="far songItemPlay  fa-play-circle"
                        id="6"></i></span> </span>
        </div>
        <div class="songItem">

            <img alt="">
            <span class="songName">Hey Baby</span>
            <span class="songlistplay"><span class="timestamp">5:34 <i class="far songItemPlay  fa-play-circle"
                        id="7"></i></span> </span>
        </div>
        <div class="songItem">

            <img alt="">
            <span class="songName">Hey Baby</span>
            <span class="songlistplay"><span class="timestamp">5:34 <i class="far songItemPlay  fa-play-circle"
                        id="8"></i></span> </span>
        </div>
        <div class="songItem">

            <img alt="">
            <span class="songName">Hey Baby</span>
            <span class="songlistplay"><span class="timestamp">5:34 <i class="far songItemPlay  fa-play-circle"
                        id="9"></i></span> </span>
        </div>

    </div>

    <div class="bottom">
        <input type="range" name="range" id="myProgress" min="0" max="100">

        <!-- Font Awesome -->
        <div class="fonts">
            <i class="fa-solid fa-3x fa-play-pause"></i>
            <i class="fas fa-2x fa-step-backward" id="previous"></i>
            <i class="far fa-2x fa-play-circle" id="masterPlay"></i>
            <i class="fas fa-2x fa-step-forward" id="next"></i>

        </div>
        <div class="songinfo">
            <img alt="" id="gif"> <span id="PlaySection">Hey Baby</span>
        </div>
        <div id="volume">
            <input type="range" id="updown" min="0" max="100"><span class="audioName">Volume</span>
        </div>
    </div>
</body>

<script src="https://kit.fontawesome.com/26504e4a1f.js" crossorigin="anonymous"></script>
<script src="script.js">

</script>

</html>