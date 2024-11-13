function getElementWidth (content, padding, border) {
    const parseContent = parseFloat(content);
    const parsePadding = parseInt(padding) * 2; // sağ - sol padding
    const parseBorder = parseFloat(border) * 2; // sağ - sol border
    return parseContent + parsePadding + parseBorder;
};

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200