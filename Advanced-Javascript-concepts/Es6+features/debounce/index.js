let APi_Key = `https://newsdata.io/api/1/latest?apikey=API_KEY`;
let displayBody = document.getElementById("display");

async function ApiCall(query) {
    let combineQuery = APi_Key + `&q=${query}`;
    let Header = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        let res = await fetch(combineQuery, Header);
        if (!res.ok) {
            const errorObj = {
                status: res?.status,
                message: (await res.json())?.results?.message || "Unknown error occurred",
            };
            throw new Error(JSON.stringify(errorObj)); // Pass structured error
        }
        return await res.json();
    } catch (err) {
        // Propagate error message for handling in the calling function
        console.error("API Call Error:", err);
        throw err;
    }
}

async function handleData(searchQuery) {
    // Clear previous results and error elements from displayBody before new content
    displayBody.innerHTML = "";

    try {
        let cardData = await ApiCall(searchQuery);

        // Create a card container to hold the results
        let card = document.createElement("div");
        let ol = document.createElement("ol");

        // Check if we have data to display
        if (cardData?.results?.length > 0) {
            cardData.results.forEach((data) => {
                let li = document.createElement("li");
                li.innerText = data?.title || "Untitled Article";
                li.id = data?.article_id || "";
                ol.appendChild(li);
            });
            card.appendChild(ol);
        } else {
            // Show a "No results found" message if no results
            let paragraph = document.createElement("p");
            paragraph.innerText = "No results found.";
            card.appendChild(paragraph);
        }

        // Append the populated card to displayBody
        displayBody.appendChild(card);
    } catch (err) {
        // Handle any errors, clear displayBody first, then show error message
        displayBody.innerHTML = ""; // Ensure to clear out existing content before displaying error

        let paragraph = document.createElement("p");
        let errorMessage;

        // Try to parse the error details if available
        try {
            const errorDetails = JSON.parse(err.message);
            errorMessage = `Error ${errorDetails.status}: ${errorDetails.message}`;
        } catch {
            errorMessage = "An error occurred while fetching data.";
        }

        paragraph.innerText = errorMessage;

        // Display error message to the user
        displayBody.appendChild(paragraph);
    }
}

function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const debounceFunction = debounce(handleData, 1000);

document.getElementById("search").addEventListener("input", (event) => {
    const searchQuery = event.target.value.trim();
    if (searchQuery) {
        debounceFunction(searchQuery);
    }
    else if(searchQuery==""){
        displayBody.innerHTML=""
    } else {
        // Clear results if the input is empty
        displayBody.innerHTML = "";
    }
});
