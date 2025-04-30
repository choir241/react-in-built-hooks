"use server"

export async function addToCart(prevState, queryData){
  const itemID:string = queryData.get('itemID');
  const itemTitle:string = queryData.get('itemTitle');
  const itemPrice:number = queryData.get('itemPrice');
  const itemQuantity:number = queryData.get('itemQuantity');

  const message = "Item was added to cart!"

  if (itemID && itemTitle && itemPrice && itemQuantity > 0) {
    const total = itemPrice * itemQuantity
    return {itemID, itemTitle, itemPrice, itemQuantity, message, total};
  } else {
    // Add a fake delay to make waiting noticeable.
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    const total = itemPrice * itemQuantity
    const message = "Enter a valid quantity!"

    return {itemID, itemTitle, itemPrice, itemQuantity, message, total};
  }
}
