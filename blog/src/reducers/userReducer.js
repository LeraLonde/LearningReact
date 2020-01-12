// Always return a new array/object and never mutate the same instance.
// Redux have the simple comparison to check if the object with the previous have the same reference
// then Redux will not cause a change in state on React
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];
        default:
            return state;
    }
};