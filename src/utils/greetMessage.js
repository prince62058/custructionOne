function getIndianGreeting() {
    // Get Indian time directly using Intl.DateTimeFormat
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        hour12: false,
        minute: "2-digit",
        second: "2-digit",
    });

    const parts = formatter.formatToParts(new Date());
    const hour = parseInt(parts.find(part => part.type === "hour").value);

    let greeting = "";
    let emoji = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
        emoji = "🌅";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
        emoji = "☀️";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening";
        emoji = "🌆";
    } else {
        greeting = "Good Night";
        emoji = "🌙";
    }

    // Use full date & time in IST
    const dateFormatter = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "medium",
    });

    const indianTimeString = dateFormatter.format(new Date());

    return {
        message: greeting,
        emoji: emoji,
        datetime: indianTimeString,
        hour: hour
    };
}

export default getIndianGreeting;
