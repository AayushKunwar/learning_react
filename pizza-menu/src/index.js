import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	// const style = {
	// 	color: "red",
	// 	fontSize: "32px",
	// 	textTransform: "uppercase",
	// };
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	const pizzas = pizzaData;
	const numPizzas = pizzas.length;
	// const numPizzas = 0;
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{numPizzas > 0 ? (
				<ul className="pizzas">
					{pizzaData.map((pizza) => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			) : null}
			{/* <Pizza
				name="Pizza Spinaci"
				ingredients="Tomato, spinach, cheese"
				photoName="pizzas/spinaci.jpg"
				price={12}
			/>
			<Pizza
				name="Pizza Funghi"
				ingredients="Stuffs"
				photoName="pizzas/funghi.jpg"
				price={23}
			/> */}
		</main>
	);
}
function Pizza(props) {
	// console.log(props);
	return (
		<div>
			<img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
			<h3>{props.pizzaObj.name}</h3>
			<p>{props.pizzaObj.ingredients}</p>
			<span>{props.pizzaObj.price}</span>
		</div>
	);
}

function Footer() {
	// const date = new Date().tolocaletimestring();
	const hour = new Date().getHours();
	const openhour = 9;
	const closehour = 22;
	const isopen = hour >= openhour && hour <= closehour;
	console.log(isopen);

	// return react.createelement("footer", null, "we're currently open!");
	// return <footer>{date} we're currently open!</footer>;
	return (
		<footer classname="footer">
			{isopen ? (
				<Order closehour={closehour} />
			) : (
				<p>
					we're happy to welcome you betwen {openhour}:00 and{" "}
					{closehour}:00
				</p>
			)}
		</footer>
	);
}
function Order(props) {
	return (
		<div>
			<p>we're open untill {props.closehour}:00. come visit us</p>
			<button className="btn">Order</button>
		</div>
	);
}

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
// Strict mode will render component twice to check them or sth
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// React before 18
// import ReactDOM from "react-dom";
// React.render(<App />, document.getElementById("root"))
