const ele = document.getElementById("button")
ele.addEventListener("click", () => {
    chrome.runtime.sendMessage({ time: "1" }, function(response) {
        console.log(response);
    });
});