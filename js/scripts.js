// Footer: año actual
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  // Colapsar/expandir features y niveles
  document.querySelectorAll('.toggle-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const content = icon.closest('.level-header').nextElementSibling;
      content.style.display = (content.style.display === 'none') ? 'block' : 'none';
      icon.classList.toggle('fa-chevron-down');
      icon.classList.toggle('fa-chevron-up');
    });
  });
  document.querySelectorAll('.toggle-icon-feature').forEach(icon => {
    icon.addEventListener('click', () => {
      const content = icon.closest('.feature-header').nextElementSibling;
      content.style.display = (content.style.display === 'none') ? 'block' : 'none';
      icon.classList.toggle('fa-chevron-down');
      icon.classList.toggle('fa-chevron-up');
    });
  });
});
