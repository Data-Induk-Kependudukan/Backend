const { Db } = require('mongodb');
const { getCollection, oid } = require('../dbconfig');
const { mainIdentityModelInsert, mainIdentityModelUpdate } = require('../model/mainIdentityModel');

//bikin crud here

//create
exports.insertMainIdentity = async (req, res) => {
    const mainIdentity = getCollection('MainIdentity');
    const newMainIdentity = mainIdentityModelInsert(req.body);
    try {
        const result = await mainIdentity.insertOne(newMainIdentity);
        res.status(201).json({
            message: "Successfully inserted",
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

//read
exports.getMainIdentity = async (req, res) => {
    const mainIdentity = getCollection('MainIdentity');
    try {
        let mainIdentityResult = [];
        const mainIdentityCursor = await mainIdentity.find();
        mainIdentityResult = await mainIdentityCursor.toArray();
        if (!mainIdentityResult) {
            res.status(404).send('Main Identity not found');
            return
        }
        res.status(200).json(mainIdentityResult);
        mainIdentityCursor.close();
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

//update
exports.updateMainIdentity = async (req, res) => {
    const mainIdentity = getCollection('MainIdentity');
    const updateMainIdentity = mainIdentityModelUpdate(req.body);
    const updatedMainIdentity = {
        $set: {
            // goldar : updateMainIdentity.goldar
            ...updateMainIdentity
        }
    }
    try {
        // const id = oid(req.params.id);
        const NIK = req.params.NIK
        if (!NIK) {
            res.status(404).send('Invalid NIK');
            return;
        }

        await mainIdentity.updateOne({ NIK: NIK }, updatedMainIdentity);
        res.status(200).send('Update successful');
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

//delete
exports.deleteMainIdentity = async (req, res) => {
    const mainIdentity = getCollection('MainIdentity');
    try {
        const NIK = req.params.NIK
        if (!NIK) {
            res.status(404).send('Invalid NIK');
            return;
        }

        const result = await mainIdentity.deleteOne({ NIK: NIK })
        if (!result) {
            res.status(404).send('NIK not found');
            return;
        }
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

//read by NIK
exports.getMainIdentityByNIK = async (req, res) => {
    const mainIdentity = getCollection('MainIdentity');
    try {
        const NIK = req.params.NIK;
        if (!NIK) {
            res.status(404).send('Invalid NIK');
            return;
        }

        const result = await mainIdentity.findOne({ NIK: NIK })
        if (!result) {
            res.status(404).send('MainIdentity not found');
            return;
        }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

//join with dokumen penduduk
exports.getDokumenPendudukWithMainIdentity = async (req, res) => {
    const mainIdentity = getCollection('MainIdentity');
    try {
        let dokumenpendudukResult = [];
        dokumenpendudukResult = await mainIdentity.aggregate([
            {
                $lookup: {
                    from: 'DokumenPenduduk',
                    localField: 'NIK',
                    foreignField: 'NIK',
                    as: 'DokumenPenduduk'
                }
            }
        ]).toArray();
        if (!dokumenpendudukResult) {
            res.status(404).send('DokumenPenduduk not found');
            return;
        }
        res.status(200).json(dokumenpendudukResult);
    } catch (error) {
        console.log(error);
    }
}

//join with lembaga kepolisan
exports.getLembagaKepolisianWithMainIdentity = async (req, res) => {
    const mainIdentity = getCollection('MainIdentity');
    try {
        let lembagaKepolisianResult = [];
        lembagaKepolisianResult = await mainIdentity.aggregate([
            {
                $lookup: {
                    from: 'LembagaKepolisian',
                    localField: 'NIK',
                    foreignField: 'NIK',
                    as: 'DataKriminal'
                }
            }
        ]).toArray();
        if (!lembagaKepolisianResult) {
            res.status(404).send('LembagaKepolisian not found');
            return;
        }
        res.status(200).json(lembagaKepolisianResult);
    } catch (error) {
        console.log(error);
    }
}

//join with lembaga keuangan
exports.getLembagaKeuanganWithMainIdentity = async (req, res) => {
    const mainIdentity = getCollection('MainIdentity');
    try {
        let lembagaKeuanganResult = [];
        lembagaKeuanganResult = await mainIdentity.aggregate([
            {
                $lookup: {
                    from: 'LembagaKeuangan',
                    localField: 'NIK',
                    foreignField: 'NIK',
                    as: 'DataKeuangan'
                }
            }
        ]).toArray();
        if (!lembagaKeuanganResult) {
            res.status(404).send('LembagaKeuangan not found');
            return;
        }
        res.status(200).json(lembagaKeuanganResult);
    } catch (error) {
        console.log(error);
    }
}

//join with lembaga medis
exports.getLembagaMedisWithMainIdentity = async (req, res) => {
    const mainIdentity = getCollection('MainIdentity');
    try {
        let lembagaMedisResult = [];
        lembagaMedisResult = await mainIdentity.aggregate([
            {
                $lookup: {
                    from: 'LembagaMedis',
                    localField: 'NIK',
                    foreignField: 'NIK',
                    as: 'DataMedis'
                }
            }
        ]).toArray();
        if (!lembagaMedisResult) {
            res.status(404).send('LembagaMedis not found');
            return;
        }
        res.status(200).json(lembagaMedisResult);
    } catch (error) {
        console.log(error);
    }
}

//join with lembaga pendidikan
exports.getLembagaPendidikanWithMainIdentity = async (req, res) => {
    const mainIdentity = getCollection('MainIdentity');
    try {
        let lembagaPendidikanResult = [];
        lembagaPendidikanResult = await mainIdentity.aggregate([
            {
                $lookup: {
                    from: 'LembagaPendidikan',
                    localField: 'NIK',
                    foreignField: 'NIK',
                    as: 'DataPendidikan'
                }
            }
        ]).toArray();
        if (!lembagaPendidikanResult) {
            res.status(404).send('LembagaPendidikan not found');
            return;
        }
        res.status(200).json(lembagaPendidikanResult);
    } catch (error) {
        console.log(error);
    }
}