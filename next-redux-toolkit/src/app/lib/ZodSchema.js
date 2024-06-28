import { z } from "zod";

// object schema

export const SignInSchema = z.object({
  email: z.string().email("Invalid email address.")
  .trim()
   .min(3,{message:"Password must  be at least 3 char"})
   .max(50, {message:"Email must be at least 10 characters Long "})
  ,
  password: z
    .string({ required_error: "Password required" })
    .trim()
    .min(3, { message: "Password must  be at least 3 char" })
    .max(20, { message: "Password must be at least 10 characters Long " }),
});

export const SignUpSchema = z.object({
  username: z
    .string({ required_error: "UserName is required" })
    .trim()
    .min(3, { message: "UserName must be at least 3 characters" })
    .max(20, { message: "UserName must be at least 20 characters Long" }),

       email: z.string().email("Invalid email address.")
       .trim()
        .min(3,{message:"Password must  be at least 3 char"})
        .max(50, {message:"Email must be at least 10 characters Long "})
       ,

    password: z
     .string({ required_error: "Password required" })
    .trim()
    .min(3, { message: "Password must  be at least 3 char" })
    .max(20, { message: "Password must be at least 10 characters Long " }),
  dob: z.string({ required_error: "Date of Birth required" }),
  IdNumber: z.string(),
});
