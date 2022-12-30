### Most of the notes are inside codebase as comments

## Folders

/public - Folder for the public assets (e.g favicons, images etc.)

/pages - The old way. We put our pages here (still works with v13). Backend (api) folder still inside this folder.

/app - The new way. It's where we put our pages (v13). It supports Layouts (share UI between routes while preserving state and avoid re-renders), React's Server Components (combine client-side apps with the traditional server rendering), streaming (display instant loading states and stream in units of UI as they are rendered), Data Fetching (async Server Components and extended fetch API enables component-level fetching)

## App folder (v13)

Pages - "page" is the index file for the route/folder. They are server components by default (you can set to client components)

Dynamic Routes with slugs - We are using slugs in "/blog" route:<br>
\[slug]: Any route after blog (e.g blog/1, blog/aaa).<br>
\[...slug]: Catch all routes (e.g blog/1/2/3/4, blog/a/b/c)<br>
\[[...slug]]: Optional catch all routes will also include the route without parameter (e.g blog/, blog/a/b/c)<br>

Route Grouping - A route group can be created by wrapping a folder’s name in parenthesis (marketing). Organize routes without affecting the URL structure, Opting-in specific route segments into a layout, Create multiple root layouts by splitting your application

## Navigation

Next.js does so much behind the scene when it comes to handling navigation for our pages. From the docs:

How Navigation Works

A route transition is initiated using or calling router.push().
The router updates the URL in the browser’s address bar.
The router avoids unnecessary work by re-using segments that haven't changed (e.g. shared layouts) from the client-side cache. This is also referred to as partial rendering.
If the conditions of soft navigation are met, the router fetches the new segment from the cache rather than the server. If not, the router performs a hard navigation and fetches the Server Component payload from the server.
If created, loading UI is shown from the server while the payload is being fetched.
The router uses the cached or fresh payload to render the new segments on the client.

<!--
```bash
code
``` -->
