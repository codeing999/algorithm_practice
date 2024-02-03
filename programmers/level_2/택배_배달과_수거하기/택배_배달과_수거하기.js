/**
문제에 명시를 안해줬는데, 각 원소의 값이 cap보다 큰 경우도 체크해야할지도?
어떤 i번째의 모든 원소가 처음부터 0인 경우는 애초에 방문 목록에 없다고 보는게 맞을지도?
**/
function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let biggerLength = remove(deliveries, pickups);
    while (biggerLength > 0) {
        answer+= biggerLength*2;
        
        delivery(cap, deliveries, pickups);
        
        biggerLength = remove(deliveries, pickups);
        
        
    }
    return answer;
}

function delivery(cap, deliveries, pickups){
    let count = 0;
    let remain = cap;
    let backRemain = cap;
    
    for(let i = deliveries.length-1; i >= 0; i--){
        if (count >= cap) {
            break;
        } 
        if( deliveries[i] > 0 ) {
            let temp = deliveries[i] > remain? remain : deliveries[i];
            count += temp; 
            deliveries[i] -= temp;
            remain = cap - count;
            
        }
    }
    
    for(let i = pickups.length-1; i >= 0; i--){
        if (backRemain === 0) {
            break;
        }
        if( pickups[i] > 0 ) {
            let temp = pickups[i] > backRemain? backRemain : pickups[i];
            pickups[i] -= temp;
            backRemain -= temp;
        }
        
    }
    
}

function remove(deliveries, pickups) {
    for(let i = deliveries.length -1; i>=0; i--){
        if(deliveries[i] === 0) {
            deliveries.pop();
        }  else {
            break;
        }
    }
    
    for(let i = pickups.length -1; i>=0; i--){
        if(pickups[i] === 0) {
            pickups.pop();
        }  else {
            break;
        }
    }
    return deliveries.length > pickups.length? deliveries.length : pickups.length;
    
}