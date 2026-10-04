// همیار دانش‌آموز
console.log('📚 همیار دانش‌آموز بارگذاری شد');

// افکت کلیک روی کارت‌ها
document.querySelectorAll('.grade-card, .subject-card').forEach(card => {
  card.addEventListener('touchstart', () => {
    card.style.transform = 'scale(0.97)';
  }, { passive: true });

  card.addEventListener('touchend', () => {
    card.style.transform = '';
  }, { passive: true });
});