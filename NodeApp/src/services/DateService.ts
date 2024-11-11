

const getDay = (selectedDate?: string | Date) => {
    const date = selectedDate ? new Date(selectedDate) : new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return dayNames[date.getDay()];
}


export {
    getDay
}