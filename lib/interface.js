// import { resolve } from 'node:path';
import readline from 'node:readline';

const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
});

export async function question(prompt) {
    return new Promise((resolve)=>{
        rl.question(prompt,(answer)=>{
            resolve(answer);
        });
    });
}   

export async function exit() {
    return new Promise((resolve)=>{
        resolve(rl.close());
        process.exit(0);
    });
}