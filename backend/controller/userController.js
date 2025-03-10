const UserModel = require('../model/model.js');

const data = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        // await UserModel.create({ name, email, age });
        const data = await UserModel.create({ name, email, age });
        res.status(201).json({ message: 'Data Added Successfully!' });
        console.log(data);

    } catch (err) {
        res.status(500).json({ message: 'Error While Adding Data!', error: err.message });
    }

}

const getalldata = async (req, res) => {
    try {
        // await UserModel.find({});
        const data = await UserModel.find();
        res.status(201).json({data, message : "Data Fetched Successfully !"});
    } catch (err) {
        res.status(500).json({ message: 'Error While Fetching Data!', error: err.message });
    }
}

const getdatabyId = async (req, res) => {
    try {
        const id = req.params.id;
        // await UserModel.findById({ _id: id });
        const data = await UserModel.findById({ _id: id });
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error While Getting Data by Id' });
    }
}

const updatedatabyId = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, age } = req.body;
        const data = await UserModel.findByIdAndUpdate(id, { name, email, age });
        if (!data) {
            return res.status(404).json({ message: 'Data not found!' });
        }
        res.status(200).json({ data, message: 'Data Updated Successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error While Updating Data !' });
    }
}

const deletedata = async (req, res) => {
    try {
        const id = req.params.id;
        // await UserModel.findByIdAndDelete({ _id: id });
        const data = await UserModel.findByIdAndDelete({ _id: id });
        res.status(201).json({data, message: "Data Deleted Successfully !" });
    } catch (err) {
        res.status(500).json({ message: 'Error While Deleting Data !' });
    }
}

module.exports = { data, getalldata, getdatabyId, updatedatabyId, deletedata };

