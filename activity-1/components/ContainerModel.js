export class ContainerModel {
	constructor() {
		this.containerCount = 0;

		this.containers = [];
	}

	/**
	 * Adds new container to containers list
	 *
	 * @param {HTMLDivElement} container - The droppable container element
	 */
	updateContainersList(container) {
		this.containers.push(container);
	}

	/**
	 * @param {HTMLDivElement} - The droppable container element
	 * @returns {{x: number, y: number, width: number, height: number}} - Dimensions and position of each of the container.
	 */
	getContainerDimension(container) {
		const rect = container.getBoundingClientRect();

		const x = rect.left;
		const y = rect.top;

		const width = rect.right - x;
		const height = rect.bottom - y;

		return { x, y, width, height };
	}
}
