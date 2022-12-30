import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Image from "~/Components/Images";

const cx = classNames.bind(styles)
function AccountItem({data}) {
    return ( 
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
     );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;