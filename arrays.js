var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  [1, ...addElementToBeginningOfArray]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  destructivelyAddElementToBeginningOfArray.shift("New York")
}
function addElementToEndOfArray(array, element){
  [...addElementToEndOfArray, "Cake"]
}

function destructivelyAddElementToEndOfArray(array, element) {
    destructivelyAddElementToEndOfArray.push(91)
  }

function accessElementInArray(array, element) {
    name = ["Megan", "Mike", "Maria"]
    console.log(name[1]);
  }

function destructivelyRemoveElementFromBeginningOfArray(array) {
    days = [1, 2, 3]
    days.shift()
  }

function removeElementFromBeginningOfArray(array) {
    var time = [1, 2, 3]
    time.shift(0)

    time
  }

function destructivelyRemoveElementFromEndOfArray(array) {
    var lunch = [1, 2, 3]
    lunch.pop()
    lunch
  }

function removeElementFromEndOfArray(array) {
    flavor = [1, 2, 3]
    flavor.slice(0, flavor.length - 1)

  }
