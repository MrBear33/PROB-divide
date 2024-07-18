function countZeroes(arr) {
	let left = 0
	let right = arr.length - 1
	let firstZeroIndex = -1

	while (left <= right) {
		let mid = Math.floor((left + right) / 2)

		if (arr[mid] === 0) {
			// Check if this is the first occurrence of 0
			if (mid === 0 || arr[mid - 1] === 1) {
				firstZeroIndex = mid
				break
			} else {
				right = mid - 1 // Narrow down to the left half
			}
		} else {
			left = mid + 1 // Narrow down to the right half
		}
	}

	if (firstZeroIndex === -1) {
		return 0 // No zeroes found
	}

	return arr.length - firstZeroIndex // Number of zeroes
}

module.exports = countZeroes
