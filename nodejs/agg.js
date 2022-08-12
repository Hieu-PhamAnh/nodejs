// const { MongoClient } = require("mongodb");
// const url =
//   "mongodb+srv://hieu:hieu123456@hieu.zjelqqh.mongodb.net/?retryWrites=true&w=majority";

// async function getUserAgeUp20() {
//   let pipeline = [
//     {
//       $match: {
//         age: {
//           $gte: 21,
//         },
//         "address.name": "Ha Dong",
//       },
//     },
//     {
//       $project: {
//         name: 1,
//         age: 1,
//         address: 1,
//       },
//     },
//     {
//       $sort: {
//         age: 1,
//       },
//     },
//   ];
//   const client = new MongoClient(url);
//   try {
//     const aggCursor = client.db("test").collection("users").aggregate(pipeline);
//     let len = 0;
//     aggCursor.forEach((user) => {
//       len++;
//       console.log(user);
//     });
//     console.log("Số bản ghi: " + len);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.close();
//   }
// }

// // async function getUserAllAtt() {
// //   let pipeline = [];
// //   const client = new MongoClient(url);
// //   try {
// //     const aggCursor = client.db("test").collection("users").aggregate(pipeline);
// //     let len = 0;
// //     await aggCursor.forEach((user) => {
// //       len++;
// //       console.log(user);
// //     });
// //     console.log("Số bản ghi: " + len);
// //   } catch (error) {
// //     console.log(error);
// //   } finally {
// //     await client.close();
// //   }
// // }

// getUserAgeUp20();
