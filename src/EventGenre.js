import React, {useEffect, useState} from 'react';
import {PieChart, Pie,  Cell, ResponsiveContainer} from 'recharts';

const EventGenre = ({events}) => {
    const [data, setData] = useState([]);
    

    useEffect(() => { 
        const getData = () => {
            const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
            const data = genres.map((genre) => {
                const value = events.filter(({summary}) => summary.split(' ').includes(genre)).length;
                return {genre, value}
            });
            return data;
        };
        setData(() => getData());    
    }, [events])

    const COLORS = ['#DDF8E8', '#CDD5D1', '#B4A6AB', '#946E83', '#615055'];

    return (
        <ResponsiveContainer height={400}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
export default EventGenre;