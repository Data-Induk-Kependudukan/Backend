const lembagaMedisModelInsert = (data) => {
    return {
        NIK: data.NIK,
        Lembaga_ID: data.Lembaga_ID,
        riwayat_penyakit: [],
        rekam_forensik: {
            sidik_jari: data.rekam_forensik.sidik_jari,
            retina_scan: data.rekam_forensik.retina_scan,
            DNA: data.rekam_forensik.DNA
        }
    };
};

const lembagaMedisModelUpdate = (data) => {
    return {
        riwayat_penyakit: [],
        rekam_forensik: {
            sidik_jari: data.rekam_forensik.sidik_jari,
            retina_scan: data.rekam_forensik.retina_scan,
            DNA: data.rekam_forensik.DNA
        }
    };
};

const lembagaMedisModelDelete = (data) => {
    return {
        NIK: data.NIK,
        Lembaga_ID: data.Lembaga_ID,
        riwayat_penyakit: [],
        rekam_forensik: {
            sidik_jari: data.rekam_forensik.sidik_jari,
            retina_scan: data.rekam_forensik.retina_scan,
            DNA: data.rekam_forensik.DNA
        }
    };
};

module.exports = { lembagaMedisModelInsert, lembagaMedisModelUpdate, lembagaMedisModelDelete };