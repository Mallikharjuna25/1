// // console.log("Start");

// // function syncTask() {
// //   for (let i = 0; i < 3; i++) {
// //     console.log("Task running", i);
// //   }
// // }

// // syncTask();

// // console.log("End");


// console.log("Start");

// setTimeout(() => {
//   console.log("Async task completed");
// }, 2000);

// console.log("End");


// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched");
//     }, 1500);
//   });
// }

// // using async/await to handle the promise
// async function getData() {
//   const data =  await fetchData();
//   console.log(data);
// }



// getData();
const a =10 ;
const b = 0;


try {
    const sum = a / b;
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
} catch (error) {
    console.error("Error:", error.message);
}
console.log("Sum:", sum);