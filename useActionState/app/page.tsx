"use client"
import React, {useActionState} from "react";
import { addToCart} from "./about/page";

export interface ICart {
  itemID: string,
  itemTitle: string,
  itemPrice: number,
  itemQuantity: number
}

export const cart: ICart[] = [];

function AddToCartForm({itemTitle, itemID, itemPrice}:{itemTitle: string, itemID: string, itemPrice: number}) {
 const [cartItem, cartAction, isPendingCart] = useActionState(addToCart, {itemTitle: "", cartID: "", itemPrice: 0, itemQuantity: 0});

  return (
      <form action = {cartAction}>
      <h2>{itemTitle} ${itemPrice}</h2>

      <input type="hidden" name="itemID" value={itemID} />
      <input type="hidden" name="itemTitle" value={itemTitle} />
      <input type="hidden" name="itemPrice" value={itemPrice} />
      <label>Add number of items to cart: </label><input type="number" name="itemQuantity"/>

      <button type="submit">Add to Cart</button>
      <span>{cartItem.message}</span>

      {isPendingCart ? "Loading..." : <section>
        <h2>{cartItem.itemTitle}</h2>
        <h4>{cartItem.total}</h4>
        </section>}
      </form>
  );
}

export default function Home(){
  return(
    <main>
      <AddToCartForm itemTitle={"Hatsune Miku shirt"} itemID = {"1"} itemPrice={12.12}/>
    </main>
  )
}