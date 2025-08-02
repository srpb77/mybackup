const dbConnect= require('./mongodb')

const updateData=async ()=>{
    let data = await dbConnect();

    //For single record update
    let result = await data.updateOne(

        //For multirecord update

        //let result = await data.updateMany(   

        { name:'max 5'},
        {
            $set:{name:'max pro 511', price:1000}
        }
        )
    console.log(result)

}

updateData();