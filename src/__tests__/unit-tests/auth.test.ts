import request from "supertest"
import app from '../../index'
import { dbMock } from '../../database/mock-database';

describe("Test authentication",() => {
    test("User should not be able to register with existing email", async () => {
        const payload = {
            "user_name":"rohan",
            "first_name":"rohan",
            "last_name":"thakur",
            "password":"123password",
            "email":"rohan3@gmail.com"
        };
        const response = await request(app).post("/auth/register").send(payload);
        expect(response.body.status).toBeFalsy();
        expect(response.statusCode).toBe(401);
    });
    test("Db should create new account for new email", async () => {
        
    })
})