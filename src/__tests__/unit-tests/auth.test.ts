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
})