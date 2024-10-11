class Remaja Muda {
    constructor(nama, umur) {
        this._nama = nama; 
        this._umur = umur;   
    }

    get nama() {
        return this._nama; 
    }

    set nama(value) {
        this._nama = value; 
    }

    get umur() {
        return this._umur; 
    }

    set umur(value) {
        this._umur = value; 

    perkenalan() {
        return `hallo, perkenalkan saya ${this._nama} dan umur saya ${this._umur} tahun.`; 
    }
}
