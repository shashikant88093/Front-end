let arr = [1,2,3,4,5,6,7,8,9]


// let res = arr.reduce((acc,cur)=>{
//     return acc + cur
// },0)


// console.log(res)



Array.prototype.myReduce = function(cb,cur){
    let accumalte = cur !== this.undefined ? cur : this[0]
    let starterIndex = cur !== this.undefined ? 0 :1
    console.log(accumalte,cur)

    for(let i= starterIndex;i<this.length;i++){
        accumalte = cb(accumalte,this[i],i,this)


    }

    console.log(accumalte,"accumalte")
    return accumalte
    
}

arr.myReduce((acc,intial)=> {
    return acc + intial
},0)

