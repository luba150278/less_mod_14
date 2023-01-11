$(document).ready(function () {
  $("button").click(function () {
    const color = $(this).css("background-color");
    boxShadowGen(color);
  });

  function boxShadowGen(color) {
    $(".fruit-wrap>div").each(function () {
      const currentColor = $(this).css("background-color");
      if (currentColor === color) {
        $(this).css("box-shadow", "5px 5px 5px 0px rgba(209,202,209,1)");
      } else {
        $(this).css("box-shadow", "none");
      }
    });
  }
});
