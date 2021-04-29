function normalizeString (string){
    return string.normalize("NFD").replace(/[^a-z0-9\s]/gi, '').toLowerCase()
}

module.exports = normalizeString