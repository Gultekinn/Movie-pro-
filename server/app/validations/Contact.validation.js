const { body, validationResult } = require('express-validator')

const contactValidation = [
    body('mainPhone').notEmpty().withMessage('Phone title is required'),
    body('address').notEmpty().withMessage('address title is required'),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(422).json({ message: errors.array()[0].msg })
        }
        next()
    },
]

module.exports = contactValidation