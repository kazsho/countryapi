require("dotenv").config()

const fs = require("fs")

const db = require("./connect")
const { error } = require("console")

const sql = fs.readFileSync("./database/countries.sql").toString()

const setupDatabase = async () => {
    try{
        const data = await db.query(sql)
        console.log("setup complete")
    }catch (error){
        console.error(err)
    }finally{
        db.end()
    }
}

setupDatabase()