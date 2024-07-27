function postDataWithXHR(){
    const xhr = new XMLHttpRequest();
    const url = 'https://api.example.com/data';
    const data = JSON.stringify({key: 'value'});

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText); // Handle the response
        }
    };

    xhr.send(data);
}

postDataWithXHR();