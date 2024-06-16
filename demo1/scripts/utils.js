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
    $("restaurantsContainer").html("");
    const loggedRestaurant = JSON.parse(localStorage.getItem("res_current"));
    let tempRestaurants = JSON.parse(localStorage.getItem("res_users"));
    if (tempRestaurants){
        for (let x in tempRestaurants){
            let currentRestaurant = tempRestaurants[x];

            let restaurantContent = document.createElement("div");
            restaurantContent.setAttribute("class", "restaurantContent");

            let uidDiv = document.createElement("div");
            uidDiv.innerHTML = `${currentRestaurant.uid}`; 

            let nameDiv = document.createElement("div");
            nameDiv.innerHTML = `${currentRestaurant.name}`; 

            let locationDiv = document.createElement("div");
            locationDiv.innerHTML = `${currentRestaurant.location}`; 

            let phoneDiv = document.createElement("div");
            phoneDiv.innerHTML = `${currentRestaurant.phoneNumber}`; 

            let btnsDiv = document.createElement("div");
            btnsDiv.setAttribute("class", "btnsDiv");

            if (loggedRestaurant.uid == currentRestaurant.uid){
                let editBtn = document.createElement("button");
                editBtn.textContent = `Edit`;
                editBtn.onclick = () => {
                    editRestaurant_handler(x);
                }
            }

            btnsDiv.appendChild(editBtn);

        }

        restaurantContent.appendChild(uidDiv);
        restaurantContent.appendChild(nameDiv);
        restaurantContent.appendChild(locationDiv);
        restaurantContent.appendChild(phoneDiv);
        restaurantContent.appendChild(btnsDiv);


    }


}
