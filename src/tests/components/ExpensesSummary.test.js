import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should correctly render ExpensesSummary with one expense',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />)
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpensesSummary with multiple expense',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={235977943743} />)
    expect(wrapper).toMatchSnapshot();
});