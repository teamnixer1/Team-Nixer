const orb = document.querySelector('.orb');
const indicator = document.querySelector('.indicator');

let isDragging = false;

console.log(window.innerWidth * 0.01); // Outputs 1vw in pixels

// Disable text selection while dragging
orb.addEventListener('mousedown', () => {
    isDragging = true;
    document.body.style.userSelect = 'none';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = '';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const mouseX = e.clientX;
    const pageWidth = document.documentElement.clientWidth;
    const orbWidth = orb.offsetWidth;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate scroll percentage based on mouse X
    const scrollPercent = mouseX / pageWidth;
    const scrollY = scrollPercent * scrollableHeight;

    // Scroll the page vertically
    window.scrollTo({
        top: scrollY,
        behavior: 'auto'
    });

    // Move the orb horizontally, clamped to the right edge
    const maxX = pageWidth - orbWidth;
    orb.style.left = Math.min(mouseX, maxX) + 'px';
});

// Update indicator width based on scroll position
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percentageScrolled = (scrollY / scrollableHeight) * 100;

    indicator.style.width = percentageScrolled + "%";
});
