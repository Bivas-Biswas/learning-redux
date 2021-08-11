
# learning-redux
How Redux work and Simple learning Process. Some important concept.

## Folder Structure
when everyone try to to learn redux, the first things come how make a good folder structure,
which easily understandable.
#### Beginner

```terminal
|- Redux
    |- counter
        |- counterTypes.js
        |- counterActions.js
        |- counterReducers.js
    |- Todo
        |- todoTypes.js
        |- todoActions.js
        |- todoReducers.js
    |- rootReducers.js
    |- middleware.js
    |- store.js
```

#### Intermediate
```terminal
|- Redux
    |- ActionsTypes  
        |- ActionsType
    |- Actions       
        |- incrementAction.js
        |- decrementAction.js
    |- Reducers     
        |- couterReducers.js
        |- rootReducers.js  # all Reducers combine here
    |- middleware.js        # if we have 2 or more middleware, combine here
    |- store.js
```
