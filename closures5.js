function createStepCounter (start = 0 , step = 5){
    return {increment: function (){start += step;

    }, getValue: function () { return start
        
    } 
}
} 
const counter = createStepCounter ();
console.log (counter.getValue());
counter.increment();
console.log (counter.getValue());
counter.increment();
console.log (counter.getValue());