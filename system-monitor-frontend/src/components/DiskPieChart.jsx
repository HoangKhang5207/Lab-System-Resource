import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const DiskPieChart = ({ disk }) => {
    const diskData = [
        { name: 'Used', value: disk.used },
        { name: 'Free', value: disk.free }
    ];
    
    const COLORS = ['#9966FF', '#FF9F40'];
    
    return (
        <div className="chart-container">
            <h4>Disk: {disk.name}</h4>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={diskData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    >
                        {diskData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
            <p>Total: {(disk.total / (1024 ** 3)).toFixed(2)} GB</p>
        </div>
    );
};

export default DiskPieChart;