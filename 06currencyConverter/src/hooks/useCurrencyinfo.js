import { useEffect, useState } from "react";

// making custom hook 

function useCurrencyInfo(currency){
  const [data, setData] = useState({})
  useEffect( () => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then( (res) => res.json() ) // because mostly type of the API are in string , hence we have to convert it in JSON
    .then( (res) => setData(res[currency]) )
     console.log(data);
    
  } , [currency] )

  console.log(data);
  return data  
}

export default useCurrencyInfo ; 