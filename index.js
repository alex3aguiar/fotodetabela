
        function PIP() {
            const video = document.getElementById("video");

            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            // draw the video at that frame
            canvas.getContext('2d')
                .drawImage(video, 0, 0, 50, 50);

            var table = `<table>`;
            var ctx = canvas.getContext('2d');
            for (var y = 0; y < 50; y++) {
                table = table + ' <tr>'
                for (var x = 0; x < 50; x++) {
                    var pixel = ctx.getImageData(x, y, 1, 1);
                    debugger;
                    table = table + `<td  class="pixel" style="background-color:rgba(${pixel.data[0]},${pixel.data[1]},${pixel.data[2]},${pixel.data[3]})"></td>`
                }
                table = table + '</tr>'
            }
            table = table + '</table>'
            resultTexto.value = table;
            var child = document.createElement('div');
            child.innerHTML = table;
            child = child.firstChild;
            resultado.innerHTML = ""
            resultado.appendChild(child);



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
