const mongoose  =require ("mongoose")
const moment = require ("moment")
const schema = mongoose.Schema

const feedSchema = new schema ({
    name : {
        type: String,
        required:true,
        maxlength: 15,
    },
    massage :{
        type: String,
        required:true,
        maxlength: 40,
    },
    created_at:{
        type: Date,
        default: Date.now,
        get: function(createdAt){
            return moment(createdAt).format("MMM Do YYYY,h:mm:ss a ");
        }
    }
    

},

            {timestamps: true})
            module.exports= mongoose.model("FEED", feedSchema)