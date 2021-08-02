const lembagaKeuanganModelInsert = (data) => {
    return {
        NIK: data.NIK,
        Lembaga_ID: data.Lembaga_ID,
        total_harta: data.total_harta,
        gaji: {
            kotor: data.gaji.kotor,
            bersih: data.gaji.bersih
        }
    };
};

const lembagaKeuanganModelUpdate = (data) => {
    return {
        total_harta: data.total_harta,
        gaji: {
            kotor: data.gaji.kotor,
            bersih: data.gaji.bersih
        }
    };
};

const lembagaKeuanganModelDelete = (data) => {
    return {
        NIK: data.NIK,
        Lembaga_ID: data.Lembaga_ID,
        total_harta: data.total_harta,
        gaji: {
            kotor: data.gaji.kotor,
            bersih: data.gaji.bersih
        }
    };
};

module.exports = {lembagaKeuanganModelInsert, lembagaKeuanganModelUpdate, lembagaKeuanganModelDelete};