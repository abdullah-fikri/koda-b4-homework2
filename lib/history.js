import { question } from "./interface.js";
import { historyBlj } from "../index.js";
import { lobby } from "./lobby.js";
import { timeCheckout  } from "./cartProses.js";

export async function history(){
     historyBlj.forEach((item)=>{
        console.log(`\n${item.makanan} \nPrice: ${item.harga} \nquantity: ${item.quantity} \nSubtotal: ${item.subTotal} \nWaktu Pembayaran: ${timeCheckout}`);
    });
    let quest = await question('0. Kembali');
    quest = parseInt(quest);
    quest === 0? await lobby() : await history();
}
