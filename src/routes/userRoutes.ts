import { Router } from "express";
import userController from "../controller/userController";
import validate from "../utils/validate";
import {CreateUserSchema} from "../utils/schema";


const router = Router();

router.post("/users",validate(CreateUserSchema),userController.create);
router.get("/users/:id",userController.getUser);
router.get("/users",userController.getUsers);
router.put("/users/:id",userController.updateUser);
router.delete("/users/:id",userController.deleteUser);

export default router;
