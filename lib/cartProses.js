import { lobby } from "./lobby.js";
import { question } from "./interface.js";
import { keranjang,historyBlj } from "../index.js";


export const timeCheckout = new Date();
export async function cartProses(){
    let total = keranjang.reduce((num, item)=> num+item.subTotal, 0);
    console.log(keranjang.map(item => `\n${item.makanan} \nharga : Rp${Number(item.harga).toLocaleString("id")},- \nquantity : ${item.quantity} \nSubtotal : Rp${Number(item.subTotal).toLocaleString("id")},-`) .join("\n"));
    console.log(`Total : Rp${Number(total).toLocaleString("id")},-`);
    let quest = await question('\n\n1. Bayar Sekarang \n0. Kembali \nPilih opsi: ');
    quest = parseInt(quest);
        if(quest === 1){
            historyBlj.push(...keranjang);
            keranjang.length = 0;
            console.log(`\n\n==============INVOICE===========
                        \nPEMBAYARAN PESANAN BERHASIL.
                        \nWaktu Pembayaran: ${timeCheckout.toLocaleString()}
                        \n=================================`);
             await question('\nSilahkan tunggu dan selamat menikmati makanan & minuman anda');
                lobby();
        }else{
            lobby();
        }
}
