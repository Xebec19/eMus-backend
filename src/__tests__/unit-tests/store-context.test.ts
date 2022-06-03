import { getFreePlan } from "../../database/store.context";

describe("Test store context functions", () => {
    test("getFreePlan should return only plan_id of free plan if no params passed", async() => {
        const plan_id = await getFreePlan();
        expect(typeof plan_id).toBe('string');
    });

    test("getFreePlan should return all data of free plan if false params passed", async() => {
        const plan_id = await getFreePlan(false);
        expect(typeof plan_id).toBe('object');
    });
})