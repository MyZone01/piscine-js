const addWeek = (date) => {
    const beginDate = new Date("0001-01-01")
    let tabDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let ms = (date - beginDate) / 86400000
    let res = ms % 14

    if (res < 7) return tabDay[res]
    return "second" + tabDay[res - 7].toString()
}

const timeTravel = (obj) => {
    return new Date(obj.date.setHours(obj.hour, obj.minute, obj.second))
}
