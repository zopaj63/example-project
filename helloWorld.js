function printHelloWorld() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Hello World";

    document.body.appendChild(h1);
}

module.exports = { printHelloWorld };

