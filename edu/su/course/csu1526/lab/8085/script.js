function simulate() {
    // Reset all blocks, sub-blocks, and buses
    let blocks = document.querySelectorAll('.block, .subBlock');
    blocks.forEach(block => block.classList.remove('active'));

    let buses = document.querySelectorAll('#busVertical, #busHorizontal');
    buses.forEach(bus => bus.classList.remove('busActive'));

    // Sample simulation steps (to be extended for more detailed simulation)
    setTimeout(() => {
        document.getElementById('controlUnit').classList.add('active');
        document.getElementById('busVertical').classList.add('busActive');
    }, 1000);

    setTimeout(() => {
        document.getElementById('alu').classList.add('active');
    }, 2000);

    setTimeout(() => {
        document.getElementById('accumulator').classList.add('active');
    }, 3000);
}
