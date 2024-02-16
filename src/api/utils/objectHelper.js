exports.project = (data, projection) => {

    if (data == null || data == undefined) return null;
    if (projection == null || projection == undefined) return data;

    let dataKeys = Object.keys(data);
    if (dataKeys.length == 0) return data;
    let projectionKeys = Object.keys(projection);
    if (projectionKeys.length == 0) return data;

    // Loop through the keys and delete each property
    for (let i = 0; i < dataKeys.length; i++) {
        if (!projectionKeys.includes(dataKeys[i])) {
            delete data[dataKeys[i]];
        }
    }
    return data;
};