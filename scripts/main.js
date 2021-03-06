// Generated by CoffeeScript 1.6.3
var keyList, video, videoElement, videoList;

videoElement = $('#video');

video = videoElement[0];

videoList = ["assets/videos/Blind-Trust_Alcohol.mp4", "assets/videos/Blind-Trust_Testosteron.mp4", "assets/videos/Blind-Trust_Style.mp4"];

keyList = [113, 51, 55];

$(document).ready(function() {
  video.src = 'assets/videos/image.mp4';
  video.play();
  video.onended = function() {
    video.src = 'assets/videos/image.mp4';
    return video.play();
  };
  return $(document).keypress(function(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 102:
        if (screenfull.enabled) {
          return screenfull.request(video);
        }
        break;
      case 112:
        return video.pause();
      case keyList[0]:
        video.src = videoList[0];
        return video.play();
      case keyList[1]:
        video.src = videoList[1];
        return video.play();
      case keyList[2]:
        video.src = videoList[2];
        return video.play();
    }
  });
});
