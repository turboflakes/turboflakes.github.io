// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/paularmstrong/normalizr
// import { schema } from 'normalizr'
import { apiSchema } from './api'
import { validatorSchema, validatorsSchema } from './validator'

// schemas for API responses.
export const schemas = {
  API: apiSchema,
  VALIDATOR: validatorSchema,
  VALIDATORS: validatorsSchema,
}
