import * as mongoose from 'mongoose';

const convert = <T extends mongoose.Document>(model: T, destination: any): any => {
    const source = Object.create(model)
    const destKeys = Object.keys(destination)
    const newModel = {} as any
    destKeys.forEach(key => {
        newModel[key] = source[key];
    })
    return newModel
}

export const getAll = async <T extends mongoose.Document>(collection: mongoose.Model<T>, viewModel: any): Promise<any[]> => {
    var objects = await collection.find().exec();
    let responseObjects = objects.map(obj => convert(obj, viewModel));
    return responseObjects;
}

export const save = async <T extends mongoose.Model<any>>(collection: T, payload: any): Promise<string> => {
    let obj = {
        ...payload,
        id: new mongoose.Types.ObjectId(),
        createdAt: new Date(),
        updatedAt: new Date()
    };
    let savedObj = await collection.create(obj);
    return savedObj.id;
}