let arr = [
    { a: 10, b: 5},
    { a: 7, b: 4},
    { a: 7, b: 5},
    { a: 15, b: 1},
    { a: 10, b: 2},
];

arr.sort(function (v1,v2){

    if(v1.a < v2.a){
        return -1;
    }else if(v1.a > v2.a){
        return 1;
    }

    if (v1.b > v2.b){
        return -1
    }else if(v1.b < v2.b){
        return 1
    }
    return 0
    /* 3항 연산자 이용하기 */
    // return v1.a < v2.a ? -1 : v1.a > v2.a ? 1 : v1.b > v2.b ? -1 : v1.b < v2.b ? 1: 0
    // 특정 조건에만 -1만 리턴해서 간략하게 a의 오름차순, b의 내림차순 할 수도 있다.
    // return v1.a < v2.a ? -1 : v1.b > v2.b ? -1 : 0
})

console.log(arr)