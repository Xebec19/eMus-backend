import { setResponse } from "../../utils/setResponse.method";

describe("Test setReponse method",() => {
    test("Response for success", async() => {
        const response = setResponse('test data',true,'Api fetching data successfully');
        expect(response.status).toBeTruthy();
        expect(response.message).toBe('Api fetching data successfully');
        expect(response.data).toBe('test data');
    });

    test("Response for failure", async() => {
        const response = setResponse('test data',false,'Api fetching data successfully');
        expect(response.status).toBeFalsy();
        expect(response.data).not.toBe('Api fetching data successfully');
        expect(response.message).not.toBe('test data');
    });
})