module.exports = function (text) {

    console.log('frequency.js');


    /**
     * Remove punctuation
     * @return {string} Lowercase punctuation-free word
     */
    var normalize = function(word) {
        return word
            .toLowerCase()
            .replace(/[,'.].*/g, '')
            .replace(/\n.*/g, '');
    };


    /**
     * Frequency of words in a text blob
     * @return {Array<Array<string, number>>} Sorted distribution of words
     */
    var frequency = function(text) {
        var distribution = text
                .split(' ')
                .map(normalize)
                .filter(function(v) {
                    return v;
                })
                .reduce(function(p, c, i) {
                    p[c] = p[c] ? ++p[c] : 1;
                    return p;
                }, {});
        var sorted = Object.keys(distribution)
                .sort(function(a, b) {
                    return distribution[b] - distribution[a];
                })
                .map(function(e, i, c) {
                    return [e, distribution[e]];
                });
        return sorted;
    };

    return frequency(text);
};
