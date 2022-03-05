import colors from 'colors'

export function requestTime(req, res, next){
    req.requestTime = Date.now();
    next() //обозначаем переход к след блоку
}

export function logger(req, res, next){
    console.log(colors.bgMagenta.black(`Req.time: ${req.requestTime}`));
    next()
}