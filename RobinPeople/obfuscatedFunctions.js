const simulateIntensiveAsyncTask = async () => {
    console.log("Initial press!");
    const ms = Math.floor(Math.random() * 3000);
    await new Promise(resolve => setTimeout(resolve, ms));
    console.log(`The task took ${ms / 1000} seconds to complete. That was intense!`);

    return ms / 1000;
}

const simulateIntensiveTask = () => {
    console.log("Initial press!");
    const ms = Math.floor(Math.random() * 3000);
    const start = Date.now();
    while (Date.now() < start + ms) {}
    console.log(`The task took ${ms / 1000} seconds to complete. That was intense!`);

    return ms / 1000;
}

export { simulateIntensiveTask, simulateIntensiveAsyncTask };


