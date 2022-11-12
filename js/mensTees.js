document.addEventListener('DOMContentLoaded', init);

async function init() {
	try {
		/**
		 * fetchData() takes a string as a parameter, which 
		 * will lookup json file to match string passed
		 * e.g [{
		 * 	'men-shirts': [{....}]
		 * }]
		 */
		await fetchData(shirtTypes.MEN_SHIRTS);
	} catch (error) {
		// if no data shown, log error into console
		console.log(error);
	}
}
