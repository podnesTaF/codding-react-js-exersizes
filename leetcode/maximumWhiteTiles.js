var maximumWhiteTiles = function(tiles, carpetLen) {
    let left = 0;
    let right = 0;
    let maxCount = 0;
    let count = 0;

    while (right < tiles.length) {
        const length = tiles[right][1] - tiles[left][0] + 1;
        if (length <= carpetLen) {
            count += length;
            maxCount = Math.max(maxCount, count);
            right++;
        } else {
            count -= tiles[left][1] - tiles[left][0] + 1;
            left++;
            if (left > right) {
                right = left;
            }
        }
    }

    return maxCount >= carpetLen ? carpetLen : maxCount;
};

console.log(maximumWhiteTiles([[8051,8057],[8074,8089],[7994,7995],[7969,7987],[8013,8020],[8123,8139],[7930,7950],[8096,8104],[7917,7925],[8027,8035],[8003,8011]], 9854))