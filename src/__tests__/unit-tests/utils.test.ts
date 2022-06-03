import { randomString } from '../../utils/index';

describe("Test utils functions", () => {
    
    test("Function for random string should be generate random string of length 10 by default", async () => {
        const resultString = await randomString();
        expect(resultString.length).toBe(10);
    });
})