import { Restaurant } from "./utils.js"

function uid_generator() {
    return Math.floor(Math.random() * 9000-1);
  }

$(document).ready(function(){
    $("#registerBtn").click(()=>{


        var images = $("#resturauntImages").prop('files');
        var base64Images = [];

        for (var i = 0; i < images.length; i++) {
          (function(file) {
            var reader = new FileReader();
            reader.onload = function(e) {
              base64Images.push(e.target.result);
              if(base64Images.length === images.length) {
                // All images are loaded and their base64 strings are in base64Images array
                console.log(base64Images);
              }
            };
            reader.readAsDataURL(file);
          })(images[i]);
        }




    if ($("#username").val() === "" ||
    $("#password").val() === "" ||
    $("#restaurantName").val() === "" ||
    $("#restaurantLocation").val() === "" ||
    $("#restaurantPhone").val() === "" ) {
        alert("fill in all the fields  ")
    } else {
       
        if(localStorage.getItem("res_users")){
            let tempArr = JSON.parse(localStorage.getItem("res_users"));
            let newRestaurnt = new Restaurant( uid_generator(),
                $("#username").val(),
                $("#password").val(),
                $("#restaurantName").val(),
                $("#restaurantLocation").val(),
                $("#restaurantPhone").val(),
                base64Images
            )
             
            tempArr.push(newRestaurnt)
            localStorage.setItem("res_users", JSON.stringify(tempArr));
    
         }else{
            let tempArr = [];
            let newRestaurnt = new Restaurant( uid_generator(),
                $("#username").val(),
                $("#password").val(),
                $("#restaurantName").val(),
                $("#restaurantLocation").val(),
                $("#restaurantPhone").val(),
                base64Images
            )
             
            tempArr.push(newRestaurnt)
            localStorage.setItem("res_users", JSON.stringify(tempArr));
         }
    }
    })

   
})

