import classNames from "classnames/bind";
import Button from "~/Components/Button";
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx=classNames.bind(styles);

function MenuItem( {item, onClick} ) {
    const classes = cx('menu-item',{
        separate: item.separate
    })
    return ( 
        <Button className={classes} lefticon={item.icon} onClick={onClick}>{item.title}</Button>
     );
}

MenuItem.propTypes={
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

export default MenuItem;