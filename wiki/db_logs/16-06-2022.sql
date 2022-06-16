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

-- views
CREATE VIEW USER_VIEW AS
SELECT U.USER_ID, U.USER_NAME, COALESCE(U.FIRST_NAME,' ',U.LAST_NAME) AS FULL_NAME, U.EMAIL, P.PLAN_ID, P.PLAN_NAME, P.NO_OF_STORES, P.NO_OF_MEMBERS FROM USERS U LEFT JOIN PLANS P ON P.PLAN_ID = U.PLAN_ID
WHERE STATUS = 'active';