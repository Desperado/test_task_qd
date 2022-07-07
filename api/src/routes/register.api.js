import testBase from "../config/testBase.service";

const REGISTER_USER = `/api/register`

const register_user = {
    POST: (data) => testBase.post(`${REGISTER_USER}`, data)
}

export default register_user;