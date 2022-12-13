import exchangeInfoModel from '../server/schema.js';

const resolvers = {
  Query: {
    getExchangeRate: async (src, tgt) => {
      try {
        const data = await exchangeInfoModel.find(data => data.src === src && data.tgt === tgt);
        return data;
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
        await exchangeInfoModel.deleteOne(toDeleteExchangeRate);
        return "삭제가 완료되었습니다.";
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default resolvers;