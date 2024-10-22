const router = require("express").Router()
const { nanoid } = require("nanoid")
const { dishes, users, reviews, restaurants } = require("./mock")
const { reply, getById, updateById } = require("./utils")

router.get("/restaurants", (req, res, next) => {
  console.log('/restaurants')
  reply(res, restaurants)
})

router.get("/restaurant/:restaurantId", (req, res, next) => {
  const restaurantId = req.params?.restaurantId
  console.log(`/restaurant/:restaurantId=${restaurantId}`)
  let restaurant

  if (restaurantId) {
    restaurant = getById(dishes)(restaurantId)
  }

  reply(res, restaurant)
})

router.get("/dishes", (req, res, next) => {
  console.log('/dishes')
  const { restaurantId, dishId } = req.query
  let result = dishes

  if (restaurantId) {
    const restaurant = getById(restaurants)(restaurantId)
    if (restaurant) {
      result = restaurant.menu.map(getById(result))
    }
  }

  if (!restaurantId && dishId) {
    result = getById(result)(dishId)
  }
  reply(res, result)
})

router.get("/dish/:dishId", (req, res, next) => {
  const dishId = req.params?.dishId
  console.log(`/dish/:dishId=${dishId}`)
  let product

  if (dishId) {
    product = getById(dishes)(dishId)
  }
  reply(res, product)
})

router.get("/reviews", (req, res, next) => {
  console.log('/reviews')
  const { productId } = req.query
  let result = reviews
  if (productId) {
    const product = getById(dishes)(productId)
    if (product) {
      result = product.reviews.map(getById(result))
    }
  }
  reply(res, result)
})

router.get("/review/:reviewId", (req, res, next) => {
  const reviewId = req.params?.reviewId
  console.log(`/review/:reviewId=${reviewId}`)
  let review

  if (reviewId) {
    review = getById(reviews)(reviewId)
  }
  reply(res, review)
})

router.patch("/review/:reviewId", (req, res, next) => {
  const body = req.body
  const reviewId = req.params?.reviewId
  console.log('/review/:reviewId')
  let updatedReview

  if (reviewId) {
    updatedReview = updateById(reviews)(reviewId, body)
  }

  reply(res, updatedReview)
})

router.get("/users", (req, res, next) => {
  console.log('/users')
  reply(res, users)
})

router.get("/user/:userId", (req, res, next) => {
  const userId = req.params?.userId
  console.log(`/user/:userId=${userId}`)
  let review

  if (userId) {
    review = getById(users)(userId)
  }
  reply(res, review)
})

// router.get("/product/:productId", (req, res, next) => {
//   const productId = req.params?.productId
//   // console.log(productId)
//   let product

//   if (productId) {
//     product = getById(dishes)(productId)
//   }

//   reply(res, product)
// })



// router.post("/review/:productId", (req, res, next) => {
//   const body = req.body
//   const productId = req.params?.productId
//   const product = productId && getById(products)(productId)
//   let newReview = {}

//   if (product && body) {
//     const newReviewId = nanoid()

//     newReview = {
//       ...body,
//       id: newReviewId,
//     }
//     product.reviews.push(newReviewId)
//     reviews.push(newReview)
//   }

//   reply(res, newReview)
// })



// // router.patch("/user/:userId", (req, res, next) => {
// // // const body = req.body
//   const userId = req.params?.userId
//   let updatedUser

//   if (userId) {
//     updatedUser = updateById(users)(userId, body)
//   }

//   reply(res, updatedUser)
// })

module.exports = router
