
        window.onload = function () {
            document.querySelector("#video");
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
