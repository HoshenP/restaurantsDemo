import { loadRestaurants, saveUpdatedRestaurant } from "./utils.js"

$(document).ready( () => {
    localStorage.setItem("res_current", JSON.stringify(JSON.parse(localStorage.getItem("res_users"))[0]));
    console.log(JSON.parse(localStorage.getItem("res_users"))[0]);


    loadRestaurants();

    $("#updateRestaurant").click( () => {
        saveUpdatedRestaurant();
    });

    const editModal = document.getElementById("editModal");
    $("#edit_closeBtn").click( () => {
        editModal.close();
    });



});

