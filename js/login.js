const user = document.getElementById("user");
const pass = document.getElementById("pass");
const login = (user, pass) => {
    if (user === "john" && pass === "1234") {
        window.location.assign("dashbroad.html");
        return true;
    }
    return false;
};

const onSubmitForm = (form) => {
    const user = form.user.value;
    const pass = form.pass.value;
    const checkLogin = login(user, pass);
    if (checkLogin === false) {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác !");
    }
    return true;
};