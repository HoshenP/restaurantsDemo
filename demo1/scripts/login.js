let res_users;

if (localStorage.getItem('res_users')) {
    res_users = JSON.parse(localStorage.getItem('res_users'));
} else {
    res_users = [];
    localStorage.setItem('res_users', JSON.stringify(res_users));
}

$('.login-btn').on('click', ()=> {

    let check = false;

    for (let x in res_users) {

        if (res_users[x].username == $('#username').val()) {

            check = true;

            if (res_users[x].password == $('#password').val()) {
                localStorage.setItem('res_current', JSON.stringify(res_users[x]));
                alert('Logged in successfully!');
                location.href = './index.html';
                break;
            } else {
                alert('Wrong password');
            }

        } 

    }

    if (!check) {
        alert('User does not found.');
    }


});
