// const nemo = ['nemo'];

// function findNemo(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 'nemo') {
//             console.log('Found nemo!');
//         }
//     }
// }

// findNemo(nemo);


//NOTES here we are going to see how to scale an array and review its performance to later optimize the array
const nemo = ['nemo'];
const animals = ['dog', 'cat', 'fish']
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
