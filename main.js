const debounce = (callback, wait) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(
            () => callback.apply(null, args),
            wait,
        );
    };
};

const $mask = document.querySelector('.mask');
const $uncensor = document.querySelector('.uncensor');
const { clientWidth, clientHeight } = $uncensor; // Fixed typo here
const handleMouseMove = debounce(
    (event) => {
        $mask.style.top = `${event.y - clientHeight / 2}px`;
        $mask.style.left = `${event.x - clientWidth / 2}px`;
    },
    10,
);

document.addEventListener(
    'mousemove',
    handleMouseMove,
);
