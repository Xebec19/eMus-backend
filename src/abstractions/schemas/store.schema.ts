import { JSONSchemaType } from "ajv";

interface ICreateStore {
    store_name: string,
    description: string,
}

export const createStoreSchema: JSONSchemaType<ICreateStore> = {
    type: "object",
    properties: {
        store_name: {type:"string"},
        description: {type:"string"}
    },
    required: ["store_name","description"],
    additionalProperties: false
}