function solution(people, limit) {
    people = people.sort( (a, b) => b - a);
    let answer = 0;
    let firstIndex = 0;
    let lastIndex = people.length -1;
    
    while (firstIndex <= lastIndex) {
        answer++;
        if ( firstIndex === lastIndex) {
            break;
        }
        if(people[firstIndex] + people[lastIndex] <= limit) {
            firstIndex++;
            lastIndex--;
        } else {
            firstIndex++;
        }
    }
    
    return answer;
}