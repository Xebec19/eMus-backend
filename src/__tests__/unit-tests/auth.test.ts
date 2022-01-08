import request from 'supertest'
import app from '../../index'

describe("Test the root path", () => {
    test("It should response the POST method", async () => {
        const response = await request(app).post("/auth/login").send();
        expect(response.statusCode).toBe(200);
    });
});