![Storial Logo](client/public/storial-logo.png)
# Storial 2.0 -- Track Books You'd Like To Read 
This was for an assessment I did in 2021 for a role I ended up taking. The prompt was the following:

Using the UI framework of your choice, build a UI around a hypothetical RESTful library API. Assume this API returns a list of books in a library, and allows for CRUD operations on a single book. The application should support those endpoints.

Because this was a frontend-only role, I was only tasked with building the UI, but decided to build a fullstack app so that the reviewing team could punch through the final product. I started with using Adobe products to build the branding package, including name, logo, color palate and wireframing. The frontend was in React, and I took the opportunity to try out Tailwind.css (which I enjoyed and ended up using quite a bit in my new role). The backend was built with Node/Express and MongoDB.

Since this was a takehome assessment, I had only a few days to go from design to prod.



## MVP

  - Offers basic CRUD functionality for tracking books user hears about and would like to read in the future.
  - Includes title, author and notes for each book tracked
## 2.0

  - Refactored to include Typescript and testing via React Testing Library.
  - Updated React Router syntax for v6+
  - Audited and refactored to improve accessibility.

## Stretch Features

In the future, I'd like to add the following:
  - Additional fields such as date entered and genre
  - Genre field that has preset options, but editable by user
  - Sorting books by field
  - Check box that removes book from library *to-read view* to *have-read view*
  - Add proper modals with branded styling instead of using alerts

### Tech Stack
React, TailwindCSS, Node, Express, MongoDB

### Getting Started
After cloning onto your local directory, you will need to run npm install in both the client and server directories.  
Be sure you have [Mongo DB installed](https://docs.mongodb.com/manual/installation/) as well.

Once your dependencies are installed, you will need to open three terminals:
  1. **MongoDB** enter the following commands:

  - brew services start mongodb-community

  - mongo

  - use books

  2. **Server**
    - npm run start
  3. **Client**
    - npm run start
