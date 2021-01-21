import React from "react";

const gain = [13, 2, 15, 17, 19, 33, 2, 2, 2, 2];
let money = [];
let index = 0;
let limit = 4;
function superior(a, b) {
  if (a > b) {
    return true;
  }
}
function browseArray(array, index, limit) {
  for (let i = index; i <= limit; i++) {
    money.push(array[i]);
  }
}

function compare(array, index, limit) {}

export const useMoney = () => {};
