import chai, { assert } from "chai"
import chaiJsonSchema from "chai-json-schema"

chai.use(chaiJsonSchema)
// Asser JSON schema
export const expect = {
    JsonSchema: (response, schema) => {
        assert.jsonSchema(response.data, schema)
    }
}