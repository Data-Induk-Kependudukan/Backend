const mainIdentityModelInsert = (data) => {
    return {
        NIK: data.NIK,
        nama_lkp: data.nama_lkp,
        tmp_lhr: data.tmp_lhr,
        tgl_lahir: data.tgl_lahir,
        jns_klmn: data.jns_klmn,
        goldar: data.goldar,
        alamat: {
            alamat: data.alamat.Alamat,
            RT: data.alamat.RT,
            rw: data.alamat.RW,
            KelDesa: data.alamat.KelDesa,
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

const mainIdentityModelUpdate = (data) => {
    return {
        nama_lkp: data.nama_lkp,
        jns_klmn: data.jns_klmn,
        goldar: data.goldar,
        alamat: {
            Alamat: data.alamat.Alamat,
            RT: data.alamat.RT,
            RW: data.alamat.RW,
            KelDesa: data.alamat.KelDesa,
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
            KelDesa: data.alamat[KelDesa],
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