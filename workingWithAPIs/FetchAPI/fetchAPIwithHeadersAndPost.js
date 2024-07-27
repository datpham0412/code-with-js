async function postDataWithFetch (){
    const url = 'https://api.example.com/data';
    const data = {key: 'value'};

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok){
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const result = await response.json();
        console.log(result); // Handle the response
    } catch (error){
        console.error('There has been a problem with your fetch operation:', error);
    }
}

postDataWithFetch();