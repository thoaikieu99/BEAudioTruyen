const { Audio } = require("../model");
const catchAsync = require("../ultils/catchAsync");

const getAll = catchAsync(async (req, res) => {
    let getAllAudio = await Audio.findAll();
    res.status(200).json({
        status: "success",
        data: {
            audio: getAllAudio
        }
    });
});

const getOne = async (slug) => {
    let getOneAudio = await Audio.findOne({
        where: {
            slug,
        }
    });
    return getOneAudio;
}

const getAudio = catchAsync(async (req, res, next) => {
    let getone = await getOne(req.params.id);

    if (!getone) {
        return next(new AppError("No user found with that ID", 404));
    }

    res.status(201).json({
        status: "success",
        data: {
            user: getone
        }
    });
});

module.exports = {
    getAll, getAudio
}