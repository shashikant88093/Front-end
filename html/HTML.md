# HTML Basics & Semantics

## HTML Tag Syntax

```html
<tagname attribute="value">content</tagname>
```

- Every HTML element typically includes:
  - **Tag Name**: Identifies the element (`<div>`, `<p>`, etc.)
  - **Attributes**: Key-value pairs providing additional information (`class`, `id`, `href`, etc.)
  - **Content**: Text or nested HTML between opening and closing tags

### Example:
```html
<a href="https://example.com" target="_blank">Visit Example</a>
```

---

## Document Declaration

```html
<!DOCTYPE html>
```

- Declares the **HTML version** being used.
- `<!DOCTYPE html>` is used for **HTML5**.
- Helps browsers render the page correctly.

---

## `<title>` Tag

- Placed inside `<head>`.
- Sets the **title of the page** shown on browser tab.
- Important for **SEO**.

```html
<title>My Portfolio - Shashikant Kumar</title>
```

---

## Semantic HTML

Semantic HTML uses **meaningful tags** that describe the content's purpose, improving accessibility and SEO.

### Why use semantic tags?
- Enhances **readability** of code
- Improves **screen reader support**
- Better **SEO ranking**

### Common Semantic Tags:

| Tag        | Purpose                                                                 |
|------------|-------------------------------------------------------------------------|
| `<article>` | Self-contained, independent content (e.g., blog post, news article)    |
| `<section>` | Thematic grouping of content (e.g., chapters, subsections)           |
| `<header>`  | Introductory content for a page or section                            |
| `<main>`    | Main content of the document (should be only one per page)           |
| `<nav>`     | Navigation links                                                      |
| `<aside>`   | Side content like ads, tips — not vital to main content              |
| `<footer>`  | Footer info (e.g., copyright, links)                                  |

---

## Image Accessibility

### `alt` attribute:
```html
<img src="profile.jpg" alt="Shashikant Kumar smiling in front of a whiteboard">
```

- Provides **alternative text** for images.
- Crucial for **screen readers** and **SEO**.
- Displays when image fails to load.

---

## `<pre>` Tag

```html
<pre>
  function helloWorld() {
    console.log("Hello, World!");
  }
</pre>
```

- Preserves **whitespace and indentation**.
- Useful for displaying **code blocks**.

---

## HTML Tables

```html
<table>
  <caption>Employee List</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Shashikant</td>
      <td>Frontend Lead</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total Employees: 1</td>
    </tr>
  </tfoot>
</table>
```

### Key Table Tags:

| Tag        | Description                                                            |
|------------|------------------------------------------------------------------------|
| `<table>`  | Defines the table                                                       |
| `<tr>`     | Table row                                                               |
| `<th>`     | Table header cell, use `scope="col"` or `scope="row"`               |
| `<td>`     | Table data cell                                                         |
| `<thead>`  | Groups header rows                                                      |
| `<tbody>`  | Groups body rows                                                        |
| `<tfoot>`  | Groups footer rows                                                      |
| `<caption>`| Adds a title to the table                                               |

---

## Meta Tags

Meta tags provide **metadata** about the HTML document. Placed inside the `<head>`.

```html
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">

  <!-- Responsive design support -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Author info -->
  <meta name="author" content="Shashikant Kumar">

  <!-- Page description -->
  <meta name="description" content="HTML interview notes for frontend developers.">

  <!-- Search engine instructions -->
  <meta name="robots" content="index, follow">
</head>
```

### Common Attributes:
- `charset`: Sets character encoding
- `viewport`: Enables responsive layout
- `author`: Sets document's author
- `description`: Short description for SEO
- `robots`: Tells search engines how to index the page

---

## `<link>` Tag

The `<link>` tag defines the relationship between the current HTML document and an **external resource**. It is a **self-closing tag**.

### Primary Use Cases:

| Purpose                  | Example Use                                |
|-------------------------|--------------------------------------------|
| Linking external CSS    | Stylesheets for design                     |
| Linking favicons        | Small icons in browser tab                 |
| Importing fonts         | Google Fonts or similar                    |
| Preloading/Prefetching  | Load performance-critical resources early  |

### Syntax:
```html
<link rel="relationship" href="url" />
```

### Common `rel` Attributes:

| `rel` Value    | Description                                        |
|----------------|----------------------------------------------------|
| `stylesheet`   | Links external CSS                                 |
| `icon`         | Sets the favicon                                   |
| `preconnect`   | Establish early connections                        |
| `preload`      | Preload critical resources                         |
| `manifest`     | Links to a web app manifest                        |
| `alternate`    | Used for alternate content versions                |

### Examples:

#### Linking a CSS File:
```html
<link rel="stylesheet" href="styles.css">
```

#### Linking a Favicon:
```html
<link rel="icon" href="/favicon.ico" type="image/x-icon">
```

#### Preconnecting to Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

#### Loading a Web App Manifest:
```html
<link rel="manifest" href="/site.webmanifest">
```

---

    