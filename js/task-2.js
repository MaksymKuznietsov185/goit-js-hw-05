 function countTotalWords(texts) {

let totalLength = 0;

for (const word of texts) {
    totalLength += word.length;
}
return totalLength;
}