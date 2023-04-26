var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) return -1;

    return haystack.indexOf(needle);
};