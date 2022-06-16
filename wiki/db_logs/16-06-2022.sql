-- grant permission to role admin
GRANT ALL ON counters TO admin;
GRANT ALL ON members TO admin;
GRANT ALL ON permissions TO admin;
GRANT ALL ON plans TO admin;
GRANT ALL ON queues TO admin;
GRANT ALL ON role_permission_policies TO admin;
GRANT ALL ON roles TO admin;
GRANT ALL ON sessions TO admin;
GRANT ALL ON stores TO admin;
GRANT ALL ON users TO admin;

-- grant permissions to client
GRANT SELECT ON permissions TO client;
GRANT SELECT ON plans TO client;
GRANT INSERT, DELETE ON queues TO client;
GRANT SELECT ON role_permission_policies TO client;
GRANT INSERT,UPDATE,SELECT ON sessions TO client;
GRANT SELECT ON stores TO client;
GRANT ALL ON users TO client;