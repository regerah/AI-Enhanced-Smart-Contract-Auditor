# 🔒 AI-Enhanced Smart Contract Auditor

[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Flask](https://img.shields.io/badge/Flask-2.3.3-green?style=for-the-badge&logo=flask)](https://flask.palletsprojects.com/)
[![Python](https://img.shields.io/badge/Python-3.8+-blue?style=for-the-badge&logo=python)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

> **A cutting-edge, AI-powered smart contract security auditing platform that combines GPT-4 analysis with Slither static analysis to provide comprehensive security assessments of Solidity smart contracts.**

## 🌟 Features 

### 🤖 AI-Powered Analysis
- **GPT-4 Integration**: Advanced AI analysis for intelligent vulnerability detection
- **Contextual Understanding**: AI provides context-aware security insights
- **Fix Suggestions**: AI-generated recommendations for vulnerability remediation
- **Best Practices**: Identifies violations of Solidity best practices

### 🔍 Static Analysis
- **Slither Integration**: Automated security checks using Trail of Bits' Slither
- **Comprehensive Scanning**: Detects reentrancy, access control, and overflow vulnerabilities
- **Real-time Processing**: Live analysis progress with step-by-step feedback
- **Detailed Reports**: Comprehensive vulnerability reports with severity levels

### 🎨 Modern UI/UX
- **Beautiful Interface**: Modern, responsive design with animated components
- **Real-time Progress**: Live analysis progress indicators
- **Drag & Drop**: File upload support for contract files
- **Code Highlighting**: Syntax highlighting for Solidity code
- **Floating Particles**: Engaging background animations

### 📊 Security Features
- **Security Scoring**: Automated security score calculation
- **Risk Assessment**: Comprehensive risk evaluation
- **Vulnerability Categories**: Categorized security issues
- **Fix Recommendations**: Detailed remediation guidance

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.0.0 | React framework with App Router |
| **React** | 18.2.0 | UI library |
| **TypeScript** | 5.2.2 | Type-safe development |
| **Tailwind CSS** | 3.3.5 | Utility-first styling |
| **Framer Motion** | 10.16.0 | Smooth animations |
| **Lucide React** | 0.292.0 | Beautiful icons |
| **React Syntax Highlighter** | 15.5.0 | Code highlighting |
| **React Dropzone** | 14.2.3 | File upload |
| **React Hot Toast** | 2.4.1 | Notifications |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Flask** | 2.3.3 | Python web framework |
| **OpenAI GPT-4** | Latest | AI-powered analysis |
| **Slither** | Latest | Static analysis tool |
| **Flask-CORS** | Latest | Cross-origin resource sharing |

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **Python** 3.8+
- **OpenAI API key**

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ai-smart-contract-auditor.git
cd ai-smart-contract-auditor
```

### 2. Frontend Setup
```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

### 3. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Install Slither
pip install slither-analyzer

# Create environment file
cp env.example .env

# Add your OpenAI API key to .env
echo "OPENAI_API_KEY=your_openai_api_key_here" >> .env

# Start the backend server
python app.py
```

### 4. Access the Application
Open your browser and navigate to `http://localhost:3000`

## 📋 Usage Guide

### Step-by-Step Process
1. **Open the Application** at `http://localhost:3000`
2. **Paste your Solidity contract** in the code editor or upload a file
3. **Click "Audit Contract"** to start the analysis
4. **Watch the real-time progress** as the AI analyzes your contract
5. **Review the comprehensive report** with vulnerabilities and fixes

### Supported Contract Features
- ✅ **Reentrancy Detection**: Identifies reentrancy vulnerabilities
- ✅ **Access Control**: Checks for proper access control mechanisms
- ✅ **Integer Overflow**: Detects potential overflow issues
- ✅ **Unchecked External Calls**: Identifies unsafe external calls
- ✅ **Gas Optimization**: Suggests gas optimization opportunities
- ✅ **Best Practices**: Validates Solidity best practices

## ⚙️ Configuration

### Environment Variables

#### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

#### Backend (.env)
```env
OPENAI_API_KEY=your_openai_api_key_here
FLASK_ENV=development
FLASK_DEBUG=True
HOST=0.0.0.0
PORT=5000
```

## 🏗️ Project Structure

```
├── 📁 app/                    # Next.js app directory
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── 📁 components/            # React components
│   ├── AIBrain.tsx          # AI visualization
│   ├── AnalysisPanel.tsx    # Analysis progress
│   ├── AuditButton.tsx      # Audit trigger
│   ├── CodeEditor.tsx       # Code input
│   ├── ErrorBoundary.tsx    # Error handling
│   ├── FloatingParticles.tsx # Background effects
│   ├── Header.tsx           # App header
│   └── ResultsPanel.tsx     # Results display
├── 📁 contexts/             # React contexts
│   └── AuditContext.tsx     # State management
├── 📁 lib/                  # Utilities
│   └── api.ts              # API service layer
├── 📁 backend/             # Flask backend
│   ├── app.py              # Main Flask app
│   ├── requirements.txt    # Python dependencies
│   ├── env.example        # Environment template
│   └── venv/              # Virtual environment
├── 📄 package.json         # Node.js dependencies
├── 📄 tailwind.config.js  # Tailwind configuration
├── 📄 tsconfig.json       # TypeScript configuration
└── 📄 README.md           # Project documentation
```

## 🔒 Security Features

### Input Validation
- All user inputs are validated and sanitized
- Comprehensive error handling and user feedback
- Rate limiting to prevent API abuse

### Secure Communication
- HTTPS support for production deployments
- CORS configuration for secure cross-origin requests
- Environment variable protection

### Analysis Security
- Temporary file handling for contract analysis
- Timeout protection for long-running analyses
- Secure API key management

## 🚀 Deployment

### Frontend Deployment (Vercel)
```bash
npm run build
vercel --prod
```

### Backend Deployment (Heroku)
```bash
cd backend
heroku create your-app-name
git push heroku main
```

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 🧪 Testing

### Frontend Testing
```bash
npm run test
npm run test:watch
```

### Backend Testing
```bash
cd backend
python -m pytest
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Style
- Follow the existing code style
- Use TypeScript for frontend development
- Add proper error handling
- Include meaningful commit messages

## 📊 Performance

### Frontend Performance
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with Next.js
- **Loading Time**: < 2 seconds initial load

### Backend Performance
- **Response Time**: < 5 seconds for analysis
- **Concurrent Requests**: Supports multiple simultaneous audits
- **Memory Usage**: Optimized for production workloads

## 🔧 Troubleshooting

### Common Issues

#### Frontend Issues
- **Port 3000 in use**: Change port in `package.json` scripts
- **API connection failed**: Check backend server and CORS settings
- **Build errors**: Clear `.next` folder and reinstall dependencies

#### Backend Issues
- **Slither not found**: Install with `pip install slither-analyzer`
- **OpenAI API errors**: Verify API key and quota
- **Permission errors**: Check file permissions for temporary files

## 📈 Roadmap

### Upcoming Features
- [ ] **Multi-contract Analysis**: Analyze multiple contracts simultaneously
- [ ] **Custom Rules Engine**: User-defined security rules
- [ ] **Integration APIs**: Connect with popular development tools
- [ ] **Advanced Reporting**: PDF reports and detailed analytics
- [ ] **Team Collaboration**: Shared audit results and comments

### Planned Improvements
- [ ] **Performance Optimization**: Faster analysis times
- [ ] **Enhanced AI Models**: More accurate vulnerability detection
- [ ] **Mobile Support**: Responsive mobile interface
- [ ] **Dark Mode**: Theme customization options

## 📞 Support

### Getting Help
- 📖 **Documentation**: Check this README and code comments
- 🐛 **Issues**: Report bugs via [GitHub Issues](https://github.com/yourusername/ai-smart-contract-auditor/issues)
- 💬 **Discussions**: Join our [GitHub Discussions](https://github.com/yourusername/ai-smart-contract-auditor/discussions)
- 📧 **Email**: Contact maintainers directly

### Community
- **Discord**: Join our community server
- **Twitter**: Follow for updates and announcements
- **Blog**: Read our technical articles and tutorials

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for providing the GPT-4 API
- **Trail of Bits** for the Slither static analysis tool
- **Vercel** for the Next.js framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for the smooth animations
- **Lucide** for the beautiful icons

## 📊 Sample Images

<img width="1802" height="646" alt="image" src="https://github.com/user-attachments/assets/6be07d1c-8523-4c1b-8b15-649c56fcc09c" />
<img width="874" height="590" alt="image" src="https://github.com/user-attachments/assets/e6b67988-dd29-415b-b967-e1ed23cf7b04" />
<img width="886" height="725" alt="image" src="https://github.com/user-attachments/assets/0a348ccd-a970-4832-91a2-40ee102b541d" />
<img width="866" height="705" alt="image" src="https://github.com/user-attachments/assets/38d41854-35a4-497f-b673-1a146a851629" />
![GitHub stars](https://img.shields.io/github/stars/yourusername/ai-smart-contract-auditor)
![GitHub forks](https://img.shields.io/github/forks/yourusername/ai-smart-contract-auditor)
![GitHub issues](https://img.shields.io/github/issues/yourusername/ai-smart-contract-auditor)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/ai-smart-contract-auditor)
![GitHub contributors](https://img.shields.io/github/contributors/yourusername/ai-smart-contract-auditor)

---

Created by [Ashutosh Tripathi](https://theashutoshtripathi.com), Ashutosh Dwivedi, and [Shaik Shahid Aleem](https://shaikshahidaleem.in)

*Securing the future of decentralized applications, one contract at a time.* 
