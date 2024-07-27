function fetchDataWithXHR(){
    const xhr = new XMLHttpRequest();
    const url = 'https://api.example.com/data';

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText); // Handle the response
        }
    };
    xhr.send();
}

fetchDataWithXHR();