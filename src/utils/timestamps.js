const convert_date_timestamp = (timestamp) => {
    const date = new Date(timestamp);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const convert_timestamp = (timestamp) => {
    const seconds = Math.floor(timestamp % 60);
    const minutes = Math.floor((timestamp / 60) % 60);
    const hours = Math.floor((timestamp / 60 / 60));
    let hours_shown = false;
    if(timestamp >= (60 * 60)) hours_shown = true;
    return `${hours_shown ? `${hours <= 9 ? `0${hours}` : hours}:` : ""}${minutes <= 9 ? `0${minutes}` : minutes}:${seconds <= 9 ? `0${seconds}` : seconds}`;
}

export default {
    convert_date_timestamp,
    convert_timestamp,
};