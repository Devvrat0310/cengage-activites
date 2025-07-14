class ContainerModel {
	constructor() {
		this.containerCount = 0;

		this.containerWidths = [];
		this.containerHeights = [];
	}

	// Update location of container upon structure change
	updateContainerLocations() {}

	// Get the index of row and column of a container from a selected pixel.
	getContainerCoordsFromPixels() {}

	// Get the dimensions of a container from its coords (row, col) - x, y, width, height
	getContainerDimensions() {}
}
