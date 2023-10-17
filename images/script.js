const videoContainers = document.querySelectorAll('.video'); // Select all video containers

        videoContainers.forEach((videoContainer) => {
            const video = videoContainer.querySelector('.thevideo');

            videoContainer.addEventListener('mouseenter', function() {
                video.play();
            });

            videoContainer.addEventListener('mouseout', function() {
                video.pause();
            });
        });


        /*
        <div><a href = "https://store.steampowered.com/about/"target = "_blank" rel = "noopener noreferrer"><span>Play now</span></a></div>
        <h2>FOOD</h2>
        <h3>food near urdaneta</h3>
        <div class="video">
            <div class="thumbnail3"></div>
            <video class="thevideo" controls loop>
                <source src="/SP/food.mp4" type="video/mp4"></source>
            </video>
        </div>
        <div><a href = "https://store.steampowered.com/about/"target = "_blank" rel = "noopener noreferrer"><span>Play now</span></a></div>
    </div>  -->*/