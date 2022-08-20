const blogTable = require("../model/blogs");

exports.getData = (request, response) => {
    blogTable.find((err, data) => {
        if (err) {
            throw err;
        }
        response.status(200).json({
            message: "successfully fetched",
            data: data
        })
    })
}

exports.saveData = (request, response) => {
    blogTable.create({
        title: request.body.title,
        body: request.body.body
    }, (err, res) => {
        if (err) {
            throw err;
        }
        response.status(201).json({
            message: "Detail saved",
            success: true,
            data: res
        })
    })
}

exports.editData = (request, response) => {
    blogTable.find({ _id: request.params.id }, (err, data) => {
        if (err) {
            throw err;
        }
        response.status(200).json({
            message: "successfully fetched",
            data: data
        })
    })
}


exports.updateData = (request, response) => {
    blogTable.findByIdAndUpdate({ _id: req.params.id }, { title: req.body.title, body: req.body.body },
        (err, res) => {
            if (err) {
                throw err
            }
            response.status(200).json({
                message: "successfully fetched",
                data: res
            })
        })

    res.status(201).json({
        message: "Successfully Updated",
    })
}

exports.deleteData = (request, response) => {
    blogTable.findByIdAndDelete(request.params.id, (err, success) => {
        if (err) {
            throw err;
        }
        response.status(200).json({
            message: "Successfully removed",
            success: success
        })
    })
}

