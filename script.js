
function showMedia(src) {
    const viewer = document.getElementById('mediaViewer');
    const content = document.getElementById('mediaContent');
    content.src = src;
    viewer.classList.add('show');
}

function closeMedia() {
    const viewer = document.getElementById('mediaViewer');
    const content = document.getElementById('mediaContent');
    content.src = "";
    viewer.classList.remove('show');
}
