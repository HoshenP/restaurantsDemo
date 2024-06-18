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
    // const loggedRestaurant = JSON.parse(localStorage.getItem("res_current"));
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

            console.log(x);


            let imagesDiv = document.createElement("div");
            for (let x in currentRestaurant.images){

                let imgDiv = document.createElement("div");
                imgDiv.setAttribute("class", "imgDiv");
                imgDiv.style.backgroundImage =
                `url(${currentRestaurant.images[x]})`;
                imagesDiv.appendChild(imgDiv);

            }

            restaurantContent.appendChild(uidDiv);
            restaurantContent.appendChild(nameDiv);
            restaurantContent.appendChild(locationDiv);
            restaurantContent.appendChild(phoneDiv);
            restaurantContent.appendChild(imagesDiv);


            let btnsDiv = document.createElement("div");
            btnsDiv.setAttribute("class", "btnsDiv");


            restaurantContent.appendChild(btnsDiv);


            // When login page is finished and there is logged user in localStorage
            // if (loggedRestaurant.uid == currentRestaurant.uid){
            //     let editBtn = document.createElement("button");
            //     editBtn.textContent = `Edit`;
            //     editBtn.onclick = () => {
            //         editRestaurant_handler(x);
            //     }
            // }

            // btnsDiv.appendChild(editBtn);


            $("#restaurantsContainer").append(restaurantContent);


        }



        

    }


}
