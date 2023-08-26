const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input;
let i = 0;
let N = 200;
let gCoord = { x : 0, y : 0};
let pCoord = { x : 0, y : 0};
let board = [];
rl.on('line', (line) => {
	if (i > N + 2){
		rl.close();
	}
	input = line;
	if (i === 0){
		N = input;
	} else if (i === 1) {
		let temp = input.split(' ');
		gCoord.x = temp[0];
		gCoord.y = temp[1];
	} else if (i === 2) {
		let temp = input.split(' ');
		pCoord.x = temp[0];
		pCoord.y = temp[1];
	} else	if( (i > 2) && (i <= N+2) ){
		board.push(input.split(' '));
	}
	i++;
});

rl.on('close', () => {
	console.log(N);
	console.log(gCoord);
	console.log(pCoord);
	console.log(board);
})
