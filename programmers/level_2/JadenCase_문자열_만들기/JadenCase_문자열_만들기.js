function solution(s) {
    const stringList = s.split(' ');
    let answer = stringList.map((s) => {
        if(s.length < 1) { return s}
        s = s.toLowerCase()
        const converted = s[0].toUpperCase() + s.slice(1);
        return converted;
    }).join(' ');
    return answer;
}