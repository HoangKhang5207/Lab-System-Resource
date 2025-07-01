import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const MemoryPieChart = ({ data }) => {
    const memoryData = [
        { name: 'Used', value: data.memory.used },
        { name: 'Free', value: data.memory.free }
    ];
    
    const COLORS = ['#FF6384', '#36A2EB'];
    
    return (
        <div className="chart-container">
            <h3>Memory Usage</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={memoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    >
                        {memoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
            <p>Total: {(data.memory.total / (1024 ** 3)).toFixed(2)} GB</p>
        </div>
    );
};

export default MemoryPieChart;