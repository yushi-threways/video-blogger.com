// YouTubeの埋め込み
var ytPlayer = [];
var ytData = [
    {
        id: posts[video],
    }
];

function onYouTubeIframeAPIReady() {
    for (var i = 0; i < ytData.length; i++) {
        ytPlayer[i] = new YT.Player('js-Post', {
            width: 640,
            height: 480,
            videoId: ytPlayer[i][id],
            playerVars: {
            },
            events: {
            }
        });
    }
}