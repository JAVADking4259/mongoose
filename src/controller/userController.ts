import {Request,Response} from "express";
import {User} from "../schema/schema";

class userController{

    async create(req:Request,res:Response){
        try {
            const {fullName,email,password} = req.body;
            const newUser = new User({
                fullName,
                email,
                password
            });
            await newUser.save();
            res.status(200).send(newUser);
            } catch (error) {
            res.status(500).json({
                status:"internal server Error",
                message:"internal server Error"
            })
        }
    }

    async updateUser(req:Request,res:Response){
        try {
            const {id} = req.params;
            const {fullName,email,password} = req.body;
            const newUser = await User.findByIdAndUpdate(id,{fullName,email,password},{new:true});
            if(!newUser){
                return res.status(404).json({ message: 'User not found' });
            };
            res.status(200).send(newUser);
        } catch (error) {
            res.status(500).json({
                status:"internal server Error",
                message:"internal server Error"
            })
        }
    }

    async getUser(req:Request,res:Response){
        try {
            const {id} = req.params;
            const user = await User.findById(id);
            if(!user){
                return res.status(404).json({ message: 'User not found' });
            };
            res.status(200).send(user);
        } catch (error) {
            res.status(500).json({
                status:"internal server Error",
                message:"internal server Error"
            })
        }
    }

    async getUsers(req:Request,res:Response){
        try {
            const users = await User.find();
            res.status(200).send(users);
        } catch (error) {
            res.status(500).json({
                status:"internal server Error",
                message:"internal server Error"
            })
        }
    }

    async deleteUser(req:Request,res:Response){
        try {
            const {id} = req.params;
            const user = await User.findByIdAndDelete(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
              }
              res.status(200).send({ message: 'User deleted' });
        } catch (error) {
            res.status(500).json({
                status:"internal server Error",
                message:"internal server Error"
            })
        }
    }
}

export default new userController()