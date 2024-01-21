/** 
 * 이건 정답은 맞추는데 효율성에서 실패한 풀이
 * 처음엔 shift를 써서 효율성 문제인가 싶어서 pop으로 바꿔봤는데도 여전히 실패함.
 * splice가 문제인가?
 * */ 
 

function solution(people, limit) {
    people = people.sort( (a, b) => a - b);
    let peopleLength = people.length;
    let answer = 0;
    
    while(peopleLength > 0) {
        answer++;       
        const first = people.pop();
        const indexOfSecond = people.findIndex( v => first + v <= limit);
        if(indexOfSecond >= 0){
            people.splice(indexOfSecond, 1);
        }    
        
        //console.log(first, indexOfSecond);
        peopleLength = people.length;
    }
    
    return answer;
}