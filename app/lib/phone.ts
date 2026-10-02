const stripToDigits = (value: string) =>
    value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);

export function formatUSPhone(value: string): string {
    const d = stripToDigits(value);
    if (d.length <= 3) return d;
    if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

export function isValidUSPhone(value: string): boolean {
    const d = stripToDigits(value);
    if (d.length !== 10) return false;

    const valid = (part: string) => /^[2-9]\d{2}$/.test(part) && !/^[2-9]11$/.test(part);
    return valid(d.slice(0, 3)) && valid(d.slice(3, 6));
}

export const toDigits = stripToDigits;