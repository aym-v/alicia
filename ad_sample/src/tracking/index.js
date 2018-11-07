import { randomId } from '../utils'

const config = {
    ad: '61251cb6-85c9-4540-ab2f-d5dcf67eb3c5',
    sessionId: randomId(),
    trackerEndpoint: 'http://localhost:3000'
};

const buildUrl = (pathname, parameters) => {
    const url = new URL(pathname);
    Object.keys(parameters).forEach(key => url.searchParams.append(key, parameters[key]));
    return url.href
}

const loadPixel = path => {
    const img = new Image();
    img.src = path;
}

const track = (event, parameters) => {
    const cachebuster = randomId();
    const queryParams = { ...parameters, cachebuster };
    const endpoint = `${config.trackerEndpoint}/${config.ad}/${event}`;
    const url = buildUrl(endpoint, queryParams);
    loadPixel(url);
};

const getElementSize = element => ({ x: element.clientWidth, y: element.clientHeight });


const listenToClick = (element, url) => {
    const frame = getElementSize(element);
    element.addEventListener('click', event => {
        track('click', { x: Math.round(event.x / frame.x * 100), y: Math.round(event.y / frame.y * 100) });
        window.open(url, '_blank');
    });
}

const watchSurface = element => {
    let firstTouch;
    let startTime;
    const frame = getElementSize(element);

    element.addEventListener('touchstart', event => {
        startTime = Date.now();
        firstTouch = { x: Math.round(event.touches[0].clientX / frame.x * 100), y: Math.round(event.touches[0].clientY / frame.y * 100) };
    });

    element.addEventListener('touchend', event => {
        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000;
        const trackerParameters = {
            start: JSON.stringify(firstTouch),
            end: JSON.stringify({
                x: Math.round(event.changedTouches[0].clientX / frame.x * 100),
                y: Math.round(event.changedTouches[0].clientY / frame.y * 100)
            }),
            duration
        };

        if (duration > 0.3) {
            track('swipe', trackerParameters)
        }
    });
}


export default { track, listenToClick, watchSurface };