import express from "express";
import PropertyController from "../controllers/PropertyController";
import protectedRoute from "../middlewares/protectRoute";
import isUserVerified from "../middlewares/isUserVerified";
import checkProperty from "../middlewares/checkPropertyData";
const router = express.Router();

router.post(
  "/",
  protectedRoute,
  isUserVerified,
  checkProperty,
  PropertyController.addProperty
);
router.get("/", PropertyController.getAllAvailableProperties);
router.get("/all", PropertyController.getAllProperties);

router.get(
  "/my-properties",
  protectedRoute,
  isUserVerified,
  PropertyController.getUserProperties
);
router.get("/:id", PropertyController.getSingleProperty);

router.put(
  "/:id",
  protectedRoute,
  isUserVerified,
  PropertyController.updateProperty
);

// hide property
router.put(
  "/hideProperty/:id",
  protectedRoute,
  isUserVerified,
  PropertyController.hideProperty
);

//unhide property
router.put(
  "/unhideProperty/:id",
  protectedRoute,
  isUserVerified,
  PropertyController.unhideProperty
);

// approve property
router.put(
  "/approveProperty/:id",
  protectedRoute,
  isUserVerified,
  PropertyController.approveProperty
);
export default router;
