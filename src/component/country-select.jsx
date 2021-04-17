import React, { useEffect, useState } from "react";
import CountryService from '../services/country-service';
import { Button, DatePicker, version,Select } from "antd";
import "../assets/css/country.css"
export default function CountrySelect(props) {
  const { Option } = Select;
  const [countryList,setCountryList] = useState([]);
  const [provinceList,setProvinceList] = useState([]);
  const [isProvince,setIsProvince] = useState(false);
  const [country,setCountry] = useState();
  const [province,setProvince] = useState();

  useEffect(() => {
    if(countryList.length == 0){
      getCountryService();
    }
  },[countryList,isProvince]);

  const handleChange = (id,type) => {
    
    if(type == 'country'){
      let country = countryList.find(i => i.id == id);
      setCountry(country);
      setProvinceList(country.provinces);
      if(country.provinces.length > 0){
        setIsProvince(true);
      }
    }else if(type == 'province'){
      setProvince(id);
      let pProvince = country.provinces.find(i => i.id == id);

      props.onSelect({"country" : country.name,"province" : pProvince.name});
    }
  };

	const getCountryService = () => {
		try {
			(async () => {
				await CountryService.get(`http://localhost:8080/api/country/all`).then((response) => {
          setCountryList(response.data);
				})
			})();
		} catch (e) {
		}
	};

  return (
    <>
      <Select style={{ width: 120 }} onChange={(e)=> handleChange(e,'country')}>
        {countryList.map(result=>{
          return(
          <option key={result.id} value={result.id}>{result.name}</option>
          )
        })}
      </Select>
      {isProvince ? <Select style={{ width: 120 }} onChange={(e)=>handleChange(e,'province')}>
        {provinceList.map(result=>{
          return(
          <option key={result.id} value={result.id}>{result.name}</option>
          )
        })}
      </Select> : ''}
    </>
  );
}