document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value;
    const resultsContainer = document.getElementById('results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (query.length > 3) {
        // Mock API URL
        const apiUrl = `http://localhost:3000/clothes?q=${query}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'search-item p-4 mb-4 bg-white rounded-lg shadow-md fade-in';
                    itemDiv.innerHTML = `
                        <h5 class="text-xl font-semibold">${item.name}</h5>
                        <p class="text-gray-600">${item.description}</p>
                        <p class="text-gray-800 font-bold">Price: $${item.price}</p>
                    `;
                    resultsContainer.appendChild(itemDiv);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }
});
