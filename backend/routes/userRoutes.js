import express from "express";
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
} from '../controllers/userController.js';
import { protect ,admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.route('/logout').post(logoutUser);
router.route('/auth').post(authUser); //previously '/login'
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserByID).put(protect, admin, updateUser);

export default router;