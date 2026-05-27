const express = require("express");

const app = express();

const validOps = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b,
};

app.get("/:op/:a/:b", (req, res) => {
    const op = req.params.op;
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Invalid numbers");
    }

    const operation = validOps[op];
    if (!operation) {
        return res.send(`Invalid operator: ${op}`);
    }

    const result = operation(a, b);
    res.send(result.toString());
});

app.listen(3000, () => {
    console.log("Calculator running on http://localhost:3000");
});
