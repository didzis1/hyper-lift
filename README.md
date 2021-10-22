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
*Front End*
- React Native with TypeScript

*Back end*
- Node & Express
- Apollo & GraphQL
- TypeGraphQL
- MongoDB/Typegoose

*Testing*
- Cypress
- Jest


# Time spent developing

| Day   | Time (in hours) | Work done | Stack |
| :----:|:-----| :---| :----|
| 07.10 | 0,5    | Created the base for the project (Expo with TypeScript) | Front-end |
| 09.10 | 3    | Installed necessary dependencies, configured eslint, worked on authentication screens (Login page) | Front-end |
| 11.10 | 0,5    | Created the base for the backend (TypeScript/Express/apollo-server-express) | Back-end |
| 13.10 | 1 | Added MongoDB database, created GraphQL object types and mutations | Back-end |
| 14.10 | 0,5h | Reworked the folder structure, new query for finding user | Back-end |
| 15.10 | 1h | Added new mutation for creating a routine, reworked file structure and model logic | Back-end |
| 19.10 | 7h | Added login, register resolver. JWT token, context and refactored typing with @typegoose/typegoose. Set up a config file and installed testing dependencies. | Back-end |
| 20.10 | 4h | Installed testing libraries, created multiple util functions for testing and created test case for user registration | Back-end |
| 21.10 | 5h | Implemented more tests for authentication and created new collection for workout history | Back-end |
| 22.10 | 5h | Reworked routine and user models (user now has reference id's of routines), new model for creating max lifts for user exercises  | Back-end |
| In total   | 21,5h   | | 
