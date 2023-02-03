export default function getAvg(scores) {
  return getTotalScore(scores) / scores.length;
}

export function getTotalScore(scores) {
  return scores.reduce((score, count) => score + count);
}

const API_MESSAGE = process.env.API_MESSAGE;
console.log(API_MESSAGE);

