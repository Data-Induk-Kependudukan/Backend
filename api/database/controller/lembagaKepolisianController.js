const { getCollection, oid } = require('../dbconfig');
const { lembagaKepolisianModelInsert, lembagaKepolisianModelUpdate } = require('../model/lembagaKepolisianModel');

exports.insertLembagaKepolisian = async (req, res) => {
    const lembagaKepolisian = getCollection('LembagaKepolisian');
    const newLembagaKepolisian = lembagaKepolisianModelInsert(req.body);
    try {
        const result = await lembagaKepolisian.insertOne(newLembagaKepolisian);
        res.status(201).json({
            message: "Successfully inserted",
            result
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.getLembagaKepolisian = async (req, res) => {
    const lembagaKepolisian = getCollection('LembagaKepolisian');
    try {
        let lembagaKepolisianResult = [];
        const lembagaKepolisianCursor = await lembagaKepolisian.find();
        lembagaKepolisianResult = await lembagaKepolisianCursor.toArray();
        if(!lembagaKepolisianResult){
            res.status(404).send('Lembaga Kepolisian not found');
            return
        }
        res.status(200).json(lembagaKepolisianResult);
    } catch(error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.updateLembagaKepolisian = async (req, res) => {
    const lembagaKepolisian = getCollection('LembagaKepolisian');
    const updateLembagaKepolisian = lembagaKepolisianModelUpdate(req.body);
    const updatedLembagaKepolisian = {
        $set: {
            ...updateLembagaKepolisian
        }
    }
    try {
        const NIK = req.params.NIK
        if(!NIK) {
            res.status(404).send('Invalid NIK');
            return;
        }

        await lembagaKepolisian.updateOne({ NIK: NIK },updatedLembagaKepolisian);
        res.staur(200).send('Update successful');
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.deleteLembagaKepolisian = async (req, res) => {
    const lembagaKepolisian = getCollection('LembagaKepolisian');
    try{
        const NIK = req.params.NIK
        if(!NIK){
            res.status(404).send('Invalid NIK');
            return;
        }

        const result = await lembagaKepolisian.deleteOne({ NIK: NIK})
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
exports.getLembagaKepolisianByNIK = async (req, res) => {
    const lembagaKepolisian = getCollection('LembagaKepolisian');
    try {
        const NIK = req.params.NIK;
        if (!NIK) {
            res.status(404).send('Invalid NIK');
            return;
        }

        const result = await lembagaKepolisian.findOne({ NIK: NIK })
        if (!result) {
            res.status(404).send('LembagaKepolisian not found');
            return;
        }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}