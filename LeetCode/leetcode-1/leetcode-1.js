/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  result = [];
  index_map = new Map();
  for (let i = 0; i < nums.length; i++) {
      let difference = target - nums[i];
      if (index_map.has(difference)) {
          result[0] = index_map.get(difference);
          result[1] = i;
          break;
      } else {
          index_map.set(nums[i], i);
      }
  }
  return result;
};