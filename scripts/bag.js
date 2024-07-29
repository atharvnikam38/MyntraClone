
let bagItemsObjects;
onLoad();
function onLoad(){
    loadBagObjects();
    displayBagItems();
}


function loadBagObjects(){
    console.log(bagItems);
    bagItemsObjects =bagItems.map (itemId => {
        for(let i=0;i<items.length;i++){
            if (itemId == items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagItemsObjects);

}

function displayBagItems(){
    let containerElement =document.querySelector('.bagItemContainer');
     console.log(bagItems);
    let innerHTML=``;
    bagItemsObjects.forEach(bagItems =>{
        innerHTML +=genrateItemHtml(bagItems);
    });
    containerElement.innerHTML=innerHTML;
};



function genrateItemHtml(item){

    return `

   
     <div class="bagItemContainer">
                <div class="imginline" >
                    <img class="imageCart" src="${item.image}" alt="">
                </div>
                <div class="itemDetails">
                <div class="companyName">
                    Adidas

                </div>
                <div class="itemName">
                    Men Printed Polo Collar Indian Cricket ODI Jersey
                </div>
                <div class="price">
                     <div class="currentPrice">
                        Rs${item.current_price};
                     </div>
                    
                     <div class="realPrice">
                        Rs${item.original_price}

                     </div>

                     <div class="discount">
                        (${item.discount_percentage}% OFF)

                     </div>


                    </div>

                    <div class="retur n">
                         <span class="returnDays" > <b>${item.return_period} days</b></span>  return availabel
                    </div>

                    <div class="deliveryDate">
                        Delivery by <span style="color:#03a685 ;"> ${item.delivery_period}  </span>   </div>
                    
                </div>
                <div class="removeFromCart">
                    <a href="">
                        <span class="material-symbols-outlined">
                            close
                            </span>
                    </a>
                </div>
            </div>`


}