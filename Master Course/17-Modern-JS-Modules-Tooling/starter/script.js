"use strict";

//Importing from...
//Importing module
//import {AddToCart, totalPrice as price, tQ} from "./shopingCart.js";
//console.log("Importing module");
//AddToCart("Apple", 5);


import * as ShoppingCart from "./shopingCart.js";
console.log("Importing module");
//console.log(ShoppingCart.totalPrice);
ShoppingCart.AddToCart("Bread", 2);

import Add from "./shopingCart.js";
Add("apple", 10)
//console.log(ShoppingCart.cart);



//Top level Await
/*
console.log("Start");
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await response.json();
console.log(data);
console.log("End");
*/



//Real usecase
/*
async function GetLastPost()
{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json(); 
    return {title: data.at(-1).title, text: data.at(-1).body};
}

//Not very clean
//const lastPost = GetLastPost();
//lastPost.then(last => console.log(last));

const lastPost = await GetLastPost();
console.log(lastPost);

*/



//The Module Pattern
/*
const ShoppingCart2 = (function ()
{
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 15;

    function AddToCart(product, quantity)
    {
        cart.push({product, quantity});
        console.log(`${quantity} ${product}(s) added to cart.`);
    }

    function OrderStock(product, quantity)
    {
        cart.push({product, quantity});
        console.log(`${quantity} ${product}(s) ordered from supplier.`);
    }

    return {
        AddToCart,
        cart,
        totalPrice,
        totalQuantity
    };
})();

ShoppingCart2.AddToCart("Pizza", 3);
ShoppingCart2.AddToCart("Burger", 6);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/



//CommonJS modules
/*

//This just works in NodeJS

//Export in NodeJS
export.AddToCart = function(product, quantity)
{
    cart.push({product, quantity});
    console.log(`${quantity} ${product}(s) added to cart.`);
}
//Import in NodeJS
const {AddToCart} = require("./shopingCart.js");

*/


//Dependencies
import cloneDeep from "lodash"
//import cloneDeep from "./node_modules/lodash-es/cloneDeep.js"

const state = 
{
    cart:
    [
        {product: "Bread",quantity: 5}
    ],
    user: {loggedIn: true}
}

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);


//PARCEL
if (module.hot)
{
    module.hot.accept();
}