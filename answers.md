1. What is the purpose of using sessions?
    The purpose of using sessions is to have a better users experience where they do not need to authenticate themselves every time they need to access a resource. Sessions are also important because they can have a time limit so that after a certain amount of time they are automatically closed. This is a security feature so that people can't access the database with the same session.
2. What does bcrypt do to help us store passwords in a secure manner.
    bcrypt hashes the passwords so that they are not stored in plain text. This makes it difficult for hackers to access a persons accounts which might have the same password. 
3. What does bcrypt do to slow down attackers?
    In order to slow down hackers bcrypt hashes the user's password a certain number of times so that even if they are attempting a force login it will take them a long time to decifer the password. 
4. What are the three parts of the JSON Web Token?
    The header, the payload, and the signature. 