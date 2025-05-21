// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Custom cursor effect for skills and experience
const cursor = document.createElement('div');
cursor.style.width = '32px';
cursor.style.height = '32px';
cursor.style.border = '2px solid #eebbc3';
cursor.style.borderRadius = '50%';
cursor.style.position = 'fixed';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '9999';
cursor.style.transition = 'transform 0.15s cubic-bezier(.68,-0.55,.27,1.55)';
cursor.style.transform = 'scale(0)';
document.body.appendChild(cursor);

function showCursor(e) {
  cursor.style.left = (e.clientX - 16) + 'px';
  cursor.style.top = (e.clientY - 16) + 'px';
  cursor.style.transform = 'scale(1)';
}
function hideCursor() {
  cursor.style.transform = 'scale(0)';
}

document.querySelectorAll('.skills-grid li, .about-list li, .exp-item').forEach(item => {
  item.addEventListener('mouseenter', e => {
    showCursor(e);
    document.addEventListener('mousemove', showCursor);
  });
  item.addEventListener('mouseleave', () => {
    hideCursor();
    document.removeEventListener('mousemove', showCursor);
  });
});