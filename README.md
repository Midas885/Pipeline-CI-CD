# Pipeline CI/CD DevOps
Practica final DevOps

## Requisitos
- Docker 20+
- Node.js 18+
- npm 6+

## Instalación
```bash
# Iniciar aplicación
docker-compose up --build

# Iniciar con monitoreo
docker-compose -f docker-compose.yml -f monitoring/docker-compose-monitoring.yml up
```

## Accesos
- **Aplicación**: http://localhost
- **API Backend**: http://localhost:3000/api
- **Prometheus**: http://localhost:9090
- **Grafana**: http://localhost:3001 (admin/admin)

## Estructura

├── .github/workflows/    # Configuración CI/CD

├── docker/               # Configuración Docker

├── monitoring/           # Sistema de monitoreo

├── src/                  # Código fuente

│   ├── frontend/         # Interfaz web

│   └── backend/          # API Node.js

└── tests/                # Pruebas automatizadas

