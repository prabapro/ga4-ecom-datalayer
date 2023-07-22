const inventory = {
	promoItems: [
		{
			promotion_id: 'UCL-2022-01',
			promotion_name: 'Champions League 2022 Home Kits',
			creative_name: 'Home Kit Poster',
			creative_slot: 'Hero Slider',
			location_id: 'hero_slider_1',
		},
		{
			promotion_id: 'UCL-2022-02',
			promotion_name: 'Champions League 2022 Away Kits',
			creative_name: 'Away Kit Poster',
			creative_slot: 'Promo Section',
			location_id: 'promo_section_1',
		},
	],
	items: [
		{
			// Item list info - Required
			index: 1,
			item_list_id: 'BS-001',
			item_list_name: 'Best Sellers',

			// Item info - Required
			item_id: 'RMCFMZ007501',
			item_name: 'Mens Home Authentic Shirt 22/23 White',
			price: 250.0,
			quantity: 1,

			// Item info - Optional
			affiliation: 'Item level affiliation - RM English Shop',
			coupon: 'Item level coupon 01',
			discount: 22.75,
			item_brand: 'Adidas',
			item_category: 'Mens Jerseys',
			item_category2: 'Home Kit',
			item_category3: 'Long Sleeve',
			item_category4: 'Personalized',
			item_variant: '7-Ronaldo',
			promotion_id: 'UCL-2022-01',
			promotion_name: 'Champions League 2022 Home Kits',

			// Item scoped custom dimensions
			item_scoped_custom_dim1: 'Product Scoped CD 01',
			item_scoped_custom_dim2: 'Product Scoped CD 02',
		},
		{
			// Item list info - Required
			index: 2,
			item_list_id: 'HS-001',
			item_list_name: 'Hot Sellers',

			// Item info - Required
			item_id: 'RMCFMZ007701',
			item_name: 'Mens Away Authentic Shirt 22/23 Purple',
			price: 200.0,
			quantity: 2,

			// Item info - Optional
			affiliation: 'Item level affiliation - RM English Shop',
			coupon: 'Item level coupon 02',
			discount: 17.85,
			item_brand: 'Adidas',
			item_category: 'Mens Jerseys',
			item_category2: 'Away Kit',
			item_category3: 'Short Sleeve',
			item_category4: 'Personalized',
			item_variant: '9-Benzema',
			promotion_id: 'UCL-2022-02',
			promotion_name: 'Champions League 2022 Away Kits',

			// Item scoped custom dimensions
			item_scoped_custom_dim1: 'Product Scoped CD 01',
			item_scoped_custom_dim2: 'Product Scoped CD 02',
		},
	],
	currency: 'USD',
	shippingTier: 'DHL',
	paymentType: 'PayPal',
	taxRate: 12.5, //Percentage
	shippingRate: 7.5, //Percentage
};
