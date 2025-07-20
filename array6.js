var marks = [11, 21, 51, 101, 111];
var icnt = 0;
var i = 0;
console.log("array traversal using for loop");
for (icnt = 0; icnt < marks.length; icnt++) {
    console.log(marks[icnt]);
}
console.log("array traversal using while loop");
icnt = 0;
while (icnt < marks.length) {
    console.log(marks[i]);
    i++;
}
do {
    console.log(marks[i]);
    i++;
} while (i < marks.length);
