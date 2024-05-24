import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        }
    },
    {timestamps: true}
)

const User = mongoose.model('User',userSchema)

export default User


//req is the data that we get from the client side 
//res is the data that we send back from the server side
//req is from the client
//res is from the server
