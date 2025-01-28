let arr = [1,2,3,4,5,6,7]

// arr.filter((ele)=>{
//     if(arr[ele] == 4){
//         console.log(ele)
//    return ele
//     }
// })


Array.prototype.myFilter = function(cb){
    // console.log(this)
  let res = []
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            res.push(this[i])
        }
    }

    return res
  

}

arr.myFilter((acc)=> 
{
    if(acc>2){
        console.log(acc)

    }
})