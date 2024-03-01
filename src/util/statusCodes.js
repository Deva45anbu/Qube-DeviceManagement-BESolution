
//Function to create a 200 code response
function ok(res, payload) {
    return res.status(200).json(payload);
}

//Function to create a 201 code response
function created(res, payload) {
    res.status(201).json(payload);
}

//Function to create a 204 code response
function noContent(res, payload) {
    res.status(204).json(payload);
}

//Function to create a 400 code response
function badRequest(res, payload) {
    return res.status(400).json(payload);
}

//Function to create a 404 code response
function notFound(res, payload) {
    return res.status(404).json(payload);
}

//Function to gone a 410 code response
function gone(res, payload) {
    return res.status(410).json(payload);
}

//Function to create a 401 code response
function unAuthorized(res, payload) {
    return res.status(401).json(payload);
}

//Function to create a 401 code response
function somethingWentWrong(res) {
    return res.status(500).json({ message: 'Something went wrong!' });
}


export { ok, noContent, badRequest, unAuthorized, created, gone, notFound, somethingWentWrong };