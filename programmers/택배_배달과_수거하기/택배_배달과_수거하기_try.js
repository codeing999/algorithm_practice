function solution(cap, n, deliveries, pickups) {
    var answer = -1;
    let totalMoves = 0;
    let length = n;
    
    while(length > 0){
        totalMoves += oneTry(cap, deliveries.length, deliveries, pickups);
        length = deliveries.length;
        
    }

    
    return totalMoves;
}

function oneTry(cap, n, deliveries, pickups){
    let move = 0;
    let departure = 0;
    let now = 0;
    for(let i = n-1; i >= 0; i--){
        if(deliveries[i] > 0 || pickups[i] > 0){
            move = i+1;
            if(deliveries[i] > 0){
                const tempDeliv = deliveries[i];
                deliveries[i] = tempDeliv > cap? tempDeliv - cap : 0; 
                departure += tempDeliv >= cap? cap : cap - tempDeliv;
                now += departure;
            }
            
            if(pickups[i] > 0){
                const temPick = pickups[i];
                const remain = cap - now;
                pickups[i] = temPick <= remain? 0 : temPick - remain;
                now = temPick <= remain? remain + temPick : 0;
            }
            
            if( (i === deliveries.length-1) && deliveries[i] === 0 && pickups[i] === 0) {
                deliveries.pop();
                pickups.pop();
            }
            
            if (departure >= cap) {
                break;
            }
        } 
    }
    
    return move;
}