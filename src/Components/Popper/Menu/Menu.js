import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import  PopperWrapper from '~/Components/Popper/Wrapper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx= classNames.bind(styles)

function Menu( {children, items}) {

  const [history, setHistory] = useState([{data: items}]);
  // console.log(history)
  const menuCurrent = history[history.length - 1];
  // Fuction handle

  const renderItems = ()=> {
    return menuCurrent.data.map((item,index)=>{
      const isParent = !! item.children // convert !! boolean
      return (
        <MenuItem key={index} item={item} onClick={()=>{
          if(isParent){
            setHistory(pre=> [...pre, item.children])
          }
        }}/>
      )
    }
    )
  }

  const handleRender= (attrs)=> 
      (<div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('content')}>
            {history.length>1 && <Header title={menuCurrent.title} onBack={()=> {
              setHistory(pre=> pre.slice(0, history.length -1))
            }}/>}
            <div className={cx('meu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>)    
  
  const handleHide = ()=> {setHistory(pre=> pre.slice(0, 1))}
    return ( 
        <>
        <Tippy
          interactive
          delay={[0,500]}
          placement='top-end'
          offset={[12,9]}
          render={handleRender}
          onHide={handleHide}
          hideOnClick={false}
          >
        {children}
        </Tippy>
        </>
     );
}


Menu.propTypes = {
  children: PropTypes.object.isRequired,
  items: PropTypes.array
}
export default Menu;