# HTML tag

- <tagname attribute="value">content</tagname>

- <!DOCTYPE html> This explain the version of html tags the current is html5
- <title> this provide name to page  and also used for search result  in many  search engine
  
## Semantic HTML

- HTMl that clearly describles the content of the page. HTML loses it semantic meaning when tags are misused, or generic tags (namely <div> and <span>) are overused instead of semantic tags.

- These are some of the most commonly used semantic grouping tags:
- <article> : self contained , independently distributable content.
- <section> : Thematic grouping of content, not self contained.
- <header> : Introductory content.
- <main> : Main content limited to one per page.
- <nav> : A section of links, oftentimes for the primary navigation of the page.
- <aside> : Non-vital content indirectly related to main content. The page would make sense without this content.
- <footer> : Footer of the document, oftentimes conatining copyright information.

- ***alt** in img tags is used for screen reading or anytime image cannot display view that time
- ***<pre>*** is used to preserve the white space when identation and space need to be preserved

## Table

- <table>
- There are a variety of tags associated with tables, with these being some of the most comman.
- <tr> : A single row in the table.
- <th> : A heading in the table. This should be used with the ***scope*** attribute of either  ***row*** or ***col*** to choose what the content is a heading for.
- <td> : A single piece of data in the table, also referred to as a cell.
- <thead> : A grouping tag for heading of table , usually containing a single <tr> with column headings.
- <tbody> : A grouping tag for body of table , used for conating the primary rows of data.
- <tfoot> : A grouping tag for the footer of the table.
- <caption> : A caption or title for the table.

## Meta tags

- A html tag that provide extra metadata about a webpage. Most meta tags will use a ***name*** and ***content*** pair for type of metadata and its value
- These are some of the more common metadata tags:-

```
<!-- set the character encoding to utf-8 -->
<meta charset='utf-8'>

<!-- Allows for custom responsive css, rather than the default scaling behavior of small devices -->

<meta name="viewport" content="width=device-width, intial-scale=1">


<!-- Set the page author -->

<meta name="author" content="Shashikant Kumar">

<!-- Set the page discription -->

<meta name="description" content="Html interview frontend !">


```
