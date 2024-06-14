import { z } from "zod";

export const CreateUserSchema = z.object({
    body:z.object({
        fullName:z.string().min(1,{message:"the name must be greater than 1 characters "}).max(30),
        email:z.string().min(5,{message:"the description must be greater than 1 characters "}).max(255),
        password:z.string().min(5,{message:"the password must be greater than 1 characters "}).max(255)
    })
})
// export const UpdateUserSchema = z.object({
//     params:z.object({id:z.string()}),
//     body:z.object({
//         name:z.string().min(1,{message:"the name must be greater than 5 characters "}).max(30),
//         description:z.string().min(1,{message:"the description must be greater than 1 characters "}).max(255)
//     }).partial(),
// })