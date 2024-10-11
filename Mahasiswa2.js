class Mahasiswa2 extends Mahasiswa {
    constructor(nama, umur, jurusan) {
        super(nama, umur);
        this._position = position; 
    }

    get jurusan() {
        return this._jurusan;
    }

    set jurusan(value) {
        this._jurusann = value; 
    }

    perkenalan() {
        return `${super.perkenalan()} saya menempuh pendidikan ${this._jurusan}.`; 
    }
}
