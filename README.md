openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365
openssl rsa -in keytmp.pem -out key.pem



openssl genrsa -des3 -out server.enc.key 1024
openssl req -new -key server.enc.key -out server.csr
openssl rsa -in server.enc.key -out server.key
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt