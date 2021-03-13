//action type for constant variables
export const UPDATE_SNACKS_QUANTITY = 'UPDATE_SNACKS_QUANTITY'


//action creator is a function that RETURNS an ACTION
//action is just an object
const snackUpdate = (operator, index) => {
    return { 
        type: UPDATE_SNACKS_QUANTITY, 
        payload: { operator, index } 
    }
}

export default snackUpdate