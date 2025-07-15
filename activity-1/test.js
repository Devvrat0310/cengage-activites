function a() {
	let n = 0;

	let B = function b() {
		n++;
		return n;
	};

	return B;
}

const inc = a();

inc();
inc();

console.log("inc.n", inc());
