## Environment variables

Create `.env` file in project root.
In `.env.example` file can be found all environment variables needed.

## DB instructions

```sql
DROP DATABASE IF EXISTS prevent;
CREATE DATABASE prevent CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'prevent'@'%' IDENTIFIED WITH mysql_native_password BY 'prevent';
GRANT ALL PRIVILEGES ON *.* TO 'prevent'@'%';
FLUSH PRIVILEGES;
```

## Emails

For sending emails we are using https://mailtrap.io/.
Sign up for account and set in `.env` file:

```
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USERNAME=you-will-get-this-after-sign-up
SMTP_PASSWORD=you-will-get-this-after-sign-up
```
