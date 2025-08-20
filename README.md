# Get Out and Play! Board Meeting Dashboard

A stateless web application that displays a personalized visual dashboard for nonprofit board meetings, featuring AI-generated branding and interactive status management.

## Live Demo

Visit the deployed application at [Netlify URL will be here after deployment]

## Features

### Core Functionality
- **Instant Dashboard Display** - No login required, immediate access to board meeting tools
- **Smart Branding System** - Auto-generated logo and color scheme based on nonprofit type
- **AI-Generated Topic Descriptions** - Intelligent descriptions for each agenda item
- **Interactive Topic Cards** - Hover for detailed descriptions, click to edit
- **Drag-and-Drop Reordering** - Prioritize agenda items in real-time
- **Status Tracking** - Mark items as not started, in progress, completed, or deferred
- **Time Management** - Editable time estimates for each topic
- **PDF Export** - Generate professional meeting summaries
- **Responsive Design** - Optimized for desktop presentation and mobile viewing

### Smart Features
- Color-coded priority levels (High, Medium, Low)
- Real-time progress tracking
- Meeting time calculator
- Professional nonprofit aesthetic
- Type-specific branding templates

## Technology Stack

- **Frontend:** React with TypeScript
- **Styling:** CSS3 with CSS Variables
- **Drag & Drop:** @dnd-kit (React 19 compatible)
- **PDF Generation:** jspdf & html2canvas
- **Icons:** Lucide React
- **Fonts:** Google Fonts (type-specific selections)
- **Hosting:** Netlify
- **Build Tool:** Create React App

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ksnyder-mtm/board-meeting-dashboard.git
cd board-meeting-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view in browser

## Configuration

The application is configured with the following default values in `src/App.tsx`:

```typescript
const NONPROFIT_TYPE = 'After School Program for Kids';
const NONPROFIT_NAME = 'Get Out and Play!';
const TOPIC_1 = 'Funding, given the current political climate';
const TOPIC_2 = 'Increase community outreach';
const TOPIC_3 = 'Tracking efficacy';
```

To customize for your nonprofit, simply update these constants.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds for production to the `build` folder
- `npm run eject` - Ejects from Create React App (one-way operation)

## Branding System

The application includes pre-configured branding for various nonprofit types:

- **After School Programs** - Playful colors with Comic Neue font
- **Animal Rescue** - Warm oranges with paw print icon
- **Food Banks** - Greens with harvest theme
- **Environmental** - Earth tones with nature icons
- **Healthcare** - Professional blues with medical themes
- **Education** - Academic purples with book icons

## Usage Guide

### Managing Topics
1. **View Details** - Hover over any topic card to see full description
2. **Edit Time** - Click on the time estimate to modify
3. **Reorder** - Drag cards using the grip handle to rearrange priorities
4. **Update Status** - Click status buttons to track progress

### Exporting
1. Click the "Export PDF" button in the header
2. The current dashboard state will be captured
3. A PDF file will download with the meeting summary

### Responsive Views
- **Desktop** - Full dashboard with side-by-side topic cards
- **Tablet** - Stacked layout with maintained functionality
- **Mobile** - Single column view optimized for phones

## Project Structure

```
board-meeting-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── TopicCard.tsx       # Interactive topic card component
│   ├── utils/
│   │   ├── branding.ts         # Smart branding system
│   │   └── topicDescriptions.ts # AI-style topic generation
│   ├── App.tsx                  # Main application component
│   ├── App.css                  # Styling with CSS variables
│   └── index.tsx                # Application entry point
├── package.json
└── README.md
```

## Deployment

### Deploy to Netlify

This project is configured for easy deployment to Netlify with the included `netlify.toml` file.

#### Option 1: Deploy via Netlify Web Interface (Recommended)

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select the repository: `board-meeting-dashboard`
5. Netlify will auto-detect the build settings from `netlify.toml`
6. Click "Deploy site"

Your site will be live at a Netlify URL (e.g., `https://your-site-name.netlify.app`)

#### Option 2: Deploy using Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --dir=build --prod
```

#### Continuous Deployment

Once connected to GitHub, Netlify will automatically deploy updates when you push to the main branch.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Designed for small to midsize nonprofits (5-1000 FTE)
- Built with accessibility and ease-of-use in mind
- Optimized for board meeting presentations
- No backend required - fully client-side application

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Built with ❤️ for nonprofit organizations**
