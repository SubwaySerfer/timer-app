# Vue Timer App
A simple yet extensible web application with a timer, created using Vue.js (Composition API), TypeScript, and Vite.

## Project Description
Vue Timer App is a minimalist timer application that provides basic countdown functionality with the ability to set duration and receive visual and audio notifications upon completion. The project is designed with future scalability in mind and can serve as a foundation for more complex applications.

## Key Features
* Setting custom timer duration
* Timer controls (start, pause, reset)
* Visual display of current status
* Sound notification when countdown completes
* Volume settings and option to mute

## Technology Stack
* Vue.js 3 with Composition API
* TypeScript for type safety
* Vite as the build tool
* CSS for styling

## Project Structure
The project is organized according to modern frontend development practices:
* **components**: Vue components (Timer, TimerControls)
* **composables**: Reusable logic (useTimer)
* **types**: TypeScript types and interfaces
* **assets**: Static resources (sounds, styles)
* **utils**: Helper functions

## Development Plans
* Adding custom intervals (e.g., Pomodoro technique)
* Saving user settings and preferences
* Expanding functionality for use as a mobile application
* Integration with Quasar Framework to create a Progressive Web App (PWA)
* Adding statistics and usage history

## Architectural Decisions
The project uses Composition API and the composables pattern to separate business logic from presentation, making the code more maintainable and testable. This approach allows for easy expansion of functionality without the need for significant refactoring.

## License
MIT

## Author
Sasha.af

This project was created as an exercise to learn modern approaches to frontend development and can be freely used for educational and personal purposes.