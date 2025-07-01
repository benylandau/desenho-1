function showMedia(src) {
  const viewer = document.getElementById('mediaViewer');

  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');
  const mediaHTML = isVideo
    ? `<video id="mediaContent" src="${src}" controls autoplay style="max-width: 90%; max-height: 90%;"></video>`
    : `<img id="mediaContent" src="${src}" alt="Mídia" style="max-width: 90%; max-height: 90%;">`;

  viewer.innerHTML = `
    <div id="closeButton" onclick="closeMedia()" style="
      position: absolute;
      top: 20px;
      right: 30px;
      font-size: 32px;
      font-family: sans-serif;
      color: white;
      cursor: pointer;
      z-index: 1001;
    ">×</div>
    ${mediaHTML}
  `;
  viewer.classList.add('show');
}

function closeMedia() {
  const viewer = document.getElementById('mediaViewer');
  viewer.classList.remove('show');
  viewer.innerHTML = `<img id="mediaContent" src="" alt="Mídia">`;
}
