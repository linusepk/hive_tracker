async function update_hives() {
    const weights = await fetch("/api/data")
        .then(res => res.json())
        .catch(() => {});

    if (weights == undefined) {
        return;
    }

    const main = document.getElementsByTagName("main").item(0);
    // Clear main
    main.innerHTML = "";

    // Populate main with hive info
    weights.forEach((weight, i) => {
        const name_elem = document.createElement("h2");
        name_elem.innerHTML = "Hive " + (i + 1).toString();

        const weight_elem = document.createElement("p");
        weight_elem.innerHTML = "Weight: " + weight.toString() + " kg";

        const card_elem = document.createElement("div");
        card_elem.appendChild(name_elem);
        card_elem.appendChild(weight_elem);

        main.appendChild(card_elem);
    });

    setTimeout(() => {
        update_hives();
    }, 1000);
}

update_hives();
