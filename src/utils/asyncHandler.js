const asyncHandler = ( requestHnadler) =>{
 

    (res, res, next ) =>{
        Promise.resolve().catch((err) => next())
    }
}





export {asyncHandler}





// const asyncHandler = (fn) => async(req, res, next) =>{
//     try {
        
//     } catch (error) {
//         res.status(error.code || 500)
//         success: false,
//         message: error.message
//     }


// }