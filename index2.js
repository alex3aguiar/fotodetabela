
const width = 300;
const height = 225;


function drawToCanvas() {
    const video = document.getElementById("video");
    const inputCtx = document.getElementById("canvas1").getContext("2d");
    inputCtx.drawImage(video, 0, 0, width, height);

    const outputCtx = document.getElementById("canvas2").getContext("2d");
    outputCtx.drawImage(video, 0, 0, width, height);
    const pixelData = inputCtx.getImageData(0, 0, width, height);
    const arr = pixelData.data;
    for (let i = 0; i < arr.length; i += 4) {
        const x = i / 4 % (width);
        const y = i / (width * 4);
        const aaaa = (arr[i + 0] + arr[i + 1] + arr[i + 2]) / 3;

        arr[i + 0] = aaaa;
        arr[i + 1] = aaaa;
        arr[i + 2] = aaaa;
        arr[i + 3] = 255;
    }

    const outputCtx2 = document.getElementById("canvas3").getContext("2d");
    outputCtx2.drawImage(video, 0, 0, width, height);
    const pixelData2 = inputCtx.getImageData(0, 0, width, height);
    const arr2 = pixelData2.data;

    try {
        eval(document.getElementById("idadsad").value)
    } catch (error) {
        for (let i = 0; i < arr2.length; i += 4) {
            const x = i / 4 % (width);
            const y = i / (width * 4);
            const aaaa = (arr2[i + 0] + arr2[i + 1] + arr2[i + 2]) / 3;
            const a1 = getRandomInt(0, aaaa)
            const a2 = getRandomInt(0, a1)
            const [ba, bs, bf] = randomFodase(a1, a2, 255 - a1 - a2)
            arr2[i + 0] = ba
            arr2[i + 1] = bs
            arr2[i + 2] = bf
            arr2[i + 3] = 255;

        }
    }

    // write the manipulated pixel data to the second canvas
    outputCtx.putImageData(pixelData, 0, 0);
    outputCtx2.putImageData(pixelData2, 0, 0);

    // recurse to itself for every animation frame
    requestAnimationFrame(drawToCanvas);
}

window.onload = function () {
    const video = document.getElementById("video");

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    if (navigator.getUserMedia) {
        navigator.getUserMedia({
            video: true
        },
            handleVideo, videoError);
    }

    function handleVideo(stream) {
        video.srcObject = stream;
        video.load();
        video.play();
    }

    function videoError(e) {
        // do something
    }
    drawToCanvas()

};

function getRandomInt(min = 0, max = 255) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomFodase(a, b, c) {
    const cc = 0;
    const aaaaaaaaaaaaaaa = getRandomInt(0, 5)
    switch (aaaaaaaaaaaaaaa) {
        case 0:
            return [a, b, cc]
            break;
        case 1:
            return [a, cc, b]
            break;
        case 2:
            return [b, a, cc]
            break;
        case 3:
            return [b, cc, a]
            break;
        case 4:
            return [cc, a, b]
            break;
        case 5:
            return [cc, b, a]
            break;
    }
}