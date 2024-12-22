```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the fetch fails
  const data = await fetch('/api/data');
  const json = await data.json();

  return (
    <div>
      <h1>About Page</h1>
      <p>Some data: {json.message}</p>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate a network error
  if (Math.random() < 0.5) {
    throw new Error('Network request failed');
  }
  res.status(200).json({ message: 'Hello from API' });
}
```