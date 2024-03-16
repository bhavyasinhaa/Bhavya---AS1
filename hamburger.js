document.getElementById('menu-toggle').addEventListener('change', function() {
    var menu = document.querySelector('.menu');
    if (this.checked) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });