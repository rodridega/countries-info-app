import React, { useEffect } from 'react'
import { MainLayout } from '../../layout/MainLayout'
import { getCountryByCode } from '../../api/api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CountryDetailType } from '../../types/Countries';
import { PopulationChart } from '../../components/CountryDetail/PopulationChart';

export const CountryDetail = () => {

  const [country, setCountry] = React.useState<CountryDetailType | null>(null);
  const { countryCode } = useParams()
  const navigate = useNavigate();
  useEffect(() => {

    if (!countryCode) {
      navigate('/');
      return;
    }


    getCountryByCode(countryCode).then((data) => {
      setCountry(data);
    }).catch((error) => {
      console.error(error);
    })
  }, [countryCode, navigate]);




  return (
    <MainLayout>
      <section className='flex flex-col'>
        {
          !country
            ?
            <div className='w-full flex justify-center col-span-1 md:col-span-2 lg:col-span-3 mt-20'>
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
            :
            <>
              <div className='flex items-center justify-between flex-wrap gap-4'>
                <div className='flex items-center gap-4'>
                  <h1 className='text-4xl font-semibold'>
                    {country?.countryInfo.commonName}
                  </h1>
                  <img src={country?.countryFlag[0]} alt={country?.countryInfo.commonName} className='w-16' />

                </div>
                <Link to='/' className='bg-gray-200 p-2 rounded-lg hover:bg-gray-300'>
                  Back
                </Link>
              </div>

              <div className='mt-10 border rounded p-4'>
                <h3 className='text-2xl'>Border Countries</h3>

                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                  {country?.countryInfo.borders?.map((border) => (
                    <Link key={border.countryCode} className='bg-indigo-50 p-4 rounded-lg cursor-pointer hover:bg-indigo-100' to={`/${border.countryCode}`}>
                      {border.commonName}
                    </Link>
                  ))}
                </ul>
              </div>
              <div className='w-full h-[400px] py-10'>
                {
                  country && <PopulationChart data={country} />
                }

              </div>
            </>
        }
      </section>
    </MainLayout>
  )
}
