document.addEventListener('DOMContentLoaded', function() {
    const cursorElement = document.getElementById('cursor');
    let cursorSize = 16;

    document.addEventListener('mousemove', function(event) {
        cursorElement.style.left = `${event.clientX - cursorSize / 2}px`;
        cursorElement.style.top = `${event.clientY - cursorSize / 2}px`;
    });
    const enlargeCursor = () => cursorElement.style.transform = 'scale(3)';
    const shrinkCursor = () => cursorElement.style.transform = 'scale(1)';

    document.querySelectorAll('.cursor-big').forEach(element => {
        element.addEventListener('mouseenter', enlargeCursor);
        element.addEventListener('mouseleave', shrinkCursor);
    });

    document.addEventListener('selectend', function() {
        document.body.style.cursor = 'none';
    });
});
