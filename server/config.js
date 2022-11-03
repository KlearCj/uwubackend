require("dotenv").config();

const PORT= process.env.PORT || 3001
const HOST= process.env.HOST || 'localhost'
const DB_USER= process.env.DB_USER || null
const DB_PASSWORD = process.env.DB_PASSWORD || null
const DB_NAME = process.env.DB_NAME || "uwumovies"
module.exports={PORT, HOST, DB_USER, DB_PASSWORD, DB_NAME}