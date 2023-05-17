'use strict';

let normal = [];
let loga = [];

for (let i = 0; i < 10; i++) {
  normal.push(distBasedRandom(100, 10, normalDistribution));
  loga.push(distBasedRandom(100, 10, logarithmicDistribution));
}

console.log(`normal: ${normal}`);
console.log();
console.log(`loga: ${loga}`);

function distBasedRandom(a, b, dist) {
  return Math.round(1000 * dist(a, b)) / 1000; //round in 3 decimals
}

function logarithmicDistribution(a, b) {
  const u = Math.random();
  return a * Math.exp(u * Math.log(b / a));
}

function normalDistribution(mean, stddev) {
  const u = Math.random();
  const z0 = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
  return z0 * stddev + mean;
}
