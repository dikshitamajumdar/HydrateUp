chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(

            {
                type: "basic",
                iconUrl: "alarm.png",
                title: "Stay Hydrated",
                message: "Take a sip of water before going back to work!",
                silent: false
            },
            () => {}
        )
    },
)
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        if (request.time)
            createAlarm();

        sendResponse(() => {
            return false
        });
    }
);

function createAlarm() {
    chrome.alarms.create(
        "Stay Hydrated", {
            delayInMinutes: 1,
            periodInMinutes: 1
        }
    );
}