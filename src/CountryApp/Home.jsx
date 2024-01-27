import React, { useEffect,useState } from 'react'
import Country from './Country'
import Search from './Search'
const url = "https://restcountries.com/v3.1/all"
const Home = () => {

  const [isLoading,setisLoading] = useState(true)
  const [error,setError] = useState(null)
  const [countries,setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState(countries)

  const fetchData = async (url)=>{

    setisLoading(true)
    try{
    const response = await fetch(url)
    const data = await response.json()
     setCountries(data)
     setFilteredCountries(data)
     setisLoading(false)
     setError(null)
    }catch(error){
      setisLoading(false)
      setError(error)
    }
  }
  useEffect(()=>{
    fetchData(url)
  },[])

  
const handleRemoveCountry=(name)=>{
 const filter = filteredCountries.filter((countrys)=>countrys.name.common !== name)
  setFilteredCountries(filter)
}
const handleSearch=(searchvalue)=>{
let value = searchvalue.toLowerCase()

let newCountries = countries.filter((country)=>{
  const countryName = country.name.common.toLowerCase()

  return countryName.startsWith(value)
})

setFilteredCountries(newCountries)
  

}

  return   <div>
  <h1 className='CountryApp'>Country App</h1>
          <Search onSearch = {handleSearch}/>
          {isLoading && <h1>Loading...</h1>}
          {error && <h1>something went wrong</h1>}
          {countries && <Country countries={filteredCountries} onRemoveCountry={handleRemoveCountry}/>}
          
    </div>
  
}

export default Home

