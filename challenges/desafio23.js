db.produtos.updateMany(
  {},
  {
    $push: {
      tags: { 
        $each: ["combo", "tasty"],
        $sort: 1,
       },
    },
  },
);

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
// https://www.mongodb.com/docs/manual/reference/operator/update/sort/
