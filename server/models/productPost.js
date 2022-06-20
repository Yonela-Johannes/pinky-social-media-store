import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    product: String,
    image: String,
    previousPrice: Number,
    price: Number,
    quantityInStock: Number,
    recommend: {
        type: Number,
        default: 1,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const ProductPost = mongoose.model('ProductPost', productSchema)

export default ProductPost;