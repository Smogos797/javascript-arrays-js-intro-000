var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

 addElementToBeginningOfArray = ["Pie", "Yogurt"] 
     ["element", ...addElementToBeginningOfArray]


destructivelyAddElementToBeginningOfArray = ["Kiwi", "Lemon"] 
destructivelyAddElementToBeginningOfArray.unshift("element")



function addElementToEndOfArray(array, element){
    [...dessert, "element"]
}

function destructivelyAddElementToEndOfArray(array, element) {
    destructivelyAddElementToEndOfArray.push(element)
}

function accessElementInArray(name, 1) {
    name = ["Megan", "Mike", "Maria"]
    console.log(name[1]);
  }

function destructivelyRemoveElementFromBeginningOfArray(array) {
    destructivelyRemoveElementFromBeginningOfArray.shift()
  }

function removeElementFromBeginningOfArray(array) {
    var time = ["morning", "noon", "night"]

    time.shift(0)

    time
  }

function destructivelyRemoveElementFromEndOfArray(array) {
    var lunch = ["hamburger", "pizza", "salad"]
    lunch.pop()
    lunch
  }

function removeElementFromEndOfArray(array) {
    flavor = ["vanilla", "chocolate", "strawberry"]
    flavor.slice(0, flavor.length - 1)

  }
