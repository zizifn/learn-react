

const p1 = new Promise((resolve, rejct) => {
    console.log("inside p1")

    setTimeout(() => {
        console.log("resolve p1")
        const p2 = new Promise((resolve, rejct) => {
            console.log("inside p2")
            setTimeout(() => {
                console.log("resolve p2")
                resolve("p2")
            }, 1000)
        })
        resolve(p2)
    }, 500)
})

p1.then(value => {
    console.log("inside then")
    console.log(value)
    return Promise.resolve(2);
}).then(value =>{
    console.log("inside then2")
    console.log(value)
})

