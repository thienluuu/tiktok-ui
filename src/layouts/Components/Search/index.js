import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import React, { useEffect, useState, useRef } from 'react';

import * as searcServices from '~/Services/searchService'
import styles from './Search.module.scss';
import  PopperWrapper from '~/Components/Popper/Wrapper';
import AccountItem from '~/Components/AccountItem';
import useDebounce from '~/hooks/useDebounce';

const cx= classNames.bind(styles)
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    
    const debounceValue = useDebounce(searchValue, 1000)
    const inputRef = useRef();
    // Call API (Axos)
    useEffect(()=>{
        if(!debounceValue.trim()){
            setSearchResult([])
            return;
        }

    const fetchApi = async () => {
        setLoading(true);
        const result = await searcServices.search(debounceValue);
        console.log(result);
        setSearchResult(result);
        setLoading(false);
    }
    fetchApi()
    },[debounceValue]);
    // Handle Fucton
    const handleClear = ()=>{
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    const hanleHideResult = ()=>{
        setShowResult(false)
    }
    const hanleShowResult = ()=>{
        setShowResult(true)
    }
    const handleOnchange = (e)=>{
        const searchValue = e.target.value
        if(searchValue.startsWith(' ')){
            return;
        }
        setSearchValue(searchValue)
    }

    return ( 
      <div>
         <HeadlessTippy 
            interactive
            visible={showResult && searchResult.length>0}
            render={attrs => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <h4 className={cx('search-title')}>
                    Accounts
                    </h4>
                    {searchResult.map(result => (
                        <AccountItem key={result.id} data={result}/>
                    ))}
                </PopperWrapper>
                </div>  
            )}
            onClickOutside={hanleHideResult}
            >
            <div className={cx('search')}>
                <input placeholder="Search accounts and videos" 
                    spellCheck={false} 
                    value={searchValue}
                    onChange={handleOnchange}
                    onFocus={hanleShowResult}
                    ref={inputRef}
                />
                {!!searchValue && !loading &&
                <button className={cx('clear')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faCircleXmark}/>
                </button>
                }
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}   
                <button className={cx('search-btn')} onMouseDown={e=>e.preventDefault()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </div>
        </HeadlessTippy>
      </div>
     );
}

export default Search;