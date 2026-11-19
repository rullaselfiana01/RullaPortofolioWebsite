RULLA SELFIANA — PORTFOLIO WEBSITE

FILES
- index.html: website structure and text
- style.css: design, colors, layout, responsive styles
- script.js: project list, project cards, mobile navigation
- assets/: original SVG thumbnails and favicon

RUN THE WEBSITE
1. Extract the ZIP.
2. Open VS Code > File > Open Folder.
3. Select the rulla_selfiana_portfolio folder.
4. Open index.html.
5. Use Live Server (right-click index.html > Open with Live Server) or double-click index.html to preview.

HOW TO ADD A PROJECT
1. Open script.js.
2. Find: const projects = [
3. Copy one full project object between { and }.
4. Paste it inside the array, with a comma separating objects.
5. Change title, category, description, image, tags, and link.
6. Save (Ctrl+S). The project card is generated automatically.

EXAMPLE
{
  title: "My New Website",
  category: "WEB DEVELOPMENT",
  description: "A short explanation of what this project does.",
  image: "assets/web.svg",
  tags: ["HTML", "CSS", "JavaScript"],
  link: "https://github.com/rullaselfiana01/my-new-website"
}

HOW TO ADD YOUR OWN PROJECT IMAGE
1. Copy your image into the assets folder, for example assets/my-project.png.
2. Set image: "assets/my-project.png" in the matching project object.
3. Use a relative path from index.html.

PERSONAL DETAILS TO UPDATE
- In index.html, replace your.email@example.com with your real email.
- Replace sample project descriptions and GitHub profile links with links to actual project repositories.

The six initial project cards are starter examples based on the skills and experience provided. Update them with real projects before publishing. Included SVG thumbnails are original placeholders. The site uses plain HTML, CSS, and JavaScript, with no framework or build step.
