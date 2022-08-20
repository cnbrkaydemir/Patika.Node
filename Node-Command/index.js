const pi=Math.PI
let radius=process.argv.slice(2)[0]*1
function calc(){
    return pi*radius*radius
}
console.log(calc().toFixed(2))