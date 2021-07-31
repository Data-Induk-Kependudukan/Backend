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
        if(!mainIdentityResult){
            res.status(404).send('Main Identity not found');
            return
        }
        res.status(200).json(mainIdentityResult);
        mainIdentityCursor.close();
    }catch(error){
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
    try{
        // const id = oid(req.params.id);
        const NIK = req.params.NIK
        if (!NIK) {
            res.status(404).send('Invalid NIK');
            return;
        }

        await mainIdentity.updateOne({ NIK: NIK },updatedMainIdentity);
        res.status(200).send('Update successful');
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

//delete
exports.deleteMainIdentity = async (req, res) => {
    const mainIdentity = getCollection('MainIdentity');
    try{
        const NIK = req.params.NIK
        if(!NIK){
            res.status(404).send('Invalid NIK');
            return;
        }

        const result = await mainIdentity.deleteOne({ NIK: NIK})
        if (!result){
            res.status(404).send('NIK not found');
            return;
        }
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
    }
}
