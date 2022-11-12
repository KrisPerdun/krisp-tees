/**
 * Shirt Type Section from JSON file, wrapped in object.freeze()
 * to prevent typos, and/or overriding.
 * e.g. shirtType.WOMEN_SHIRTS => 'women-shirts' which can be found in `shirts.json`
 */
const shirtTypes = Object.freeze({
	WOMEN_SHIRTS: 'women-shirts',
	MEN_SHIRTS: 'men-shirts',
	KIDS_SHIRTS: 'kids-shirts',
});
/**
 * Fetch json data -> ALL from `shirts.json` file
 * @param {String} payloadSection - shirt section lookup
 */
async function fetchData(payloadSection) {
	const $products = document.querySelector('.products'); 	// cached `products element markup`
	const SHIRTS_URL = './json/shirts.json';				// json file containing all shirts
	const rawData = await fetch( SHIRTS_URL );				// API Fetch Call -> loads json-file
	try {
		// if success --------
		const response = await rawData.json();				// parse results into json to enable iterator (so we can iterate into the object/array)
		const shirtTypeJson = response.find(shirtRack => shirtRack.hasOwnProperty( payloadSection ));	// return only the matched section passed from parameter
		const tpl = createTemplate(shirtTypeJson[ payloadSection ]);	// create template based on shirts section 
		$products.innerHTML = tpl;							// assign results to HTML
	} catch (error) {
		// if error ---------
		console.error(error);				// log error into console
		$products.classList.add('error');	// add `error` class to style error
		$products.innerHTML = error;		// add error into default template
	}
}
/**
 * Function receives an array of matched objects, and returns a template from it.
 * @param {Array<string>} payload - Array holding all items from specific section 
 * @returns template
 */
const createTemplate = (payload) => {
	let template = '';
	for (let item of payload) {
		template += `
			<div class="product">
				<img src="${item.image}" alt="${item.image}">
				<p class ="title">${item.title}</p>
				<p class ="description">${item.description}</p>
				<p class ="price">
					<span>$</span>
					<span>${item.price}</span>
				</p>
				<p class ="rating">
					<span>${item.rating} <i class='bx bxs-star'></i></span>
				</p>
				<select class="size">
					<option value="size">Choose Size</option>
					<option value="size">S</option>
					<option value="size">M</option>
					<option value="size">L</option>
					<option value="size">XL</option>
					<option value="size">2XL</option>
					<option value="size">3XL</option>
				</select>
				<p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
			</div>
       `;
	}
	return template;		// returned template
};
