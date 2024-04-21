const abbreviate_number = (value, precision = 2) => {
    if(value >= 1000) {
        const map = [
            { suffix: "T", threshold: 1e12 },
            { suffix: "B", threshold: 1e9 },
            { suffix: "M", threshold: 1e6 },
            { suffix: "K", threshold: 1e3 },
            { suffix: "", threshold: 1 },
        ];
        const found = map.find((x) => Math.abs(value) >= x.threshold);
        if(found) {
            const formatted = (value / found.threshold).toFixed(precision) + found.suffix;
            return formatted;
        }
    }
    return value;
}

export default abbreviate_number;