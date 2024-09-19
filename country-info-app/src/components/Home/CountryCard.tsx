import { useNavigate } from 'react-router-dom';
import { Country } from '../../types/Countries'

export const CountryCard = ({ country }: { country: Country }) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/${country.countryCode}`)
    }

    return (
        <div key={country.countryCode} className="bg-indigo-50 p-4 rounded-lg cursor-pointer hover:bg-indigo-100" onClick={(handleNavigate)}>
            <h3 className="text-xl font-bold">{country.name}</h3>
            <p className="text-lg">Code: {country.countryCode}</p>
        </div>
    )
}
