import {useState, useEffect} from 'react'
import prueba from '../Data/data.json'


const useObtenerInfo = () => {

	const [datos, arregloDatos] = useState([]);

	useEffect(() => {

		getObtenerInfo()
		console.log(prueba)
		}, [])
	
	
	const getObtenerInfo = async () => {
		try{
			const resData = await fetch(`../Data/data.json` , {
				method:"GET"
			});

			const info = await resData.json

			console.log(info.destinations)
			console.log(resData)
			arregloDatos(resData)
		}
		catch(error){
			arregloDatos(" 404 Data no found ")
		}

	}
	return [datos]
};

export default useObtenerInfo;
