console.log('global', this);


function testThis(){
    console.log('testThis', this);
}
testThis();

const arrow = () => {
    console.log('arrow', this);
}
arrow();

const obj = {
    name: 'obj',
    testThis: function(){
        console.log('obj.testThis', this);
    },
    arrow: () => {
        console.log('obj.arrow', this);
    }
}

obj.testThis();
obj.arrow();


class TestClass{
    constructor(){
        console.log('TestClass.constructor', this);
    }
    testThis(){
        console.log('TestClass.testThis', this);
    }
    arrow = () => {
        console.log('TestClass.arrow', this);
        arrow();
        testThis();
    }
}
const testClass = new TestClass();
testClass.testThis();
testClass.arrow();

