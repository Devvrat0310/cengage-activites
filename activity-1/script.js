import { Container } from "./components/Container.js";
import { ContainerModel } from "./components/ContainerModel.js";
import { DraggableContainer } from "./components/DraggableContainer.js";

class MainManager {
	/**
	 *
	 * @param {*} draggableContainer - Dom element of a dragable div
	 * @param {*} numberOfContainer
	 */
	constructor(numberOfDraggableContainer, numberOfContainer) {
		this.containerModel = new ContainerModel();
		this.createNewContainer(numberOfContainer);
		this.createNewDraggableContainer(numberOfDraggableContainer);
	}

	/**
	 *
	 * @param {*} numberOfContainer
	 */
	createNewContainer(numberOfContainer) {
		for (let i = 0; i < numberOfContainer; i++) {
			// const ind = this.containerModel.containerCount;
			new Container(i + 1, this.containerModel);
		}
	}

	/**
	 *
	 * @param {*} numberOfContainer
	 */
	createNewDraggableContainer(numberOfContainer) {
		for (let i = 0; i < numberOfContainer; i++) {
			// const ind = this.containerModel.containerCount;
			new DraggableContainer(i + 1, this.containerModel);
		}
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

		this.distanceFromBorder = {
			left: e.screenX - x,
			top: e.screenY - y,
		};

		this.start = { x: e.screenX, y: e.screenY };
	}

	onPointerMove(e) {
		if (!this.start) return;

		this.draggableContainer.style.left = `${
			e.screenX - this.distanceFromBorder.left
		}px`;
		this.draggableContainer.style.top = `${
			e.screenY - this.distanceFromBorder.top
		}px`;
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

const manager = new MainManager(3, 5);
