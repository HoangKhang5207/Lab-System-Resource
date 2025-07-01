import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const CpuPieChart = ({ data }) => {
    const cpuData = [
        { name: 'Used', value: data.cpu.usedPercentage },
        { name: 'Free', value: data.cpu.freePercentage }
    ];
    
    const COLORS = ['#FFCE56', '#4BC0C0'];
    
    return (
        <div className="chart-container">
            <h3>CPU Usage</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={cpuData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                    >
                        {cpuData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
            <p>Logical Cores: {data.cpu.logicalCoreCount}</p>
        </div>
    );
};

export default CpuPieChart;