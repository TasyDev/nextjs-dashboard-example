// Unified require for Mongoose connection with caching to prevent multiple connections in development

import mongoose from "mongoose";

// Global cache for development to prevent multiple connections
declare global {
  var dbCache: {
    conn: typeof mongoose | null;
    connecting: Promise<typeof mongoose> | null;
  };
}

// Cache object to store the connection and connecting promise
if (!global.dbCache) {
  global.dbCache = {
    conn: null,
    connecting: null,
  };
}

const cache = global.dbCache;

// Function to connect to the MongoDB database
export async function connectDB(
  dbUri = process.env.DB_URI,
  dbName = process.env.DB_NAME
) {

  // Validate that the DB_URI is provided
  if (!dbUri) {
    throw new Error("Missing DB_URI");
  }

  // Connetion is cached, return it
  if (cache.conn) {
    return cache.conn;
  }

  // New connection, store the promise in cache
  if (!cache.connecting) {
    cache.connecting = mongoose.connect(dbUri, {
      dbName,
      bufferCommands: false,
    });
  }

  // Await the connection promise and cache the connection
  try {
    cache.conn = await cache.connecting;
    return cache.conn;
  } catch (error) {
    // If connection fails, reset the cache to allow retries
    cache.connecting = null;
    throw error;
  }
}