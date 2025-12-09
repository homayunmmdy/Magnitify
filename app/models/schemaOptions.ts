/**
 * Default schema options for Mongoose models.
 *
 * @property {boolean} timestamps - Enables automatic creation of `createdAt` and `updatedAt` fields in the schema.
 */
export const defaultSchemaOptions: { timestamps: boolean } = {
   timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
};
