'use strict';

const POSTGRES_URI=process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/postgres";

const {Sequelize, DataTypes}= require('sequelize');

const food=require('./food.model');
const clothes=require('./clothes.model');


let sequelize =new Sequelize(POSTGRES_URI,{});

module.exports={
    db:sequelize,
    Food:food(sequelize,DataTypes),
    Clothes:clothes(sequelize,DataTypes)

}
