const mainIdentityModelInsert = (data) => {
    return {
        // Sesuaikan nama field dengan yang ada di MongoDB app
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
        tgl_pembuatan: data.tanggalpembuatan,
        foto: data.foto
    };
};

const mainIdentityModelUpdate = (data) => {
    return {
        nama_lkp: data.nama_lkp,
        jns_klmn: data.jns_klmn,
        goldar: data.goldar,
        alamat: {
            Alamat: data.alamat.Alamat,
            RT: data.alamat.RT,
            RW: data.alamat.RW,
            'Kel/Desa': data.alamat['Kel/Desa'],
            Kec: data.alamat.Kec,
            KabKot: data.alamat.KabKot,
            Prov: data.alamat.Prov,
            Pos: data.alamat.Pos
        },
        agama: data.agama,
        sts_kawin: data.sts_kawin,
        pekerjaan: data.pekerjaan,
        kewarganegaraan: data.kewarganegaraan,
        tgl_pembuatan: data.tgl_pembuatan,
        foto: data.foto
    };
};

const mainIdentityModelDelete = (data) => {
    return {
        NIK: data.NIK,
        nama_lkp: data.nama_lkp,
        tmp_lhr: data.tmp_lhr,
        tgl_lahir: data.tgl_lahir,
        jns_klmn: data.jns_klmn,
        goldar: data.goldar,
        alamat: {
            Alamat: data.alamat.Alamat,
            RT: data.alamat.RT,
            RW: data.alamat.RW,
            'Kel/Desa': data.alamat['Kel/Desa'],
            Kec: data.alamat.Kec,
            KabKot: data.alamat.KabKot,
            Prov: data.alamat.Prov,
            Pos: data.alamat.Pos
        },
        agama: data.agama,
        sts_kawin: data.sts_kawin,
        pekerjaan: data.pekerjaan,
        kewarganegaraan: data.kewarganegaraan,
        tgl_pembuatan: data.tgl_pembuatan,
        foto: data.foto
    };
};

module.exports = { mainIdentityModelInsert, mainIdentityModelUpdate, mainIdentityModelDelete };