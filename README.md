# hyperlift

Exercise work for [Fullstackopen 2021 MOOC course](https://fullstackopen.com/).

# Application overview

- What is the purpose of this app?
  - Save your favorite workout routines
  - Track your progress and see how your strength/muscle size has developed over time
- How will it help simplify the lives of its users?
  - Users can follow their routine flow during each workout
  - No need to use pen and paper to write down sets/reps/weight
  - See the progression in a more simple visual way
- Who is your target audience?
  - People who lift weights and have a goal to develop their muscle size or strength gains

# Back-end

Link to the back-end can be found [here](https://github.com/didzis1/hyperlift-backend).

# Main technologies

_Front End_

- TypeScript
- React Native
- React Navigation
- React Native Paper
- Apollo & GraphQL
- Formik with Yup's validation

_Back end_

- TypeScript
- Node & Express
- Apollo & GraphQL
- TypeGraphQL
- MongoDB / Typegoose

_Testing_ (in progress)

- Cypress
- Jest

## More about this project
This project was made as an exercise work for Fullstackopen 2021 MOOC course. Requirements for passing the course is 175 hours of work, which results into 10 ECTS points. The development time took me by surprise. The application is nowhere near as complete as I would wish it to be. There are a lot of room for updates and new implementations that I will most likely continue to develop in the near future. The application is however complex enough for the exercise work and I will use the application for my personal use whenever I'll hit the gym.

# A couple of screenshots of the app
<div align="center">
    <img src="/screenshots/1.jpg" width="250px"</img>
    <img src="/screenshots/2.jpg" width="250px"</img> 
    <img src="/screenshots/3.jpg" width="250px"</img> 
    <img src="/screenshots/4.jpg" width="250px"</img> 
    <img src="/screenshots/5.jpg" width="250px"</img> 
    <img src="/screenshots/6.jpg" width="250px"</img>
    <img src="/screenshots/7.jpg" width="250px"</img>
    <img src="/screenshots/8.jpg" width="250px"</img> 
    <img src="/screenshots/9.jpg" width="250px"</img> 
    <img src="/screenshots/10.jpg" width="250px"</img> 
    <img src="/screenshots/11.jpg" width="250px"</img> 
    <img src="/screenshots/12.jpg" width="250px"</img>
</div>


# Time spent developing

|   Day    | Time (in hours) | Work done                                                                                                                                                    | Stack     |
| :------: | :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
|  07.10   | 0,5             | Created the base for the project (Expo with TypeScript)                                                                                                      | Front-end |
|  09.10   | 3               | Installed necessary dependencies, configured eslint, worked on authentication screens (Login page)                                                           | Front-end |
|  11.10   | 0,5             | Created the base for the backend (TypeScript/Express/apollo-server-express)                                                                                  | Back-end  |
|  13.10   | 1               | Added MongoDB database, created GraphQL object types and mutations                                                                                           | Back-end  |
|  14.10   | 0,5h            | Reworked the folder structure, new query for finding user                                                                                                    | Back-end  |
|  15.10   | 1h              | Added new mutation for creating a routine, reworked file structure and model logic                                                                           | Back-end  |
|  19.10   | 7h              | Added login, register resolver. JWT token, context and refactored typing with @typegoose/typegoose. Set up a config file and installed testing dependencies. | Back-end  |
|  20.10   | 4h              | Installed testing libraries, created multiple util functions for testing and created test case for user registration                                         | Back-end  |
|  21.10   | 5h              | Implemented more tests for authentication and created new collection for workout history                                                                     | Back-end  |
|  22.10   | 5h              | Reworked routine and user models (user now has reference id's of routines), new model for creating max lifts for user exercises                              | Back-end  |
|  23.10   | 3h              | Created new test cases for routines, changed History to be an array of user instead of own collection                                                        | Back-end  |
|  25.10   | 5h              | Reworked maxLift and history to generate random ID, fixed some types and installed uuid library                                                              | Back-end  |
|  26.10   | 6h              | Wrote new tests, maxLifts now have full CRUD operations, resolver for editing history, a lot of testing done                                                 | Back-end  |
|  27.10   | 4h              | Reworked user history data structure. Fixed AddHistory and EditHistory, fixed broken tests.                                                                  | Back-end  |
|  30.10   | 8h              | Created hooks for authentication, user can now register/log in/log out. Created secure storage for authentication.                                           | Back-end  |
|  01.11   | 8h              | Installed react-native-paper and developed a dark/light theme option for the application                                                                     | Back-end  |
|  02.11   | 4h              | Added mutation for creating a new max lift and created new screens for max lifts. Styling not implemented yet.                                               | Back-end  |
|  08.11   | 8h              | Styled and created new screens for the front-end, new fields for user in the back-end                                               | Front-end & Back-end  |
|  09.11   | 4h              | Worked on styling, created new design in idea in Figma for the app                                               | Front-end  |
|  11.11   | 5h              | Worked on Home Page styling, updated some dependencies, created helper functions, updated theme colors                                             | Front-end  |
|  16.11   | 8h              | Worked on Settings screen, created new cards for home screen, changed ThemeContext to Preference (will contain measurements later on)                                             | Front-end  |
|  17.11   | 4h              | Reworked home screen, added TypeScript typing for various navigators, fixed some bugs                                             | Front-end  |
|  19.11   | 8h              | Added a snackbar to maxlift screen (shows success/error message), changed weight to be a Float type instead of Int, CRUD functionality for max lifts works, styling yet to be finished | Front-end & Back-end  |
|  29.11   | 8h              | Exercises can be searched through in max lifts (will be reusable in routines), updating max lifts now adds previous max lifts to the history (added new field called weightHistory to maxLift) | Front-end & Back-end  |
|  30.11   | 4h              | Updated max lifts typing and created a list of history max lifts under each exercise | Front-end |
|  03.12   | 4h              | Select exercise model now highlights the exercise that is selected. Fixed typing in HomeParamList | Front-end |
|  04.12   | 4h              | Corrected error messages on back-end, duplicate max lifts cannot be added, wrote new tests for max lifts. | Back-end |
|  08.12   | 7h              | Started working on the form for creating a routine. Simplified sets/reps saving in the back-end. | Front-end & Back-end |
|  09.12   | 7,5h              | Create routine form now has a modal for searching exercises. This was necessary to implement to keep the form state intact. (Form state was reset if navigated to SearchExercise screen). Routine can now be created (validation, small fixes still in progress) | Front-end & Back-end |
|  10.12   | 7h              | Back-end: changed Routine and User to use mongo's _id instead of generated id field. Front-end: Implemented a routine carousel on Home page which can redirect to specific routine to Routine screen. Snackbar created as a custom component for reusability. Typing changes and bug fixes. | Front-end & Back-end |
|  13.12   | 9h              | Finished working on routine's CRUD. Started working on workout history. Created new screen where the user can view workout splits based on the routine selected from the drop-down menu. | Front-end |
|  14.12   | 1h              | SelectWorkout screen selectedSplit state is now initialized on first render (first routine assigned if exists). If no routines are found display a message that tells the user to create one. | Front-end |
|  15.12   | 0,5h              | Fixed broken features on iOS (text not visible, dropdown menu completely broken. Replaced with ActionSheetIOS) | Front-end |
|  08.01   | 0,5h              | Added new screen to which user is redirected after selecting the workout, updated type parameters | Front-end |
|  09.01   | 4h              | Workout can now be started and saved to the database (History workout). User can fill reps or weight used during the workout and save it for future reference. | Front-end |
|  10.01   | 2h              | Created a query that fetches workout history data. Added calendar functionality to display specific days workout history card. | Front-end & Back-end |
|  11.01   | 3,5h              | A workout selected from calendar can be clicked and viewed for more details. Fixed theme related issues (wrong text colors, background colors, etc.), fixed back-end not saving notes field in history workouts. | Front-end & Back-end |
|  17.01   | 2h              | Started working on the Progression tab. Installed react-native-chart-kit and did some research on it. Fixed some bugs (registration throwing an error, exercise name not visible on max lifts, empty select box if no routines under Workout, etc.). | Front-end |
|  17.01   | 1,5h              | Created a feature where the user can toggle between their prefered weight measurement type. Current options are kgs and lbs. Toggle updates both context's state and local storage | Front-end |
|  07.02   | 3,5h              | Theme related changes (wrong font, background, icon colors on dark theme). Created a profile screen where the user can update the profile data (full name, age, what type of lifting they do). | Front-end & Back-end |
|  09.02   | 1h              | Added text under progress chart that displays percentage growth of that specific max lift. Updated some dependencies. | Front-end  |
|  10.02   | 2h              | Deployed back-end to heroku, fixed some bugs on front-end. On iOS it is now possible to select max lift progress on Progress screen. Built the front-end with Expo. | Front-end & Back-end  |
| In total | 178,5h           |                                                                                                                                                              |
