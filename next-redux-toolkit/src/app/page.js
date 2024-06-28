import React, { Fragment } from 'react'


const page = () => {
  return (
    <Fragment>
    <h2>Zood in next js </h2>
    </Fragment>
  )
}

export default page















// import Mongoose, { Schema, Document } from "mongoose";
// import { Content } from "next/font/google";

// export interface Message extends Document {
//   Content: string;
//   createdAt: Date;
// }

// const MessageSchema: Schema<Message> = new Schema({
//   Content: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     required: true,
//     default: Date.now,
//   },
// });

// export interface User extends Document {
//   username: string;
//   password: String;
//   email:String;
//   verifyCode:string;
//   verifyCodeExpire:Date;
//   isAcceptingMessage:boolean;
//   message:Message[]
// }

// const MessageSchema: Schema<Message> = new Schema({
//   Content: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     required: true,
//     default: Date.now,
//   },
// });
