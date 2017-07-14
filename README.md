# Draft.js Examples

#Live App
<a href="https://draftjs-examples.herokuapp.com/" target="_blank">https://draftjs-examples.herokuapp.com/</a>



#Running On Heroku
You can create your own version of the app (including MongoDB!)
<br/>
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

#Local Installation
1. Install <a href="https://nodejs.org" target="_blank">Node.js</a> 
3. `git clone https://github.com/rajaraodv/draftjs-examples.git`
4. `cd draftjs-examples`
5. `npm install`


#Running Locally
*You need two terminal windows open*, one for client and the other for server.

####Development
1. run `npm start`. This runs the app server (Express). 
2. In terminal 2, run: `npm run dev`. This runs the development server(webpack-dev-server).
3. Open browser and go to: `localhost:8080`

#####Note: If you open `localhost:3000` in browser, you'll see a "stale" production app, so while in development, **always go to `localhost:8080`**

####Production
In production, we need to compile the **latest** client js and place it to `public` folder. This allows the main app server(Express) to also show the final app.

1. Generate latest React app: `npm run build`.
2. In terminal 1, run `npm start`. It will be running both the server and the client.
3. Open browser and go to : `localhost:3000`.




