const repeat = (strs, number) => [...Array(number)].reduce((acc, v) => acc = acc ? acc + strs : strs)

