const lembagaKepolisianModelInsert = (data) => {
    return {
        NIK: data.NIK,
        Lembaga_ID: data.Lembaga_ID,
        riwayat_kriminal: []
    };
};

const lembagaKepolisianModelUpdate = (data) => {
    return {
        riwayat_kriminal: []
        }
};

const lembagaKepolisianModelDelete = (data) => {
    return {
        NIK: data.NIK,
        Lembaga_ID: data.Lembaga_ID,
        riwayat_kriminal: []
    };
};

module.exports = {lembagaKepolisianModelInsert, lembagaKepolisianModelUpdate, lembagaKepolisianModelDelete};