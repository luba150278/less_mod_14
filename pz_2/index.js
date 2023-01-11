let visible = false;
$(document).ready(function () {
  $("#menu-title").click(() => {
    visible = !visible;
    visible
      ? $("li>p:last-child").css("display", "block")
      : $("li>p:last-child").css("display", "none");
  });
  $("li").each(function (index) {
    $(this).click(() => {
      activate(index);
    });
  });
});

const activate = (ind) => {
  $("li").each(function (index) {
    if (ind === index) {
      $(this).css("color", "red");
    } else {
      $(this).css("color", "black");
    }
  });
};
