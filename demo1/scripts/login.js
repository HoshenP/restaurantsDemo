let res_users;

if (localStorage.getItem('res_users')) {
    res_users = JSON.parse(localStorage.getItem('res_users'));
} else {
    res_users = [];
    localStorage.setItem('res_users', JSON.stringify(res_users));
}

$('.login-btn').on('click', ()=> {

    for (let i = 0; i < res_users.length; i++) {

        if (res_users[i].username == username_input.value) {

            if (res_users[i].password == pw_input.value) {
                let currentUser = res_users[i];
                localStorage.setItem('res_current', JSON.stringify(currentUser));
                console.log(currentUser);
            } else {
                alert('Wrong password');
            }

            break;

        } else {
            alert('User does not found.');
            break;
        }

    }

});
