// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("code", () => {
  it("converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    expect(code(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(code(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(code(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// b) Create the function that makes the test pass.

//create result array
//split input string into an array of letters and iterate over that array
//lowercase character before checking if it is equal to lowercase input character
//if the letter is one in the code, change it to the corresponding number
//push each character into the result array
//return result array joined on an emptry string

const code = (str) => {
 let result = []
 let lettersArr = str.split('')
 for (let i = 0; i < lettersArr.length; i++) {
   let currentLetter = lettersArr[i]
   let currentLowercase = lettersArr[i].toLowerCase()
   if (currentLowercase === 'a') {
     currentLetter = 4
   } else  if (currentLowercase === 'e') {
      currentLetter = 3
   } else  if (currentLowercase === 'i') {
       currentLetter = 1
   } else  if (currentLowercase === 'o') {
        currentLetter = 0
      }
      result.push(currentLetter)
 }
 return result.join('')
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordsWithLetter", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    expect(wordsWithLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(wordsWithLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

// b) Create the function that makes the test pass.
//iterate over array using filter
// return value if the value includes the letter
//use .includes method to check
//must lowercase the value before checking for letter

const wordsWithLetter = (arr, letter) => {
  let result = arr.filter(value => {
    if (value.toLowerCase().includes(letter) === true) {
      return value
    }
  })
  return result
}



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
  it("determines whether or not the array is a “full house”", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false



// b) Create the function that makes the test pass.

//create an object to count the instances of each number of the array
//iterate over the array and count each instance in the object
// use the values method to show the values listed in array form
//if the values are 3 and 2 or 2 and 3, return true
//else return false


const fullHouse = (arr) => {

  counter = {}

  for (let i = 0; i < arr.length; i++) {
     if (counter[arr[i]] === undefined) {
       counter[arr[i]] = 1
     } else {
       counter[arr[i]] += 1
     }
  }

  let values = Object.values(counter)
  console.log(values)

  if (values.join('') === '32' || values.join('') === '23') {
    return true
  } else {
    return false
  }
}
