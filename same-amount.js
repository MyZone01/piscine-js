const sameAmount = (str, reg1, reg2) => (str.match(new RegExp(reg1))||[]).length === (str.match(new RegExp(reg2))||[]).length
