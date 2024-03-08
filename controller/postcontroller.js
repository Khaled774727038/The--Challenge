const feed = require(`../model/Feed`)

const getHomepage =(req, res ) => {
feed.find()
.then((result) => res.render(`index`,  {articles: result}))
.catch(err => console.log(err)) 
}

const getnewfeed =(req, res ) => {
    feed.find()
    .then((err) => res.render(`new-feed`,{err:err.errors}))
    .catch(err => console.log(err))
}

const createFEED = (req, res )=> {
    const newFEED = new feed(req.body)
    newFEED.save()

    .then(() => res.redirect(`/`))
    .catch(err => res.send('<script>alert("the name must  not be empty and no longer than 15 characters and the massage must not be  empty and no longer than 40"); window.location.href="/";</script>'))
}

const getFullFEED = (req, res) => {
    feed.findById(req.params.id)
    .then((result) =>  res.render(`fullFEED`, {feed: result} ))
    .catch(err =>  console.log(err))
}

const deleteFEED = (req , res ) => {
    feed.findByIdAndDelete (req.params.id)
    .then (() =>res.redirect(`/`))
    .catch(err => console.log(err))
}

const getUpdatepage = (req,res)=>{
    feed.findById(req.params.id)
    .then ((result) => res.render(`edit`, {feed: result}))
    .catch(err => console.log(err))
}
const editFEED = (req,res)=>{
    feed.findByIdAndUpdate(req.params.id, req.body)
    .then ((feedId) => res.redirect(`/fullFEED/${feedId.id}` ))
    .catch(err => console.log(err))
}


module.exports = {
    getHomepage,
    getnewfeed,
    createFEED,
    getFullFEED,
    deleteFEED,
    getUpdatepage,
    editFEED
}