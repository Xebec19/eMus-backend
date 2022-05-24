import { JSONSchemaType } from "ajv";

interface IRequestBody {
    user_name: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string
}

export const registerSchema: JSONSchemaType<IRequestBody> = {
    type: "object",
    properties: {
        user_name: { type: "string"},
        first_name: { type: "string"},
        last_name: { type: "string"},
        email: { type: "string" },
        password: { type: "string" }
    },
    required: ["user_name","first_name","last_name","email","password"],
    additionalProperties: false
}