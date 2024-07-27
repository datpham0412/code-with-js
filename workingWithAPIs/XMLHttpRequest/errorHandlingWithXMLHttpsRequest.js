function fetchDataWithXHR() {
    const xhr = new XMLHttpRequest();
    const url = 'https://api.example.com/data';

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4){
            if(xhr.status === 200){
                console.log(xhr.responseText); // Handle the response
            }else{
                console.error('There has been a problem with your request: ', xhr.statusText);
            }
        }
    };

    xhr.send();
}

fetchDataWithXHR();