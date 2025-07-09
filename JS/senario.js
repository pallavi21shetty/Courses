// function fetchData1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data from fetchData1");
//     }, 1000);
//   });
// }
// function fetchData2(dataFrom1) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(dataFrom1 + " → Data from fetchData2");
//     }, 1000);
//   });
// }
// function fetchData3(dataFrom2) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(dataFrom2 + " → Data from fetchData3");
//     }, 1000);
//   });
// }
// // Chaining the promises
// fetchData1()
//   .then(result1 => {
//     console.log("First Promise resolved:", result1);
//     return fetchData2(result1);
//   })
//   .then(result2 => {
//     console.log("Second Promise resolved:", result2);
//     return fetchData3(result2);
//   })
//   .then(result3 => {
//     console.log("Third Promise resolved:", result3);
//   })
//   .catch(error => {
//     console.error("An error occurred:", error);
//   });





// function fetchData1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data from fetchData1");
//     }, 1000);
//   });
// }
// function fetchData2(dataFrom1) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(dataFrom1 + " → Data from fetchData2");
//     }, 1000);
//   });
// }
// function fetchData3(dataFrom2) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(dataFrom2 + " → Data from fetchData3");
//     }, 1000);
//   });
// }
//   async function main() {
//   try {
//     const result1 = await fetchData1();
//     console.log("First Promise resolved:", result1);

//     const result2 = await fetchData2(result1);
//     console.log("Second Promise resolved:", result2);

//     const result3 = await fetchData3(result2);
//     console.log("Third Promise resolved:", result3);
//   } catch (err) {
//     console.error("An error occurred:", err);
//   }
// }

// main();



const promise1 = Promise.resolve(" Task 1 done");

const promise2 = new Promise((_, reject) => {
  setTimeout(() => reject(" Task 2 failed"), 1000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve(" Task 3 done after delay"), 1500);
});

Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Promise ${index + 1} resolved with:`, result.value);
      } else {
        console.error(`Promise ${index + 1} rejected with:`, result.reason);
      }
    });
  });
