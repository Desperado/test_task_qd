import testBase from "../config/testBase.service";

const LOGIN_USER = `/api/login`

// LOGIN Endpoint route

const login_user = {
    POST: (data) => testBase.post(`${LOGIN_USER}`, data)
}

export default login_user;