import { yonsinhou } from "./yonsinhou2.js";
export function collatz(x) {
    let i =0;
    const suretu4=[];
    const suretu10=[];
    while (x > 1) {
       if (x % 2 ===0) {
            x=x/2;
        } else {
            suretu4[i]=yonsinhou(x);
            suretu10[i]=x;
            x=x*3+1;
            i=i+1;
        };
    };
    suretu4.push(1);
    suretu10.push(1);
    return {
        suretu4,
        suretu10
    };
};