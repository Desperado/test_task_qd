import testBase from "../config/testBase.service";

const LOGIN_USER = `/api/login`

const login_user = {
    POST: (data) => testBase.post(`${LOGIN_USER}`, data)
}

export default login_user;