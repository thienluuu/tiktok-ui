import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";

import styles from './SuggestedAccounts.module.scss';
import Image from '~/Components/Images'
const cx = classNames.bind(styles);

function AccountItems() {
    return ( 
       <Tippy>
        
         <div className={cx('account-item')}>
             <Image src="" alt="" className={cx('account-img')} />
             <div className={cx('account-info')}>
                 <p className={cx('account-name')}>
                     <strong>Nguyen Duc Thien</strong>
                     <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle}/>
                 </p>
                 <span className={cx('account-nickname')}>Thenn112</span>
             </div>
         </div>
       </Tippy>
     );
}


export default AccountItems;