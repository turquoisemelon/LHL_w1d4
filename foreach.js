// The second argument/parameter is expected to be a function
function findWaldo(arr) {
    arr. forEach (function actionWhenFound(elem) {
        if (elem === "Waldo") {
        console.log("Found Waldo at index", arr.indexOf(elem));
        }
    });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);
