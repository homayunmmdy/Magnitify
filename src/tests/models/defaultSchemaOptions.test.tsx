import { defaultSchemaOptions } from '../../models/schemaOptions';

describe('defaultSchemaOptions', () => {
  it('should have the correct structure and values', () => {
    // Verify that defaultSchemaOptions is an object
    expect(defaultSchemaOptions).toBeTypeOf('object');

    // Verify that the timestamps property is true
    expect(defaultSchemaOptions.timestamps).toBe(true);

    // Optionally, you can check that no other properties are present
    expect(Object.keys(defaultSchemaOptions)).toEqual(['timestamps']);
  });
});