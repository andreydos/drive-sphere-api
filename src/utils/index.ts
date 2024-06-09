export function cleanString(str: string): string {
    return str.trim().replace(/\s+/g, ' ');
}
