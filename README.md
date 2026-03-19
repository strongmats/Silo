# Silo

A local-first CRM and network relationship mapper built with Electron. Manage contacts, organizations, investors, and tasks in a privacy-focused desktop application that stores all data in portable `.silo` files.

<!-- ![Silo Screenshot](docs/screenshot.png) -->

## Features

- **Entity Management** -- Track people, organizations, programs, investors, and advisors with custom fields, statuses, and notes
- **Task Tracking** -- Manage funding applications, deadlines, milestones, follow-ups, and deliverables with status workflows
- **Network Map** -- Interactive relationship graph powered by vis-network showing connections between entities
- **Timeline View** -- Chronological view of tasks and milestones
- **Customer Segments** -- Define and color-code custom segments for organizing your network
- **Local-First Storage** -- All data saved in portable `.silo` files (JSON-based) -- your data never leaves your machine
- **Cross-Platform** -- Runs on Linux, Windows, and macOS

## Installation

Download the latest release for your platform from the [Releases](https://github.com/strongmats/Silo/releases) page:

| Platform | Format |
|----------|--------|
| Linux    | AppImage |
| Windows  | NSIS Installer (.exe) |
| macOS    | DMG |

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (included with Node.js)

### Getting Started

```bash
git clone https://github.com/strongmats/Silo.git
cd Silo
npm install
npm start
```

### Building

Build the desktop application for your current platform:

```bash
npm run build
```

Build artifacts are output to the `dist/` directory.

## Tech Stack

- [Electron](https://www.electronjs.org/) v33
- Vanilla JavaScript, HTML, CSS
- [vis-network](https://visjs.github.io/vis-network/docs/network/) for interactive network graphs
- [electron-builder](https://www.electron.build/) for cross-platform packaging

## License

MIT License. See [LICENSE](LICENSE) for details.
