const { body, validationResult } = require('express-validator')

const filmValidation = [
    body('video').notEmpty().withMessage('Video title is required'),
    body('date').notEmpty().withMessage('Date field is required !'),
    body('language').notEmpty().withMessage('Language is required !'),
    body('age').notEmpty().withMessage('Age is required !'),
    body('time').notEmpty().withMessage('Time is required !'),
    body('price').notEmpty().withMessage('Price is required !'),
    body('type').notEmpty().withMessage('Type is required !'),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(422).json({ message: errors.array()[0].msg })
        }
        next()
    },
]

module.exports = filmValidation