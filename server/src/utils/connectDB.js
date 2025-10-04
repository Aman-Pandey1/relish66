import mongoose from 'mongoose';
import { setTimeout as delay } from 'timers/promises';

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

    // Retry configuration
    const maxRetries = Number(process.env.MONGO_MAX_RETRIES || '30');
    const initialDelayMs = Number(process.env.MONGO_RETRY_DELAY_MS || '1000');
    const maxDelayMs = Number(process.env.MONGO_MAX_RETRY_DELAY_MS || '8000');

    let attempt = 0;
    let delayMs = initialDelayMs;
    // Add a small jitter function to avoid thundering herd on restarts
    const jitter = (ms) => Math.floor(ms * (0.9 + Math.random() * 0.2));

    while (true) {
        try {
            await mongoose.connect(persistentUri, {
                serverSelectionTimeoutMS: 5000,
                connectTimeoutMS: 5000,
            });
            console.log('MongoDB connected');
            return;
        } catch (error) {
            attempt += 1;
            const safeMessage = error?.message || String(error);
            console.error(`MongoDB connection attempt ${attempt} failed: ${safeMessage}`);
            if (attempt >= maxRetries) {
                console.error('Exceeded maximum MongoDB connection retries. Exiting.');
                throw error;
            }
            const waitMs = jitter(delayMs);
            await delay(waitMs);
            delayMs = Math.min(delayMs * 2, maxDelayMs);
        }
    }
};

export default connectDB;