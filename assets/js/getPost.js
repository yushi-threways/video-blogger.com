jQuery(function($){
    var url = Routing.generate('app_post_getallpostresponse');
    var posts = null;
    $.ajax({
        method: 'get',
        url: url
    }).then(function(res){
        console.log(res);
        posts = res;
    });
});

var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // YouTubeの埋め込み
    var ytPlayer = [];
    var ytData = [
        {
            id: 'yCZFof7Y0tQ',
        },
    ];
    function onYouTubeIframeAPIReady() {
        for(var i = 0; i < ytData.length; i++) {
            ytPlayer[i] = new YT.Player('#js-Post', {
                width: 640,
                height: 480,
                videoId: ytData[i][id],
                playerVars: {
                    rel: 0
                },
                events: {
                    'onReady': onPlayerReady
                }
            });
        }
    }