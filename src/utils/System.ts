export const System = {
    _uid: 1,

    get uid() {
        return ++this._uid
    }
}