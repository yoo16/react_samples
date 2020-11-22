CREATE TABLE `notes` (
    `id` bigint UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `memo` text NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;