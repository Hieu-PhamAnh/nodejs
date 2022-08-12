// const User = require("../models/User");

// const searchByAgeAddressName = async (req, res) => {
//   const [page, lim] = [0, 10];
//   const pipeline2 = [
//     {
//       $unwind: "$address",
//     },
//     {
//       $match: {
//         age: {
//           $gt: 20,
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
//     {
//       $skip: page * lim,
//     },
//     {
//       $limit: lim,
//     },
//   ];
//   try {
//     const data = await User.aggregate(pipeline2);
//     console.log(data.length);
//     return res.status(200).json({
//       tong_so_document: data.length,
//       data: data,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({
//       message: "loi",
//     });
//   }
// };
