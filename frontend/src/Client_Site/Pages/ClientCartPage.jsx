import React from "react";

const ClientCartPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center p-8">
			<div className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-8">
				<h1 className="text-2xl font-bold mb-4">Your Cart</h1>
				<p className="text-gray-600">Your cart is empty. Browse the menu and add items to your cart.</p>
			</div>
		</div>
	);
};

export default ClientCartPage;
