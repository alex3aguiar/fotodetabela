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

        };
        function drawToCanvas() {
            const video = document.getElementById("video");
            const canvas1 = document.getElementById("canvas1");
            const canvas2 = document.getElementById("canvas2");
            const inputCtx = canvas1.getContext("2d");
            const outputCtx = canvas2.getContext("2d");
            inputCtx.drawImage(video, 0, 0, width, height);
            outputCtx.drawImage(video, 0, 0, width, height);
            // get the pixel data from input canvas
            const pixelData = inputCtx.getImageData(0, 0, width, height);
            const arr = pixelData.data;
        
            // Iterate through every pixel, calculate x,y coordinates
            for (let i = 0; i < arr.length; i += 4) {
                const x = i/4 % (width);
                const y = i / (width * 4);
                if(((x > 85 && x < 90) || (x > 210 && x < 215)) && (y > 80)) {
                    arr[i + 0] = 0;
                    arr[i + 1] = 255;
                    arr[i + 2] = 0;
                    arr[i + 3] = 255;
                }
            }
        
            // write the manipulated pixel data to the second canvas
            outputCtx.putImageData(pixelData, 0, 0);
            // recurse to itself for every animation frame
            requestAnimationFrame(drawToCanvas);
        }        