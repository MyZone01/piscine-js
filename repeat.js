const repeat = (strs, number) => strs.split("").reduce((acc, cur, i) => acc += i < number ? cur : "")
