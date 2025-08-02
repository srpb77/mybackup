const dbConnect = require("./mongodb");

const insertData = async () => {
    let data = await dbConnect();
    let result = await data.insertMany([
        { name: 'max 5', sku: 'micromax', price: 420 },
        { name: 'max 5', sku: 'micromax', price: 300 }
    ]);
    
    if (result.acknowledged) {
        console.warn("data is inserted");
    }
};

insertData();