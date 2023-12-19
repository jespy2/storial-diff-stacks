![Storial Logo](client/public/storial-logo.png)
# Storial 2.0 -- Track Books You'd Like To Read 
### Tech Stack
React, Typescript, Redux Toolkit, TailwindCSS, Node, Express, MongoDB, React Testing Library

## Original MVP (code can be found [here](https://github.com/jespy2/storial))
This was for an assessment I did in 2021. The prompt was the following:

> *Using the UI framework of your choice, build a UI around a hypothetical RESTful library API. Assume this API returns a list of books in a library, and allows for CRUD operations on a single book. The application should support those endpoints.*

Because this was a frontend-only role, I was only tasked with building the UI, but decided to build a fullstack app so that the reviewing team could punch through the final product. I started with using Adobe products to build the branding package, including name, logo, color palate and wireframing. The frontend was in React, and I took the opportunity to try out Tailwind.css (which I enjoyed and ended up using quite a bit in my new role). The backend was built with Node/Express and MongoDB.

Since this was a takehome assessment, I had only a few days to go from design to prod and thus had a pretty simple app for the MVP.  



  - Offers basic CRUD functionality for tracking books user hears about and would like to read in the future.
  - Includes title, author and notes for each book tracked

## 2.0 MVP
For 2.0, I refactored the app with new features, cleaner/DRYer code, improved performance and accessibility, code safety through Typescript and testing.  MVP is almost complete.
  - Refactored to include Typescript and testing via React Testing Library.
  - Updated React Router syntax for v6+
  - Audited and refactored to improve accessibility and performance.
  - Sorting books by field
  - Add proper modals with branded styling instead of using alerts
  - Added pills to display read/unread status that also act as toggle buttons for said status
  - Dark mode

## Stretch Features

In the future, I'd like to add the following:
  - Additional fields such as date entered and genre
  - Genre field that has preset options, but editable by user
  - Add authorization/profile layer.
  - Hosted DB with app running live.


### Getting Started
After cloning onto your local directory, you will need to run npm install in both the client and server directories.  
Be sure you have [Mongo DB installed](https://docs.mongodb.com/manual/installation/) as well.

Once your dependencies are installed, you will need to open three terminals and enter the following commands:
  1. **MongoDB** 

  - Can execute from anywhere within the root directory:
    - ```brew services start mongodb-community```
    - ```mongo```
    - ```use books```

  2. **Server** - Navigate to ./client directory:  ```npm run start```
  
  3. **Client** 
    - Navigate to ./server directory: ```npm run start```

### Contact Me
Reach out, get to know me or check out more of my work:  [My Portfolio Site](https://github.com/jespy2/storial)