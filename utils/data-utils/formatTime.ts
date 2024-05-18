export const formatTime = (date: Date): String => {

    const { timeZone } = Intl.DateTimeFormat().resolvedOptions()

    const formatter = Intl.DateTimeFormat("en-US", {
        timeZone: timeZone,
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    const result = formatter.format(date);

    return result;
}
