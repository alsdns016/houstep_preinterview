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
    for(let i =tree_length-1; i>=0; i--){
        let temp = data_set[0];
        data_set[0] = data_set[i];
        data_set[i] = temp;
        let root = 0;
        let c = 1;

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
