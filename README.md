# Bookmarks Manager Frontend demo

This is demo of a simple application written using
React, Redux, React Router and Bootstrap
written by [Michal Molhanec](https://linkedin.com/in/michal-molhanec/).
See [the source code and README on GitHub](https://github.com/molhanec/bookmarks-frontend).

[**See the demo online.**](http://85.255.2.112/bookmarks-demo/)

The whole purpose of this demo is to have something I'm able to show
potential employers that I can code using React/Redux/Bootstrap.
I think the result is very neat and you can get inspired :)

**If you like the code to offer me a job, please don't hesite and
contact me. Thanks :)**

You can find my CV and other links [in this article](http://www.molhanec.net/2018/11/programmer-looking-for-interesting.html)
on my homepage.

This is just a front-end, the data are not stored anywhere
so any page reload will reset the app.
You can open the browser's developer console to see
Redux actions logs.

If you found any bug please fill the [GitHub issue](https://github.com/molhanec/bookmarks-frontend/issues).
Thanks.

The application uses PropTypes not only for component props validation
but also for validation of the Redux state. [See my simple explanatory
article](https://www.linkedin.com/pulse/using-proptypes-redux-state-validation-michal-molhanec/).

## Used tools and technologies

### JavaScript libraries
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React Router](https://github.com/ReactTraining/react-router)
* [jQuery](https://jquery.com/) which is used by Bootstrap and which I also used to integrate Bootstrap Confirmation library (see below).

### Visible components
* HTML 5, CSS 3
* [Bootstrap 4](https://getbootstrap.com/)
* [reactstrap](https://reactstrap.github.io/)
* [Bootstrap Confirmation](http://bootstrap-confirmation.js.org/)
* [React Transition Group](https://reactcommunity.org/react-transition-group/)

## Running the app locally

Standard `npm start` in the project directory should work fine.
Then open [http://localhost:3000](http://localhost:3000) to view
the application in the browser.

## Known issues

This being demo not a real app it uses the most recent JavaScript possible.
This also means that it requires latest versions of Chrome/Firefox/Safari
as of the December 2018. It does not work with Microsoft Edge or Internet
Explorer.

On Safari the "Add" button has slightly different look than in other
browsers but it works just fine.

---

Written using [GitHub Flavored Markdown](https://github.github.com/gfm/).
