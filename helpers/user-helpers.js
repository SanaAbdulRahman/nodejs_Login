var db=require('../config/connection')
var collection=require('../config/collection')

const bcrypt=require('bcrypt');
const { resolve, reject } = require('promise');


module.exports={
    doSignup:(userData)=>{
       // console.log(useData);
        return new Promise(async(resolve,reject)=>{
        userData.password=await bcrypt.hash(userData.password,10)
        db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((response)=>{
            userData._id = response.insertedId;
                resolve(userData)
        })
    })
    }
}