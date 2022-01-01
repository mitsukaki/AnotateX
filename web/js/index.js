// function to check if page width or height is greater
function isWider() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    return (width > height);
}

// returns the height the video should be set to
function getVidHeight() {
    var height = isWider() ? window.innerHeight : window.innerWidth;
    return height + 'px';
}

// returns the width the video should be set to
function getVidWidth() {
    var width = isWider() ? window.innerHeight : window.innerWidth;
    return width + 'px';
}

// get the video id from the url path
function getPathItem(index) {
    var path = window.location.pathname;
    var pathArray = path.split('/');
    var videoId = pathArray[index];
    return videoId;
}

// NOTE: copied from https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
function getUUID() {
    const ho = (n, p) => n.toString(16).padStart(p, 0); /// Return the hexadecimal text representation of number `n`, padded with zeroes to be of length `p`
    const data = crypto.getRandomValues(new Uint8Array(16)); /// Fill the buffer with random data
    data[6] = (data[6] & 0xf) | 0x40; /// Patch the 6th byte to reflect a version 4 UUID
    data[8] = (data[8] & 0x3f) | 0x80; /// Patch the 8th byte to reflect a variant 1 UUID (version 4 UUIDs are)
    const view = new DataView(data.buffer); /// Create a view backed by a 16-byte buffer
    
    return `${ho(view.getUint32(0), 8)}-${ho(view.getUint16(4), 4)}-${ho(view.getUint16(6), 4)}-${ho(view.getUint16(8), 4)}-${ho(view.getUint32(10), 8)}${ho(view.getUint16(14), 4)}`; /// Compile the canonical textual form from the array data
}