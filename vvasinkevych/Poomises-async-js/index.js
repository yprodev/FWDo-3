
// task 1 callbacks

let status;


// const checkStatus = () => {
//   if (status === "done") {
//     alert("Horray")
//   } else {
//     console.log('oops');
//   }
// }

// const setStatus = (callbackFunction) => {
//   setTimeout(() => {
//     status = "done"
//     callbackFunction()
//     console.log("status changed");
//   }, 4000);
// }


// setStatus(checkStatus)


// task 1 Promises

// const setStatus = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("done")
//     console.log("status changed");
//     reject(new Error())
//   }, 4000);
// })

// // throw new Error()

// setStatus.then(
//   (result) => console.log(result),
// ).catch(error => {
//   console.log(error)
//   return 'sdsds'
// }).finally(() => {
//   console.log("always", ' ',);
// })



// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 300000)), // 1
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ])
//   .then((result) => {
//     console.group(result)
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("always", ' ',);
//   });



// Promise.allSettled([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise((resolve, reject) => setTimeout(() => reject(3), 1000))  // 3
// ])
//   .then((result) => {
//     console.group(result)
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("always", ' ',);
//   });

// // task 1 async await

async function getData() {
  return Promise.resolve('data');
}

async function getMoreData(data) {
  return Promise.reject(data + 'more data');
}

const getSmth = () => 'sadasdasd'

async function getAll() {
  try {
    const data =  getData();
    const data2 = await getData();
    const moreData = await getMoreData(data);

  } catch (error) {
    console.log(error);
  } finally {
    console.log('sajkhdaskjh');
  }


  console.log('async')
  return `All the data: data, moreData`;
}

getAll()
