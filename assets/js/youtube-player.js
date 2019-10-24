import YouTubePlayer from 'youtube-player';

jQuery(function($){
    const url = Routing.generate('app_post_getallpostresponse');
    let posts = null;
    let results = $("#js-Post");
    var onYouTubeIframeAPIReady;
    $.ajax({
        method: 'get',
        url: url
    }).then(function(res){
        posts = res;

        var ul = $("<ul>").attr("id", "js-Post_List").addClass("post-Area_List");
        for (let i = 0; i < posts.length; i++) {
            ul.append(
                $("<li>").attr("id", posts[i].video).addClass("post-Area_Item").append(
                    $("<div>").attr("id", posts[i].video + i).addClass("movie-Item_Video"),
                    $("<p>").addClass("movie-Item_Title").text(posts[i].title)
                )
            );
        }
        results.append($("<div>").attr("id", "js-Post_Area").addClass("post-Area").append(ul));

        onYouTubeIframeAPIReady = function(posts) {
            var videoArea = [];
            for (let i = 0; i < posts.length; i++) {
                videoArea.push(posts[i].video + i);
                videoArea = YouTubePlayer(
                    {
                        videoId: posts[i].video, //youtubeのID
                });
            }
        }
        onYouTubeIframeAPIReady(posts);
        
    });

         
        // .playVideo()
        // .then(function () {
        //     console.log('Starting to play player1. It will take some time to buffer video before it starts playing.');
        // });
        
});

