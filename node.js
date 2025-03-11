

function test(){

    return Promise.resolve("111");
}

const value = await test()