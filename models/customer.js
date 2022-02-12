const { mongoose, Schema } = require('mongoose');

module.exports = (mongoose) => {
    const schema = mongoose.Schema({
        nik: {
            type: Number,
            min: 16,
            required: true,
        },
        name: {
            type: String,
            min: 3,
            max: 50,
            required: true,
        },
        email: {
            type: String,
            min: 3,
            max: 50,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        motherName: {
            type: String,
            min: 3,
            max: 50,
            required: true,
        },
        fatherName: {
            type: String,
            min: 3,
            max: 50,
            required: true,
        },
        birthPlace: {
            type: String,
            min: 3,
            max: 50,
            required: true,
        },
        birthDate: {
            type: Date,
            min: new Date(1900, 1, 1),
            max: new Date(2023, 1, 1),
            required: true,
        },
        address: {
            type: String,
            min: 3,
            max: 250,
            required: true,
        },
        city: {
            type: String,
            enum: ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi'],
            default: 'Jakarta',
            required: true,
        },
        gender: {
            type: String,
            enum: ['L', 'P'],
            default: 'L',
            required: true,
        },
        insurance: {
            type: String,
            enum: ['Umum', 'BPJS', 'Asuransi Lainnya'],
            default: 'Umum',
            required: true,
        },
        insuranceNumber: {
            type: Number,
            min: 3,
        },
    },
    {timeStamps: true}
    )

    const Customer = mongoose.model('Customer', schema);
    return Customer;
}