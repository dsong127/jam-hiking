A JAM stack app for discovering hiking trails near you.  
Live site: [https://jam-hiking.vercel.app/](https://jam-hiking.vercel.app/)

## Built with
- Next.js
- React
- [Hiking Project Data API](https://www.hikingproject.com/data) for finding hiking trails
- [google-map-react](https://github.com/google-map-react/google-map-react) for showing the trails
- Deployed using [Vercel](https://vercel.com/)

## Running dev server locally
**Note:** You need a [Google API](https://developers.google.com/maps/documentation/javascript/get-api-key) key to run this locally.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Limitation
Not much UX, and finding hiking trails are limited to the ones near you. The map also has a static default location (Chicago), and does not pan over to the new hiking trails.  

In the future I want the map to be more flexible, dynamic panning, better markers. I also would like to work more on allowing user to decide the search parameters for the hiking trails. (ie, return more than 5 trails, search near a specified location, only look for easy trails, etc).