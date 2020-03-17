import React, { useState, useEffect } from 'react';
// import useDebounce from './use-debounce';


const CommentFilter = (props) => {

    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        console.log('CommentFilter cmp did mnu');
    }, [])


    useEffect(() => {
        props.onSearch(searchTerm)
    }, [searchTerm])


    return (
        <div>
            <input type="text" onChange={e => setSearchTerm(e.target.value)} autocomplete="off" placeholder="Filter"></input>
        </div>
    )
}

export default CommentFilter
