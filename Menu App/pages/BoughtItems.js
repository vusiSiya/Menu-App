
import {getAllItems, getBoughtItems, getTotalPrice, removeItem} from "../data.js"

export default function BoughtItems() {
    const itemCountContainer = ("display:flex; align-items:flex-end; gap: .5em;");
    const menuItemFlex = ("display:flex;");

    const getBoughtItems = getAllItems().filter(item=>item.count);; // would be an api call;

    return getBoughtItems.length && (
        `<section class="container">
            <h1 style="display:block; color:white;">Bought Items</h1> 

            ${getBoughtItems.reduce(()=>{
                return acc + (
                    `<div class="menu-item flex" style="${menuItemFlex}">
                        <img src="${item.imgUrl}" class="item-image"/>
                        <div class="item-content">
                                <h1 class="item-name" >${item.name}</h1>
                                <h2 class="item-price" >R ${item.price}</h2>
                            <span style="${itemCountContainer}">
                                <input
                                    type="number"
                                    id=${item.id}
                                    value="${item.count}"
                                    class="item-count-input"
                                    onchange="handleChange(event)"
                                />
                                <button
                                    onclick="removeItem(${item.id})"
                                    class="item-count-icon"
                                >
                                    🗑
                                </button>
                            </span>
                        </div>
                    </div>`
                )}
            ,"")}
        </section`
        
    ) || "Your cart is empty";
}