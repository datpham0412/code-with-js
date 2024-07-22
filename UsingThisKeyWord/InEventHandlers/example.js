<button id = "myButton">Click me</button>
<script>
    document.getElementById("myButton").addEventListener("click", function() {
        console.log(this); // this refers to button element
    });
</script>