/**
 * Function to process and format input
 */
const processInput = (input) => {
    try {
        input = input.trim();

        // Replace escaped \n\n with actual paragraph breaks
        input = input.replace(/\\n\\n/g, "</p><p>");

        // Replace escaped \n with line breaks
        input = input.replace(/\\n/g, "<br>");

        // Convert bullet points (* item) into unordered list <ul><li> items
        // This ensures that the entire list is enclosed in <ul> and each item in <li>
        input = input.replace(/(?:^|\n)\* (.*?)(?=\n|$)/g, "<li>$1</li>");
        input = input.replace(/(<li>.*?<\/li>)+/g, "<ul>$&</ul>"); // Wrap all <li> items in a <ul> tag

        // Fix nested <ul> issues (i.e., avoid multiple <ul><ul>)
        input = input.replace(/<\/ul>\s*<ul>/g, "");

        // Handle Markdown bold text (**bold**) and convert to <b>bold</b>
        input = input.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

        // Handle Markdown italic text (*italic* or _italic_) and convert to <i>italic</i>
        input = input.replace(/(\*|_)(.*?)\1/g, "<i>$2</i>");

        // Handle code block (backticks) (`code`) and convert to <code>code</code>
        input = input.replace(/`(.*?)`/g, "<code>$1</code>");

        // Handle links [text](url) and convert to <a href="url">text</a>
        input = input.replace(/\[([^\]]+)\]\((.*?)\)/g, '<a href="$2">$1</a>');

        // Handle Markdown headers (# Header, ## Header) and convert to <h1>, <h2>, etc.
        input = input.replace(/^(#{1,6})\s*(.*?)$/gm, (match, hashes, headerText) => {
            const level = hashes.length;  // Number of '#' determines the header level
            return `<h${level}>${headerText}</h${level}>`;
        });

        // Ensure that the entire content is wrapped in <p> tags if necessary
        // Wrap it with <p> if it's not already wrapped
        if (!input.startsWith("<p>")) {
            input = `<p>${input}</p>`;
        }

        return input;
    } catch (error) {
        return `<p style="color: red;">Error formatting input: ${error.message}</p>`;
    }
};

/**
 * Function to link text areas to their respective output divs
 */
const setupTextArea = (textareaId, outputId) => {
    const textarea = document.getElementById(textareaId);
    const outputDiv = document.getElementById(outputId);

    textarea.addEventListener("input", (e) => {
        const formatted = processInput(e.target.value);
        outputDiv.innerHTML = formatted;
    });
};

// Set up both text areas for real-time formatting
setupTextArea("modelA", "outputA");
setupTextArea("modelB", "outputB");
