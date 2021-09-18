# G2 Team - Technical Test

This test is intended to test your technical competency whilst giving you freedom to demonstrate your broader knowledge and skills.

This test should take no longer than a few hours, please try not to take any longer than that. Your work will be assessed with this time limit in mind.

Once you have completed the technical test, please provide a public non-forked repository link to the project on GitHub/Bitbucket/your preferred provider. Alternatively you can provide a  .zip file of your completed test, emails containing .zip files may be quarantined so we prefer to recieve a repository link. Please send this to your recruitment contact.

## Setup

You will need to run `yarn` initially to install the dependencies.

This project has already been setup to save you time, there are 2 scripts as detailed below to get you started.

```
yarn client:start
yarn server:start
```

Both commands will output the relevant URLs. Feel free to change any build configuration or ports to your liking.

## Files

`index.html` - This is the html file that parcel starts at.

`server/app.js` - This is where you should start building your web server, the file will already have an express server setup and listening on port 80.

`server/data/personnel.json` - This is where the data is located to be used in the application. Feel free to increase/decrease the amount of data in this file.

`client/app.jsx` - This is where you should start building your React app, the file will already have a `Hello World` component setup.

`client/style.scss` - This is where you can add styles to your application.

## Task

Build a small web application that fetches the personnel data from the aforementioned `json` file and displays it in a list or table.

### Client

The client side of your application **must** be built in React. You can use whatever paradigms you are most comfortable with.

You should fetch the data from the server with the route as defined below in the Web Server section.

You **must** apply some style, you can either write the CSS by hand or import a package, whichever you are most comfortable with. The style can be simple.

### Web Server

Your web server should have at least 1 route as defined below.

`GET /api/personnel`

This route should return the personnel data located in the aforementioned `json` file.

### Extra

The above requirements regarding Client & Web Server are the minimum we expect. However, if you finish the test early, please consider implementing some of the features below. Alternatively, in the README.md of your project explain how you would achieve some or all of them.

- Filtering/searching the personnel by name
- Sorting the personnel by name ----- DONE
- Tests
- Error handling
- State management
- Deleting personnel (without mutating the original `json` file) ----- DONE
- How would you do this differently if you have 10k personnel? 100k? 10m?

##########################SOLUTIONS#####################################3

Answers For Other Extra Functionalities -
 
- Filtering/searching the personnel by name -- For  this we can accept input from a Text field from user and Filter those records only from state which has similar name and  show them. Need to add Action as well as reducer for this and we can also use debouncing also for this.


- Tests -- For this we can use Jest with Enzyme for code coverage. we will have write testcases for each functionality here

- Error handling ---- Use of Try Catch Blocks and also Some validations when accepting inputs from iser for  name so that he/she can enter only string for Name filtering functionality

- How would you do this differently if you have 10k personnel? 100k? 10m? --- For this we can use Paging/Infine Scroll/Load More button for the table.. Load only 5 or 10 data rows using pagecount (i.e Data Shredding) and for next records we can do same API call using next pageCount.







