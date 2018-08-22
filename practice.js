



//outer scope
const name = 'jared';

function getData(param1){
    //inner scope
    return `my name is ${param1}`
};

//dunction expression
const getdata2 = function(param1) {
    return `my name is ${ param1}`
}

//arrow function
const getData3 = (param1) => {
    
}

const data = getData()

console.log (name)
console.log('hey')

