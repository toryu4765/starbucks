var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true, // 자동재생
      loop: true, // 반복재생
      playlist: 'An6LvWQuj_8' // 반복재생할 유튜브 영상
    },
    events: {
      onReady: function (event) {
        event.target.mute()
      }
    }
  })
}
