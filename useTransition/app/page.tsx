"use client";
import { useTransition, useState } from "react";
import { updateQuantity } from "./hooks/updateQuantity";
export default function Home() {
  const [isPending, startTransition] = useTransition();
  const [quantity, setQuantity] = useState(0);
  const ticketPrice = 224;
  function updateTicketPrice({ ticketAmt }: { ticketAmt: string }) {
    startTransition(async () => {
      const newQuantity = await updateQuantity({ ticketAmt });

      setQuantity(newQuantity);
    });
  }
  return (
    <>
      <label htmlFor="ticketQuantity">Select ticket quantity </label>
      <input
        defaultValue = "0"
        id="ticketQuantity"
        type="number"
        onChange={(e) => updateTicketPrice({ ticketAmt: e.target.value })}
      />
      <h2>Babymetal Concert Ticket(s)</h2>
      <h3>
        Total Price: {isPending ? "Loading" : `$${quantity * ticketPrice}.00`}
      </h3>
    </>
  );
}
