//DARK MODE
var checkBox = document.getElementById("switch");
var theme = window.localStorage.getItem("data-theme");

//code taken from Stack Overflow:https://stackoverflow.com/questions/56871118/change-theme-and-store-it-in-local-storage/56871343#56871343?newreg=df14292f4c21452fb9111541505d1cd2
if (theme) document.documentElement.setAttribute("data-theme", theme);
checkBox.checked = theme == "green" ? true : false;

checkBox.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'green');
        window.localStorage.setItem("data-theme", "green");
    } else {
        document.documentElement.setAttribute('data-theme', 'white');
        window.localStorage.setItem("data-theme", "white");
    }
})
