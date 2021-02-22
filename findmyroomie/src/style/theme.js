const size = {
    mobile: '375px',
    tablet: '768px'
};

const theme = {
    //color
    primary: '#00462A',
    darkGray: '#A7A7A7',
    gray: '#E5E5E5',

    // break point
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.tablet})`,
};

export default theme;