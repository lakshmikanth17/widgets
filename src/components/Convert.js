import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setdebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setdebouncedText(text);
        }, 500);

        return() => {
            clearTimeout(timerId);
        };
    }, [text]);
    useEffect((de) => {
        const doTranslate = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslate();
    }, [language,debouncedText]);
    return (
        <div className="ui header">{translated}</div>
    )
};
export default Convert;
