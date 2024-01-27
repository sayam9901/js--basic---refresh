let inventory = [];

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemQuantity = document.getElementById('itemQuantity').value;

    if (itemName && itemPrice && itemQuantity) {
        const newItem = {
            name: itemName,
            price: itemPrice,
            quantity: itemQuantity
        };

        inventory.push(newItem);
        displayInventory();
        clearInputs();
    }
}

function displayInventory() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';

    inventory.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('inventory-item');
        itemDiv.innerHTML = `
            <p>Name: ${item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <div class="reduce-input-container">
                <input type="number" placeholder="Reduce Quantity" id="reduceQuantity-${item.name}">
                <button onclick="reduceQuantity('${item.name}')">Reduce</button>
            </div>
        `;
        inventoryList.appendChild(itemDiv);
    });
}

function reduceQuantity(itemName) {
    const inputId = `reduceQuantity-${itemName}`;
    const reduceInput = document.getElementById(inputId);

    if (reduceInput.value && reduceInput.value > 0) {
        const itemIndex = inventory.findIndex(item => item.name === itemName);
        inventory[itemIndex].quantity -= parseInt(reduceInput.value);
        displayInventory();
        reduceInput.value = '';
    }
}

function clearInputs() {
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('itemQuantity').value = '';
}
