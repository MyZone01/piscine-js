function flags(inputObject) {
    const result = {
        alias: { h: 'help' },
        description: '-h, --help: Display help'
    };

    inputObject.allKeys = Object.keys(inputObject)
    inputObject.help = (inputObject.help) ? inputObject.help : inputObject.allKeys;

    result.alias = {
        ...result.alias, ...inputObject.allKeys.reduce((acc, flag) => {
            const short = flag.charAt(0).toLowerCase();
            const long = flag.toLowerCase();
            acc[short] = long;
            return acc;
        }, {})
    };

    result.description = inputObject.help
        .map((key) => `-${key.charAt(0).toLowerCase()}, --${key.toLowerCase()}: ${inputObject[key]}`)
        .join('\n');

    return result;
}
