for (let n = 2; n <= 20; n=n+2) {
    console.log(n)
}

let i = 1;
while(i<=10){
    console.log(i*2);
    i++;
}
for (let l = 1; l <= 20; l++) {
    if (l == 3) {
        continue; 
    }
    if (l >= 15) {
        break; 
    }
    console.log(l);
}