(async function () {
  // MediaStream取得
  // typeがvideoとaudioのMediaStreamTrackを取得
  const localMediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  const localVideo = document.getElementById("localVideo");
  // MediaStreamをHTMLMediaElementのsrcObjectにセットしてVideoを表示
  // https://developer.mozilla.org/ja/docs/Web/API/HTMLMediaElement/srcObject#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E4%BE%8B
  localVideo.srcObject = localMediaStream;

  const displayMediaStream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: true,
  });
  const displayVideo = document.getElementById("displayVideo");
  displayVideo.srcObject = displayMediaStream;
})();
