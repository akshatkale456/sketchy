
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import process from 'node:process';

import { PrismaClient } from './generated/client/client'; 

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);


export const prisma = new PrismaClient({ adapter });