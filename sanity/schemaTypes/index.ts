import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { internshipType } from './internshipType'
import { applicantType } from './applicantType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType,internshipType,applicantType],
}
