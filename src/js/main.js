document.addEventListener("DOMContentLoaded", function(event) {
	skrollr.init({
    forceHeight: false,
    mobileCheck: function() {
      //hack - forces mobile version to be off
      return false;
    }
  });
});

(function () {
  const checkbox = document.querySelector('input[name=checkbox]');

  function toggleColors() {
    document.body.classList.toggle('theme-1');
    document.body.classList.toggle('theme-2');
  }

  checkbox.addEventListener('change', function() {
    toggleColors();
  });
})();
