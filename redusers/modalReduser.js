const modalReduser = (state = false, action) => {
    switch (action.type) {
        case 'OPEN':
            return !state;
        case 'CLOSE':
            return false;
        default:
            return state;
    }
}

export default modalReduser;