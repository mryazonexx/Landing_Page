# Manipulating the DOM

This is a simple landing page that shows how to use JavaScript to control the Document Object Model (DOM). It automatically generates a navigation menu, scrolls to navigation anchors, and highlights the current portion in the viewport when scrolling.

## HTML Structure

The structure of the `index.html` file is as follows:

- The declaration `<!DOCTYPE>` and the opening `<html>` tag.
- The `<head>` section, which includes meta tags, a title, a link to Google Fonts, and a link to the `styles.css` file.
- A section called `<body>` containing a header, main content, and footer.
- A navigation menu is located in the header.
- The primary text is divided into sections, each with its own heading and paragraph.
- A copyright note appears in the footer.

## JavaScript Functionality

The `app.js` file contains the JavaScript code required for the landing page:

- Variables at a Glance:

  - `sections` holds all of the1 `<section>` parts.
  - `navList` saves the element `<ul>` with the id `navbar__list`.

- Create the Navigation Menu:

  - For each section, iterate and produce a list item with a link for navigation.
  - Include the list item in the `navList`.

- Highlight the Active Section:

  - Add a window scroll event listener.
  - Determine which section is active based on its position in the viewport.
  - Remove the class `active-class` from the active section and add it to others.
  - Add the class `active` to the related link to highlight the active menu item.

- Scroll Behavior:
  - For each navigation link, add a click event listener.
  - Disallow the usual link behavior.
  - Smoothly scroll to the desired location.

## CSS Styling

The SMACSS-based styling for the landing page is contained in the `styles.css` file. It comprises layout, module, and theme rules styles. The layout is responsive, and the background colors, typography, and alignment are varied for odd and even portions.

---

**Note:** The CSS and JavaScript files are assumed to be in the `css` and `js` directories, respectively, within the same directory as the `index.html` file.
