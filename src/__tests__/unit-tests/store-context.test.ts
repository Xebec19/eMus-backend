import request from "supertest";
import app from '../../index';
import { getFreePlan } from "../../database/store.context";
import { statusCodes } from "../../utils";

describe("Test store context functions", () => {
    test("getFreePlan should return only plan_id of free plan if no params passed", async() => {
        const plan_id = await getFreePlan();
        expect(typeof plan_id).toBe('string');
    });

    test("getFreePlan should return all data of free plan if false params passed", async() => {
        const plan_id = await getFreePlan(false);
        expect(typeof plan_id).toBe('object');
    });
});

describe("POST store/create",() => {
    let token:string;
    beforeAll(async() => {
        const payload = {
            "user_identifier":"rohan@gmail.com",
            "password":"123password",
        };
        const response = await request(app).post("/auth/login").send(payload);
        token = response.body.data;
    });

    test("User with no token should not be able to access route", async() => {
        const payload = {
            store_name: "Test",
            description: "A test store"
        }
        const response = await request(app).post('/store/create').send(payload);
        expect(response.body.status).toBeFalsy();
        expect(response.body.message).toBe('No token found!');
        expect(response.statusCode).toBe(statusCodes.INVALID_REQUEST);
    });

    test("User with token should be able to access route",async() => {
        const payload = {
            store_name: "Test",
            description: "A test store"
        }
        const response = await request(app).post('/store/create').set('authorization','Bearer '+token).send(payload);
        expect(response.body.status).toBeTruthy();
        expect(response.statusCode).toBe(statusCodes.SUCCESS);
    })
})