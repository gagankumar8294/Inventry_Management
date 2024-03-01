// export default it expects 3 things
// HoistedDeclearation => a function | it takes this | function with function keyword not arrow function
// Class 
// asignment expression

const validateRequest = (req, res, next) => {
        
    const { name, price, imageUrl } = req.body;
    let errors=[];
    if(!name || name.trim()==''){
        errors.push("Name is required");
    }
    if(!price || parseFloat(price)<1){
        errors.push("Price must be a positive value");
    }
    try{
        const valiURl = new URLSearchParams(imageUrl)
    } catch(err){
        errors.push("URL is invalid");
    }
    if (errors.length > 0){
        return res.render('new-product', {
            errorMessage: errors[0],
        });
    }
    // it will all the conditions
    // if no isssue found it will call the next middleware in the pipeline 
    next();
}

// after it is declared we export
export default validateRequest;