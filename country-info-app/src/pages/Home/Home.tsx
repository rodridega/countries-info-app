import { useEffect, useState } from 'react'
import { MainLayout } from '../../layout/MainLayout'
import { getCountries } from '../../api/api';
import { Country } from '../../types/Countries';
import { CountryCard } from '../../components/Home/CountryCard';

export const Home = () => {

    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        getCountries().then((data) => {
            setCountries(data);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            console.error(error);
        });
    }, []);



    return (
        <MainLayout>
            <h1 className="text-4xl font-bold text-center text-zinc-700">Country Info App</h1>

            <h2 className="text-2xl font-bold mt-8 text-center">Countries List</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
                {
                    loading
                        ?
                        <div className='w-full flex justify-center col-span-1 md:col-span-2 lg:col-span-3 mt-20'>
                            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>

                        </div>
                        :
                        countries.map((country) => (
                            <CountryCard country={country} />
                        ))}
            </div>



        </MainLayout>
    )
}
