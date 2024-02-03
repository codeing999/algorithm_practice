function solution(targets) {
    let answer = 0;
    
    while(targets.length > 0){
        answer++;
        let maxStack = [];
        const target = targets.pop();
        for(let i = target[0] + 0.5; i < target[1]; i++){
            let stack = [];
            for(let j = 0; j < targets.length; j++){
                if( i > targets[j][0] && i < targets[j][1]){
                    stack.push(j);
                }
            }
            //console.log(target, stack);
            if(stack.length > maxStack.length){
                maxStack = stack.slice();
            }
        }
        let temp = 0;
        while(maxStack.length > 0){
            targets.splice(maxStack.shift()-temp, 1);
            //console.log('targets:',targets);
            temp++;
        }
        //console.log(targets);
    }
    
    return answer;
}