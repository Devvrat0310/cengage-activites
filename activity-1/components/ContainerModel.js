export class ContainerModel {
    constructor () {
        this.containerCount = 0;

        this.containers = [];
    }

    updateContainersList(container) {
        this.containers.push(container);
    }

    getContainerDimension(container) {
        const rect = container.getBoundingClientRect();

        const x = rect.left;
        const y = rect.top;

        const width = rect.right - x;
        const height = rect.bottom - y;

        return { x, y, width, height };
    }

    // /**
    //  * @returns {[{x: number, y: number, width: number, height: number}]} - Dimensions and position of each of the container.
    //  */
    // getContainerDimensions() {
    //     const container1 = document.querySelector("#container-1");
    //     const container2 = document.querySelector("#container-2");

    //     return [ this.getDimension(container1), this.getDimension(container2) ];
    // }
}
