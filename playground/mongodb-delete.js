const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server')

  const db=client.db('TodoApp')

//  db.collection('Users').deleteMany({name:'Lily'}).then((results)=>{
//    console.log(results);
//  })

  db.collection('Users').findOneAndDelete({
    _id:new ObjectID('5b02ff05484a1a3fc1ddcf65')
  }).then((results)=>{
    console.log(results);
  });

  /*db.collection('Todos').insertOne({
    text:'Something to do',
    completed:false
  },(err,result)=>{
    if (err){
      return console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  })*/
})
