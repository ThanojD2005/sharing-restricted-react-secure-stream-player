# Restricted React YouTube Video Player

A secure, custom-built YouTube video player designed for sharing restricted videos in a React application. This project implements comprehensive security measures to deter unauthorized access to developer tools, code inspection, and content manipulation, while providing a seamless, responsive video playback experience.

## Project Overview

This is a React-based web application that embeds YouTube videos in a controlled environment, preventing users from easily inspecting, copying, or bypassing security restrictions. It's built with modern web technologies to ensure fast performance, responsive design, and strong deterrents against casual tampering.

### Purpose
- Provide a secure way to share YouTube videos that require controlled access.
- Minimize the ability for users to inspect or manipulate the video content.
- Offer a premium, customizable video player experience with responsive design.

## 🚀 Key Features

- **Secure Video Embedding**: Embeds YouTube videos using `youtube-video-element` with dynamic source loading to avoid exposing URLs in static HTML.
- **Custom Media Controls**: Fully customizable controller bar using Media Chrome, including play/pause, seek, volume, playback rate, and fullscreen controls.
- **Comprehensive Security Restrictions**:
  - Blocks browser developer tools access (F12, Ctrl+Shift+I, etc.).
  - Prevents right-click context menu.
  - Disables copy, paste, cut, and text selection.
  - Overrides console methods to prevent logging.
  - Detects open developer tools via window size monitoring.
  - Implements recursive debugger traps for strong deterrence.
- **Global Security Enforcement**: Security measures applied application-wide using a custom React hook.
- **Responsive Design**: Adapts seamlessly to mobile, tablet, and desktop screens with proper aspect ratio maintenance.
- **Cost-Efficient Streaming**: Optimized to reduce unnecessary bandwidth usage and server requests.

## 🛠️ Technology Stack

- **React 19**: Frontend framework for building the user interface.
- **Vite**: Fast build tool and development server with hot reloading.
- **Media Chrome**: Library for custom video controls and UI.
- **YouTube Video Element**: Web component for embedding YouTube videos.
- **CSS**: Custom styling with responsive breakpoints.
- **ESLint**: Code linting for quality assurance.

## 📁 Project Structure

```
custom-video-player/
├── public/
├── src/
│   ├── components/
│   │   └── CustomVideoPlayer.jsx  # Main video player component
│   ├── hooks/
│   │   └── useSecurity.js         # Global security hook
│   ├── App.jsx                    # Root component with global security
│   ├── App.css                    # Responsive styles
│   ├── main.jsx                   # App entry point
│   └── index.css                  # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd sharing-restricted-react-secure-stream-player/custom-video-player
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🛡️ Security Implementation

The project implements multiple layers of security to restrict browser developer tools:

### Techniques Used
- **Keyboard Shortcuts Blocking**: Prevents F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+A.
- **Context Menu Prevention**: Disables right-click menus.
- **Copy/Paste/Cut Restrictions**: Blocks clipboard operations.
- **Console Method Overrides**: Silences logging functions.
- **Developer Tools Detection**: Monitors window dimensions for tool detection.
- **Recursive Debugger Trap**: Continuous debugger statements to pause execution if tools are open.
- **Global Hook Application**: Security enforced across the entire app via `useSecurity` hook.

### Security Overlay
When security restrictions are triggered, a full-screen overlay appears with an alert message. Users can dismiss it by clicking.

**Note**: These are client-side deterrents and cannot fully prevent advanced users from bypassing restrictions.

## 📱 Responsive Design

The video player is designed to work on all devices:
- **Desktop**: Centered layout with max-width constraint.
- **Tablet**: Adjusted padding and styling.
- **Mobile**: Minimal padding for optimal viewing.

## 🔍 Usage

1. Update the video source in `CustomVideoPlayer.jsx`:
   ```jsx
   const videoSource = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";
   ```

2. Customize security settings in `useSecurity.js` if needed.

3. Modify styles in `App.css` for branding.

## 🧪 Testing Security Features

Manual verification steps:
- Right-click on the page → Security alert appears.
- Press F12 or Ctrl+Shift+I → Alert and prevention.
- Attempt to copy/paste → Alert displayed.
- Resize window to simulate dev tools → Detection triggers.
- Open dev tools → Recursive debugger pauses execution.

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test security features thoroughly.
5. Submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Limitations

- Security measures are client-side and can be bypassed by determined users.
- The recursive debugger may impact performance as a deterrent.
- Requires modern browser support for web components.

## 🚀 Future Enhancements

- Server-side access validation.
- User authentication and authorization.
- Advanced anti-debugging techniques.
- Video analytics and tracking.
- Support for multiple video sources.
