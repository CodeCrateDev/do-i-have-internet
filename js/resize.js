function updateBodyHeight() {
    document.body.style.height = window.innerHeight + 'px';
    requestAnimationFrame(updateBodyHeight);
}

updateBodyHeight();