import SenamHamilModel from "../models/SenamHamilModel.js";

export const getSenamHamil = async (req, res) => {
  try {
    const response = await SenamHamilModel.findAll({
      attributes: ['uuid', 'syarat', 'tahapan', 'manfaat'],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getSenamHamilById = async (req, res) => {
  try {
    const response = await SenamHamilModel.findOne({
      attributes: ['uuid', 'syarat', 'tahapan', 'manfaat'],
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// done
export const createSenamHamil = async (req, res) => {
  const { syarat, tahapan, manfaat } = req.body;
  try {
    await SenamHamilModel.create({
      syarat: syarat,
      tahapan: tahapan,
      manfaat: manfaat,
    });
    res.status(201).json({ msg: "Senam Hamil Berhasil Ditambahkan" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// done
export const updateSenamHamil = async (req, res) => {
  const senamHamil = await SenamHamilModel.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!senamHamil) return res.status(404).json({ msg: "Senam Hamil Tidak Ditemukan" });
  const { syarat, tahapan, manfaat } = req.body;
  try {
    await SenamHamilModel.update(
      {
        syarat: syarat,
        tahapan: tahapan,
        manfaat: manfaat,
      },
      {
        where: {
          uuid: senamHamil.uuid,
        },
      }
    );
    res.status(200).json({ msg: "Senam Hamil Berhasil Diupdate" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// done
export const deleteSenamHamil = async (req, res) => {
  const senamHamil = await SenamHamilModel.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!senamHamil) return res.status(404).json({ msg: "Senam Hamil Tidak Ditemukan" });
  try {
    await SenamHamilModel.destroy({
      where: {
        uuid: senamHamil.uuid,
      },
    });
    res.status(200).json({ msg: "Senam Hamil Berhasil Dihapus" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
