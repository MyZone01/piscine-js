const is = {}
is.num = (n) => typeof n === 'number'
is.nan = (n) => Number.isNaN(n)
is.str = (s) => typeof s === 'string'
is.bool = (b) => typeof b === 'boolean'
is.undef = (u) => typeof u === 'undefined'
is.def = (d) => !(typeof d === 'undefined')
is.arr = (a) => Array.isArray(a)
is.obj = (o) => (typeof o === 'object' || o === null) && !Array.isArray(o)
is.obj = (o) => typeof(o) === 'object' ? toString.call(o).slice(8, -1) === 'Array' ? "" : o === null ? "" : typeof o:  "" ;
is.fun = (f) => typeof f === 'function'
is.truthy = n => n ? true : false
is.falsy = n => !n ? true : false
