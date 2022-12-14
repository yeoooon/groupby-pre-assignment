import exchangeInfoModel from '../db/schema.js';

const resolvers = {
  Query: {
    getExchangeRate: async (_, args) => {
      try {
        const src = args.src;
        const tgt = args.tgt;
        const returnInfo = await exchangeInfoModel.findOne({ src: src, tgt: tgt });
        return returnInfo;
      } catch (error) {
        console.log(error);
      }
    },
  },

  Mutation: {
    postExchangeRate: async (_, args) => {
      try {
        const newExchangeRate = new exchangeInfoModel({
          ...args.info,
        });
        await newExchangeRate.save()
        return newExchangeRate;
      } catch (error) {
        console.log(error);
      }
    },

    deleteExchangeRate: async (_, args) => {
      try {
        const toDeleteExchangeRate = args.info;
        return await exchangeInfoModel.findOneAndDelete(toDeleteExchangeRate);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default resolvers;