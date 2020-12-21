import React from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: 'What is React?',
        content: 'Frontend js framework'
    },
    {
        title: 'What is the purpose of existing?',
        content: 'to lead this life as it is'
    },
    {
        title: 'What to do for that?',
        content: 'align your body and mind to one dimension'
    }
]


export default () => {
    // return<div> <Accordion items = {items}/> </div>;
    return <div> <Search/> </div>
}
