/**
 * Replaces placeholders in the format {key} within a string with corresponding values from a given object.
 *
 * @param str - The input string containing placeholders (e.g., "tsfm/v1/app/{app_id}/related-post-types").
 * @param values - An object mapping keys to their replacement values (e.g., { app_id: "123" }).
 * @returns A new string with placeholders replaced by their corresponding values.
 */
export function replacePlaceholders(str: string, values: Record<string, string>): string {
    return str.replace(/\{([^}]+)\}/g, (_, key) => {
        if (key in values) {
            return values[key];
        }
        // Optionally throw an error or return the placeholder if no value is provided
        throw new Error(`No value provided for placeholder: ${key}`);
    });
}
