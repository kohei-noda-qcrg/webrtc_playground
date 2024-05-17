(async function () {
  // MediaStream取得
  // typeがvideoとaudioのMediaStreamTrackを取得
  const localMediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  const config = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]};
  const peerConnection = new RTCPeerConnection(config);
  localMediaStream.getTracks().forEach((track) => {
    peerConnection.addTrack(track, localMediaStream);
  });
  console.log(peerConnection.getSenders());
  const localVideo = document.getElementById("localVideo");
  // MediaStreamをHTMLMediaElementのsrcObjectにセットしてVideoを表示
  // https://developer.mozilla.org/ja/docs/Web/API/HTMLMediaElement/srcObject#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E4%BE%8B
  localVideo.srcObject = localMediaStream;

})();
