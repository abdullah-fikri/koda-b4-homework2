import { listMenu } from "./listMenu.js";
import { cartProses } from "./cartProses.js";
import { history } from "./history.js";
import { question, exit } from "./interface.js";

export async function lobby(){
    try {
         console.log(`
        1. Menu Makanan
        2. Keranjang
        3. Histori
        4. Exit
    `);
    let quest =  await question(' SELAMAT DATANG DI GACOAN DELIVERY ');
    quest = parseInt(quest);
    switch(quest){
        case 1:
            await listMenu();
            break;
        case 2 :
            await cartProses();
            break;
        case 3 : 
            history();
            break;
        case 4 :
            await exit();
            break;
        default :
            throw new Error('Opsi yang anda masukkan tidak sesuai');
    }
    } catch (error) {
        console.log(error);
        lobby();
    } 
}