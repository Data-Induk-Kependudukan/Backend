const dokumenPendudukModelInsert = (data) => {
    return {
        NIK: data.NIK,
        akta_kelahiran: {
            MainIdentity_ID: data.akta_kelahiran.MainIdentity_ID,
            No_AktaKelahiran: data.akta_kelahiran.No_AktaKelahiran,
            image_file: data.akta_kelahiran.image_file
        },
        kartu_keluarga: {
            MainIdentity_ID: data.kartu_keluarga.MainIdentity_ID,
            No_KK: data.kartu_keluarga.No_KK,
            image_file: data.kartu_keluarga.image
        },
        'e-KTP': {
            MainIdentity_ID: data['e-KTP'].MainIdentity_ID,
            image_file: data['e-KTP'].image
        }
    };
};

const dokumenPendudukModelUpdate = (data) => {
    return {
        akta_kelahiran: {
            MainIdentity_ID: data.akta_kelahiran.MainIdentity_ID,
            No_AktaKelahiran: data.akta_kelahiran.No_AktaKelahiran,
            image_file: data.akta_kelahiran.image_file
        },
        kartu_keluarga: {
            MainIdentity_ID: data.kartu_keluarga.MainIdentity_ID,
            No_KK: data.kartu_keluarga.No_KK,
            image_file: data.kartu_keluarga.image
        },
        'e-KTP': {
            MainIdentity_ID: data['e-KTP'].MainIdentity_ID,
            image_file: data['e-KTP'].image
        }
    };
};

const dokumenPendudukModelDelete = (data) => {
    return {
        NIK: data.NIK,
        akta_kelahiran: {
            MainIdentity_ID: data.akta_kelahiran.MainIdentity_ID,
            No_AktaKelahiran: data.akta_kelahiran.No_AktaKelahiran,
            image_file: data.akta_kelahiran.image_file
        },
        kartu_keluarga: {
            MainIdentity_ID: data.kartu_keluarga.MainIdentity_ID,
            No_KK: data.kartu_keluarga.No_KK,
            image_file: data.kartu_keluarga.image
        },
        'e-KTP': {
            MainIdentity_ID: data['e-KTP'].MainIdentity_ID,
            image_file: data['e-KTP'].image
        }
    };
};

module.exports = { dokumenPendudukModelInsert, dokumenPendudukModelUpdate, dokumenPendudukModelDelete};