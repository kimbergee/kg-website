document.addEventListener("DOMContentLoaded", function (event) {
  skrollr.init({
    forceHeight: false,
    mobileCheck: function () {
      return false;
    }
  });

  // no skrollr at mobile cus its goofy
  const theSkrollr = skrollr.get();
  const windowWidth = window.innerWidth;

  if (windowWidth <= 768 && theSkrollr !== undefined) {
    theSkrollr.destroy();
  }
});

(function () {
  const checkbox = document.querySelector('input[name=doggo]');

  function toggleColors() {
    document.body.classList.toggle('theme-1');
    document.body.classList.toggle('theme-2');
  }

  checkbox.addEventListener('change', function () {
    toggleColors();
  });
})();
