# GoogleMapSample.
A simple self-hosted Google maps example

Based on:
 - <a href="https://developers.google.com/maps/">Google maps</a>
 - <a href="http://getbootstrap.com">Twitter Bootstrap</a>

To get started:
 1. Clone the repository
 2. In the created folder run 'npm install' to install lite-server, gulp, gulp-replace-task and gulp-run 
 3. In the created folder create a file called apikey.json and add your Google maps api-key like this:
 
 {
    "key": "YOUR_KEY_HERE"
 }

 this key will be copied to the Google maps script-tag in index.html where it says : GOOGLE_API_KEY
 4. Run gulp in a console to copy your api-key, start the server and show index.html


