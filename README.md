# houstep_preinterview
[backEnd] houstep_preinterview

# [1]. 아래 코드의 의미를 파악해서 서술하세요.

![캡처](/image/문제1.png)

코드분석

```javascript
function foo (left, right) {

  // 빈 배열과, 왼쪽 인덱스, 오른쪽 인덱스 값을 0으로 초기화합니다.
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // 왼쪽 인덱스 값이 왼쪽 배열의 크기보다 작을 때까지, 오른쪽 인덱스 값이 오른쪽 배열의 크기보다 작을 때까지 반복합니다.
  // 두 배열의 0번째 인덱스부터 순차 비교하여 값이 더 작은 값이 앞에 오도록 구현합니다.
  // 주의 : 전체 배열의 요소 중에서 작은 값 순으로 정렬하는 것이 아니라, 순차적으로 인덱스의 값을 비교하면서 새로운 배열에 작은 값 순으로 넣습니다.
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; 
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

//test
console.log(foo([7,2,3,1],[5,4,9]))
```
## 코드의 의미
1. 2개의 배열이 각각 0번째 인덱스부터 시작하여 크기를 비교하여 작은 값을 resultArray에 추가하고, 작은 값이 있는 배열의 인덱스를 1증가시킨 후의 값을 계속해서 비교하여, resultArray에 추가합니다.
2. 2개의 배열 중 특정 배열이 더 이상 비교할 요소가 없다면 남아있는 배열의 요소들을 resultArray에 넣습니다. 

예시) 
1. 2개의 배열 X, Y가 있습니다. 

    X = [7,2,3,1]

    Y = [5,4,9]

    result = []

2. 7(0)과 5(0)를 비교합니다. 5가 작으니 result에 추가합니다.

    result [5]

3. 7(0)과 4(1)를 비교합니다. 4가 작으니 result에 추가합니다.

    result => [5,4]

4. 7(0)과 9(2)를 비교합니다. 7이 작으니 result에 추가합니다.

    result => [5,4,7]

5. 2(1)과 9(2)를 비교합니다. 2가 작으니 result에 추가합니다.

    result => [5,4,7,2]

6. 3(2)과 9(2)를 비교합니다. 3이 작으니 result에 추가합니다.

    result => [5,4,7,2,3]

7. 1(3)과 9(2)를 비교합니다. 1이 작으니 result에 추가합니다.

    result => [5,4,7,2,3,1]

8. X 배열에 더 이상 비교할 요소가 없으니 남아있는 Y 요소를 result에 추가합니다.

    result => [5,4,7,2,3,1,9]


----


# [2]. 아래 조건을 만족시키는 코드를 작성하세요. 
#### (js 폴더-[02]sort.js 파일 참고)
- a값을 기준으로 오름차순으로 정렬하고 a값이 같다면 b값을 기준으로 내림차순 하여 정렬합니다.

![캡처](/image/문제2.png)

```javascript
let arr = [
    { a: 10, b: 5},
    { a: 7, b: 4},
    { a: 7, b: 5},
    { a: 15, b: 1},
    { a: 10, b: 2},
];

// Q) a기준으로 오름차순을 정렬하고 b기준으로 내림차순으로 정렬합니다.
arr.sort(function (v1,v2){
    // a기준으로 오름차순으로 정렬합니다.
    if(v1.a < v2.a){
        return -1;
    }else if(v1.a > v2.a){
        return 1;
    }

    // a값이 동일하다면, b로 내림차순 정렬합니다.
    if (v1.b > v2.b){
        return -1
    }else if(v1.b < v2.b){
        return 1
    }

    // a값과 b의 값이 동일하다면 0을 리턴합니다.
    return 0

    /* 3항 연산자 이용 */
    // return v1.a < v2.a ? -1 : v1.a > v2.a ? 1 : v1.b > v2.b ? -1 : v1.b < v2.b ? 1: 0
    // 특정 조건에만 -1만 리턴해서 간략하게 a의 오름차순, b의 내림차순 할 수도 있습니다.
    // return v1.a < v2.a ? -1 : v1.b > v2.b ? -1 : 0
})
console.log(arr)
```

----


# [3]. 아래 그림은 Tree 구조입니다. 아래 조건이 만족하도록 코드를 작성하세요. 
#### (js 폴더-[03]tree_heap.js 파일 참고)
- 위 그림의 트리 구조를 표현하는 데이터셋을 만드세요.
- 데이터셋이 주어졌을때 최대값을 찾는 함수를 만드세요.

![캡처](/image/문제3_1.png)

```javascript

// 1. 맨 위요소를 가장 큰 값을 만들고 맨 뒤의 값과 교체합니다. (heapify를 통하여 맨위요소를 큰 값으로 만듭니다.)
// 2. 그 후 맨 마지막 요소는 정렬이 되었기 때문에 전체 요소에서 하나를 뺀 요소들을 가지고 또 비교합니다. (점차적으로 정렬한 만큼 정렬할 요소들이 줄어듭니다.)
let data_set = [1, 3, 4, 5, 6]
let tree_length = data_set.length
heap(data_set,tree_length)

function heap(data_set,tree_length){

    for(let i =1; i<tree_length; i++){
        let c = i;
        while (c != 0){
            let root = parseInt((c-1)/2);
            if(data_set[root] < data_set[c]){
                let temp = data_set[root]
                data_set[root] = data_set[c]
                data_set[c] = temp;
            }
            c = root;
        }
    }
    // 크기를 줄여가며 반복적으로 힙을 구성합니다.
    for(let i =tree_length-1; i>=0; i--){
        // 맨 위의 값(가장 큰 값)을 아래로 보냅니다.
        let temp = data_set[0];
        data_set[0] = data_set[i];
        data_set[i] = temp;
        let root = 0;
        let c = 1;

        // 힙구조 만들기
        while(c<i){
            c = 2*root+1;
            if(data_set[c] < data_set[c+1] && c<i-1){
                c++;
            }
            if(data_set[root] < data_set[c] && c<i){
                let temp = data_set[root]
                data_set[root] = data_set[c]
                data_set[c] = temp;
            }
            root = c;
        }
    }
    console.log('최대값은?', data_set[data_set.length-1])
    return data_set[data_set.length-1]
}
```

----


# [4]. 객체 지향에 관한 문제입니다. 아는 대로 서술해주세요.

![캡처](/image/문제4.png)

- 객체 지향이 의미하는 것은 무엇입니까?

    현실 세계의 사물들을 객체라고 보고 그 객체를 소프트웨어의 세계에서 표현하기 위해서 객체의 핵심적인 개념이나 기능을 추출하는 추상화를 통하여 모델링 하는 것을 의미합니다.<br/>
    (객체의)값의 변경이나 데이터 흐름을 기반으로 프로그래밍 합니다. 
    
- Object와 Class의 차이를 설명하세요.
    
    Class는 특정 대상의 추상화를(공통적인 핵심적인 개념이나 기능들을 추출) 한 것으로 상태나 동작들을 변수와 메서드로 정의해 놓은 것입니다.<br/>
    Object는 Class의 인스턴스로 Class에서 정의한 내용을 가지고 메모리 상에 할당된 상태를 의미합니다.<br/>
    정리하자면 소프트웨어 측면에서 구현할 대상을 만들기 위해서 객체를 생성하고, 객체를 생성을 하기 위해서는 클래스를 이용합니다.
    
- 객체 지향이라는 개념은 왜 나왔을까요?
    
    객체지향 이전의 프로그래밍 방식은 절차 지향적이었습니다.<br/>
    절차 지향의 경우 프로그램을 기능 중심으로 바라보는 것으로 순차적으로 어떤 기능을 어떤 순서로 처리하는 것에 초점을 둔 방식으로 기존의 코드를 수정 및 비슷한 기능을 추가한다면,
    위에서 아래로 처음부터 다시 수정하거나 중복된 코드들이 발생하고 따라서 코드의 가독성이 떨어졌습니다.<br/>
    그래서 절차 지향의 문제를 해결하기 위해서 등장한 것이 함수를 사용해서 해결하는 구조적 프로그래밍인데, 프로그램을 함수 단위로 나누고 함수들을 호출하는 방식입니다.<br/>
    큰 문제를 해결하기 위해 작은 함수로 쪼개는 하향식(탑-다운) 방식의 처리였습니다.<br/>
    하지만 함수만 가지고 많은 양의 로직을 처리하거나 많은 함수들을 유지 보수하는 데 한계가 있었습니다.<br/>
    그래서 등장한 것이 객체 지향 프로그래밍입니다.<br/>
    큰 문제들을 해결하기 위해 작은 문제들을 해결할 수 있는 객체들을 만들고, 이 객체를 조합해서 큰 문제를 해결하는 상향식(다운-탑) 방식을 도입하였습니다.<br/>
    객체를 통하여 독립성과 신뢰성을 보장하고 재사용성도 높아져 개발 시간과 비용 또한 줄어들었습니다.
    

- 객체 지향의 의도대로 개발했던 경험이 있다면 적어주세요.

    실무에서 객체 지향 프로그래밍을 해본 경험이 없습니다.
    함수형 프로그래밍 기법을 이용하여 서비스를 개발하였습니다.
    