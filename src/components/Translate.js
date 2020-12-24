import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Bulgarian',
        value: 'bg'
    },
    ,
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Russian',
        value: 'ru'
    },
    {
        label: 'Irish',
        value: 'ga'
    },
    {
        label: 'Chinese',
        value: 'zh'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text </label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={ text} language= {language} />
        </div>
    )
}

export default Translate;

// google translate API:  AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM