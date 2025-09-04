import mongoose from 'mongoose';

let memoryServerInstance = null;

const connectDB = async () => {
	const configuredUri = process.env.MONGO_URI;
	mongoose.set('strictQuery', true);

	// Explicit memory mode
	if (configuredUri === 'memory') {
		const { MongoMemoryServer } = await import('mongodb-memory-server');
		if (!memoryServerInstance) {
			memoryServerInstance = await MongoMemoryServer.create({ instance: { port: 0 } });
		}
		const uri = memoryServerInstance.getUri('relish66');
		await mongoose.connect(uri);
		console.log('MongoDB (memory) connected');
		return;
	}

	// Default to persistent Mongo if URI not provided
	const persistentUri = configuredUri || 'mongodb://127.0.0.1:27017/relish66';
	await mongoose.connect(persistentUri);
	console.log('MongoDB connected');
};

export default connectDB;