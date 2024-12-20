import { z } from "zod";

export const loginSchema = z.object({
    username: z
        .string({ required_error: "Username is required!!" })
        .trim()
        .min(4, { message: "Username must be atleast 4 characters long!!" })
        .max(30, { message: "Username cannot be more than 30 characters!!" }),
    password: z
        .string({ required_error: "Password is required!!" })
        .trim()
        .min(5, { message: "Password must be atleast 5 character long!!" })
        .max(30, { message: "Password cannot be more than 30 characters!!" }),
});

export const signupSchema = z.object({
    fullName: z
        .string({ required_error: "Name is required!!" })
        .trim()
        .min(3, { message: "Name must be atleast 3 characters long!!" })
        .max(30, { message: "Name cannot be more than 30 characters!!" }),
    username: z
        .string({ required_error: "Username is required!!" })
        .trim()
        .min(4, { message: "Username must be atleast 4 characters long!!" })
        .max(30, { message: "Username cannot be more than 30 characters!!" }),
    phone: z
        .string({ required_error: " is required!!" })
        .trim()
        .min(3, { message: "Phone must be at lease 3 characters long!!" })
        .max(12, { message: "Phone cannot be more than 12 characters!!" }),
    password: z
        .string({ required_error: "Password is required!!" })
        .trim()
        .min(5, { message: "Password must be atleast 5 character long!!" })
        .max(30, { message: "Password cannot be more than 30 characters!!" }),
    isDeaf: z
        .string({ required_error: "Please fill all required fields!!" }),
    langPref: z
        .string({ required_error: "Please fill all required fields!!" })
        .trim()
        .min(2, { message: "Please select a language!!" })
        .max(30, { message: "Language cannot be more than 30 characters!!" }),
});