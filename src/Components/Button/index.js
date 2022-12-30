import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({ to, href, primary, outline,text, rounded, small, large, disabled, children, onClick, lefticon,righticon,className, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        lefticon,
        righticon,
        ...passProps
    };
    // Remove event listeners when disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }
    //  Set Component
    if(to) {
        props.to = to;
        Comp = Link;
    } else if(href) {
        props.href = href;
        Comp = 'a';
    }
    const clases = cx('wrapper', {
        primary,
        outline,
        text,
        rounded,
        small,
        large,
        disabled,
        [className]:className

    })
    return (  
        <Comp className={clases} {...props}>
            {lefticon && <i className={cx('icon')}>{lefticon}</i>}
            <span className={cx('login')}>{children}</span>
            {righticon && <i className={cx('icon')}>{righticon}</i>}

        </Comp>
    );
}

Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    lefticon: PropTypes.node,
    righticon: PropTypes.node,
    className: PropTypes.string,
}

export default Button;