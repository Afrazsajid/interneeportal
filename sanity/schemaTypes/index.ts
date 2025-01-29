import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { internshipType } from './internshipType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType,internshipType],
}
