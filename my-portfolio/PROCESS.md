# Project Process Documentation

## 1. Project Overview

This project is a personal portfolio website built using React and Vite.  
The objective of the portfolio is to present my technical skills, academic background, projects, and experience in a clean, modern, and professional manner.



---

## 2. Planning and Design Approach

Before starting development, I planned the structure of the portfolio to ensure a logical flow of information.  
I decided to divide the site into clear sections: Hero, About, Projects, Experience, Skills, and Footer.

The design inspiration focused on:
- A wide, clean layout
- Minimal  professional typography
- Dark theme with purple accents for contrast
- Card-based sections for projects and experience

Special attention was given to spacing and layout so that the page does not feel empty or cluttered.

---

## 3. Technology Stack Selection

The following technologies were used in this project:

- **React.js**: Used to build reusable UI components and manage the structure of the application.
- **Vite**: Chosen for its fast development server and simple React setup.
- **CSS**: Custom CSS was written to maintain full control over styling, layout, and visual hierarchy.
- **Git & GitHub**: Used for version control, tracking progress, and maintaining project history.

This stack was selected to balance simplicity, performance, and learning value.

---

## 4. Project Structure and Development Process

The project follows a standard React structure with a clear separation of concerns.

The main UI is handled in `App.jsx`, where the portfolio layout is divided into semantic sections:
- Navigation bar
- Hero section with availability status
- About section with academic background
- Projects section using glass-style cards
- Experience section
- Skills section with pill-style elements
- Footer

Styling is handled in `App.css`, where:
- CSS variables are used for colors and consistency
- Glassmorphism effects are applied to cards
- Grid layouts are used for project alignment
- Typography is kept large and readable

This approach ensured maintainability and visual consistency across the site.

---

## 5. Projects Implementation

The Projects section displays only resume-based technical projects.  
Each project is represented as a rectangular card containing:
- Technology stack label
- Project title
- Brief description
- Impact or outcome points

This card-based design helps in quickly scanning project details while keeping the layout clean and professional.

---

## 6. Challenges Faced and Solutions

During development, several challenges were encountered:

- **Blank screen issues** caused by incorrect JSX structure and rendering errors.
- **Development server not loading** due to the Vite server not running.
- **GitHub README not displaying** because the README file was inside a nested folder.

These issues were resolved by:
- Carefully reviewing JSX syntax
- Restarting the development server using `npm run dev`
- Moving the README file to the repository root
- I have used Gemini CLI to solve the problems which i have faced during development.

These challenges helped improve debugging skills and understanding of the React workflow.


---

## 7. Version Control Workflow

Git was used throughout the development process to manage changes.

The standard workflow followed was:
- `git status` to track changes
- `git add` to stage files
- `git commit` with meaningful messages
- `git push` to sync with GitHub

This ensured that all progress was saved and traceable.

---

## 8. Current Status and Future Improvements

Current status:
- Core portfolio structure completed
- UI and content finalized
- README documentation completed

Planned improvements:
- Deployment using Vercel 
- Mobile responsiveness testing
- Performance optimization using Lighthouse

---

## 9. Learning Outcomes

Through this project, I gained hands-on experience with:
- Building React applications from scratch
- Structuring a professional portfolio
- Debugging real-world issues
- Using GitHub for version control and documentation

This project significantly improved my confidence in frontend development and project documentation.
