import { menu, keranjang } from "../index.js";
import { lobby } from "./lobby.js";
import { question } from "./interface.js";

async function choiceMenu (a){
    let quest = await question('Berapa pcs? ');
    quest = parseInt(quest);
    let userChoice = menu[a];
    userChoice = {...userChoice, ...{quantity: quest}, ...{subTotal: userChoice.harga * quest}};
    keranjang.push(userChoice);
    keranjang.forEach((element)=>{
        console.log('--------------------------');
        console.log(`\n${element.makanan} \nPrice : Rp${Number(element.harga).toLocaleString("id")},- \nquantity : ${element.quantity} \nSubtotal : Rp${Number(element.subTotal).toLocaleString("id")},-`);
        console.log('--------------------------');
    });

    let answer =  await question('\n0. kembali \n1. Pesan lagi \npilih opsi: ');
    answer = parseInt(answer);
    answer === 1 ? await listMenu() : await lobby();
}

export async function listMenu(){
    menu.forEach((item, index)=>{
        console.log(`\n${index + 1}. ${item.makanan}  \nPrice: Rp${Number(item.harga).toLocaleString("id")},-\n`);
    });
    let answer = await question('\n0. Kembali\nPilih menu! (input nomor)');
    answer = parseInt(answer);
    if (answer <= menu.length && answer >= 1){
        let choice = answer - 1;
        await choiceMenu(choice);
    }else {
        await lobby();
    }

}