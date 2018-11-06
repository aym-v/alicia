import { randomId } from './utils'

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
    const queryParams = {...parameters, cachebuster};
    const endpoint = `${config.trackerEndpoint}/${config.ad}/${event}`;
    const url = buildUrl(endpoint, queryParams);
    loadPixel(url);
};

export default track