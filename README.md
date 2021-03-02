SD Hacks 2021 
### Inspiration
Across the US, coronavirus vaccine rollout has begun. As normal life starts to grow closer and closer, it is more and more pertinent that we keep people across the US healthy and safe up until the very last minute. On the UC San Diego campus, vaccines have steadily been rolling out over the last month, but there's one small issue. The on-campus vaccination sites are plagued with long lines and conglomerates of people waiting for their vaccines. The worst thing that could happen is someone getting an unexpected exposure to coronavirus right before they receive an immunization. This is especially terrifying as these lines are comprised of young students, possibly immuno-compromised individuals, and elderly San Diegans. While the school encourages social distancing, the larger groups get, the more difficult it becomes to enforce it to a tee, especially as lines run across public spaces such as sidewalks where students who may not even be getting a vaccination may pass by. This inspired us to create Enqueue, a modern queue system that allows students and San Diegans to line up for their vaccinations for the safety of their chosen socially distanced location (home, car, etc).

### What it does
Enqueue is a modern take on online queues. Users are greeted by a launch page providing basic information on the importance of receiving and immunization. Past the launch page is a Sign-Up form providing different sites and times, color-coded by how congested a time or site may be. The sign-up form allows users to provide basic info such as name, email, phone number, and the group that they may belong to (so we can avoid exposing the elderly and immuno-compromised to the general public). Upon submitting a reservation, users are brought to a map implemented using the Google Maps API. They're able to click on the different vaccination sites and read things such as information about the site and view a digitally rendered environment of the area to aid in navigating there. Alongside the map, users are also able to view the current line and their position in the line. They're given an estimated time as well which helps them plan out when they should leave and arrive at the site, allowing the site to stagger the rate at which people come in and out of the site, thus reducing the number of exposures.

### How Enqueue was built
Our app was built by a team made up of mostly beginner hackers, a mix of designers and developers. Its design was created using Figma to wireframe the layout of the website.

Its code was written through brainstorms, discussions, and design documentation. The frontend was created using JavaScript, HTML, React, CSS, and Google Cloud served as additional APIs used directly on the client-side. The backend was created using Flask and Python coupled with MySQL to store user and facility data.

### Frontend and Challenges
The frontend has encountered some challenges to fetch backend APIs but was solved through research.

### Backend and Challenges
Our backend was developed by team members who have had very little prior experience with Flask and web app development, so much of their time was dedicated to learning the framework.

Our original idea was to use a MySQL database to store users and their information, such as name, age, email, and phone number, and using a dynamic in-memory data structure such as a queue or LinkedList to simulate the line at a certain time. However, we decided that this approach would be difficult to maintain and be prone to crashing once we exceed a certain number of simultaneous users. Instead, we wanted to create an asynchronous piece of code that runs every 5 minutes or so to check the database for users that have registered for the next closest timeslot and send them a text to arrive depending on how long it’s expected for them to arrive.

The largest challenge for us was getting the database configured correctly and entering users when they register. Despite having prior experience with SQL, the setup was much harder than anticipated.

### Accomplishments that we're proud of
We're very proud of how the front-end and UI came out as well as how smooth the implementation of the Google Maps API went. The user interface is very intuitive, which is a necessity for people with a wide range of backgrounds (college students to the elderly). We wanted our front-end to look modern and easy to use, which is exactly what we accomplished.

### What we learned
We used a number of tools to create Enqueue and we all learned a lot while working on it, and it ended up as a great portfolio piece. Our beginner hackers developed a web app backend for the first time and became proficient at mySQL and Flask. Our designers and frontend developers taught themselves wireframing using Figma and learned how to use Google Cloud Platform and its services.

### What's next for Enqueue
The coronavirus pandemic will come and go, however, the need for an efficient way to deliver services to individuals never will. After the coronavirus pandemic, life will return to a new normal. We can anticipate that flu seasons and vaccinations will always occur, and lines themselves will always be present. We hope that Enqueue can find applications outside of just the coronavirus vaccination sites. Within the context of the city, every year thousands of individuals find themselves needing to get or renew their driver's license. Lines at the DMV are notorious for being slow, long, and often times consume large periods of a user's time for a task that takes less than fifteen minutes to complete once a user has reached the top of the queue. Many people who arrive at the DMV tend to stay at the DMV and wait for the entire queue to complete, however with Enqueue, that would no longer be necessary. Users could register for their DMV appointment far ahead of time and would only need to show up minutes before their appointment, saving them hours of their time that could be used effectively on things that improve their lives or the lives of others. Alongside reduced wait time for users, Enqueue also allows us to stagger the number of people who are heading to certain sites at a given time. This staggering reduces both traffic and foot traffic to specific areas. This is just one of the possible future applications of Enqueue, and with more time to improve Enqueue, we hope it begins the new standard for lining up.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
