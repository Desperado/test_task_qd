import register_user from "../routes/register.api";
import users from "../routes/users.api";
import login_user from "../routes/login.api";
import { assert } from "chai";
import { describe, test } from "mocha";
import * as data from "../data/users.data";

describe('As an API user, I want to register a new user', () => {


    it('verifies that client sent a POST request /api/login', async () => {
        const response = await login_user.POST(data.USER_3)
        const user = 3
        assert.equal(response.status, 200)
        assert.equal(response.headers['content-type'], 'application/json; charset=utf-8')
        assert.hasAllKeys(response.data, ['token'])
        assert.equal(response.data.token, `${data.TOKEN.token}${user}`)
    })

    it('verifies that client sent a POST request /api/login with user data from the other request', async () => {
        const user = 1;
        let response = await users.GETONE(user)
        const USER = {
            email: response.data.data.email,
            password: data.USER_3.password
        }
        response = await login_user.POST(USER)
        assert.equal(response.status, 200)
        assert.equal(response.headers['content-type'], 'application/json; charset=utf-8')
        assert.hasAllKeys(response.data, ['token'])
        assert.equal(response.data.token, `${data.TOKEN.token}${user}`)
    })

    it('verifies that client sent a POST request /api/register', async () => {
        const response = await register_user.POST(data.USER_3)
        const user = 3
        assert.equal(response.status, 200)
        assert.equal(response.headers['content-type'], 'application/json; charset=utf-8')
        assert.hasAllKeys(response.data, ['id', 'token'])
        assert.equal(response.data.token, `${data.TOKEN.token}${user}`)
    })

    it('verifies that client sent a POST request /api/register with user data from the other request', async () => {
        const user = 2;
        let response = await users.GETONE(user)
        const USER = {
            email: response.data.data.email,
            password: data.USER_2.password
        }
        response = await register_user.POST(data.USER_2)
        assert.equal(response.status, 200)
        assert.equal(response.headers['content-type'], 'application/json; charset=utf-8')
        assert.hasAllKeys(response.data, ['id', 'token'])
        assert.equal(response.data.token, `${data.TOKEN.token}${user}`)
    })
})