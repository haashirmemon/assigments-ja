function markAttendance() {
    const name = document.getElementById("nameInput").value;
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`; // Format the time as HH:MM
    // var da = date.getDate?
    const listItem = document.createElement("div");
    listItem.classList.add("attendance-item");

    if (hours < 10 || (hours === 10 && minutes <= 30)) {
        listItem.textContent = `${name} arrived at ${time}. Good job!`;
    } else {
        listItem.textContent = `${name} arrived at ${time}. You're late!`;
    }

    document.getElementById("attendanceList").appendChild(listItem);
}
