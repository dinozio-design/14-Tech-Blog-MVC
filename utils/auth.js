const withAuth = (req,res,next)=>{
    //redirecting the request to login route if the user is not logged in
    if(!req.session.logged_in){
        res.redirect('/login');
    } else{
        next();
    }
};
module.exports = withAuth;