import { CountryDetailType } from '../../types/Countries'
import {  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, BarChart } from 'recharts';

export const PopulationChart = ({ data }: { data: CountryDetailType }) => {

    console.log(data);
    

    const chartData = data.countryPopulation[0]?.populationCounts.map(count => ({
        year: count.year,
        population: count.value
    }));


    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={300} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="population" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}
