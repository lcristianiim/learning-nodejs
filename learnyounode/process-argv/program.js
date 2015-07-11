var processLength = process.argv.length;
var sum = 0;

for (i = 0; i < processLength; i++) {
    if (+process.argv[i]) {
        sum = sum + +process.argv[i];
    }
}

console.log(sum);
