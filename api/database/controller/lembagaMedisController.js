const { getCollection, oid } = require('../dbconfig');
const { lembagaMedisModelInsert, lembagaMedisModelUpdate } = require('../model/lembagaMedisModel');

exports.insertLembagaMedis = async (req, res) => {
    const lembagaMedis = getCollection('LembagaMedis');
    const newLembagaMedis = lembagaMedisModelInsert(req.body);
    try {
        const result = await lembagaMedis.insertOne(newLembagaMedis);
        res.status(201).json({
            message: "Successfully inserted",
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.getLembagaMedis = async (req, res) => {
    const lembagaMedis = getCollection('LembagaMedis');
    try {
        let lembagaMedisResult = [];
        const lembagaMedisCursor = await lembagaMedis.find();
        lembagaMedisResult = await lembagaMedisCursor.toArray();
        if(!lembagaMedisResult){
            res.status(404).send('Lembaga Medis not found');
            return
        }
        res.status(200).json(lembagaMedisResult);
    } catch(error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.updateLembagaMedis = async (req, res) => {
    const lembagaMedis = getCollection('LembagaMedis');
    const updateLembagaMedis = lembagaMedisModelUpdate(req.body);
    const updatedLembagaMedis = {
        $set: {
            ...updateLembagaMedis
        }
    }
    try {
        const NIK = req.params.NIK
        if(!NIK) {
            res.status(404).send('Invalid NIK');
            return;
        }

        await lembagaMedis.updateOne({ NIK: NIK },updatedLembagaMedis);
        res.staur(200).send('Update successful');
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.deleteLembagaMedis = async (req, res) => {
    const lembagaMedis = getCollection('LembagaMedis');
    try{
        const NIK = req.params.NIK
        if(!NIK){
            res.status(404).send('Invalid NIK');
            return;
        }

        const result = await lembagaMedis.deleteOne({ NIK: NIK})
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
exports.getLembagaMedisByNIK = async (req, res) => {
    const lembagaMedis = getCollection('LembagaMedis');
    try {
        const NIK = req.params.NIK;
        if (!NIK) {
            res.status(404).send('Invalid NIK');
            return;
        }

        const result = await lembagaMedis.findOne({ NIK: NIK })
        if (!result) {
            res.status(404).send('LembagaMedis not found');
            return;
        }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}