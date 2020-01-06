import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
 //Smokescreen Test//
    it('renders withou crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key='a' header='myHeader' cards = {[1,2,3]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//Snapshot Test//
it('renders the UI as expected', () => {
    const tree = renderer
    .create(<List key='b'header='newHeader' cards={[]}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

});