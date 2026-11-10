const MODULE_ID = "example-test";

Hooks.once("init", () => {
    console.log(`${MODULE_ID} | init`);
});

Hooks.on("ready", () => {
    console.log(`${MODULE_ID} | ready`);
});
