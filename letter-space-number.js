var regex = /[a-zA-Z]\s\d(?![0-9a-zA-Z])/g
const letterSpaceNumber = (str) => (str.match(new RegExp(regex)) == null) ? [] : str.match(new RegExp(regex))
