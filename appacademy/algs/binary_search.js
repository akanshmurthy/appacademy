function binary_search(arr, val) {
  var left = 0;
  var right = arr.length - 1;

  while (left <= right) {
    var mid = Math.floor((right - left) / 2) + left;
    if (arr[mid] == val) {
      return mid;
    } else if (arr[mid] > val) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
