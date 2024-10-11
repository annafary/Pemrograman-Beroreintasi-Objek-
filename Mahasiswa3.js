class Mahasiswa3 extends Mahasiswa2 {
    constructor(nama, umur, jurursan) {
        super(nama, umur, 'Mahasiswa3');
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
