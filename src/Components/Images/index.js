import {useState, forwardRef} from"react";
import classNames from "classnames";
import styles from "./Image.module.scss";
import PropTypes from 'prop-types';

import images from'~/assets/images';
// console.log(images.noImage);

const Image = forwardRef(({src, alt, className, ...props},ref) => {
    // Handle errorImage
    const [errorImage,setErrorImage] = useState('')
    const handleError = ()=>{
        setErrorImage(images.noImage)
    }
    return <img className={classNames(styles.wrapper, className)} ref={ref} src={errorImage || src} alt= {alt} {...props} onError={handleError}/>;
})

Image.propTypes = {
    src:PropTypes.string,
    alt:PropTypes.string,
    className:PropTypes.string,
}
export default Image;