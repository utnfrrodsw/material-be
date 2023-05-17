'use strict';

let normal = [];
let normal2 = [];
let loga = [];

for (let i = 0; i < 10; i++) {
  const distNormal = normalDistribution(100, 10);
  const distNormal2 = normalDistribution(10, 1);
  const distLoga = logarithmicDistribution(100, 10);

  normal.push(distBasedRandom(distNormal));
  normal2.push(distBasedRandom(distNormal2));
  loga.push(distBasedRandom(distLoga));
}

console.log(`normal: ${normal}`);
console.log();
console.log(`normal2: ${normal2}`);
console.log();
console.log(`loga: ${loga}`);

function distBasedRandom(dist) {
  const u = Math.random();
  return Math.round(1000 * dist(u)) / 1000; //round in 3 decimals
}

function logarithmicDistribution(a, b) {
  return function (u) {
    return a * Math.exp(u * Math.log(b / a));
  };
}

function normalDistribution(mean, stddev) {
  return function (u) {
    const z0 = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
    return z0 * stddev + mean;
  };
}
