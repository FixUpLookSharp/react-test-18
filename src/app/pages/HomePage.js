import React, { useDeferredValue, useMemo, useState, useTransition } from 'react';
import InfoBlock from "./homePagaUtils/InfoBlock";
import { searchLists } from "../InfoStore";

const HomePage = () => {

    const [fioLists, setFioList] = useState(searchLists);
    const [value, setValue] = useState('');
    const deferredValue = useDeferredValue(value);
    const onChangeValue = (event) => {
        setValue(event.target.value);
    }

    const filteredItem =  useMemo(() => {
        return fioLists.filter(item => item.fio.toLowerCase().includes(deferredValue.toLowerCase()));
    }, [deferredValue])

    return (
        <div className='container'>
            <InfoBlock />
            <div className='row'>
                <div className='col-md-4'>
                    <label>Найти фамилию:</label>
                    <input
                        onChange={onChangeValue}
                        autoComplete='off'
                        value={value}
                        type="search"
                        id="search"
                        name="search"
                        className='mx-4'
                    />
                    <ul className='list-unstyled mt-2'>
                        {filteredItem.map((data) =>
                                <li key={data.id} style={data.style} className='mb-2'>
                                    {data.fio}
                                </li>
                            )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomePage;