function findIP(inputString) {
    const regex = /\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;
    const matches = inputString.match(regex);

    if (!matches) {
        return [];
    }

    // Filter and validate the matches
    const validIPs = matches.filter((ip) => {
        const [ipPart, portPart] = ip.split(':');
        const ipParts = ipPart.split('.').map(Number);

        // Check for valid IP format
        const isValidIP =
            ipParts.length === 4 &&
            ipParts.every((part) => part >= 0 && part <= 255 && String(part).length === String(Number(part)).length);

        // Check for valid port format
        const isValidPort = !portPart || (portPart >= 0 && portPart <= 65535 && String(portPart).length === String(Number(portPart)).length);

        return isValidIP && isValidPort;
    });

    return validIPs;
}