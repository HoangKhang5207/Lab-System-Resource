package com.khang.demoresource.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.khang.demoresource.dto.SystemResourceDTO;
import com.khang.demoresource.service.SystemInfoService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/api/system")
public class SystemInfoController {

    private final SystemInfoService systemInfoService;

    public SystemInfoController(SystemInfoService systemInfoService) {
        this.systemInfoService = systemInfoService;
    }

    @Operation(summary = "Get system resources information")
    @GetMapping("/resources")
    public SystemResourceDTO getSystemResources() {
        return systemInfoService.getSystemResources();
    }
}
