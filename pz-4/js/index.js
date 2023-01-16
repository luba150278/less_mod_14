let active = -1;
$(document).ready(function () {
  $(".stars-wrap>svg").each(function (index) {
    $(this).hover(() => {
      active = index;
      setStars();
    });
  });


  function setStars() {
    $(".stars-wrap>svg").each(function (index) {
      if (index <= active) {
        $(this).addClass("colored");
      } else {
        $(this).removeClass("colored");
      }
    });
  }
});
