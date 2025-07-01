package com.khang.demoresource.service;

import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.GlobalMemory;
import oshi.software.os.OSFileStore;
import oshi.software.os.OperatingSystem;
import org.springframework.stereotype.Service;

import com.khang.demoresource.dto.SystemResourceDTO;

import java.util.ArrayList;
import java.util.List;

@Service
public class SystemInfoService {

    private final SystemInfo systemInfo = new SystemInfo();

    public SystemResourceDTO getSystemResources() {
        SystemResourceDTO dto = new SystemResourceDTO();

        // Lấy thông tin RAM
        dto.setMemory(getMemoryInfo());

        // Lấy thông tin CPU
        dto.setCpu(getCpuInfo());

        // Lấy thông tin Disk
        dto.setDisks(getDiskInfo());

        return dto;
    }

    private SystemResourceDTO.MemoryInfo getMemoryInfo() {
        GlobalMemory memory = systemInfo.getHardware().getMemory();
        SystemResourceDTO.MemoryInfo memInfo = new SystemResourceDTO.MemoryInfo();
        memInfo.setTotal(memory.getTotal());
        memInfo.setUsed(memory.getTotal() - memory.getAvailable());
        memInfo.setFree(memory.getAvailable());
        return memInfo;
    }

    private SystemResourceDTO.CpuInfo getCpuInfo() {
        CentralProcessor cpu = systemInfo.getHardware().getProcessor();
        SystemResourceDTO.CpuInfo cpuInfo = new SystemResourceDTO.CpuInfo();

        // Lấy số core logic
        cpuInfo.setLogicalCoreCount(cpu.getLogicalProcessorCount());

        // Tính % CPU sử dụng
        double usage = cpu.getSystemCpuLoad(1000) * 100; // Lấy mẫu trong 1 giây
        cpuInfo.setUsedPercentage(Math.round(usage * 100) / 100.0);
        cpuInfo.setFreePercentage(100 - cpuInfo.getUsedPercentage());

        return cpuInfo;
    }

    private List<SystemResourceDTO.DiskInfo> getDiskInfo() {
        List<SystemResourceDTO.DiskInfo> disks = new ArrayList<>();
        OperatingSystem os = systemInfo.getOperatingSystem();

        for (OSFileStore fileStore : os.getFileSystem().getFileStores()) {
            SystemResourceDTO.DiskInfo disk = new SystemResourceDTO.DiskInfo();
            disk.setName(fileStore.getName());
            disk.setTotal(fileStore.getTotalSpace());
            disk.setFree(fileStore.getFreeSpace());
            disk.setUsed(fileStore.getTotalSpace() - fileStore.getFreeSpace());
            disks.add(disk);
        }

        return disks;
    }
}
