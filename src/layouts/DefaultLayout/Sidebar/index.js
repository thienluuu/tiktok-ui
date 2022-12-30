import config  from '~/config';
import classNames from 'classnames/bind';
import Menu , {MenuItem} from './Menu'
import{ FollowingIcon, HomeIcon, LiveIcon,HomeActiveIcon, FollowingActiveIcon, LiveActiveIcon} from '~/Components/Icons'
import SuggestedAccounts from '~/Components/SuggestedAccounts'

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles)

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>} activeicon={<HomeActiveIcon/>}/>
                <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon/>} activeicon={<FollowingActiveIcon/>}/>
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon/>} activeicon={<LiveActiveIcon/>}/>
            
                <SuggestedAccounts label="Suggested accounts" />
                <SuggestedAccounts label="Following accounts" />

            </Menu>
        </aside>  
    );
}

export default SideBar;