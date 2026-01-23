---

title: Fetch API & modern async/await
cat: native-js
image: image
desc: Fetch is the modern replacement for XMLHttpRequest unlike XMLHttpRequest, which uses callbacks, Fetch is promise-based and is integrated with features of the modern web such as service workers and Cross-Origin Resource Sharing (CORS).
---


<html-code>
<h1>Fetch API & modern async/await</h1>
<h3>User List</h3>
    <div id="error-message" style="color: red;"></div>
    <div id="user-list-container">
        <!-- Fetched content will be inserted here -->
    </div>

    <!-- Template for a single user item -->
    <template id="user-template">
        <div class="user-card" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
            <p><strong>Name:</strong> <span class="user-name"></span></p>
            <p><strong>Email:</strong> <span class="user-email"></span></p>
        </div>
    </template>
</html-code>
<js-code>
// Function to fetch data and update the DOM
async function fetchAndDisplayUsers() {
    const apiURL = 'https://jsonplaceholder.typicode.com/users'; // A public API for testing
    const container = document.getElementById('user-list-container');
    const errorMessage = document.getElementById('error-message');
    const template = document.getElementById('user-template');

    try {
        // Fetch the data from the external service
        const response = await fetch(apiURL);

        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response body as JSON
        const users = await response.json();

        // Process the data and add to the DOM using the template
        users.forEach(user => {
            // Clone the template content
            const clone = document.importNode(template.content, true);

            // Populate the cloned elements with data
            clone.querySelector('.user-name').textContent = user.name;
            clone.querySelector('.user-email').textContent = user.email;

            // Append the cloned content to the container
            container.appendChild(clone);
        });

    } catch (error) {
        // Handle any errors that occurred during the fetch operation or processing
        console.error('Fetch error:', error);
        errorMessage.textContent = 'Failed to load user data. Please try again later.';
    }
}

// Call the function to initiate the fetch operation when the script runs
fetchAndDisplayUsers().catch(error => {
    console.error('Initial fetch failed:', error);
});

</js-code>
