-- AlterTable
ALTER TABLE `game_sessions` ADD COLUMN `difficulty` ENUM('easy', 'medium', 'hard') NOT NULL DEFAULT 'easy';
