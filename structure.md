client/
├── **public/**               # Static assets (directly served)
│   ├── index.html           # Main HTML template
│   ├── favicon.ico          # App icon
│   ├── robots.txt           # SEO rules
│   └── assets/              # Images, fonts, etc.
│
├── **src/**                 # React source code
│   ├── **components/**      # Reusable UI components (buttons, cards, etc.)
│   │   ├── Button.jsx       # Example component
│   │   ├── Navbar/          # Component with its own styles
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── ...
│   │
│   ├── **pages/**           # Page-level components (routes)
│   │   ├── Home.jsx         # Homepage
│   │   ├── Login.jsx        # Login page
│   │   ├── Dashboard.jsx    # Protected route
│   │   └── ...
│   │
│   ├── **context/**         # React context (global state)
│   │   ├── AuthContext.jsx  # User auth state
│   │   └── ThemeContext.jsx # Dark/light mode
│   │
│   ├── **hooks/**           # Custom React hooks
│   │   ├── useAuth.js       # Auth logic
│   │   ├── useFetch.js      # API calls
│   │   └── ...
│   │
│   ├── **utils/**           # Utility functions
│   │   ├── api.js           # Axios setup
│   │   ├── helpers.js       # Formatting functions
│   │   └── ...
│   │
│   ├── **styles/**          # Global CSS/SASS
│   │   ├── main.scss        # Base styles
│   │   ├── variables.scss   # CSS variables
│   │   └── ...
│   │
│   ├── **services/**        # API service layer
│   │   ├── authService.js   # Login/logout calls
│   │   ├── userService.js   # User profile API
│   │   └── ...
│   │
│   ├── **routes/**          # Routing logic (React Router)
│   │   ├── AppRouter.jsx    # Route definitions
│   │   ├── PrivateRoute.jsx # Protected routes
│   │   └── ...
│   │
│   ├── **App.jsx**          # Root component
│   ├── **main.jsx**         # React entry point (renders App)
│   └── ...
│
├── **package.json**         # Frontend dependencies (React, Axios, etc.)
├── **.env**                 # Frontend env vars (e.g., `REACT_APP_API_URL`)
└── **README.md**            # Client setup instructions
