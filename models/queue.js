module.exports = (mongoose) => {
    const schema = mongoose.Schema({
        nomor: {
            type: Number,
            default: 0,
        },
    },
    {timeStamps: true}
    )

    const Queue = mongoose.model('Queue', schema);
    return Queue;
}