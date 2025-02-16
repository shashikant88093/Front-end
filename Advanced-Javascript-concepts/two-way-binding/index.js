const input = document.getElementById("input")
const paragraph = document.getElementById("paragraph")
const state = { value: "Hi" }

// paragraph.innerText = "Hi"

// call function
enableTwoWayBind(input, state)
function enableTwoWayBind(input, state) {
    //  sync intially input and state variable
     input.value = state.value
     paragraph.textContent = input.value

    // on state variable update 
    Object.defineProperty(state, 'value', {
        get() {
            return input.value
        },
        set(newVal) {
            input.value = newVal

            // update ui
            paragraph.textContent = newVal
            // input.dispatchEvent(new Event('input'));

            return this
        }
    })


}

input.addEventListener('input', () => {

    const newVal = input.value
    state.value = newVal
    paragraph.textContent = newVal
    // let inputData = e.target.value

    // paragraph.innerText = inputData
    console.log(newVal)

})

// update with state value to input value
// state.value = "subcribe"


// // upadte input value to state value

// input.value = 'shashikant'
// input.dispatchEvent(new Event('input'))