const lembagaPendidikanModelInsert = (data) => {
    return {
        NIK: data.NIK,
        Lembaga_ID: data.Lembaga_ID,
        riwayat_pendidikan: [],
        riwayat_beasiswa: [],
        riwayat_keorganisasian: [],
        prestasi: []
    };
};

const lembagaPendidikanModelUpdate = (data) => {
    return {
        riwayat_pendidikan: [],
        riwayat_beasiswa: [],
        riwayat_keorganisasian: [],
        prestasi: []
    };
};

const lembagaPendidikanModelDelete = (data) => {
    return {
        Lembaga_ID: data.Lembaga_ID,
        riwayat_pendidikan: [],
        riwayat_beasiswa: [],
        riwayat_keorganisasian: [],
        prestasi: []
    };
};

module.exports = { lembagaPendidikanModelInsert, lembagaPendidikanModelUpdate, lembagaPendidikanModelDelete };