import { listMenu } from "./listMenu.js";
import { cartProses } from "./cartProses.js";
import { history } from "./history.js";
import { question, exit } from "./interface.js";

export async function lobby(){
    console.log(`
        1. Menu Makanan
        2. Keranjang
        3. Histori
        4. Exit
    `);
    const quest =  await question(' SELAMAT DATANG DI GACOAN DELIVERY ');
    switch(quest){
        case "1":
            await listMenu();
            break;
        case "2" :
            await cartProses();
            break;
        case "3" : 
            history();
            break;
        case "4" :
            await exit();
            break;
        default :
            console.log('Error: Opsi tidak sesuai.');
            lobby();
    }
    
}