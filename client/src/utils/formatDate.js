// function for formating timestamp in mm/dd/yyyy

function formatTimestamp(timestamp) {
    const timestampDate = new Date(timestamp).toLocaleDateString("en-US", { timeZone: "UTC", year: "numeric", month: "2-digit", day: "2-digit" });
    return timestampDate;
}
export default formatTimestamp;
