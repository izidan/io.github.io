String.prototype.random = function () {
    let all = [
        "736684737074876685708418262417",
        "85747666888077706886",
        "75708570887472808966",
        "7680846688807866",
        "8786697468708570",
        "8573838018262117"
    ];
    let index = Math.floor(Math.random() * Math.floor(all.length));
    return !all.includes(this.toCharCodes()) ? all[index].fromCharCodes() :
        this.replace(/i/gi, '1').replace(/o/gi, '0').replace(/^\w/, t => t.toUpperCase())
};

String.prototype.toCharCodes = function () {
    return [...this].map(c => c.charCodeAt() - 31).join('');
};

String.prototype.fromCharCodes = function () {
    return [...this].map((c, i, a) => i % 2 ? String.fromCharCode(10 * a[i - 1] + 1 * a[i] + 31) : '').join('');
}