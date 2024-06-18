import { Restaurant } from "./utils.js";

function uid_generator() {
  return Math.floor(Math.random() * 9000 - 1);
}

$(document).ready(function () {
  $("#registerBtn").click(() => {
    console.log($("#resturauntImages").prop("files"));
    if (
      $("#username").val() === "" ||
      $("#password").val() === "" ||
      $("#restaurantName").val() === "" ||
      $("#restaurantLocation").val() === "" ||
      $("#restaurantPhone").val() === "" ||
      !$("#resturauntImages").prop("files")[0]) {
      alert("Make sure you fill all the fields!");

    }else if ($("#resturauntImages").prop("files").length > 5){
      alert("You can't upload more than 5 images");

    } else {
        
      let images = $("#resturauntImages").prop("files");
      let base64Images = [];

      for (var i = 0; i < images.length; i++) {
        function Images2Array(file) {
          var reader = new FileReader();

          reader.onload = function (e) {
            base64Images.push(e.target.result);
            if (base64Images.length === images.length) {
              // All images are loaded and their base64 strings are in base64Images array
              // console.log(base64Images);

              if (localStorage.getItem("res_users")) {
                let tempArr = JSON.parse(localStorage.getItem("res_users"));
                let newRestaurnt = new Restaurant(
                  uid_generator(),
                  $("#username").val(),
                  $("#password").val(),
                  $("#restaurantName").val(),
                  $("#restaurantLocation").val(),
                  $("#restaurantPhone").val(),
                  base64Images
                );

                tempArr.push(newRestaurnt);
                localStorage.setItem("res_users", JSON.stringify(tempArr));
              } else {
                let tempArr = [];
                let newRestaurnt = new Restaurant(
                  uid_generator(),
                  $("#username").val(),
                  $("#password").val(),
                  $("#restaurantName").val(),
                  $("#restaurantLocation").val(),
                  $("#restaurantPhone").val(),
                  base64Images
                );

                tempArr.push(newRestaurnt);
                localStorage.setItem("res_users", JSON.stringify(tempArr));
              }
            }
          };
          reader.readAsDataURL(file);
        }
        Images2Array(images[i]);
      }
    }
  });
});
