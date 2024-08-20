import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1724159590708 implements MigrationInterface {
    name = 'Initial1724159590708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`music\` (
                \`id\` int NOT NULL AUTO_INCREMENT COMMENT 'ID of Music release',
                \`title\` varchar(255) NOT NULL COMMENT 'Title of music release',
                \`url_local\` varchar(255) NOT NULL COMMENT 'Relative path of jacket image file',
                \`url_spotify\` varchar(255) NOT NULL COMMENT 'URL of Spotify',
                \`url_apple\` varchar(255) NOT NULL COMMENT 'URL of Apple Music',
                \`url_line\` varchar(255) NOT NULL COMMENT 'URL of LINE Music',
                \`url_amazon\` varchar(255) NOT NULL COMMENT 'URL of Amazon Music',
                \`url_bigup\` varchar(255) NOT NULL COMMENT 'URL of BIG UP',
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`movie\` (
                \`id\` int NOT NULL AUTO_INCREMENT COMMENT 'ID of Movie release',
                \`title\` varchar(255) NOT NULL COMMENT 'Name of movie',
                \`descriptions\` varchar(255) NOT NULL COMMENT 'Short descriptions of movie',
                \`url_local\` varchar(255) NOT NULL COMMENT 'Relative path of thumbnail image file',
                \`url_youtube\` varchar(255) NOT NULL COMMENT 'URL of YouTube',
                \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE \`movie\`
        `);
        await queryRunner.query(`
            DROP TABLE \`music\`
        `);
    }

}
