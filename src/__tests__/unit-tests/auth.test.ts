import request from "supertest";
import app from '../../index';

describe("Test authentication",() => {

    const createUser = jest.fn();

    test("User should not be able to register with existing email", async () => {
        const payload = {
            "user_name":"rohan",
            "first_name":"rohan",
            "last_name":"thakur",
            "password":"123password",
            "email":"rohan3@gmail.com"
        };
        const response = await request(app).post("/auth/register").send(payload);

        expect(createUser.mock.calls.length).toBe(0);
        expect(response.body.status).toBeFalsy();
        expect(response.statusCode).toBe(401);
    });

    test("User should not be able to register with invalid params", async () => {
        const payload = {
            "user_name":"rohan",
            "first_name":"rohan",
            "last_name":"thakur",
            "password":"123password",
            "email":"rohan3@gmail.com"
        };
        const response = await request(app).post("/auth/register").send(payload);

        expect(createUser.mock.calls.length).toBe(0);
        expect(response.body.status).toBeFalsy();
        expect(response.statusCode).toBe(401);
    });

    test("User should able to login with correct user name and password", async () => {
        const payload = {
            "user_identifier":"xebec19",
            "password":"123password",
        };
        const response = await request(app).post("/auth/login").send(payload);
        expect(response.body.status).toBeTruthy();
        expect(response.statusCode).toBe(201);
    });
})