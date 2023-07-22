// Function to push data to the dataLayer
const pushToDataLayer = (event, data) => {
	window.dataLayer.push({
		event,
		ecommerce: data,
	});

	const codeBlock = document.getElementById('dataLayerCodeBlock');
	codeBlock.innerText = JSON.stringify(
		window.dataLayer[window.dataLayer.length - 1],
		null,
		2
	);
};

// Promotion Interaction functions
const view_promotion = () => {
	const eventData = {
		event: 'view_promotion',
		ecommerce: {
			items: inventory.promoItems,
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

const select_promotion = () => {
	const eventData = {
		event: 'select_promotion',
		ecommerce: {
			items: [inventory.promoItems[1]],
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

const view_item_list = () => {
	const eventData = {
		event: 'view_item_list',
		ecommerce: {
			items: inventory.items,
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

// Product Interaction functions
const select_item = () => {
	const eventData = {
		event: 'select_item',
		ecommerce: {
			currency: inventory.currency,
			value: inventory.items[0].price - inventory.items[0].discount,
			items: [inventory.items[0]],
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

const view_item = () => {
	const eventData = {
		event: 'view_item',
		ecommerce: {
			currency: inventory.currency,
			value: inventory.items[0].price - inventory.items[0].discount,
			items: [inventory.items[0]],
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

const add_to_cart = () => {
	const eventData = {
		event: 'add_to_cart',
		ecommerce: {
			currency: inventory.currency,
			value: inventory.items[0].price - inventory.items[0].discount,
			items: [inventory.items[0]],
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

const remove_from_cart = () => {
	const eventData = {
		event: 'remove_from_cart',
		ecommerce: {
			currency: inventory.currency,
			value: inventory.items[0].price - inventory.items[0].discount,
			items: [inventory.items[0]],
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

const add_to_wishlist = () => {
	const eventData = {
		event: 'add_to_wishlist',
		ecommerce: {
			currency: inventory.currency,
			value: inventory.items[0].price - inventory.items[0].discount,
			items: [inventory.items[0]],
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

// Conversion functions
const view_cart = () => {
	const eventData = {
		event: 'view_cart',
		ecommerce: {
			currency: inventory.currency,
			value: calculateTotalPrice(inventory.items),
			items: inventory.items,
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

const begin_checkout = () => {
	const eventData = {
		event: 'begin_checkout',
		ecommerce: {
			currency: inventory.currency,
			value: calculateTotalPrice(inventory.items),
			items: inventory.items,
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

const add_shipping_info = () => {
	const eventData = {
		event: 'add_shipping_info',
		ecommerce: {
			currency: inventory.currency,
			value: calculateTotalPrice(inventory.items),
			shipping_tier: inventory.shippingTier,
			items: inventory.items,
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

const add_payment_info = () => {
	const eventData = {
		event: 'add_payment_info',
		ecommerce: {
			currency: inventory.currency,
			value: calculateTotalPrice(inventory.items),
			payment_type: inventory.paymentType,
			items: inventory.items,
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

const purchase = () => {
	const eventData = {
		event: 'purchase',
		ecommerce: {
			transaction_id: new Date().toISOString(),
			currency: inventory.currency,
			value: calculateTotalPrice(inventory.items),
			tax: calculateTaxAmount(
				calculateTotalPrice(inventory.items),
				inventory.taxRate
			),
			shipping: calculateShippingAmount(
				calculateTotalPrice(inventory.items),
				inventory.shippingRate
			),
			coupon: 'CR7 - Order level coupon',
			items: inventory.items,
		},
	};

	pushToDataLayer(eventData.event, eventData.ecommerce);
};

// Calculate the Total price
const calculateTotalPrice = items => {
	let totalPrice = 0;

	items.forEach(item => {
		const itemPrice = parseFloat(item.price) * item.quantity;
		const itemDiscount = parseFloat(item.discount) || 0;

		totalPrice += itemPrice - itemDiscount;
	});

	return totalPrice;
};

// Calculate Tax
const calculateTaxAmount = (totalPrice, taxRate) => {
	const taxPercentage = parseFloat(taxRate) || 0;
	const taxAmount = (totalPrice * taxPercentage) / 100;
	return taxAmount;
};

// Calculate Shipping
const calculateShippingAmount = (totalPrice, shippingRate) => {
	const shippingPercentage = parseFloat(shippingRate) || 0;
	const shippingAmount = (totalPrice * shippingPercentage) / 100;
	return shippingAmount;
};

// Initialize the code block with an empty array
const codeBlock = document.getElementById('dataLayerCodeBlock');
codeBlock.innerText = JSON.stringify(window.dataLayer, null, 2);
