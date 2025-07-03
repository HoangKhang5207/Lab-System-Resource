# System Resource Monitor

A comprehensive web-based monitoring tool for real-time tracking of system resources, including CPU, memory, and disk usage. Built with a Java Spring Boot backend and a ReactJS frontend, this project offers intuitive dashboards and robust APIs for integration and automated alerts.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)

   * [Backend Setup](#backend-setup)
   * [Frontend Setup](#frontend-setup)
5. [Usage](#usage)

   * [API Endpoints](#api-endpoints)
   * [Testing](#testing)
6. [Visualization](#visualization)
7. [Directory Structure](#directory-structure)

---

## Features

* **Real-Time Monitoring**: View current CPU, memory, and disk usage at a glance.
* **RESTful API**: Fetch system metrics programmatically via a clean HTTP interface.
* **Interactive Dashboard**: Dynamic charts powered by ReactJS for time-series visualization.

## Tech Stack

* **Backend**: Java 17+, Spring Boot, Maven
* **Frontend**: ReactJS, Node.js 18+, npm
* **API Documentation**: Swagger UI
* **Charts**: Chart.js or Recharts

## Prerequisites

* Java 17 or higher
* Maven 3.6+
* Node.js 18 or higher
* npm or yarn
* Git

## Installation

### Backend Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/HoangKhang5207/Lab-System-Resource.git
   cd demo-resource
   ```
2. **Build and run**

   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
3. **Swagger UI**

   * Open [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html) to explore the API.

### Frontend Setup

1. **Navigate to frontend directory**

   ```bash
   cd system-monitor-frontend
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Run development server**

   ```bash
   npm run dev
   ```
4. **Access the dashboard**

   * Visit [http://localhost:5173](http://localhost:5173).

## Usage

### API Endpoints

* **Get System Resources**

  * **Endpoint**: `GET /api/system/resources`
  * **Description**: Returns current CPU, memory, and disk usage.
  * **Request Header**:

    ```http
    Accept: application/json
    ```
  * **Sample Response**:

    ```json
    {
      "memory": { "total": 16384, "used": 8192, "free": 8192 },
      "cpu": { "logicalCoreCount": 8, "usedPercentage": 0.35, "freePercentage": 0.65 },
      "disks": [
        { "name": "C:\\", "total": 256000, "used": 128000, "free": 128000 }, ...
      ]
    }
    ```

### Testing

You can test the API using the following tools:

* **Postman**:

  1. Create a new collection named **System Resource API**.
  2. Add a **GET** request to `http://localhost:8080/api/system/resources`.
  3. Set header `Accept: application/json` and click **Send**.

* **cURL**:

  ```bash
  curl -X GET "http://localhost:8080/api/system/resources" -H "Accept: application/json"
  ```

* **Swagger UI**:

  1. Navigate to `http://localhost:8080/swagger-ui.html`.
  2. Select **GET /api/system/resources**.
  3. Click **Try it out** and then **Execute**.

## Visualization

The frontend displays resource usage charts for quick analysis:

* **Memory Usage**: Pie chart showing used vs. free memory.
* **CPU Load**: Gauge or line chart for CPU utilization.
* **Disk Space**: Doughnut chart for each mounted volume.

## Directory Structure

```
Lab-System-Resource/
├─ demo-resource/          # Backend (Spring Boot)
│  ├─ src/main/java        # Java source code
│  ├─ src/main/resources   # Configurations and Swagger settings
│  └─ target/              # Compiled artifacts
├─ system-monitor-frontend/ # Frontend (ReactJS)
│  ├─ src/                 # React components and pages
│  └─ public/              # Static assets
└─ README.md               # Project overview and instructions
```

---

*Last updated: July 3, 2025*
