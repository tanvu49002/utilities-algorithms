// const list = ['a', 'b', 'a', 'c', 'd', 'x', 'y', 'z']
const getFirstDuplicateValueOfArray = (array) => {
  let tmp = {}

  for (const value of array) {
    if (tmp[value]) return tmp[value]
    tmp[value] = value
  }

  return -1
}
// const foundDupValue = getFirstDuplicateValueOfArray(list)
// if (foundDupValue === -1) {
//   console.log('No result found.')
// } else {
//   console.log(`First duplicate value is: ${foundDupValue}`)
// }