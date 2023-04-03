import util from 'util'

export default ()=>{
    return (err,req,res,next)=>{
        res.status(500).json({
            err:util.format(err)
        })
    }
}