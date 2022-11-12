document.addEventListener('DOMContentLoaded', init);

// when content is loaded, run `init()`
async function init() {
	try {
		/**
		 * fetchData() takes a string as a parameter, which 
		 * will lookup json file to match string passed
		 * e.g [{
		 * 	'kids-shirts': [{....}]
		 * }]
		 */
		await fetchData(shirtTypes.KIDS_SHIRTS);
	} catch (error) {
		// if no data shown, log error into console
		console.error(error);
	}
}
