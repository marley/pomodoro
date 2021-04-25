# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Todo

- [ ] add mobile breakpoint for dials and title (put above timer)

# Helpful Links

- I looked at [awwwards](https://www.awwwards.com/websites/?tag=clean&category=games-entertainment) and [dribbble](https://dribbble.com/tags/countdown_timer) for design inspo.
- [This answer](https://stackoverflow.com/questions/56889762/identifier-id-already-been-declared-in-reducer) explains that a `switch` can be written either with or without brackets for each case. Mind blown.
- I took some pointers from this [simple redux stopwatch](https://codesandbox.io/s/p985l7r0ym?file=/actions/actionCreators.js:344-352).
  - However I had to change `getState` to `getState()` for it to work. Thanks to [this answer](https://stackoverflow.com/questions/49220379/redux-store-getstate-return-undefined-value).
  - Implementing this also taught me about [thunks](https://github.com/reduxjs/redux-thunk).
- [How to add seconds and minutes to current time with date-fns](https://www.section.io/engineering-education/javascript-dates-manipulation-with-date-fns/).
