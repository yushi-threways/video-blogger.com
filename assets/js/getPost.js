jQuery(function($){
    var url = Routing.generate('app_post_getallpostresponse');
    var posts = null;
    $.ajax({
        method: 'get',
        url: url
    }).then(function(res){
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        posts = res;

        var ytWidth = 640;
        var ytHeight = 390;
        var youtubeData = [
            {
                youtubeIid: posts[0].video,
                embedArea: 'js-Post'
            }
        ];
        function onYouTubeIframeAPIReady(posts) {
              console.log(posts.length);
            for(var i = 0; i < posts.length; i++) {
                youtubeData[i] = new YT.Player(youtubeData[0]['embedArea'], {
                    width: ytWidth,
                    height: ytHeight,
                    videoId: youtubeData[i]['youtubeIid'],
                    playerVars: {
                        rel: 0
                    },
                    events: {
                        'onReady': onPlayerReady
                    }
                });
            }
        }
        onYouTubeIframeAPIReady(posts)
    });
});
