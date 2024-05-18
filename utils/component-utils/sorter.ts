export const sorter = (a: any, b:any) => (isNaN(a) && isNaN(b) ? (a || '').localeCompare(b || '') : a - b);
