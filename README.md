# Vragenlijst Bedrijfsarts

## Project Overview

A secure, GDPR-compliant web application for employee health intake questionnaires preceding occupational physician consultations.

### Key Features

- **Intuitive Interface**: Progress tracking, clear instructions, logical question flow
- **Privacy-Focused**: End-to-end encryption, GDPR/AVG compliance
- **Automated Reporting**: Converts responses into structured reports
- **Secure Delivery**: Email integration with explicit consent management

## Tech Stack

- **Frontend**: React with TypeScript
- **Backend**: Node.js/Express
- **Database**: PostgreSQL with encryption
- **Testing**: Jest + Cypress
- **CI/CD**: GitHub Actions
- **Deployment**: Docker

## Project Structure

```
├── frontend/              # React application
├── backend/               # Express API server
├── docs/                  # Documentation
├── docker/                # Container configuration
├── tests/                 # Test suites
└── scripts/               # Utility scripts
```

## Quick Start

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 14+

### Local Development

```bash
# Backend setup
cd backend
npm install
npm run dev

# Frontend setup (in new terminal)
cd frontend
npm install
npm start
```

### Docker Deployment

```bash
docker-compose up -d
```

Access the application at `http://localhost:3000`

## Documentation

- [Privacy Policy](./docs/PRIVACY.md)
- [API Documentation](./docs/API.md)
- [Setup Guide](./docs/SETUP.md)
- [Contributing Guidelines](./CONTRIBUTING.md)

## GDPR/AVG Compliance

This application implements:
- Explicit user consent management
- Data encryption (in transit & at rest)
- Audit logging
- Right to deletion
- Data export functionality

For detailed privacy information, see [PRIVACY.md](./docs/PRIVACY.md)

## License

[Add appropriate license]

## Support

For issues or questions, please open a GitHub issue or contact the development team.
