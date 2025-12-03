import mongoose from 'mongoose';
import fs from 'fs';

let memoryServerInstance = null;

function isDockerEnv() {
    // Best-effort check for Docker container environment
    try { return fs.existsSync('/.dockerenv'); } catch { return false; }
}

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // Support multiple common env var names
    const configuredUri =
        process.env.MONGODB_URI ||
        process.env.MONGO_URI ||
        process.env.MONGO_URL ||
        '';

    // Explicit memory mode (only allowed outside production)
    if (configuredUri === 'memory') {
        if (String(process.env.NODE_ENV).toLowerCase() === 'production' || isDockerEnv()) {
            throw new Error('Refusing to start with in-memory MongoDB in production. Set MONGODB_URI/MONGO_URI to a real database.');
        }
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
    const fallbackUri = isDockerEnv()
        ? 'mongodb://mongo:27017/relish66'
        : 'mongodb://127.0.0.1:27017/relish66';
    const persistentUri = configuredUri || fallbackUri;

    await mongoose.connect(persistentUri);
    console.log(`MongoDB connected (${configuredUri ? 'env' : 'fallback'})`);
};

export default connectDB;