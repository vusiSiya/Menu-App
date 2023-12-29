import {
    getBoughtItems,
    getTotalPrice,
    getTotalCount,
    removeItem
}from "../data.js";
import render from "../index.js";

import NavBar from "./NavBar.js";

export default function Layout(children){
    const totalCount = getTotalCount();
    const totalPrice = getTotalPrice();

    return (`
        ${NavBar(totalCount, totalPrice)}
        <main>
            ${children}
        </main>
        <aside></aside>
        <footer> &copy; ${new Date().getFullYear()} vusiSiya</footer>
    `)
}

