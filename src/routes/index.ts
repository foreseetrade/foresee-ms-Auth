import express from 'express';
import authRoutes from './authRoutes';
import profileRoutes from './profileRoutes';
import { authenticateToken } from '../middlewares';

const router = express.Router();

console.log('routes loaded');
router.use('/auth', authRoutes);
router.use('/profile', authenticateToken, profileRoutes);

export default router;
