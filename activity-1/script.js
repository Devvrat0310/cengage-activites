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


//script.js 

import { Container } from "./components/Container.js";
import { ContainerModel } from "./components/ContainerModel.js";

class MainManager {
    constructor (container) {
        this.draggableDiv = container;

        this.startX = null;
        this.startY = null;

        this.distanceFromLeftBorder = null;
        this.distanceFromTopBorder = null;

        this.containerModel = new ContainerModel();

        this.addEventListener();
    }

    createNewContainer() {
        const ind = this.containerModel.containerCount;

        console.log("this.containerModel.containerCount", this.containerModel.containerCount);
        new Container(ind, this.containerModel);
    }

    addEventListener() {
        this.draggableDiv.addEventListener(
            "pointerdown",
            this.onPointerDown.bind(this)
        );
        this.draggableDiv.addEventListener(
            "pointermove",
            this.onPointerMove.bind(this)
        );
        this.draggableDiv.addEventListener("pointerup", this.onPointerUp.bind(this));

    }



    onPointerDown(e) {
        console.log("e.deltaX, e.deltaY", e.screenX, e.screenY);
        e.target.setPointerCapture(e.pointerId);

        const { x, y, width, height } = this.containerModel.getContainerDimension(this.draggableDiv);

        this.distanceFromLeftBorder = e.screenX - x;
        this.distanceFromTopBorder = e.screenY - y;

        console.log("this.distanceFromLeftBorder", this.distanceFromLeftBorder);
        console.log("this.distanceFromTopBorder", this.distanceFromTopBorder);

        this.startX = e.screenX;
        this.startY = e.screenY;

    }

    onPointerMove(e) {

        if (!this.startX || !this.startY) return;

        this.draggableDiv.style.left = `${e.screenX - this.distanceFromLeftBorder}px`;
        this.draggableDiv.style.top = `${e.screenY - this.distanceFromTopBorder}px`;

    }

    onPointerUp(e) {
        e.target.releasePointerCapture(e.pointerId);

        const draggableDiv = this.containerModel.getContainerDimension(this.draggableDiv);

        let isInsideBox = false;

        for (const container of this.containerModel.containers) {

            const containerDim = this.containerModel.getContainerDimension(container);

            // check if drggable div is to the right and bottom of the left and top border of the current container respectively.
            if (containerDim.x < draggableDiv.x && containerDim.y < draggableDiv.y) {

                // check if drggable div is to the left of the right border of the current containerDim .
                if (containerDim.x + containerDim.width > draggableDiv.x + draggableDiv.width) {
                    // check if drggable div is above the bottom border of the current containerDim .
                    if (containerDim.y + containerDim.height > draggableDiv.y + draggableDiv.height) {
                        isInsideBox = true;
                        break;
                    }
                }
            }
        }

        if (!isInsideBox) {
            this.draggableDiv.style.left = `${this.startX - this.distanceFromLeftBorder}px`;
            this.draggableDiv.style.top = `${this.startY - this.distanceFromTopBorder}px`;
        }

        this.distanceFromLeftBorder = null;
        this.distanceFromTopBorder = null;

        this.startX = null;
        this.startY = null;
    }
};


const draggableDiv = document.querySelector(".draggable-div");
const manager = new MainManager(draggableDiv);
manager.createNewContainer();
manager.createNewContainer();
manager.createNewContainer();
manager.createNewContainer();
manager.createNewContainer();
manager.createNewContainer();
manager.createNewContainer();
manager.createNewContainer()



