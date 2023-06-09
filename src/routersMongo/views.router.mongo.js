const {Router} = require('express')
const ProductManager = require('../dao/mongoDb/products.mongo')
const cartManager = require('../dao/mongoDb/cart.mongo')



const router = Router()

router.get("/products", async (req, res) => {
  const products = await ProductManager.getAll()
  // res.render("products", {
  //   style: "products.css",
  //   title: "Products",
  //   products,
  // })
  res.send(products)
})
// router.get("/cartsMongo", (req, res) => {
//   res.render("cartsId", {
//     style: "cart.css",
//     title: "Carts",
//   })
// })
// router.get("/:cid", async (req, res) => {
//   const { cid } = req.params
//   const cart = await cartManager.getById(cid)
//   const cartsProducts = cart.products
//   res.render("cartsId", {
//     style: "cartId.css",
//     title: "CartsId",
//     cartsProducts
//   })
// })

module.exports = router