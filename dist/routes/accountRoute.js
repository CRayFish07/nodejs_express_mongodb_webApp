"use strict";var express=require("express"),route=express.Router(),accountCtrl=require("../controllers/account/accountController");route.get("/account/login",accountCtrl.displayLoginPage),route.post("/account/login",accountCtrl.login),module.exports=route;