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
        return `hallo, perkenalkan saya ${this._nama} dan umur saya ${this._umur} tahun.`; // Method yang bisa dioverride
    }
}


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


class Main {
    static main() {
        const mahasiswa = new mahasiswa("Anna", 19, "Informatika");
        const mahasiswa2 = new mahasiswa2("tata", 20, "Industri");
        const mahasiswa3 = new mahasiswa3("mutiara", 17, "Sastra");

        console.log(mahasiswa.perkenlan());
        console.log(mahasiswa2.perkenlan());
        console.log(mahasiswa3.perkenlan());
    }
}


Main.main();
node app.js
