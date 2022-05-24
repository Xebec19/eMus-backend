import { JSONSchemaType } from "ajv";

interface ILoginBody {
    user_identifier: string,
    password: string
}

export const loginSchema: JSONSchemaType<ILoginBody> = {
    type: "object",
    properties: {
        user_identifier: { type: "string"},
        password: { type: "string" }
    },
    required: ["user_identifier","password"],
    additionalProperties: false
}