import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: String,
    title: String,
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    profilePicture: String,
    image: String,
    about: String,
    address: {
        type: String,
        StreetName: String,
        HouseNumber: Number,
        location: String,
        postalCode: Number,
        city: String,
    }
},
    { timestamps: true }

)

const UserModel = mongoose.model("Users", userSchema)

export default UserModel;