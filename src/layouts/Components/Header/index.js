import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faEllipsisVertical, faEarthAsia, faQuestionCircle, faKeyboard, faCloudUpload, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import {  faPlusSquare, faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/Components/Button';
import Menu from '~/Components/Popper/Menu/Menu';
import { UploadIcon, ChatBoxIcon, MessageIcon} from '~/Components/Icons/index';
import Image from '~/Components/Images/index'
import Search from '~/layouts/Components/Search';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx= classNames.bind(styles)

// Menu
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}/>,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code:'en',
          title:'English'
        },
        {
          code:'vi',
          title:'Vietnamese'
        }
        ,
        {
          code:'vi',
          title:'Vietnamese'
        }
        ,
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        },
        {
          code:'vi',
          title:'Vietnamese'
        }
      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle}/>,
    title: 'Feedback and Help',
    to: '/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}/>,
    title: 'Keyboard shortcuts',
    
  },
    
]
const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser}/>,
    title: 'View profile',
    to: '/@then'
  },
  {
    icon: <FontAwesomeIcon icon={faCoins}/>,
    title: 'Get coins',
    to: '/coin'
  },
  {
    icon: <FontAwesomeIcon icon={faGear}/>,
    title: 'Settings',
    to: '/settings'
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut}/>,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];



function Header() {
    // Current user 
    const currentUser = true;
    
    return ( 
        <header className={cx('wrapper')}>
              <div className={cx('inner')}>
                {/* Logo */}
                <Link  to={config.routes.home} className={cx('logo')}>
                  <img src={images.logo} alt='tiktok'/>
                </Link>
                {/* Search */}
                <Search/>
                {/* Action */}
                <div className={cx('action')}>
                  {currentUser ? (
                    <>
                      <Tippy content='Upload Video' placement='bottom' delay={[0,200]}>
                       <button className={cx('action-btn')}>
                         <UploadIcon/>
                       </button>
                      </Tippy>
                      <Tippy content='Chat Box' placement='bottom' delay={[0,200]}>
                       <button className={cx('action-btn')}>
                         <ChatBoxIcon/>
                       </button>
                      </Tippy>
                      <Tippy content='Message Box' placement='bottom' delay={[0,200]}>
                       <button className={cx('action-btn')}>
                         <MessageIcon/>
                       </button>
                      </Tippy>
                    </>
                  ) : (
                    <>
                      {/* Button */}
                      <Button text righticon = {<FontAwesomeIcon icon={faPlusSquare}/>} target="_blank">Up Load</Button>
                      <Button primary righticon = {<FontAwesomeIcon icon={faSignIn}/>} target="_blank">Log In</Button>
                    </>
                  )}

                  {/* Menu */}
                      <Menu items={currentUser ? userMenu: MENU_ITEMS}>
                        {currentUser ? (
                           <Image className={cx('user-avatar')} 
                           src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7ed24eae83ade506fd0f42bb175c37e1~c5_100x100.jpeg?x-expires=1672207200&x-signature=P%2BWeelKNS%2B29aKDIBTOQEmD%2BrEs%3D' 
                           alt='Nguyen Duc Then'></Image>
                        ) : (
                          <button className={cx('more-option')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                          </button>
                        )}
                      </Menu>   
                </div>
              </div>
        </header> 
    );
}

export default Header;