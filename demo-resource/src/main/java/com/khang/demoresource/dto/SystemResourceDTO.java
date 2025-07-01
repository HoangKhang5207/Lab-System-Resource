package com.khang.demoresource.dto;

import lombok.Data;
import java.util.List;

@Data
public class SystemResourceDTO {
    private MemoryInfo memory;
    private CpuInfo cpu;
    private List<DiskInfo> disks;

    @Data
    public static class MemoryInfo {
        private long total;
        private long used;
        private long free;
    }

    @Data
    public static class CpuInfo {
        private int logicalCoreCount;
        private double usedPercentage;
        private double freePercentage;
    }

    @Data
    public static class DiskInfo {
        private String name;
        private long total;
        private long used;
        private long free;
    }
}
