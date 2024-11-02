setTimeout(()=>{
    console.log("you win")
},2000)

let promise1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let data=["data", "banana"];
        resolve(data)
    }, 300)
})

promise1.catch(() =>{
    console.log(error)
})
.then((data) =>{
    data.push("mango");
    return data;
})

// let oo;
// setTimeout(()=>{
//     oo=1
// },3000);
// console.log(oo)