
import Login from "./pages/Login.js";
import ItemDetail from "./pages/ItemDetail.js";
import MenuItems from "./pages/MenuItems.js";
import BoughtItems from "./pages/BoughtItems.js";
import Layout from "./components/Layout.js";
//import Home from "./pages/Home.js";
import {getAllItems, data} from "../data.js";

export default function render(descriptionString,itemId){
    const childElements = getPage(descriptionString,itemId);
    document.getElementById("root").innerHTML = Layout(childElements);
} 

render("menu-items",5);

function getPage(descriptionString,itemId) {

        //const descriptionStringHas = (_s)=> descriptionString.includes(_s);
        switch (descriptionString) {
            case "bought-items":
                return BoughtItems()
                break;
            case "login":
                return Login();
                break;
            case "menu-items":
                return MenuItems();
                break;
            case "item-detail":
                return ItemDetail(itemId);
                break;
            default:
                break;
        }       
}

document.addEventListener("click",(e)=>{

    const currentItemId = e.target.ParentElement?.id || e.target.id
    const getRandomId =()=> Math.floor(Math.random() * getAllItems().length) + 1;

    switch (e.target.classList[0]) {
        case "demo-li-class":      
            switch (e.target.id) {
                case 1:
                    render("bought-items")
                    break;
                case 2:
                    render("login");
                    break;
                case 3:
                    render("menu-items");
                    break;
                case 10:
                    render("item-detail",getRandomId());
                    break;
                default:
                    break;
            }
            break;
        case "menu-item":
          
            render("item-detail", currentItemId);
            break;
        case "cart-btn":
            handleClick(e)
            return render("item-detail", currentItemId);
            break; 
        default:
            break;
    }
});
document.addEventListener("change", (e)=>handleChange(e))

export function handleClick(e) {
    const {id} = e.target
    const selectedItem = data.items.find(item=>item.id === parseInt(id));
    selectedItem.count += 1;
    //updateCount();
    //itemDetailPage(selectedItem.id);
}

export function handleChange(e) {
    console.log("function ran")
    if (e.target.className ==="item-count-input") {
        const {value, id} = e.target;
        const selectedItem = getAllItems().find(item=>item.id === parseInt(id));
        selectedItem.count = parseInt(value) || 1;
        //updateCount()
        //boughtItemsPage();
        render("item-detail",e.target.id);
    }   
}

export function handleSubmit(e) {
    console.log(e.target);
    e.preventDefault();
    console.log("did not refresh")
}
