const Router = require ("express")

const sample = require ('./Models/certiapp')

var router = Router ()

router.post ('/create', async (req,res) => {
    try {
        const data = req.body
        const result = await sample.create(data);
        console.log(result)
        res.json(result)
    } catch (err){
        console.log (err)
    }
})

router.get ('/read/:id', async (req,res)=>{
    
    const id = req.params.id
    const details = await sample.findOne({certificateid : id})
    //const details = await sample.find({})
    console.log(details)
    res.json(details)
})

module.exports = router;