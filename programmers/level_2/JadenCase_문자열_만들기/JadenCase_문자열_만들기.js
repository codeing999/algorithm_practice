function solution(s) {
    const stringList = s.split(' ');
    let answer = stringList.map((word) => {
        if(word.length < 1) { return word}
        word = word.toLowerCase()
        const convertedWord = word[0].toUpperCase() + word.slice(1);
        return convertedWord;
    }).join(' ');
    return answer;
}