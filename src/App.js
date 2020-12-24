import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/route";
import Header from "./components/Header";

const items = [
    {
        title: 'Does a person’s name influence the person they become?',
        content: 'Some researchers have found an unusual association between the name of a person and his/her personality. They even go so far as to say that people with the same names seem to have similar personalities. Turner (2009) observes that Levitt (2005) theorizes that one\'s name can affect one\'s ability to succeed.'
    },
    {
        title: 'Can human nature be changed? Should it be changed?',
        content: 'You can\'t change human nature." The old cliché draws support from the persistence of human behavior in new circumstances. ... So human nature may also have genetically evolved a bit in 10,000 years. People of European and Asian descent in particular have probably adapted to living more sedentary and crowded lives.'
    },
    {
        title: 'Does absolute power corrupt absolutely?',
        content: 'Power tends to corrupt, and absolute power corrupts absolutely. Great men are almost always bad men, even when they exercise influence and not authority, still more when you superadd the tendency or the certainty of corruption by authority.\n'
    }
];

const options = [
    {
        label: 'the color red',
        value: 'red'
    },
    {
        label: 'the color green',
        value: 'green'
    },
    {
        label: 'the color blue',
        value: 'blue'
    }
];

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items}/>
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />
    }
}

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown />
    }
}

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />
    }
}

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header/>
            <Route path= "/">
                <Accordion items={items} />
            </Route>
            <Route path= "/list">
                <Search />
            </Route>
            <Route path= "/translate">
                    <Translate />
            </Route>
            <Route path= "/dropdown">
                <Dropdown
                label = "Select a color"
                options = {options}
                selected = {selected}
                onSelectedChange = {setSelected}
                />
            </Route>

    </div>
    );
}
