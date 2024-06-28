// const { z } = require("zod");

// // creatung in object schema
// const SignUpSchema = z.object({
//   username: z
//     .string({ required_error: "Name is required" })
//     .trim()
//     .min(3, { message: "Name must be at least 3 characters Long" })
//     .max(20, { message: "Name must be at least 10 characters Long" }),
//   email: z
//     .string({ required_error: "Invalid Email" })
//     .trim()
//     .min(3, { message: "Email must be at least 3 char." })
//     .max(3, { message: "Email must be at least 30 char." }),
//   phone: z
//     .number({ required_error: "Phone is required" })
//     .trim()
//     .min(10, { message: "Number must be at least 10 char." })
//     .max(20, { message: "Name cant be greater than  20 characters Long" }),
//   password: z
//     .string({ required_error: { message: "password is required" } })
//     .trim()
//     .min(3, { message: "password must be at leaset 3 char." })
//     .max(20, { message: "Pasword cant be greater than  20 characters Long" }),
// });

// module.exports = SignUpSchema;
