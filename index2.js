
        function PIP() {
            const video = document.getElementById("video");

            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            // draw the video at that frame
            canvas.getContext('2d')
                .drawImage(video, 0, 0, 50, 50);

        };
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



            setInterval(() => {
                console.log(aovivo.checked);
                if (aovivo.checked) {
                    PIP();
                }
            }, 500);
        };
