document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      const sectionId = this.getAttribute('href');
      
      switch (sectionId) {
          case '#about':
              document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
              break;
          case '#contact':
              document.querySelector('.page-footer').scrollIntoView({ behavior: 'smooth' });
              break;
          default:
              target.scrollIntoView({ behavior: 'smooth' });
              break;
      }
  });
});
