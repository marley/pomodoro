# About

A clean, customizable pomodoro timer to help you set up distraction-free focus time.

The [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) is a method of time management where you divide your work into long-ish focus blocks (e.g. 25 minutes) with shorter breaks in between (e.g. 5 minutes). Every 4 pomodoros, you should take a longer break (e.g. 10 min).

Created as my final project for the [FreeCodeCamp Frontend Frameworks](https://www.freecodecamp.org/learn/front-end-libraries/) certificate. Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**>>> [Try it out!](https://marley.github.io/pomodoro/)**

### Computer
![pomodoro-screenshot](https://user-images.githubusercontent.com/29967154/116187390-71b6c800-a6f3-11eb-8e48-84e051d310e2.png)

### Mobile
<img src="https://user-images.githubusercontent.com/29967154/116277322-59769580-a753-11eb-9df6-a2ebef8cf3b7.jpeg" alt="screenshot of mobile web view" width="300">

# Helpful Links

- I looked at [awwwards](https://www.awwwards.com/websites/?tag=clean&category=games-entertainment) and [dribbble](https://dribbble.com/tags/countdown_timer) for design inspo.
- [This answer](https://stackoverflow.com/questions/56889762/identifier-id-already-been-declared-in-reducer) explains that a `switch` can be written either with or without brackets for each case. Mind blown.
- I took some pointers from this [simple redux stopwatch](https://codesandbox.io/s/p985l7r0ym?file=/actions/actionCreators.js:344-352).
  - However I had to change `getState` to `getState()` for it to work. Thanks to [this answer](https://stackoverflow.com/questions/49220379/redux-store-getstate-return-undefined-value).
  - Implementing this also taught me about [thunks](https://github.com/reduxjs/redux-thunk).
- [How to add seconds and minutes to current time with date-fns](https://www.section.io/engineering-education/javascript-dates-manipulation-with-date-fns/).
- [How to play audio in React](https://stackoverflow.com/questions/47616619/is-there-a-way-to-play-a-music-with-audio-in-react/47616905). I wanted to do it this way, but one of the FreeCodeCamp requirements is to use an `<audio>` tag.
- [This codepen](https://codepen.io/Antisap/pen/gOwNLwR) introduced me to `React.createRef()` which helped to play audio using `<audio>` tags in React.

## See Also

- [Browser extension](https://www.getintention.com/) to avoid distracting sites :100:
