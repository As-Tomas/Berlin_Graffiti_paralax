function moveImages(event) {
    var mouseX = event.clientX - slider.offsetLeft;
    var offsetX = -((mouseX / sliderWidth) * maxOffset);

    imageList.style.transform = 'translateX(' + offsetX + 'px)';
}


 slider.addEventListener('mousemove', function(event) {
    moveImages(event);
});
  