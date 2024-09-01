// Function to detect if the user is on a mobile device
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Get the Gmail link element
const gmailLink = document.getElementById('gmailLink');

// Adjust the href attribute based on the device type
if (!isMobileDevice()) {
    // For desktop or laptop, use Gmail's web compose URL
    gmailLink.href = "https://mail.google.com/mail/?view=cm&fs=1&to=anaskhan3458027@gmail.com";
}
