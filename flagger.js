function flags(inputObject) {
    const result = {
        alias: { h: 'help' },
        description: '-h, --help: Display help'
    };

    inputObject.help = (inputObject.help) ? inputObject.help : Object.keys(inputObject);

    result.alias = {
        ...result.alias, ...inputObject.help.reduce((acc, flag) => {
            const short = flag.charAt(0).toLowerCase();
            const long = flag.toLowerCase();
            acc[short] = long;
            return acc;
        }, {})
    };

    result.description = Object.entries(inputObject)
        .filter(([key]) => inputObject.help.includes(key))
        .map(([key, value]) => `-${key.charAt(0).toLowerCase()}, --${key.toLowerCase()}: ${value}`);

    return result;
}
