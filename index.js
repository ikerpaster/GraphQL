import express from "express"

// const express = require("express");
import resolvers from "./resolvers"
import schema from './schema'

import {graphqlHTTP} from 'express-graphql'

const app = express();

app.get("/",(req,res)=>{
res.send("hello");
});

// const root = {lco:()=> console.log("Iker Paster is my Name")}
const root = resolvers;

app.use('/graphql',graphqlHTTP({
    schema:schema, 
    rootValue:root,
    graphiql: true
}))

app.listen(1337,(req,res)=>{
    console.log("the server started on port 1337");
})