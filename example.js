const kountry = require('./kountry') 

function caller(){
    const country = kountry.byName('India')
    console.log(country)
}

caller()
