// Get the table body element
const tableBody = document.getElementById("tableBody");

// Fetch the JSON data from the file
fetch("tag_counts.json")
    .then(response => response.json())
    .then(tagCounts => {
        // Populate the table with JSON data
        for (const tagName in tagCounts) {
            if (tagCounts.hasOwnProperty(tagName)) {
                const tagCount = tagCounts[tagName];

                const row = tableBody.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);

                cell1.innerHTML = tagName;
                cell2.innerHTML = tagCount;
            }
        }
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });

