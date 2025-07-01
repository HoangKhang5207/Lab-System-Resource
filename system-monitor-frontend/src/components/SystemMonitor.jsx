import React, { useState, useEffect } from 'react';
import { fetchSystemResources } from '../services/api';
import MemoryPieChart from './MemoryPieChart';
import CpuPieChart from './CpuPieChart';
import DiskPieChart from './DiskPieChart';

const SystemMonitor = () => {
    const [systemData, setSystemData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchSystemResources();
                setSystemData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        // Fetch data immediately and then every 5 seconds
        fetchData();
        const intervalId = setInterval(fetchData, 5000);

        return () => clearInterval(intervalId);
    }, []);

    if (loading) return <div className="loading">Loading system data...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="system-monitor">
            <h2>System Resource Monitor</h2>
            
            <div className="row">
                <div className="col">
                    <MemoryPieChart data={systemData} />
                </div>
                <div className="col">
                    <CpuPieChart data={systemData} />
                </div>
            </div>
            
            <div className="disks-section">
                <h3>Disk Usage</h3>
                <div className="disks-container">
                    {systemData.disks.map((disk, index) => (
                        <DiskPieChart key={index} disk={disk} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SystemMonitor;