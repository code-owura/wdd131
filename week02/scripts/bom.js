// Select elements from the DOM
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Add click event listener to the button
button.addEventListener('click', function () {

    // Check if user has entered something
    if (input.value.trim() !== '') {

        // Create a new list item
        const li = document.createElement("li");

        // Set the text of the list item
        li.textContent = input.value;

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";

        // Accessibility improvement
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // Add delete button to list item
        li.append(deleteButton);

        // Add list item to unordered list
        list.append(li);

        // Add delete functionality
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Clear input field
        input.value = '';

        // Return focus to input
        input.focus();
    }

});