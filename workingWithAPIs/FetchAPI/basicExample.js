// The 'Fetch' API is a modern interface for making HTTP Requests.
// It is easier to use and returns a promise that resolves to the 'Response' object

async function fetchDataWithFetch() {
    const url = 'https://api.example.com/data';

    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error('Network response was not ok '+ response.statusText);
        }
        const data = await response.json();
        console.log(data); // Handle the response
    } catch (error){
        console.error('There has been a problem with your fetch operation: ', error);
    }
}

fetchDataWithFetch();