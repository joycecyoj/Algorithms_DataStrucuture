function strPattern(str, pattern) {
  let i = 0
  let j = 0

  while (i < str.length && j < pattern.length) {
    console.log('i-', i, 'str[i]-', str[i], 'j-', j, 'pattern[j]-', pattern[j])

    if (!isNaN(pattern[j])) {
      i += Number(pattern[j])
      j++

      console.log(i, j)

    } else if (str[i] === pattern[j]) {
      i++
      j++
    } else {
      return false
    }
  }

  if (i < str.length || j < pattern.length) {
    return false
  } else {
    return true
  }
}

console.log(strPattern('datadog', 'd3d2'))  // true
console.log(strPattern('datadog', 'd6'))  // true
console.log(strPattern('datadogs', 'd3d2')) // false
console.log(strPattern('datadog', 'd3d2t3'))  // false
