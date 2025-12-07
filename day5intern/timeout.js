/* console.log("Start");
setTimeout(() => {
    console.log("This runs after 2 sec")
}, 2000);
console.log("End"); //asyncronized execution */
/* setTimeout(() => {
    console.log("Make Tea");
    setTimeout(() => {
        console.log("Toast Bread");
        setTimeout(() => {
            console.log("Fry Eggs");
            setTimeout(() => {
                console.log("Arrange plates");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000); */

/* console.log("Customer: I want ice cream");

const makeIceCream = new Promise((resolve, reject) => {

    let stockAvailable = true; // Change to false to see reject 😋

    setTimeout(() => {
        if (stockAvailable) {
            resolve("Ice cream is ready! 🍦");
        } else {
            reject("Sorry, ice cream is out of stock 😢");
        }
    }, 2000);

});

makeIceCream
    .then((message) => {
        console.log("Shop Owner:", message);
        console.log("Customer: Thank you! 😋");
    })
    .catch((error) => {
        console.log("Shop Owner:", error);
        console.log("Customer: Oh no! Maybe next time 😞");
    }); */
function orderIceCream() {
    return new Promise((resolve, reject) => {
        let stockAvailable = true; // Change to false to test reject

        setTimeout(() => {
            if (stockAvailable) {
                resolve("🍦 Ice cream is ready!");
            } else {
                reject("❌ No stock available!");
            }
        }, 2000);
    });
}

// Async function
async function serveCustomer() {
    try {
        console.log("👤 Customer: I want ice cream");

        const message = await orderIceCream(); // waits for promise to resolve
        console.log("👨‍🍳 Shop Owner:", message);

        console.log("👤 Customer: Thank you! 😋");
    } catch (error) {
        console.log("👨‍🍳 Shop Owner:", error);
        console.log("👤 Customer: That's sad 😞");
    }
}

serveCustomer();