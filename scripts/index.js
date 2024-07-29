let bagItems ;


onload();

function onload(){
    let bagItemsStr= localStorage.getItem('bagitem');
    bagItems= bagItemsStr ? JSON.parse(bagItemsStr) : [];
        displayItemsOnHomePage();
        displayBagIcon();

}



function addToBag(itemID){
bagItems.push(itemID);
localStorage.setItem('bagitem',JSON.stringify(bagItems));
displayBagIcon();
};

function displayBagIcon(){
    let bagItemCount=document.querySelector('.bagItemCount');

    if(bagItems.length > 0){
    bagItemCount.innerText=bagItems.length;
    bagItemCount.style.visibility='visible';}
    else{
        bagItemCount.style.visibility='hidden';
    }
};





function displayItemsOnHomePage(){
 let itemsContainerElement = document.querySelector('.itemsContainer');
let innerHTML=` `;
items.forEach( item =>{
   
    innerHTML +=
    `
        <div class="itemContainer">

                <img class="itemImage" src="${item.image}" alt="item image">
                <div class="itemRating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                    
                    
                </div>
                <div class="companyName">
                    ${item.company}
                </div>
                <div class="itemName">
                   ${item.item_name}
                </div>
                <div class="price">
                    <span class="currentPrice">
                        Rs ${item.current_price}
                    </span>
                    <span class="realPrice">
                        Rs ${item.original_price}
                    </span>
                    <span class="discount">
                        (${item.discount_percentage}% OFF)
                    </span>

                    
                </div>
                <button class="buttonAddBag" onclick="addToBag(${item.id})" >
                        Add to Bag
                    </button>
            </div>`;
    
} );

itemsContainerElement.innerHTML= innerHTML;




}







