document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
// Empty
}

// alert dialog dismissed
function alertDismissed() {
// do something
}

// Show a custom alertDismissed
//
function showAlert() {
    navigator.notification.alert(
        'You are our 500 pizza winner! You won a free pizza.',  // message
        alertDismissed,         // callback
        'Accept',            // title
        'Done'                  // buttonName
    );
}
