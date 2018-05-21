const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server')

  const db=client.db('TodoApp')

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5b030c7d484a1a3fc1ddd25d')
  },{$set:{name:'Lily'},$inc:{age:1}},{returnOriginal:false}).then((result)=>{
    console.log(result);
  })

  //client.close()
})
