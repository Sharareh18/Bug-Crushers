-- drops the database if it exists
DROP DATABASE IF EXISTS user_db;

-- creates a new database
CREATE DATABASE user_db;

-- table to store user login information
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL
);

-- creates an index on the email column for faster lookups
CREATE UNIQUE INDEX idx_email ON Users (email);

-- table to store additional user-specific information
CREATE TABLE UserProfile (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    full_name VARCHAR(50),
    bio TEXT,
    profile_picture VARCHAR(255)
);

-- defines a foreign key relationship between UserProfile & Users
ALTER TABLE UserProfile
ADD CONSTRAINT FK_UserProfile_Users
FOREIGN KEY (user_id)
REFERENCES Users(id);

-- table to store user connections
CREATE TABLE UserConnection (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id_1 INT NOT NULL,
    user_id_2 INT NOT NULL,
    status ENUM('pending', 'accepted') DEFAULT 'pending'
);

-- defines foreign key relationships between UserConnection and Users
ALTER TABLE UserConnection
ADD CONSTRAINT FK_UserConnection_User_1
FOREIGN KEY (user_id_1)
REFERENCES Users(id);

ALTER TABLE UserConnection
ADD CONSTRAINT FK_UserConnection_User_2
FOREIGN KEY (user_id_2)
REFERENCES Users(id);
