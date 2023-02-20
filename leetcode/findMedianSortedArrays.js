/** @format */

const findMedianSortedArrays = (nums1, nums2) => {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);

  const length = merged.length;
  if (length % 2 === 0) {
    const firstEl = Math.floor(length / 2) - 1;
    const secondEl = Math.floor(length / 2);
    console.log(firstEl, secondEl);
    const average = (merged[firstEl] + merged[secondEl]) / 2;
    return average;
  } else {
    return merged[Math.ceil(length / 2) - 1];
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
