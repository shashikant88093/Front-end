// 4 . Immediately Invoke Function Expression (IIFE)
// Functions that are executed immediately after they are defined.
(
    function (){
        console.log("IIFE Execution")
    }
)()

// with parameter

((name)=>{
    console.log(`hello , ${name}`)
})("Shashikant")