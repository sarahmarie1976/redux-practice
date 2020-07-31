// 3 Principles of Redux
// 1. Store
// 2. Immutability 

//  - clone the state => modify that clone => replace the original with the modified copy
//      NEVER mutate the original object and you NEVER write over your store object

// 3. Pure functions are what chages our state
// - take in some state along with a description of what changes are happening => copy of our state

// Store(sets up the state) => event (like pressing a button) => action creator is called that dispatches an action => Middleware =>
// action tells us what changes to expect form the event => Reducers handles these actions and replaces the store accordingly

// Redux is SYNCHRONOUS 
// Where does asynchronous side effects fit into all of this?
// Middleware => Redux-Thunk