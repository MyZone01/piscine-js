const repeat = (strs, number) => [...Array(number+1)].reduce((acc, v) => acc = acc ? acc + strs : strs)

