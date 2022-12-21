const express = require("express")
const router = express.Router()
const db = require ('../firebase')
// router.get("/",async(req,res)=>{
// res.send({name:"Abhishek"})
// })

// router.post("/addTask",async(req,res)=>{
// try{
//     const newTask =  await db.collection("tasks").doc("task1").set({
//         name:req.body.name,
//         desc:req.body.desc
//     })
//     console.log(newTask)
//     res.status(200).send(newTask.id)
// }
// catch(err){
//     console.log(err)
//     res.status(500).send(err)
// }

  
// })

router.get("/getTask",async(req,res)=>{
    try{
    const tasksRef = db.collection('tasks');
    let arr=[]
    const snapshot = await tasksRef.get();
    snapshot.forEach((doc) => {
        arr=[...arr,doc.data()]
      console.log(doc.id, '=>', doc.data());
    });
    res.status(200).send(arr);
}
catch(err){
    console.log(err)
    res.status(500).send(err)
}
})

module.exports = router;