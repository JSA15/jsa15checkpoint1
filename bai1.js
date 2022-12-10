function findEven(so) {
    var mang = []
    for (var i = 4; i <= so; i++) {
        if (i % 2 == 0) {
            mang.push(i)
        }
    }
    return mang
}

console.log(findEven(20))