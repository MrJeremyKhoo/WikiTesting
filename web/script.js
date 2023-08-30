const searchQueryInput = document.getElementById("searchQuery");
const suggestionsContainer = document.getElementById("suggestions");
const filenameList = []; // This will hold the list of filenames

// Load the filename list from the JSON file
fetch("filenames.json")
    .then(response => response.json())
    .then(data => {
        filenameList.push(...data);
    })
    .catch(error => {
        console.error("Error loading filename list:", error);
    });
searchQueryInput.addEventListener("input", updateSuggestions);

function updateSuggestions() {
    const searchQuery = searchQueryInput.value;

    if (searchQuery.trim() !== "") {
        const results = fuzzysort.go(searchQuery, filenameList);
        suggestionsContainer.innerHTML = "";

        for (const result of results) {
            const li = document.createElement("li");
            li.textContent = result.target;
            li.addEventListener("click", () => {
                searchQueryInput.value = result.target;
                suggestionsContainer.innerHTML = "";
                loadAndDisplayMarkdown(result.target);
            });
            suggestionsContainer.appendChild(li);
        }
    } else {
        suggestionsContainer.innerHTML = "";
    }
}

function readDirectoryContents(directoryPath) {
    return new Promise((resolve, reject) => {
        const directoryReader = new DirectoryReader(directoryPath);
        directoryReader.readEntries(entries => {
            const fileNames = entries
                .filter(entry => entry.isFile)
                .map(entry => entry.name);
            resolve(fileNames);
        }, reject);
    });
}

function loadAndDisplayMarkdown() {
    const fileName = searchQueryInput.value;
    const filePath = "../md/" + fileName; // Update the path accordingly

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error("File not found.");
            }
            return response.text();
        })
        .then(markdownContent => {
            const converter = new showdown.Converter();
            const htmlContent = converter.makeHtml(markdownContent);
            document.getElementById("markdownContent").innerHTML = htmlContent;
        })
        .catch(error => {
            document.getElementById("markdownContent").textContent = error.message;
        });
}

