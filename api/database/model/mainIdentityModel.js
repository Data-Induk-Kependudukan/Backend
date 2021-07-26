const mainIdentityModel = (data) => {
    return {
        nik: data.nik,
        namalengkap: data.namalengkap,
        tempatlahir: data.tempatlahir,
        tanggallahir: { date: data.tanggallahir },
        jeniskelamin: data.jeniskelamin,
        golongandarah: data.golongandarah,
        alamat: {
            alamat: data.alamat,
            rt: data.rt,
            rw: data.rw,
            kelurahan: data.kelurahan,
            kecamatan: data.kecamatan,
            kota: data.kota,
            provinsi: data.provinsi,
            kodepos: data.kodepos
        },
        agama: data.agama,
        status: data.status,
        pekerjaan: data.pekerjaan,
        kewarganegaraan: data.kewarganegaraan,
        tanggalpembuatan: {
            tanggalpembuatan: data.tanggalpembuatan
        },
        foto: data.foto
    };
};

module.exports = { mainIdentityModel };