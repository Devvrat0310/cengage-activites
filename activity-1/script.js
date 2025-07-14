// class MainManager {
// 	/**
// 	 *
// 	 * @param {number} count - The number of containers already present
// 	 */
// 	constructor(count) {
// 		this.containerModel = new ContainerModel();
// 	}

// 	addEventListener() {
// 		document.addEventListener("pointerdown", this.onPointerDown.bind(this));
// 		document.addEventListener("pointermove", this.onPointerMove.bind(this));
// 		document.addEventListener("pointerup", this.onPointerUp.bind(this));
// 	}

// 	onPointerDown(e) {
// 		this.containerModel.getContainerCoordsFromPixels(e.deltaX, e.deltaY);
// 	}
// 	onPointerMove() {}
// 	onPointerUp() {}

// 	addNewContainer() {
// 		const body = document.querySelector("body");
// 		const newContainer = document.createElement("canvas");

// 		newContainer.id = `container${this.containerModel.containerCount + 1}`;
// 		newContainer.classList.add("container");

// 		this.containerModel.containerCount++;
// 	}
// }

// new Container(0);
// new Container(1);

class EventHandler {
	constructor(container) {
		container.addEventListener(
			"pointerdown",
			this.onPointerDown.bind(this)
		);
		container.addEventListener(
			"pointermove",
			this.onPointerMove.bind(this)
		);
		container.addEventListener("pointerup", this.onPointerUp.bind(this));
	}

	getDimension(container) {
		const rect = container.getBoundingClientRect();

		const x = rect.left;
		const y = rect.top;

		const width = rect.right - x;
		const height = rect.bottom - y;

		return { x, y, width, height };
	}

	/**
	 * @returns {[{x: number, y: number, width: number, height: number}]} - Dimensions and position of each of the container.
	 */
	getContainerDimensions() {
		const container1 = document.querySelector("#container-1");
		const container2 = document.querySelector("#container-1");

		return [this.getDimension(container1), this.getDimension(container2)];
	}

	onPointerDown(e) {
		console.log("e.deltaX, e.deltaY", e.offsetX, e.offsetY);
		e.target.setPointerCapture(e.pointerId);
	}
	onPointerMove() {}
	onPointerUp() {}
}

const draggableDiv = document.querySelector(".draggable-div");

new EventHandler(draggableDiv);
