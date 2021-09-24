function findFirstDuplicate(arr) {
  const unique = new Set()

  for (const value of arr){
    if (unique.has(value)) {
      return value
    }
    unique.add(value)
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
  // create empty Set for unique values
  // Iterate over array to add value to Set if not a duplicate
  // If it is a duplicate then rturn value
  // If iteration complete and no value return -1
// And a written explanation of your solution
  // A Set contains only unique values
  // If there is a duplicate it will stop right away, which would be the first duplicate and it would return that value
  // If no value is returned it will return -1