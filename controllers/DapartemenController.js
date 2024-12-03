import DapartemenModel from "../models/DapartemenModel.js";
import db from "../config/Database.js";

// Function to get all departments
export const getDepartments = async (req, res) => {
    try {
        const departments = await DapartemenModel.findAll();
        res.json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get a department by UUID
export const getDepartmentById = async (req, res) => {
    try {
        const department = await DapartemenModel.findOne({ where: { uuid: req.params.id } });
        if (!department) return res.status(404).json({ message: "Department not found" });
        res.json(department);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to create a new department
export const createDepartment = async (req, res) => {
    const { judul, subJudul, deskripsi, image } = req.body;
    try {
        const newDepartment = await DapartemenModel.create({
            judul,
            subJudul,
            deskripsi,
            image
        });
        res.status(201).json(newDepartment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to update an existing department
export const updateDepartment = async (req, res) => {
    try {
        const department = await DapartemenModel.findOne({ where: { uuid: req.params.id } });
        if (!department) return res.status(404).json({ message: "Department not found" });

        const { judul, subJudul, deskripsi, image } = req.body;
        department.judul = judul;
        department.subJudul = subJudul;
        department.deskripsi = deskripsi;
        department.image = image;

        await department.save();
        res.json(department);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to delete a department
export const deleteDepartment = async (req, res) => {
    try {
        const department = await DapartemenModel.findOne({ where: { uuid: req.params.id } });
        if (!department) return res.status(404).json({ message: "Department not found" });

        await department.destroy();
        res.json({ message: "Department deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const  getCountDapartement = async(req, res) => {
    try {
        const response = await db.query(`SELECT COUNT(*) as totalDapartement FROM dapartemen`)
    res.status(200).json(response[0]);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
    
}