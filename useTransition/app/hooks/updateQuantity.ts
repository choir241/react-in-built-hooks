  export async function updateQuantity({ticketAmt}:{ticketAmt: string}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ticketAmt);
      }, 2000);
    });
  }