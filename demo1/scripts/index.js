import { loadRestaurants, saveUpdatedRestaurant } from "./utils.js"

$(document).ready( () => {

    loadRestaurants();

    $("#updateRestaurant").click( () => {
        saveUpdatedRestaurant();
    });

    const editModal = document.getElementById("editModal");
    $("#edit_closeBtn").click( () => {
        editModal.close();
    });

    $("#disconnectBtn").click( () => {
        localStorage.removeItem("res_current");
        window.location.href = "./login.html";



    });

});

