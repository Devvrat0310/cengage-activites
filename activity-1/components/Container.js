class Container {
	/**
	 *
	 * @param {number} count - The number of containers already present
	 */
	constructor(count) {
		const body = document.querySelector("body");

		const newContainer = document.createElement("canvas");
		newContainer.id = `container${count + 1}`;
		newContainer.classList.add("container");
	}
}
