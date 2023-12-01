# Wen Performance Playground for Web Dev

This repo focusses on and demonstrates performant coding patterns and UI examples needed for common frontend development solutions.  
Focus areas include:
* Simplifying Layouts
* Asset Loading Strategies
* Native UI Web Components
* Emerging and lesser-known CSS techniques 

## Next steps:

1. Add and use SVG icons
1. Add Unit Testing
1. Consider a Modual Federation Pattern to demonstrate

## Architecture
This project uses Astro as a primary templating engine and static site generator. Within Astro, content is managed using markdown files (.md) and Astro's content collections feature. .md files follow a typed formate as seen in the frontmatter. 

For code sample templates, custom <html-code> <css-code> and <js-code> tages are accepted to render and showcase languages within each code sample. 

Monaco Editor is used as a code editor library wihin the CodeEditor component. This Library is delivered in React and used Astros Island patterns to render on a given template or page.  

[Astro Documentation](https://github.com/withastro/astro) 

[Monaco Editor Documentation](https://www.npmjs.com/package/@monaco-editor/react)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
