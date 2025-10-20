export const isEmail = (value: unknown): boolean => /.+@.+\..+/.test(String((value ?? '') as string).toLowerCase())
export const isRequired = (value: unknown): boolean => value !== undefined && value !== null && String(value).trim().length > 0


