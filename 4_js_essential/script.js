// fetch returns a promise
// promise handled with the then syntax

// Here the JS only skimms through the then lines

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// 	.then(res => res.json())
// 	.then((data) => console.log(data));

// console.log("wassso");

// here await means JS stops the execution at that line (only inside the async function)
// async always returns a promise

async function getTodos() {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const data = await res.json();
	console.log(data);

	return data;
}

const todos = getTodos(); // this returns a Promise
console.log(todos);

console.log("wasoo");
