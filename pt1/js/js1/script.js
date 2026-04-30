function create_mul_tables() {
    tables = document.createElement("div");
    tables.className = "tables";
    document.body.appendChild(tables);
    for (i = 1; i < 11; i++) {
        table = document.createElement("table");
        tables.appendChild(table);
        head = document.createElement("thead");
        table.appendChild(head);
        row = document.createElement("tr");
        head.appendChild(row);
        title = document.createElement("th");
        row.appendChild(title);
        body = document.createElement("tbody");
        table.appendChild(body);
        title.textContent = `Produtos de ${i}`;
        title.colSpan = 2;
        for (j = 1; j < 11; j++) {
            row = document.createElement("tr");
            body.appendChild(row);
            expr = document.createElement("td");
            row.appendChild(expr);
            res = document.createElement("td");
            row.appendChild(res);
            expr.textContent = `${i}x${j}`;
            res.textContent = `${i*j}`;
            expr.className = "expr";
            res.className = "res";
        }
    }
}
create_mul_tables();