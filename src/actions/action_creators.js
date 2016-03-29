export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function filterEntries(input) {
    return {
        meta: {remote: true},
        type: 'FILTER_ENTRIES',
        input
    };
}
