const dataSource = require('./data')

let cdata = null
cdata = dataSource.getCountryData()

const MAX = cdata.length
const MIN = 4

let datareturn = null


/**
 * Get data of a single country with countryname as parameter
 * @param countryName [String] takes string and is case sensitive
 * @example - Usage
const kountry = require('kountry') 
const country = kountry.byName('India')
console.log(country)
 * @return data in json
 * @link https://github.com/jayantur13/Kountry
 * @since v1.0.0
 */
const byName = (param) => {
    if (param != null) {
        datareturn = cdata.find(data => data.CountryName === param)
        if(datareturn === undefined) return 'Parameter must be valid,please check it' 
        else return datareturn
    }else {
        return 'Error - Missing parameter countryName, Example - byName("India")'
    }
}

/**
 * Get data of a single country with isocode as parameter
 * @param IsoCode [String] takes string and is case sensitive
 * @example - Usage
const kountry = require('kountry') 
// Two character isocode
const country = kountry.byIsoCode('IN')

// Three character isocode
const country = kountry.byIsoCode('IND')
console.log(country)
 * @return data in json
 * @link https://github.com/jayantur13/Kountry
 * @since v1.0.0
 */
const byIsoCode = (param) => {
    if (param != null) {
        if(param.length == 2) {
            datareturn = cdata.find(data => data.IsoCode.startsWith(param))
            if(datareturn === undefined) return 'Parameter must be valid,please check it' 
            else return datareturn
        }
        else if(param.length == 3) {
            datareturn = cdata.find(data => data.IsoCode.endsWith(param))
            if(datareturn === undefined) return 'Parameter must be valid,please check it' 
            else return datareturn
        }
        else {
            return 'Isocode must be two or three characters'
        }
    }else {
        return 'Error - Missing parameter IsoCode, Example - byIsoCode("IN" or "IND")'
    }
}

/**
 * Get data of a single country with countrycode as parameter
 * @param CountryCode [Number/String] takes a valid number/string that exists
 * @example - Usage
const kountry = require('kountry') 
//Codes without '-'
const country = kountry.byCountryCode(91)

//Codes with '-'
const country = kountry.byCountryCode('1-849')
console.log(country)
 * @return data in json
 * @link https://github.com/jayantur13/Kountry
 * @since v1.0.0
 */
const byCountryCode = (param) => {
    if (param != null) {
        datareturn = cdata.find(data => String(data.CountryCode) === String(param))
        if(datareturn === undefined) return 'Parameter must be valid,please check it' 
        else return datareturn
    }else {
        return 'Error - Missing parameter countryCode, Example - byCountryCode(91 or "1-869")'
    }
}

/**
 * Get data of a single country with country Id as parameter
 * @param id [Number] takes a valid number that exists
 * @example - Usage
const kountry = require('kountry') 
const country = kountry.byId(91)
console.log(country)
 * @return data in json
 * @link https://github.com/jayantur13/Kountry
 * @since v1.0.0
 */
const byId = (param) => {
    if (param != null) {
        if(!Number.isInteger(param)){
          return "Id must be a number"
        }else{
            datareturn = cdata.find(data => data.id === param)
            if(datareturn === undefined) return 'Parameter must be valid,please check it' 
            else return datareturn
        }
    }else {
        return 'Error - Missing parameter id, Example - byName(180)'
    }
}

/**
 * Get top country data by GDP in ascending/descending order
 * @param sort [String] takes either 'asc' or 'desc' for ordering
 * @param limit [Number] Number must be between >= 4 and 10
 * @example - Usage
const kountry = require('kountry')
//Defaults to sort = 'asc' and limit is 4
const country = kountry.byGdp()

//Ascending order limit default is 4
const country = kountry.byGdp(sort='asc',limit=4)

//Descending order limit default is 4
const country = kountry.byGdp(sort='desc',limit=4)

//Ascending order limit 8
const country = kountry.byGdp(sort='asc',limit=8)

//Descending order limit 8
const country = kountry.byGdp(sort='desc',limit=8)
console.log(country)
 * @return data in json
 * @link https://github.com/jayantur13/Kountry
 * @since v1.0.0
 */
const byGdp = (sort = 'asc',limit = MIN) => {
 if(sort!=null && limit!=null){
     if(sort === 'asc' && limit === MIN){
        datareturn = cdata.sort((x,y) => {return parseInt(x.GDPUSD) - parseInt(y.GDPUSD)}).slice(0,MIN)
        return datareturn
     }else if(sort === 'desc' && limit === MIN){
        datareturn = cdata.sort((x,y) => {return parseInt(y.GDPUSD) - parseInt(x.GDPUSD)}).slice(0,MIN)
        return datareturn
     }else{
         if(sort === 'asc' && (limit != undefined && limit >= MIN && limit < 9)){
            datareturn = cdata.sort((x,y) => {return parseInt(x.GDPUSD) - parseInt(y.GDPUSD)}).slice(0,MIN)
            return datareturn
         }else if(sort === 'desc' && (limit != undefined && limit >= MIN && limit < 9)){
            datareturn = cdata.sort((x,y) => {return parseInt(y.GDPUSD) - parseInt(x.GDPUSD)}).slice(0,MIN)
            return datareturn
         }else{
            return 'Limit must be between >= 4 and 10'
         }
     }
 }else{
    return 'Error - Missing parameters'
}
}

/**
 * Get top country data by population in ascending/descending order
 * @param sort [String] takes either 'asc' or 'desc' for ordering
 * @param limit [Number] Number must be between >= 4 and 10
 * @example - Usage
const kountry = require('kountry') 
//Defaults to sort = 'asc' and limit is 4
const country = kountry.byPopulation()

//Ascending order limit default is 4
const country = kountry.byPopulation(sort='asc',limit=4)

//Descending order limit default is 4
const country = kountry.byPopulation(sort='desc',limit=4)

//Ascending order limit 8
const country = kountry.byPopulation(sort='asc',limit=8)

//Descending order limit 8
const country = kountry.byPopulation(sort='desc',limit=8)
console.log(country)
 * @return data in json
 * @link https://github.com/jayantur13/Kountry
 * @since v1.0.0
 */
const byPopulation = (sort = 'asc',limit = MIN) => { 
 if(sort!=null && limit!=null){
    if(sort === 'asc' && limit === MIN){
        datareturn = cdata.sort((x,y) => {return parseInt(x.Population.replaceAll(/,/g,'')) - parseInt(y.Population.replaceAll(/,/g,''))}).slice(0,MIN)
        return datareturn
    }else if(sort === 'desc' && limit === MIN){
        datareturn = cdata.sort((x,y) => {return parseInt(y.Population.replaceAll(/,/g,'')) - parseInt(x.Population.replaceAll(/,/g,''))}).slice(0,MIN)
        return datareturn
    }
    else {
        if(sort === 'asc' && (limit != undefined && limit >= MIN && limit < 9)){
            datareturn = cdata.sort((x,y) => {return parseInt(x.Population.replaceAll(/,/g,'')) - parseInt(y.Population.replaceAll(/,/g,''))}).slice(0,limit)
            return datareturn
        }else if(sort === 'desc' && (limit != undefined && limit >= MIN && limit < 9)){
            datareturn = cdata.sort((x,y) => {return parseInt(y.Population.replaceAll(/,/g,'')) - parseInt(x.Population.replaceAll(/,/g,''))}).slice(0,limit)
            return datareturn
        }else {
            return 'Limit must be between >= 4 and 10'
        }
    }
 }else{
    return 'Error - Missing parameters'
}
}

/**
 * Get country data sorted alphabetically in a-z or z-a i.e ascending or descending order
 * @param sort [String] takes either 'asc' or 'desc' for ordering
 * @param limit [Number] Number must be between >= 4 and < MAX i.e total length
 * @example - Usage
const kountry = require('kountry') 
//Defaults to sort = 'asc' and limit is 4
const country = kountry.doAlphabetically()

//Ascending order limit default is 4
const country = kountry.byPopulation(sort='asc',limit=4)

//Descending order limit default is 4
const country = kountry.byPopulation(sort='desc',limit=4)

//Ascending order limit MAX i.e total length
const country = kountry.byPopulation(sort='asc',limit=kountry.MAX)

//Descending order limit MAX i.e total length
const country = kountry.byPopulation(sort='desc',limit=kountry.MAX)

//Ascending order limit 8
const country = kountry.byPopulation(sort='asc',limit=8)

//Descending order limit 8
const country = kountry.byPopulation(sort='desc',limit=8)
console.log(country)
 * @return data in json
 * @link https://github.com/jayantur13/Kountry
 * @since v1.0.0
 */
const doAlphabetically = (sort = 'asc',limit = MIN) => {
 if(sort!=null && limit!=null){
   if(sort === 'asc' && limit === MIN)
   {
    datareturn = cdata.sort(data => data.CountryName).slice(0,limit)
    return datareturn
   }
   else if(sort === 'desc' && limit === MIN)
   {
    datareturn = cdata.sort(data => data.CountryName).slice(0,limit)
    return datareturn.reverse()
   }
   else if(sort === 'asc' && limit === MAX)
   {
    datareturn = cdata.sort(data => data.CountryName).slice(0,limit)
    return datareturn
   }
   else if(sort === 'desc' && limit === MAX)
   {
    datareturn = cdata.sort(data => data.CountryName).slice(0,limit)
    return datareturn.reverse()
   }
   else {
    if(sort === 'asc' && (limit != undefined && limit >= MIN && limit < MAX))
   {
    datareturn = cdata.sort(data => data.CountryName).slice(0,limit)
    return datareturn
   }
   else if(sort === 'desc' && (limit != undefined && limit >= MIN && limit < MAX))
   {
    datareturn = cdata.sort(data => data.CountryName).slice(0,limit)
    return datareturn.reverse()
   }
   else {
    return 'Limit must be between >= 4 and 241'
   }
   }
 }else{
     return 'Error - Missing parameters'
 }
}

module.exports = {
    byName,
    byCountryCode,
    byId,
    byIsoCode,
    byPopulation,
    doAlphabetically,
    byGdp,
    MAX,
    MIN
}

