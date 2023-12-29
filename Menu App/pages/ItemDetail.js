import render,{ handleChange, handleClick } from "../index.js";
import { removeItem, getAllItems } from "../data.js";

export default function ItemDetail(itemId=1) {
    const itemCountContainer = ("display:flex; align-items:flex-end; gap: .5em;");
    const menuItemFlex = ("display:flex;");

    const item = getAllItems().find(item=>item.id === Number(itemId)); // would be an api call

    function handleChange(e) {
        console.log("function ran")
        if (e.target.className ==="item-count-input") {
            const {value, id} = event.target;
            const selectedItem = getAllItems().find(item=>item.id === parseInt(id));
            selectedItem.count = parseInt(value) || 1;
            render("item-detail",e.target.id);
        }   
    }    

    return(
        `<div id="${item.id}" class="menu-item flex" style="${menuItemFlex}">
            <img src="${item.imgUrl}" class="item-image"/>
            <div class="item-content">
                    <h1 class="item-name" >${item.name}</h1>
                    <h2 class="item-price" >R ${item.price}</h2>
              ${(item.count > 2) ?     
                `<span style="${itemCountContainer}">
                    <input
                        type="number"
                        id=${item.id}
                        value="${item.count}"
                        class="item-count-input"
                        onchange="${handleChange(event)}"
                    />
                    <button onclick="removeItem(item.id)" class="item-count-icon">🗑</button>
                </span>`
                :
                `<span style="display:flex; align-items:center; gap: .4em;">
                    <button
                        id=${item.id}
                        class="cart-btn"
                    >
                        Add to Cart
                    </button>
                    <span  class="count"  style="margin:.75em 0 0">${item.count}</span>
                </span>`
                }
            </div>
        </div>`
    )
}