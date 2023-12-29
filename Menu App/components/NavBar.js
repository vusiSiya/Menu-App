

export default function NavBar(totalCount, totalPrice){
    return (
        `<nav>
            <ul>
                <!-- bought items link -->
                <li id="1" class="demo-li-class" style="color:white;">
                    🛒<span class="count">${totalCount}</span>
                </li>
                
                <!-- total -->
                <li class="demo-li-class total-price">Total: R ${totalPrice}</li>
                
                <!-- login link -->
                <li id="2" class="demo-li-class">Login</li>

                <!-- all items-->
                <li id="3" class="demo-li-class btn-get-items" >Menu Items</li>

                <!-- random item -->
                <li id="10" class="demo-li-class">Random Item </li>
            </ul>  
        </nav>`
    )
}