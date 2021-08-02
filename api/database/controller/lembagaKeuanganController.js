const { getCollection, oid } = require('../dbconfig');
const { lembagaKeuanganModelInsert, lembagaKeuanganModelUpdate } = require('../model/lembagaKeuanganModel');

exports.insertLembagaKeuangan = async (req, res) => {
    const lembagaKeuangan = getCollection('LembagaKeuangan');
    const newLembagaKeuangan = lembagaKeuanganModelInsert(req.body);
    try {
        const result = await lembagaKeuangan.insertOne(newLembagaKeuangan);
        res.status(201).json({
            message: "Successfully inserted",
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.getLembagaKeuangan = async (req, res) => {
    const lembagaKeuangan = getCollection('LembagaKeuangan');
    try {
        let lembagaKeuanganResult = [];
        const lembagaKeuanganCursor = await lembagaKeuangan.find();
        lembagaKeuanganResult = await lembagaKeuanganCursor.toArray();
        if(!lembagaKeuanganResult){
            res.status(404).send('Lembaga Keuangan not found');
            return
        }
        res.status(200).json(lembagaKeuanganResult);
    } catch(error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.updateLembagaKeuangan = async (req, res) => {
    const lembagaKeuangan = getCollection('LembagaKeuangan');
    const updateLembagaKeuangan = lembagaKeuanganModelUpdate(req.body);
    const updatedLembagaKeuangan = {
        $set: {
            ...updateLembagaKeuangan
        }
    }
    try {
        const NIK = req.params.NIK
        if(!NIK) {
            res.status(404).send('Invalid NIK');
            return;
        }

        await lembagaKeuangan.updateOne({ NIK: NIK },updatedLembagaKeuangan);
        res.staur(200).send('Update successful');
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.deleteLembagaKeuangan = async (req, res) => {
    const lembagaKeuangan = getCollection('LembagaKeuangan');
    try{
        const NIK = req.params.NIK
        if(!NIK){
            res.status(404).send('Invalid NIK');
            return;
        }

        const result = await lembagaKeuangan.deleteOne({ NIK: NIK})
        if (!result){
            res.status(404).send('NIK not found');
            return;
        }
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}