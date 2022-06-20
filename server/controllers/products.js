import ProductPost from "../models/productPost.js"

export const getProducts = async (req, res) => {
    try {
        const productPost = await ProductPost.find()
        res.status(200).json(productPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createProduct = async (req, res) => {
    const product = req.body

    const newProduct = new ProductPost(product)
    try {
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}