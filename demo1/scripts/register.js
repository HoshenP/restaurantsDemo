import { Restaurant } from "./utils.js"

function uid_generator() {
    return Math.floor(Math.random() * 9000-1);
  }

$(document).ready(function(){
    $("#registerBtn").click(()=>{
        if($("#username").val() === "" ||
    $("#password").val() === "" ||
    $("#restaurantName").val() === "" ||
    $("#restaurantLocation").val() === "" ||
    $("#restaurantPhone").val() === "" 
    ){
        alert("fill in all the fields  ")
    }else{
       
        if(localStorage.getItem("res_users")){
            let tempArr = JSON.parse(localStorage.getItem("res_users"));
            let newRestaurnt = new Restaurant( uid_generator(),
                $("#username").val(),
                $("#password").val(),
                $("#restaurantName").val(),
                $("#restaurantLocation").val(),
                $("#restaurantPhone").val(),
                [1,2,3,4,5]
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
                [1,2,3,4,5]
            )
             
            tempArr.push(newRestaurnt)
            localStorage.setItem("res_users", JSON.stringify(tempArr));
         }
    }
    })

   
})

