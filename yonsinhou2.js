export function yonsinhou(x) {
    if (x === 0) return "0";
    let result = "";
    while (x > 0) {
        result = (x & 3) + result;
        x >>>= 2;
    }
    return result;
};