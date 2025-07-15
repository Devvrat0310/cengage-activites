export class DraggableContainer {
	constructor(ind, containerModel) {
		this.containerModel = containerModel;

		this.draggableContainer = this.createDraggableContainer(ind);

		/**
		 * @type {{x: number, y: number} | null} - Stores the starting x coordinate of pointerdown
		 */
		this.start = null;

		/**
		 * @type {{left: number, top: number} | null} - Stores the distance of x and y coordinate on pointer down from the left and top border of the draggable container
		 */
		this.distanceFromBorder = null;

		this.addEventListener();
	}

	createDraggableContainer(ind) {
		const body = document.querySelector("body");

		// const newContainerWrapper = document.createElement("div");
		// newContainerWrapper.classList.add("draggable-div-wrapper");

		const newContainer = document.createElement("canvas");
		newContainer.classList.add("draggable-div");
		newContainer.id = `draggable-div-${ind + 1}`;

		// this.createContainer(body, count);
		// this.containerModel.containerCount++;
		// newContainerWrapper.appendChild(newContainer);
		body.appendChild(newContainer);

		return newContainer;
	}

	addEventListener() {
		this.draggableContainer.addEventListener(
			"pointerdown",
			this.onPointerDown.bind(this)
		);
		this.draggableContainer.addEventListener(
			"pointermove",
			this.onPointerMove.bind(this)
		);
		this.draggableContainer.addEventListener(
			"pointerup",
			this.onPointerUp.bind(this)
		);
	}

	onPointerDown(e) {
		e.target.setPointerCapture(e.pointerId);

		const { x, y, width, height } =
			this.containerModel.getContainerDimension(this.draggableContainer);

		console.log("x, y, width, height", x, y, width, height);

		this.distanceFromBorder = {
			left: e.clientX - x,
			top: e.clientY - y,
		};
		console.log(e);

		console.log("e.clientX, e.clientY", e.clientX, e.clientY);

		this.start = { x: e.clientX, y: e.clientY };

		console.log("start", this.start);
		console.log("distanceFromBorder", this.distanceFromBorder);
	}

	onPointerMove(e) {
		if (!this.start) return;

		setTimeout(() => {
			this.draggableContainer.style.left = `${
				e.clientX - this.distanceFromBorder.left
			}px`;
			this.draggableContainer.style.top = `${
				e.clientY - this.distanceFromBorder.top
			}px`;
		}, 100);

		console.log(
			"this.draggableContainer.style.left",
			this.draggableContainer.style.left
		);
	}

	onPointerUp(e) {
		e.target.releasePointerCapture(e.pointerId);

		const draggableContainer = this.containerModel.getContainerDimension(
			this.draggableContainer
		);

		let isInsideBox = false;

		for (const container of this.containerModel.containers) {
			const containerDim =
				this.containerModel.getContainerDimension(container);

			// check if drggable div is to the right and bottom of the left and top border of the current container respectively.
			if (
				containerDim.x < draggableContainer.x &&
				containerDim.y < draggableContainer.y
			) {
				// check if drggable div is to the left of the right border of the current containerDim .
				if (
					containerDim.x + containerDim.width >
					draggableContainer.x + draggableContainer.width
				) {
					// check if drggable div is above the bottom border of the current containerDim .
					if (
						containerDim.y + containerDim.height >
						draggableContainer.y + draggableContainer.height
					) {
						isInsideBox = true;
						break;
					}
				}
			}
		}

		if (!isInsideBox) {
			this.draggableContainer.style.left = `${
				this.start.x - this.distanceFromBorder.left
			}px`;
			this.draggableContainer.style.top = `${
				this.start.y - this.distanceFromBorder.top
			}px`;
		}

		this.distanceFromBorder = null;
		this.start = null;
	}
}
