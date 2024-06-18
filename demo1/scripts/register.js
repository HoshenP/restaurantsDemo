import { Restaurant } from "./utils.js"

function uid_generator() {
    return Math.floor(Math.random() * 9000-1);
  }

$(document).ready(function(){



    $("#registerBtn").click(()=>{

        // console.log($("#resturauntImages").prop('files'))
        let ImagesBeforeArr =  document.querySelectorAll("#resturauntImages");
        let ImagesArr = [];
        ImagesBeforeArr.forEach(image => {
            let reader = new FileReader();
            reader.onloadend = function() {
                reader.readAsDataURL(image.result);
                ImagesArr.push(reader);
            }
        });
        console.log(ImagesArr);



        // let imagesArr = [];
        let images = $("#resturauntImages").prop('files');
        // for (let i in images) {  
        //     let read_img = new FileReader();
        //     read_img.onloadend = function() {
        //         read_img.readAsDataURL(images[i].result);
        //         imagesArr.push(read_img);
        //     }
        // }
        // console.log(imagesArr);

        // let imagesArray = [];
        // for (let x in images){
        //     let fileReader = new FileReader();
        //     fileReader.onload = function () {
        //         imagesArray.push(fileReader.result);  
        //     };   
        //     fileReader.readAsDataURL(images[x]);
        // }
        // console.log(imagesArray);


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

            // let imagesArr = [];
            // let images = $("#resturauntImages").prop('files');
            // for (let i = 0; i < images.length; i) {   
            //     imagesArr.push(getBase64Image(images[i]));
            // }
            // console.log(imagesArr);

            let newRestaurnt = new Restaurant( uid_generator(),
                $("#username").val(),
                $("#password").val(),
                $("#restaurantName").val(),
                $("#restaurantLocation").val(),
                $("#restaurantPhone").val(),
                // getBase64Image(file, $("#resturauntImages").prop('files'))
            )
             
            tempArr.push(newRestaurnt)
            localStorage.setItem("res_users", JSON.stringify(tempArr));
    
         }else{
            let tempArr = [];

            // let imagesArr = [];
            // let images = $("#resturauntImages").prop('files');
            // for (let i = 0; i < images.length; i) {   
            //     imagesArr.push(getBase64Image(images[i]));
            // }
            // console.log(imagesArr);

            let newRestaurnt = new Restaurant( uid_generator(),
                $("#username").val(),
                $("#password").val(),
                $("#restaurantName").val(),
                $("#restaurantLocation").val(),
                $("#restaurantPhone").val(),
                // getBase64Image(file, $("#resturauntImages").prop('files'))
                console.log(getBase64Image(file, $("#resturauntImages").prop('files')))
            )
             
            tempArr.push(newRestaurnt)
            localStorage.setItem("res_users", JSON.stringify(tempArr));
         }
    }
    })

   
})

