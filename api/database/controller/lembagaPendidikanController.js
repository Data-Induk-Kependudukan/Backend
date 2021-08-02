const { getCollection, oid } = require('../dbconfig');
const { lembagaPendidikanModelInsert, lembagaPendidikanModelUpdate } = require('../model/lembagaPendidikanModel');

exports.insertLembagaPendidikan = async (req, res) => {
    const lembagaPendidikan = getCollection('LembagaPendidikan');
    const newLembagaPendidikan = lembagaPendidikanModelInsert(req.body);
    try {
        const result = await lembagaPendidikan.insertOne(newLembagaPendidikan);
        res.status(201).json({
            message: "Successfully inserted",
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.getLembagaPendidikan = async (req, res) => {
    const lembagaPendidikan = getCollection('LembagaPendidikan');
    try {
        let lembagaPendidikanResult = [];
        const lembagaPendidikanCursor = await lembagaPendidikan.find();
        lembagaPendidikanResult = await lembagaPendidikanCursor.toArray();
        if(!lembagaPendidikanResult){
            res.status(404).send('Lembaga Pendidikan not found');
            return
        }
        res.status(200).json(lembagaPendidikanResult);
    } catch(error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.updateLembagaPendidikan = async (req, res) => {
    const lembagaPendidikan = getCollection('LembagaPendidikan');
    const updateLembagaPendidikan = lembagaPendidikanModelUpdate(req.body);
    const updatedLembagaPendidikan = {
        $set: {
            ...updateLembagaPendidikan
        }
    }
    try {
        const NIK = req.params.NIK
        if(!NIK) {
            res.status(404).send('Invalid NIK');
            return;
        }

        await lembagaPendidikan.updateOne({ NIK: NIK },updatedLembagaPendidikan);
        res.staur(200).send('Update successful');
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.deleteLembagaPendidikan = async (req, res) => {
    const lembagaPendidikan = getCollection('LembagaPendidikan');
    try{
        const NIK = req.params.NIK
        if(!NIK){
            res.status(404).send('Invalid NIK');
            return;
        }

        const result = await lembagaPendidikan.deleteOne({ NIK: NIK})
        if (!result){
            res.status(404).send('NIK not found');
            return;
        }
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}