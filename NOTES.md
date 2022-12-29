## Folders

/public - Folder for the public assets (e.g favicons, images etc.)

/pages - The old way. We put our pages here (still works with v13). Backend (api) folder still inside this folder.

/app - The new way. It's where we put our pages (v13). It supports Layouts (share UI between routes while preserving state and avoid re-renders), React's Server Components (combine client-side apps with the traditional server rendering), streaming (display instant loading states and stream in units of UI as they are rendered), Data Fetching (async Server Components and extended fetch API enables component-level fetching)

## App folder (v13)

Pages - "page" is the index file for the route/folder. They are server components by default (you can set to client components)

Dynamic Routes with slugs - We are using slugs in "/blog" route:
\[slug]: Any route after blog (e.g blog/1, blog/aaa).
\[...slug]: Catch all routes (e.g blog/1/2/3/4, blog/a/b/c)
\[[...slug]]: Optional catch all routes will also include the route without parameter (e.g blog/, blog/a/b/c)

<!--
```bash
code
``` -->
