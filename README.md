# Next.js 15 Unhandled Fetch Error

This repository demonstrates a bug in Next.js 15 where an unhandled error during a `fetch` request in a page component can lead to unexpected behavior and application crashes.  The example shows a simple app with a home page and an about page. The about page makes a fetch request to an API route.  The API route simulates network failures randomly.

## Reproduction Steps

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.
5. Refresh the page several times. You'll eventually see an error because the fetch call fails and isn't properly handled.

## Solution

The solution involves using `try...catch` blocks to handle potential errors during the fetch request and providing appropriate fallback UI for the user.