import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values',() => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sort by to amount',() => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('Should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('Should set text filter',() => {
    const text = 'Gum';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('Gum');
});

test('Should set startdate filter',() => {
    const startDate = moment();
    const action = { 
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('Should set enddate filter',() => {
    const endDate = moment();
    const action = { 
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate); 
});

