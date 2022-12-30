import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import AccountItems from './AccountItems'

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccounts({children, label}) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItems/>
            <AccountItems/>
            <AccountItems/>

            <p className={cx('more-suggested')}>See All</p>
        </div>
     );
}

SuggestedAccounts.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string
};
export default SuggestedAccounts;