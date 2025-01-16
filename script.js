document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values from the form
    let room = document.getElementById("room").value;
    let startTime = document.getElementById("startTime").value;
    let endTime = document.getElementById("endTime").value;
    let bookedBy = document.getElementById("bookedBy").value;

    // Display confirmation message
    let confirmationMessage = `You have successfully booked ${room} from ${startTime} to ${endTime} by ${bookedBy}.`;
    document.getElementById("confirmation").innerText = confirmationMessage;
});
