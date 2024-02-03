/**
문제에 명시를 안해줬는데, 각 원소의 값이 cap보다 큰 경우도 체크해야할지도?
어떤 i번째의 모든 원소가 처음부터 0인 경우는 애초에 방문 목록에 없다고 보는게 맞을지도?
**/
function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let length = remove(n, deliveries, pickups);
    while (length > 0) {
        answer+= length*2;
        
        delivery(cap, deliveries, pickups, length);
        
        length = remove(length, deliveries, pickups);
        
    }
    return answer;
}

function delivery(cap, deliveries, pickups, length){
    let count = 0;
    let remain = cap;
    let backRemain = cap;
    
    for(let i = length-1; i >= 0; i--){
        if (count >= cap) {
            break;
        } 
        if( deliveries[i] > 0 ) {
            let temp = deliveries[i] > remain? remain : deliveries[i];
            count += temp; 
            deliveries[i] -= temp;
            //deliveries[i] = deliveries[i] > remain? deliveries[i] - remain : 0;
            remain = cap - count; //-= temp;
            
        }
    }
    
    for(let i = length-1; i >= 0; i--){
        if (backRemain === 0) {
            break;
        }
        if( pickups[i] > 0 ) {
            let temp = pickups[i] > backRemain? backRemain : pickups[i];
            pickups[i] -= temp;
            //pickups[i] = pickups[i] > backRemain? pickups[i] - backRemain : 0;
            backRemain -= temp;
        }
        
    }
    
}

function remove(length, deliveries, pickups) {
    for(let i = length -1; i>=0; i--){
        if(deliveries[i] === 0 && pickups[i] === 0) {
            length--;
            //deliveries.pop();
            //pickups.pop();
        }  else {
            break;
        }
    }
    return length;
    
}