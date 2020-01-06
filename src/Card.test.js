import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
 //Smokescreen Test//
    it('renders withou crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//Snapshot Test//
it('renders the UI as expected', () => {
    const id ='1234';
    const title = 'test'
    const content= "snapshot"
    const tree = renderer
    .create(<Card key={id} title={title} content={content}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
});
});