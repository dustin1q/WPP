# Web Performance Playground for Web Dev

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

## Css to add
1. border-image 
1. scroll-padding
1. scroll-snap
1. Layout section - https://codepen.io/collection/yrWJrk
1. columns - https://codepen.io/kevinpowell/pen/rNbqBPr
1. backdrop-filter - https://codepen.io/kevinpowell/pen/RwOewNr
1. :any-link https://codepen.io/argyleink/pen/vYMzYxx
1. :empty - https://codepen.io/kevinpowell/pen/mdgzdBR/d0cb3478eef23d16643143cc112fa01e
1. list-style https://codepen.io/argyleink/pen/rNmzGzW
1. inset - https://codepen.io/kevinpowell/pen/qBwJBGN


## Architecture
This project uses Astro as a primary templating engine and static site generator. Within Astro, content is managed using markdown files (.md) and Astro's content collections feature. .md files follow a typed formate as seen in the frontmatter. 

For code sample templates, custom <html-code> <css-code> and <js-code> tages are accepted to render and showcase languages within each code sample. 

Monaco Editor is used as a code editor library wihin the CodeEditor component. This Library is delivered in React and used Astros Island patterns to render on a given template or page.  

[Astro Documentation](https://github.com/withastro/astro) 

[Monaco Editor Documentation](https://www.npmjs.com/package/@monaco-editor/react)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                  | Action                                       |
|:------------------------ |:-------------------------------------------- |
| `npm install`            | Installs dependencies                        |
| `npm run dev`            | Starts local dev server at `localhost:4321`  |
| `npm run build`          | Build your production site to `./dist/`      |
| `npm run preview`        | Preview your build locally, before deploying |
| `npm run storybook`      | Starts Storybook dev server at `localhost:6006` |
| `npm run build-storybook`| Build static Storybook to `public/storybook` |
| `npm run integrate-storybook` | Build and integrate Storybook with Astro |

## 📚 Storybook

This project includes Storybook for developing and documenting UI components in isolation. The component library is located in `src/components/ui/` and includes:

- **Select** - Dropdown select component with options
- **Input** - Text input with label and error states
- **Checkbox** - Checkbox with label support
- **Accordion** - Collapsible details/summary component

### Running Storybook (Development)

To view and interact with the UI components in development mode:

```bash
npm run storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006) where you can:
- Browse all available components
- Test different component states and props
- View component documentation
- Interact with live examples

### Integrating Storybook with Astro

To access Storybook through your Astro site (useful for production or single-server access):

1. **Build Storybook as static files:**
   ```bash
   npm run build-storybook
   ```
   This builds Storybook to the `public/storybook/` directory.

2. **Start the Astro dev server:**
   ```bash
   npm run dev
   ```

3. **Access Storybook through Astro:**
   Navigate to [http://localhost:4321/storybook/](http://localhost:4321/storybook/)

**Quick Integration:** Run `npm run integrate-storybook` to build Storybook in one command, then start your Astro server.

> **Note:** When you make changes to components, you'll need to rebuild Storybook (`npm run build-storybook`) to see updates in the integrated version. For active development, use `npm run storybook` for live reloading.

### Using Components

Import components from the UI library in your Astro or React files:

```tsx
import { Select, Input, Checkbox, Accordion } from '@/components/ui';
```

