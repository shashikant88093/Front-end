let arr = [1, 2, 3, 4, 5]


// arr.map((ele)=> {
//     console.log(ele*2)
// })


Array.prototype.myMap = function (cb) {
    console.log(this)
    let res = []
    for (let i = 0; i < this.length; i++) {
        res.push(cb(this[i],i,this))

    }
    return res
}

arr.myMap((ele,i) => {
    console.log(ele *6)
    console.log(i)
})