const DownArrow = ({ className = "" }) => {
    return (
        <svg
            className={className}
            preserveAspectRatio='none'
            viewBox='0 0 104 36'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M2 1L51.5 35L102 1H92.5L51.5 27.5L12 1H2Z' />
        </svg>
    );
};

export default DownArrow;
