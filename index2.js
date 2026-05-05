import { exampleCat, exampleDog } from "./index.js";

async function exportExample() {
    return "Hello world"
}

console.log(await exampleDog());
console.log(await exampleCat());