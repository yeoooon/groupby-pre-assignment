import mongoose from "mongoose";

const exchangeInfoSchema = new mongoose.Schema(
  {
    src: {
      type: String,
      required: true
    },
    tgt: {
      type: String,
      required: true
    },
    rate: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: true
    },
  },
);

const exchangeInfoModel = mongoose.model('ExchangeInfo', exchangeInfoSchema);

export default exchangeInfoModel;