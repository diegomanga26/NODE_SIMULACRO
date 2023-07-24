import dotenv from 'dotenv';
import mysql from 'mysql2';
dotenv.config("../");

const conect = mysql.createPool(JSON.parse(process.env.myConection));