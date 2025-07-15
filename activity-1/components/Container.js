export class Container {
	/**
	 *
	 * @param {number} ind - The number of containers already present
	 */
	constructor(ind, containerModel) {
		const body = document.querySelector("body");

		const newContainer = document.createElement("canvas");
		newContainer.id = `container${ind + 1}`;
		newContainer.classList.add("container");

		containerModel.updateContainersList(newContainer);

		containerModel.containerCount++;

		body.appendChild(newContainer);
	}
}
