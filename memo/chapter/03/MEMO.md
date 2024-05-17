# 3章

## MediaStream

- メディアコンテンツを扱うAPI
- WebRTCではMediaStreamを使ってビデオや音声を扱う必要がある
- 複数のMediaStreamTrackを束ねることができる
  - 複数デバイスもOK


### getUserMedia

- ユーザーのデバイスからビデオや音声を取得する

```js
navigator.mediaDevices.getUserMedia({video: true, audio: true})
  .then(stream => {
    // 成功時の処理
  })
  .catch(err => {
    // エラー時の処理
  });
```


### getDisplayMedia

- 自身のデスクトップ画面などを取得する

```js
navigator.mediaDevices.getDisplayMedia({video: true, audio: true})
  .then(stream => {
    // 成功時の処理
  })
  .catch(err => {
    // エラー時の処理
  });
```

### RTCPeerConnection

- P2P通信を行うためのPeerConnectionを作成するためのAPI

```js
const config = {
  iceServers: [
    {urls: 'stun:stun.l.google.com:19302'},
  ]
}
const peerConnection = new RTCPeerConnection(config);
```
