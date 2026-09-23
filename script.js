function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (dob === "") {
        document.getElementById("result").innerHTML =
            "⚠️ Please enter your Date of Birth.";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    if (birthDate > today) {
        document.getElementById("result").innerHTML =
            "⚠️ Date of Birth cannot be in the future.";
        return;
    }

    let years =
        today.getFullYear() - birthDate.getFullYear();

    let months =
        today.getMonth() - birthDate.getMonth();

    let days =
        today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        let previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerHTML =
        "🎉 Your Age is<br><br>" +
        years + " Years, " +
        months + " Months, " +
        days + " Days";
}