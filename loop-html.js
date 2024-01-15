const main = document.querySelector('main');
const inputBox = document.getElementById("input-box");
const header_name = document.getElementById("header-name");

// Retrieve stored data from local storage
const storedData = localStorage.getItem("data");
if (storedData) {
    main.innerHTML = storedData;
}

// dashboard
let htmlString = main.innerHTML;

function newLog() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        const newEntry = `<div class="container">
            <div class="todo-app">
                <h2 id="header-name">` + inputBox.value + `</h2>
                <div class="row-1">
                    <p id="hours"></p>
                    <p>65 hrs on record</p>
                </div>
                <div class="row-2">
                    <p>last played on Oct 13</p>
                    <p id="Date"></p>
                </div>
            </div>
        </div>`;

        // Append the new entry to the main content
        main.innerHTML += newEntry;

        // Save the updated data to local storage
        saveData();
    }
    inputBox.value = "";
}

function saveData() {
    // Store the updated HTML string in local storage
    localStorage.setItem("data", main.innerHTML);
}

function deleteAllEntries() {
    // Remove all entries from the main content
    main.innerHTML = "";

    // Clear the stored data in local storage
    localStorage.removeItem("data");
}



