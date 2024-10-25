# Jovoria

## Description

This project is a dynamic web application built with Next.js and Tailwind CSS. It includes multiple sections such as Careers, Job Details, and How It Works. The application is fully responsive, featuring interactive elements like mobile-friendly navigation, a vertical stepper, and detailed job listings. The Stepper component allows users to view different content on each step, optimized for both desktop and mobile views.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: For static typing and improved developer experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Icons**: A collection of customizable icons.
- **Hero Icons**: Easily customizable SVG icons.

## Project Structure

```plain text
jovoria-lcc/
├── .env.example          # Example of environment variables
├── .eslintrc.js          # ESLint configuration
├── .github               # GitHub-related configurations and workflows
├── .husky                # Husky pre-commit hooks
├── public                # Public assets (icons, images)
├── src                   # Source code of the application
│   ├── app               # Next.js app directory for routing
│   ├── components        # Reusable components (e.g., buttons, stepper)
│   ├── data              # Static data like jobs listings
│   ├── lib               # Helper libraries
│   ├── sections          # Page-specific components (JobDetails, HowItWorks, etc.)
│   ├── styles            # Tailwind and global CSS styles
│   ├── types             # TypeScript interfaces and types
│   └── __tests__         # Unit tests
├── package.json          # Project metadata and scripts
├── tailwind.config.ts    # Tailwind configuration file
├── tsconfig.json         # TypeScript configuration
└── yarn.lock             # Yarn lock file

```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/deliteser112/jovoria-lcc.git
   cd jovoria-lcc
   ```

2. **Install dependencies:**

   Make sure you have Node.js and npm (or Yarn) installed.

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Run the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using Yarn:

   ```bash
   yarn dev
   ```

4. **Open the application:**

   Navigate to `http://localhost:3000` in your browser to see the project in action.

## Contributing

1. Fork this repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.
