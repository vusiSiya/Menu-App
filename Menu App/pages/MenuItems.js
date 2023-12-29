
import render from "../index.js";
import { getAllItems} from "../data.js";

export default function MenuItems() {

    const menuItems = getAllItems();
    return menuItems.reduce((acc,item)=>{
        return acc + (
            `<div class="menu-item" id="${item.id}">
                <img class="item-image" src="${item.imgUrl}" />
                <h1 class="item-name">${item.name}</h1>
                <h2 class="item-price">R ${item.price}</h2>
            </div>`
        );
    }, "");


    // commented code for getting random products   
   /*const getRandomItems = (array)=>array.map((obj)=>{
            let randomIndex = Math.floor(Math.random() * array.length) + 1;
            let randomItem = array.find(item=>item.id === randomIndex);
            return randomItem;
        });
        let chosenNum = Math.floor(Math.random() * 2) + 2;
        const getRandom = getAllItems().items.filter((obj,i)=>(i % chosenNum) === 1);
    */


}
