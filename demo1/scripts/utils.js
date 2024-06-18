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

export function loadRestaurants() {
  console.log("works");
  $("#restaurantsContainer").html("");

  const loggedRestaurant = JSON.parse(localStorage.getItem("res_current"));

  let tempRestaurants = JSON.parse(localStorage.getItem("res_users"));
  if (tempRestaurants) {
    for (let x in tempRestaurants) {
      let currentRestaurant = tempRestaurants[x];

      let restaurantContent = document.createElement("div");
      restaurantContent.setAttribute("class", "restaurantContent card d-flex flex-row m-3 p-3");

      let uidDiv = document.createElement("div");
      uidDiv.innerHTML = `<p class="fw-semibold fs-5 my-1"> <i class="bi bi-person-check"></i> ID: <span class="badge bg-greeni text-dark fw-semibold fs-5 rounded-4">${currentRestaurant.uid}</span></p>`;

      let nameDiv = document.createElement("div");
      nameDiv.innerHTML = `<p class="fw-semibold fs-5 my-1"> <i class="bi bi-buildings"></i> Name: <span class="badge bg-greeni text-dark fw-semibold fs-5 rounded-4">${currentRestaurant.name}</span></p>`;

      let locationDiv = document.createElement("div");
      locationDiv.innerHTML = `<p class="fw-semibold fs-5 my-1"> <i class="bi bi-geo-alt"></i> Location: <span class="badge bg-greeni text-dark fw-semibold fs-5 rounded-4">${currentRestaurant.location}</span></p>`;

      let phoneDiv = document.createElement("div");
      phoneDiv.innerHTML = `<p class="fw-semibold fs-5 my-1"> <i class="bi bi-telephone"></i> Phone number: <span class="badge bg-greeni text-dark fw-semibold fs-5 rounded-4">${currentRestaurant.phoneNumber}</span></p>`;

      let imagesDiv = document.createElement("div");
      imagesDiv.classList.add('d-flex', 'flex-row', 'justify-content-end', 'col-8');
      for (let x in currentRestaurant.images) {
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "imgDiv m-1");
        imgDiv.style.backgroundImage = `url(${currentRestaurant.images[x]})`;
        imagesDiv.appendChild(imgDiv);
      }

      let btnsDiv = document.createElement("div");
      btnsDiv.setAttribute("class", "btnsDiv");

      let divLeft = document.createElement("div");
      divLeft.append(uidDiv, nameDiv, locationDiv, phoneDiv, btnsDiv)
      divLeft.classList.add('d-flex', 'flex-column', 'justify-content-start', 'col-4');


      console.log(loggedRestaurant, currentRestaurant);
      if (loggedRestaurant.uid == currentRestaurant.uid) {
        console.log("ting");
        var editBtn = document.createElement("button");
        editBtn.textContent = `Edit`;
        editBtn.classList.add('btn', 'btn-light', 'rounded-5', 'py-1', 'px-3', 'mt-3');
        editBtn.onclick = () => {
          editRestaurant_handler(x);
        };

        btnsDiv.appendChild(editBtn);
      }

      restaurantContent.append(divLeft, imagesDiv);

      $("#restaurantsContainer").append(restaurantContent);
    }
  }
}

const editModal = document.getElementById("editModal");
function editRestaurant_handler(index) {
  console.log("happened");
  editModal.showModal();
  let tempRestaurants = JSON.parse(localStorage.getItem("res_users"));
  for (let x in tempRestaurants) {
    if (x === index) {
      $("#editUsername").val(tempRestaurants[x].username);
      $("#editPassword").val(tempRestaurants[x].password);
      $("#editRestaurantName").val(tempRestaurants[x].name);
      $("#editRestaurantLocation").val(tempRestaurants[x].location);
      $("#editRestaurantPhone").val(tempRestaurants[x].phoneNumber);
      localStorage.setItem("edit-index", index);
    }
  }
}

export function saveUpdatedRestaurant() {
  if (
    !$("#editResturauntImages").prop("files")[0])
   {

    let tempRestaurants = JSON.parse(localStorage.getItem("res_users"));
    let editIndex = localStorage.getItem("edit-index");
    for (let x in tempRestaurants) {
        if (x === editIndex) {
          tempRestaurants[x].name = $("#editRestaurantName").val();
          tempRestaurants[x].location = $("#editRestaurantLocation").val();
          tempRestaurants[x].phoneNumber = $("#editRestaurantPhone").val();
        }
      }
      localStorage.setItem("res_users", JSON.stringify(tempRestaurants));
      editModal.close();
      document.location.reload();

  } else if ($("#editResturauntImages").prop("files").length > 5){
    alert("You can't upload more than 5 images");

  }
   else {
    let images = $("#editResturauntImages").prop("files");
    let base64Images = [];

    for (let i in images) {
      function Images2Array(file) {
        var reader = new FileReader();

        reader.onload = function (e) {
          base64Images.push(e.target.result);
          if (base64Images.length === images.length) {
            let tempRestaurants = JSON.parse(localStorage.getItem("res_users"));
            let editIndex = localStorage.getItem("edit-index");

            for (let x in tempRestaurants) {
              if (x === editIndex) {
                tempRestaurants[x].name = $("#editRestaurantName").val();
                tempRestaurants[x].location = $("#editRestaurantLocation").val();
                tempRestaurants[x].phoneNumber = $("#editRestaurantPhone").val();
                tempRestaurants[x].images = base64Images;
              }
            }
            localStorage.setItem("res_users", JSON.stringify(tempRestaurants));
            editModal.close();
            document.location.reload();
          }
        };
        reader.readAsDataURL(file);
      }
      Images2Array(images[i]);

    }
  }
}
