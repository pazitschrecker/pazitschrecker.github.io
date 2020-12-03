function removeActive() {
  $("#nav-about").removeClass("active-item");
  $("#nav-resume").removeClass("active-item");
  $("#nav-projects").removeClass("active-item");
  $("#nav-contact").removeClass("active-item");
}

$(document).ready(function () {
  $("#get-in-touch").click(function () {
    console.log("hello");
  });

  $("#nav-about").click(function () {
    removeActive();
    $(this).addClass("active-item");
  });

  $("#nav-resume").click(function () {
    removeActive();
    $(this).addClass("active-item");
  });

  $("#nav-projects").click(function () {
    removeActive();
    $(this).addClass("active-item");
  });

  $("#nav-contact").click(function () {
    removeActive();
    $(this).addClass("active-item");
  });
});
