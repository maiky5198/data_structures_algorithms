//NOTES learning BIG O
const nemo = ['nemo'];

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found nemo!');
        }
    }
}

findNemo(nemo);


// NOTES here we are going to see how to scale an array and review its performance to later optimize the array
// NOTES the function depends on the number of inputs in the array. So time to exucute is linear
const nemo = ['nemo'];
const animals = ['dog', 'cat', 'fish', 'nemo', 'cheetah']
const large = new Array(100).fill('nemo')

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }
    let t1 = performance.now();
    console.log('call to find nemo took ' + (t1-t0) + ' millisecinds')
}

findNemo(large); // O(n) --> linear time


//NOTES example of Constant Time, the input size doesnt matter, each time the function will run once
const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); //O(1)
    console.log(boxes[1]); //O(1)
}

logFirstTwoBoxes(boxes) //O(2)

//NOTES calculating BIG O 

function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)

    for (let i = 0; i < input.length; i++) { //O(n)
        anotherFunction(); //O(n)
        let stranger = true; //O(n)
        a++; //O(n)
    }
    return a; //O(1)
}
BIG O(3 +4n)

//NOTES calculating Big O
function anotherFunChallenge(input) {
    let a = 5;// O(1)
    let b = 10;// O(1)
    let c = 50;// O(1)
    for (let i = 0; i < input; i++) {// O(n)
      let x = i + 1;// O(n)
      let y = i + 2;// O(n)
      let z = i + 3;// O(n)
  
    }
    for (let j = 0; j < input; j++) {// O(n)
      let p = j * 2;// O(n)
      let q = j * 2;// O(n)
    }
    let whoAmI = "I don't know";// O(1)
  }
  
// NOTES 4 constant 5 linear
BIG O(4 + 5n)



//NOTES BIG O RULE 1  WE ALWAYS CARE ABOUT WORST CASE SCENRIO  
//NOTES adjusting performance 
const nemo = ['nemo'];
const animals = ['dog', 'cat', 'fish', 'nemo', 'cheetah']

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
            //as soon as it finds nemo the loop ends
            break;
        }
    }
}

findNemo(animals); // O(n) --> linear time

//
  