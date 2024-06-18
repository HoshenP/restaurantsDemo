export class Restaurant {
    constructor(uid, username, password, name, location, phoneNumber, images) {
        this.uid = uid;
        this.username = username;
        this.password = password;
        this.name = name;
        this.location = location;
        this.phoneNumber = phoneNumber;
        this.images = images;
    }
}

export function loadRestaurants(){
    console.log("works");
    $("#restaurantsContainer").html("");

    const loggedRestaurant = JSON.parse(localStorage.getItem("res_current"));

    let tempRestaurants = JSON.parse(localStorage.getItem("res_users"));
    if (tempRestaurants){

        for (let x in tempRestaurants){
            let currentRestaurant = tempRestaurants[x];

            let restaurantContent = document.createElement("div");
            restaurantContent.setAttribute("class", "restaurantContent");

            let uidDiv = document.createElement("div");
            uidDiv.innerHTML = `ID: ${currentRestaurant.uid}`; 

            let nameDiv = document.createElement("div");
            nameDiv.innerHTML = `Name: ${currentRestaurant.name}`; 

            let locationDiv = document.createElement("div");
            locationDiv.innerHTML = `Location: ${currentRestaurant.location}`; 

            let phoneDiv = document.createElement("div");
            phoneDiv.innerHTML = `Phone number: ${currentRestaurant.phoneNumber}`; 

            let imagesDiv = document.createElement("div");
            for (let x in currentRestaurant.images){

                let imgDiv = document.createElement("div");
                imgDiv.setAttribute("class", "imgDiv");
                imgDiv.style.backgroundImage =
                `url(${currentRestaurant.images[x]})`;
                imagesDiv.appendChild(imgDiv);

            }


            let btnsDiv = document.createElement("div");
            btnsDiv.setAttribute("class", "btnsDiv");


            // When login page is finished and there is logged user in localStorage
            console.log(loggedRestaurant, currentRestaurant);
            if (loggedRestaurant.uid == currentRestaurant.uid){
                console.log("ting");
                var editBtn = document.createElement("button");
                editBtn.textContent = `Edit`;
                editBtn.onclick = () => {
                    editRestaurant_handler(x);
                }

                btnsDiv.appendChild(editBtn);

            }

            restaurantContent.appendChild(uidDiv);
            restaurantContent.appendChild(nameDiv);
            restaurantContent.appendChild(locationDiv);
            restaurantContent.appendChild(phoneDiv);
            restaurantContent.appendChild(imagesDiv);

            restaurantContent.appendChild(btnsDiv);

            $("#restaurantsContainer").append(restaurantContent);


        }
    }
}

const editModal = document.getElementById("editModal");
function editRestaurant_handler(index){
    console.log("happened");
    editModal.showModal();
    let tempRestaurants = JSON.parse(localStorage.getItem("res_users"));
    for (let x in tempRestaurants){
        if (x === index){
            $("#editUsername").val(tempRestaurants[x].username);
            $("#editPassword").val(tempRestaurants[x].password);
            $("#editRestaurantName").val(tempRestaurants[x].name);
            $("#editRestaurantLocation").val(tempRestaurants[x].location);
            $("#editRestaurantPhone").val(tempRestaurants[x].phoneNumber);
            localStorage.setItem("edit-index", index);
        }
    }
}


export function saveUpdatedRestaurant(){
    let tempRestaurants = JSON.parse(localStorage.getItem("res_users"));
    let editIndex = localStorage.getItem("edit-index");
    for (let x in tempRestaurants) {
        if (x === editIndex){
            tempRestaurants[x].username = $("#editUsername").val();
            tempRestaurants[x].password = $("#editPassword").val();
            tempRestaurants[x].name = $("#editRestaurantName").val();
            tempRestaurants[x].location = $("#editRestaurantLocation").val();
            tempRestaurants[x].phoneNumber = $("#editRestaurantPhone").val();
            break;
        }
    }
    localStorage.setItem("res_users", JSON.stringify(tempRestaurants));
    editModal.close();
    document.location.reload();
}
