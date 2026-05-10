function createLink(path, val='') {
    return `<a href="${path}">${val || path}</a><br>\n`;
}

module.exports = { createLink };
