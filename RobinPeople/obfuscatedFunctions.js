const simulateIntensiveTask = async () => {
    console.log("Initial press!");
    const ms = 2000 + Math.floor(Math.random() * 3000);
    await new Promise(resolve => setTimeout(resolve, ms));
    console.log(`The task took ${ms / 1000} seconds to complete. That was intense!`);
}

export default simulateIntensiveTask;


