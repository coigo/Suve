import { getRandomValues, sortByKey } from "./util/array"

const  array = [
    {peso: 1},
    {peso: 0},
    {peso: 8},
    {peso: 7},
    {peso: 6},
    {peso: 2},
    {peso: 2},
    {peso: 9},
    {peso: 7},
    {peso: 2},
    {peso: 6},
]

const result = getRandomValues( array, 20)
console.log(result);
