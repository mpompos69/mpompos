// script.js

function revealSurprise() {
    // Replace this comment with the actual code to reveal the surprise or trigger a special effect
    alert("fae skata 🎉");
}

function showPhoto(photoPath, width, height) {
    let surpriseImage = document.getElementById('surpriseImage');
    surpriseImage.src = photoPath;
    surpriseImage.alt = 'Surprise Photo';

    // Set the dimensions of the photo explicitly
    surpriseImage.style.width = width + 'px';
    surpriseImage.style.height = height + 'px';
}

function showPhotoSpecial(photoPathFake, photoPathTrue, width, height) {
    let surpriseImage = document.getElementById('surpriseImage');
    surpriseImage.src = photoPathFake;
    surpriseImage.alt = 'Surprise Photo';

    // Set the dimensions of the photo explicitly
    surpriseImage.style.width = width + 'px';
    surpriseImage.style.height = height + 'px';

    setTimeout(function() {
        let text = document.getElementById('text');
        text.innerHTML = 'OXI PLAKA KANW';
        surpriseImage.src = null;
        surpriseImage.alt = " ";
        setTimeout(function() {
            surpriseImage = document.getElementById('surpriseImage');
            surpriseImage.src = photoPathTrue;
            surpriseImage.alt = 'Surprise Photo';
            text.innerHTML = 'agaph mouu';
        }, 2000);
    }, 2000);

    // Set the dimensions of the photo explicitly
    surpriseImage.style.width = width + 'px';
    surpriseImage.style.height = height + 'px';
}

document.addEventListener('DOMContentLoaded', function () {
    var gameImage = document.getElementById('gameImage');
    var message = document.getElementById('message');

    gameImage.addEventListener('click', function () {
        message.innerHTML = 'mpravo pathses ton mpompo<br><s>eisai kai kalh se kati</s>';
    });
});

function showWrong(path, width, height) {
    let text = document.getElementById('text2');
    text.innerHTML = 'lathos eisai axrhsth';

    let surpriseImage = document.getElementById('surpriseImage2');
    surpriseImage.src = path;
    surpriseImage.alt = 'wrong';

    // Set the dimensions of the photo explicitly
    surpriseImage.style.width = width + 'px';
    surpriseImage.style.height = height + 'px';
}

function showRight(path, width, height) {
    let text = document.getElementById('text2');
    text.innerHTML = 'hand reveal!!';

    let surpriseImage = document.getElementById('surpriseImage2');
    surpriseImage.src = path;
    surpriseImage.alt = 'right';

    // Set the dimensions of the photo explicitly
    surpriseImage.style.width = width + 'px';
    surpriseImage.style.height = height + 'px';
}

function showPhotoSpecial3(path, width, height) {
    let text = document.getElementById('text3');
    text.innerHTML = 'aksizo head gia auto to site';

    setTimeout(function() {
        surpriseImage = document.getElementById('surpriseImage3');
        surpriseImage.src = path;
        surpriseImage.alt = 'Surprise Photo';
    }, 2000);
}