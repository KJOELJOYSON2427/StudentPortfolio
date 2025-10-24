// Define all action types
export type Action =
    | { type: 'form/updateField'; payload: { field: string; value: string } }
    | { type: 'form/setErrors'; payload: Record<string, string> }
    | { type: 'form/setSubmitting'; payload: boolean }
    | { type: 'form/submitSuccess' }
    | { type: 'form/resetSuccess' };
