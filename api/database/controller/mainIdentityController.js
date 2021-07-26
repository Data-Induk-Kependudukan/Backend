const { getCollection, oid } = require('../dbconfig');
const { mainIdentityModel } = require('../model/mainIdentityModel');

//bikin crud here

//create
exports.insertMainIdentity = async (req, res) => {
    const mainIdentity = getCollection('mainIdentity');
    const newMainIdentity = mainIdentityModel(req.body);
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
    const mainIdentity = getCollection('mainIdentity');
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

//delete

