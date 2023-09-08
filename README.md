# Performance Patterns for  Web Dev

This repo focusses on and demonstrates performant coding patterns and UI examples needed for common frontend development solutions.  
Focuss areas include:
* Simplifying Layouts
* Asset Loading Strategies
* Native UI Web Components 

## To Do
1. Update nav
    * Update Layout for mobile
1. Add and use SVG icons
1. Leverage Livecode as a code sample template for native UI samples
    * Create a utility class for Ace Editor
    * Abstract examples into a data object to render using Ace utility
1. Add Unit Testing
1. Incorporate React component (create React App)
1. Consider a Modual Federation Pattern to demonstrate

## Architecture
This project uses Astro as a primary templating engine and static site generator. It may evolve to incorporate React and adition libraries. The aim in adding additional libraries will be to qualify and demonstrate multipal library support, and hopfully Modual Federation design patterns. 

[Astro Documentation](https://github.com/withastro/astro) 
[Ace editor Documentation](https://ace.c9.io/#nav=howto) 


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
