import YouTubePlayer from 'youtube-player';

jQuery(function($){
    var url = Routing.generate('app_post_getallpostresponse');
    var posts = null;
    $.ajax({
        method: 'get',
        url: url
    }).then(function(res){
        
        posts = res;
        var postVideoId = [];
        for(var i = 0; i < posts.length; i++) {
            postVideoId.push(posts[i].video);
            console.log(postVideoId[i]);
            player1 = YouTubePlayer('js-Post', {
                videoId: postVideoId
                });
        }
        player1

         
        // .playVideo()
        // .then(function () {
        //     console.log('Starting to play player1. It will take some time to buffer video before it starts playing.');
        // });
        
    });
});

