function median_1(arr1,arr2,n){
    if(arr1.length != arr2.length) return "Given two arrays does not have same number of elements";
    var i=0,j=0,
        count,m1=-1,
        m2=-1;
    for(count = 0;count<=n;count++){
        //if the arr1 elements are smaller than arr2 elements 
        if(i==n){
            m1=m2;
            m2=arr2[j];
            break;
        }
        //if the arr2 elements are smaller than arr2 elements
        if(j == n){
            m1=m2;
            m2=arr1[i];
            break;
        }
        if(arr1[i]<=arr2[j]){
            m1=m2;
            m2=arr1[i];
            i++;
        }
        else{
            m1=m2;
            m2=arr2[j];
            j++;
        }
    }
    return (m1+m2)/2;
}

console.log(median_1([1, 12, 15, 26, 38],[2, 13, 17, 30, 45],5));
console.log(median_1([1,3,5,6,9],[11,14,17,18,21],5));


function getMedian(arr1,arr2,SIA,ENDA,SIB,ENDB){
    if(ENDA-SIA == 1){
        return (Math.max(arr1[SIA],arr2[SIB])+Math.min(arr1[ENDA],arr2[ENDB]))/2;
    }

    var m1,m2;
    m1 = median(arr1,SIA,ENDA);
    
    m2 = median(arr2,SIB,ENDB);
    
    if(m1 == m2){
        return m1;
    }

    if(m1<m2){
        return getMedian(arr1,arr2,(SIA+ENDA+1)/2,ENDA,SIB,(ENDB+SIB+1)/2);
    }
    else{
        return getMedian(arr1,arr2,SIA,(SIA+ENDA+1)/2,(SIB+ENDB+1)/2,ENDB);
    }
}

function median(arr,start,end){
    var n=end-start+1;
    
    if(n%2 ==0) return (arr[start+n/2]+arr[start+(n/2-1)])/2;
    else return arr[start+n/2];
}

let ar1 = [ 1, 2, 3, 6 ];
let ar2 = [ 4, 6, 8, 10 ];

console.log(getMedian(ar1,ar2,0,3,0,3));