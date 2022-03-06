<p align="center"><img src="https://pasteimg.com/images/2022/03/06/Untitled-Design.png"/></p>
<p align="center"> 
  <img src="https://img.shields.io/npm/l/kountry?style=flat-square"/>
  <img src="https://img.shields.io/bundlephobia/min/kountry?style=flat-square"/>
  <img src="https://img.shields.io/npm/v/kountry?style=flat-square"/>
  <img src="https://img.shields.io/npm/dependency-version/kountry/dev/nodemon?style=flat-square"/>
  <img src="https://img.shields.io/npm/dm/kountry?style=flat-square"/>
  <img src="https://img.shields.io/jsdelivr/npm/hm/kountry?style=flat-square"/>
  <img src="https://img.shields.io/snyk/vulnerabilities/npm/kountry?style=flat-square"/>
</p>
<p align="center"><b>Node module variant of the <a href="https://github.com/jayantur13/GraphQL-Country-API">Country API</a>,you'll get data in JSON format</b></p>
<hr>

# Features
* Get country data by providing country name
* Get country data by providing country isocode
* Get country data by providing country code
* Get country data by providing a country id (1-243)
* Get top countries according to GDP (ascending/descending order)
* Get top countries according to population (ascending/descending order)
* Sort all country data alphabetically (a-z/z-a)

# Installation
```
//Using npm
npm install kountry

//Using yarn
yarn add kountry
```

# Available methods
* byName(countryName) : provide valid country name
* byIsoCode(isoCode) : provide valid country isocode
* byCountryCode(countryCode) : provide valid countryCode
* byId(countryId) : provide valid country id
* byGdp(sort,limit) : sort countries by Gdp
* byPopulation(sort,limit) : sort countries by population
* doAlphabetically(sort,limit) : sort countries alphabetically

# Examples

* byName(countryName)
@param countryName [String] takes string and is case sensitive

```
const kountry = require('kountry')
const country = kountry.byName('India')
console.log(country)
```

* byPopulation(sort,limit)

@param sort [String] takes either 'asc' or 'desc' for ordering
@param limit [Number] Number must be between >= 4 and 10

```
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
```

>### You can get more documentation while using the method on hover

### Find more on the <a href="https://kountry-readme.vercel.app/examples">Kountry website</a>

### Using this package in your project ? Want to get added here ? Drop a message. 👍

### You can make contributions without breaking changes.Please read the <a href="https://github.com/jayantur13/Kountry/blob/master/CODE_OF_CONDUCT.md">Code-Of-Conduct</a>

### License <a href="https://github.com/jayantur13/Kountry/blob/master/LICENSE">MIT</a>. Please, attribute me and this repo if you use it for any of your purpose

### Last Updated: 26-02-2022

