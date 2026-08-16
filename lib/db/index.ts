
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import process from 'node:process';

// 💡 1. Import from your NEW custom generated location instead of '@prisma/client'
import { PrismaClient } from './generated/prisma/client.js'; 

// 2. Set up the native pg client with your Neon pooled connection string
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

// 3. Pass the adapter to your PrismaClient
export const prisma = new PrismaClient({ adapter });