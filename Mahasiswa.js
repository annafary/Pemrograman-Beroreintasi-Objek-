class Mahasiswa extends Remaja Muda {
    constructor(nama, umur, jurusan) {
        super(nama, umur);
        this._jurusan = jurusan; 
    }

    get jurusan() {
        return this._jurusan;
    }

    set jurusan(value) {
        this._jurusan = value; 
    }

    perkenalan() {
        return `${super.perkenalan()} saya menempuh pendidikan ${this._jurusan}.`; 
    }
}
