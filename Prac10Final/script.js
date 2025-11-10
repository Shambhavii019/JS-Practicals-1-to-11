// Global array to store employees
let employeeData = [];

// -------------------------------------------
// 1. Load data using Fetch API
// -------------------------------------------
fetch('employees.json')
    .then(response => response.json())
    .then(data => {
        console.table(data);  // Debugging

        employeeData = data;

        populateDepartmentDropdown(data);
        renderTable(data, "fetchTable");
    })
    .catch(error => console.error("Fetch error:", error));


// -------------------------------------------
// 2. Load data using jQuery $.getJSON()
// -------------------------------------------
$.getJSON('employees.json', function(data) {
    renderTable(data, "jqueryTable");
});


// -------------------------------------------
// Render table dynamically
// -------------------------------------------
function renderTable(dataArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear previous content

    const table = document.createElement("table");

    // Create header row
    const headerRow = document.createElement("tr");
    ["ID", "Name", "Department", "Salary"].forEach(col => {
        const th = document.createElement("th");
        th.textContent = col;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create data rows
    dataArray.forEach(emp => {
        const row = document.createElement("tr");

        // Apply highlight for salary > 50000
        if (emp.salary > 50000) {
            row.classList.add("highlight");
        }

        Object.values(emp).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });

        table.appendChild(row);
    });

    container.appendChild(table);
}


// -------------------------------------------
// Dynamic department dropdown
// -------------------------------------------
function populateDepartmentDropdown(data) {
    const deptSelect = document.getElementById("deptFilter");

    const uniqueDepts = [...new Set(data.map(emp => emp.department))];

    uniqueDepts.forEach(dept => {
        const option = document.createElement("option");
        option.value = dept;
        option.textContent = dept;
        deptSelect.appendChild(option);
    });

    // Add event listener for filtering
    deptSelect.addEventListener("change", filterEmployees);
}


// -------------------------------------------
// Self-written filter function
// -------------------------------------------
function filterEmployees() {
    const selectedDept = document.getElementById("deptFilter").value;

    if (selectedDept === "All") {
        renderTable(employeeData, "fetchTable");
    } else {
        const filtered = employeeData.filter(emp => emp.department === selectedDept);
        renderTable(filtered, "fetchTable");
    }
}
