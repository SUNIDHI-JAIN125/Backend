const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");

router.route("/order/new").post( newOrder);

router.route("/order/:id").get( getSingleOrder);

router.route("/orders/me").get( myOrders);

router
  .route("/orders")
  .get(getAllOrders);

router
  .route("/order/:id")
  .put( updateOrder)
  .delete(deleteOrder);

module.exports = router;
