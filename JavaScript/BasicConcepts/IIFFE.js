// IIFE => Imediatelty invoked functions expression

const counter = (function (){
    let privateCounter = 0;
    function changeBy(val){
        privateCounter += val
    }

    return{
        increment(){
            changeBy(1)
        },
        decrement(){
            changeBy(-1)
        },
        value(){
            return privateCounter;
        }
    }

})()

console.log(counter.value()); //0
counter.increment()
counter.increment()
counter.increment()
console.log(counter.value()); // 3
counter.decrement()
console.log(counter.value()); //2

