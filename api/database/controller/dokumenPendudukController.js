const { getCollection, oid } = require('../dbconfig');
const { dokumenPendudukModelInsert, dokumenPendudukModelUpdate } = require('../model/dokumenPendudukModel');

exports.insertDokumenPenduduk = async (req, res) =>{
    const dokumenPenduduk = getCollection('DokumenPenduduk');
    const newDokumenPenduduk = dokumenPendudukModelInsert(req.body);
    try {
        const result = await dokumenPenduduk.insertOne(newDokumenPenduduk);
        res.status(201).json({
            message: "Successfully inserted",
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.getDokumenPenduduk = async (req, res) => {
    const dokumenPenduduk = getCollection('DokumenPenduduk');
    try {
        let dokumenPendudukResult = [];
        const dokumenPendudukCursor = await dokumenPenduduk.find();
        dokumenPendudukResult = await dokumenPendudukCursor.toArray();
        if(!dokumenPendudukResult){
            res.status(404).send('Dokumen Penduduk not found');
            return
        }
        res.status(200).json(dokumenPendudukResult);
    } catch(error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.updateDokumenPenduduk = async (req, res) => {
    const dokumenPenduduk = getCollection('DokumenPenduduk');
    const updateDokumenPenduduk = dokumenPendudukModelUpdate(req.body);
    const updatedDokumenPenduduk = {
        $set: {
            ...updateDokumenPenduduk
        }
    }
    try {
        const NIK = req.params.NIK
        if(!NIK) {
            res.status(404).send('Invalid NIK');
            return;
        }

        await dokumenPenduduk.updateOne({ NIK: NIK },updatedDokumenPenduduk);
        res.staur(200).send('Update successful');
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.deleteDokumenPenduduk = async (req, res) => {
    const dokumenPenduduk = getCollection('DokumenPenduduk');
    try{
        const NIK = req.params.NIK
        if(!NIK){
            res.status(404).send('Invalid NIK');
            return;
        }

        const result = await dokumenPenduduk.deleteOne({ NIK: NIK})
        if (!result){
            res.status(404).send('NIK not found');
            return;
        }
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}

//read by NIK
exports.getDokumenPendudukByNIK = async (req, res) => {
    const dokumenPenduduk = getCollection('DokumenPenduduk');
    try {
        const NIK = req.params.NIK;
        if (!NIK) {
            res.status(404).send('Invalid NIK');
            return;
        }

        const result = await dokumenPenduduk.findOne({ NIK: NIK })
        if (!result) {
            res.status(404).send('DokumenPenduduk not found');
            return;
        }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}