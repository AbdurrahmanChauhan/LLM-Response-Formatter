# Real-Time Markdown, LaTeX, and Code Syntax Formatter

This project is a simple web application that allows users to input text in Markdown, LaTeX, and code, and see the real-time conversion to formatted HTML. It integrates **Showdown.js** for Markdown conversion, **MathJax** for LaTeX rendering, and **Prism.js** for code syntax highlighting.

### Features

- **Markdown Conversion**: Supports standard Markdown syntax (headings, bold, italic, lists, etc.) and converts it into HTML.
- **LaTeX Rendering**: Uses MathJax to render LaTeX equations in the input text (both inline and block-level).
- **Code Syntax Highlighting**: Supports syntax highlighting for multiple programming languages using Prism.js.
- **Real-Time Updates**: The output is updated in real-time as you type into the input areas.
  
---

## Libraries Used

- **Showdown.js**: A JavaScript library to convert Markdown text to HTML.
  - [Showdown.js Documentation](https://github.com/showdownjs/showdown)
  
- **MathJax**: A display engine for LaTeX and MathML, to render mathematical equations in the input text.
  - [MathJax Documentation](https://www.mathjax.org/)
  
- **Prism.js**: A lightweight, extensible syntax highlighter for code.
  - [Prism.js Documentation](https://prismjs.com/)

---

## How It Works

1. **Markdown Conversion**: The Markdown text (e.g., `# Heading 1`, `* Bullet`) is converted to HTML using **Showdown.js**.
   
2. **LaTeX Rendering**: Inline LaTeX, denoted by `\( \)` and block LaTeX denoted by `$$ $$`, is processed and rendered using **MathJax**.
   
3. **Code Syntax Highlighting**: Code blocks, wrapped with triple backticks (```), are highlighted using **Prism.js** for the respective language syntax.

4. **Real-Time Updates**: As you type into either of the text areas, the content is processed and updated in the output area in real time.

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/markdown-latex-code-formatter.git
   ```

2. **Open the `index.html` file** in any web browser.

No server-side setup is required as the application runs entirely in the browser.

---

## Usage

1. **Markdown**:
   - You can enter Markdown syntax in the text area, such as:
     ```markdown
     # Heading 1
     ## Heading 2
     * Bullet point
     **Bold Text**
     ```
   - The content will be converted to HTML and displayed in the output area with proper formatting.

2. **LaTeX**:
   - Enter LaTeX equations within `$$ $$` for block math or `\( \)` for inline math:
     ```latex
     $$ E = mc^2 $$
     \(\alpha + \beta = \gamma\)
     ```

3. **Code Syntax**:
   - Code blocks should be enclosed in triple backticks with the respective language identifier:
     ```javascript
     console.log('Hello, world!');
     ```
   - Prism.js will automatically highlight the syntax.

---

## Example

Here’s an example of the input you can type in the text area:

### Markdown:
```markdown
# Markdown Example
This is **bold text** and this is *italic text*.

## Lists
- Item 1
- Item 2
- Item 3

[Click here](https://www.example.com) for more info.
```

### LaTeX:
```latex
$$E = mc^2$$
```

### Code:
```javascript
function greet(name) {
    console.log("Hello, " + name);
}
greet("World");
```

---

## Live Demo

You can view the live demo by opening the `index.html` file in your browser. The application will allow you to test different inputs for Markdown, LaTeX, and code syntax.

---

## Contributions

Contributions to this project are welcome. If you have suggestions or improvements, feel free to fork the repo, create a new branch, and submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Showdown.js** - For Markdown conversion
- **MathJax** - For rendering LaTeX equations
- **Prism.js** - For code syntax highlighting
