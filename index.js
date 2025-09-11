const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
    // TODO: Log the answer in a database




let keranjang =[]
let historyBlj = []
let menu = [
    {  
        makanan: 'mie gacoan',
        harga : 15000
    },
    {
        makanan: 'mie gacoan lvl 2',
        harga : 15000
    },
    {
        makanan: 'mie gacoan lvl 3',
        harga : 15000
    },
    {
        makanan: 'mie suit',
        harga : 15000
    },
    {
        makanan: 'mie suit lvl 2',
        harga : 15000
    },
    {
        makanan: 'mie suit lvl 3',
        harga : 15000
    },
    {
        makanan: 'udang rambutan',
        harga : 14000
    },
    {
        makanan: 'pangsit',
        harga : 14000
    },
    {
        makanan: 'udang keju',
        harga : 14000
    },
    {
        makanan: 'iced tea',
        harga : 6500
    },
    {
        makanan: 'air mineral',
        harga : 6500    
    },
]

function lobby(){
    console.log(`
        1. Menu Makanan
        2. Keranjang
        3. Histori
        4. Exit
    `)
    rl.question(' SELAMAT DATANG DI GACOAN DELIVERY `', (answer) => {
        answer = parseInt(answer)
        switch(answer){
            case 1:
                daftarMenu()
                break
            case 2 :
                prosesKeranjang()
                break
            case 3 : 
                history()
                break
            case 4 :
                rl.close()
                break
            default :
                console.log('Error')
                lobby()
        }
    })
}

function daftarMenu(){
    let nmrMenu = 0
    for(let i=0; menu[i] !== undefined; i++){
        nmrMenu = i
        console.log(`${nmrMenu + 1}. ${menu[i].makanan} , ${menu[i].harga}`)
    }
    function pilihMenu (a){
        rl.question('Mau berapa banyak? ', (answer) => {
            answer = parseInt(answer)
            let pilihanUsr = menu[a]
            pilihanUsr = {...pilihanUsr, ...{quantity: answer}, ...{subTotal: pilihanUsr.harga * answer}}
            keranjang = [
                ...keranjang,
                ...[pilihanUsr]
            ]
            for(let i = 0; keranjang[i] !== undefined; i++){
                console.log(`\n${keranjang[i].makanan} \nharga : ${keranjang[i].harga} \nquantity :  ${keranjang[i].quantity} \nSubtotal : ${keranjang[i].subTotal}`)
            }
            rl.question('\nmau pesan lagi? (yes/no) ', (answer) => {
                if (answer === 'yes' ){
                    daftarMenu()
                }else {
                    lobby()
                }
            })
        })
    }
        rl.question('\nMau yang mana? (input nomor)', (answer) => {
        answer = parseInt(answer)
        if (answer <= nmrMenu && answer >= 1){
            let choice = answer - 1
            pilihMenu(choice)
        }else {
            console.log('\nData yang anda masukkan tidak sesuai\n')
            daftarMenu()
        }
        
    })
}

function prosesKeranjang(){
    let total = 0
    for (let i = 0; keranjang[i] !== undefined; i++){
        total += keranjang[i].subTotal
        console.log(`\n${keranjang[i].makanan} \nharga : ${keranjang[i].harga} \nquantity :  ${keranjang[i].quantity} \nSubtotal : ${keranjang[i].subTotal} \n`)
    }
    console.log(`total : ${total}`)
    rl.question('Bayar Sekarang? (yes/no)', (answer) => {
        if(answer === 'yes'){
            historyBlj = [
                ...historyBlj,
                ...keranjang
            ]
            keranjang = []
            rl.question('\nPembayaran berhasil.\nSilahkan tunggu dan selamat menikmati makanan & minuman anda', () => {
                lobby()
            })
        }else{
            lobby()
        }
    })
}

function history(){
    for(let i = 0; historyBlj[i] !== undefined; i++){
        console.log(`\n${historyBlj[i].makanan} \nharga : ${historyBlj[i].harga} \nquantity : ${historyBlj[i].quantity} \nSubtotal : ${historyBlj[i].subTotal} \n  `)
    }
    rl.question('Kembali ke lobby (yes/no)', (answer) => {
    if (answer === 'yes'){
        lobby()
    }else {
        history()
    }
    })
}

lobby()