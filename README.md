# ascii-ecomm-site
React project for Old St. Labs application
Hi! I'm Kirsten MagnusT. Untal - feel free to call me whatever name you choose (I've been called Marcus before on FB Messenger so really any name is fine)

Just for a quick background of where I'm coming from, I have little to no experience with actual front end development work, and this is the first real React-based app I worked on so if I made any common mistakes/traps I'd love to learn how I can improve 😁

Here is a quick overview of my project for my application to Old St. Labs:
  I tried to implement as much as I could from the scope and project specifications to showcase my ability to quickly learn and implement concepts that may not translate directly 1:1 (I focused mostly on basic tutorial videos and tried to tweak what was presented to suit my needs)
  With this in mind, I was able to do the following from the specs:
  1. products are displayed in a grid.
  2. give the user an option to sort the products in ascending order. Can sort by "size", "price" or "id". The products list should be reloaded when a new sorting option is chosen.
  3. display the faces in their correct size, to give customers a realistic impression of what they're buying.
  4. a "price" field, in cents. This should be formatted as dollars like `$3.51`.
  5. a "date" field, which is the date the product was added to the catalog. 
  6. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed - completed in relativeTime.js and implemented in app
  7. the product grid should automatically load more items as you scroll down.
  8. after every 20 products we need to insert an advertisement from one of our sponsors. Use the same markup as the advertisement in the header shown in `src/App.js`, but make sure the `?r` query param is randomly generated each time an ad is displayed. - I placed them in-grid I hope you don't mind but it helped me keep track of every 20th product

In order to run the app, you need to have at least Node.js installed on your machine (to run the server and the project itself).
Open powershell/cmd in the folder labeled oldst-react-app (alternatively you can open the folder in VSCode and run the terminal there)
1. run the command `npm install` to install any missing dependencies
2. run the server using `npm run server`
3. run the app by using `npm start`

After following these steps, the app should run on the browser (hopefully the project runs because it works on my end and idk if theres a chance of it breaking)

Anyway, that's all from me! Feel free to comment on anything I made. Thanks!
