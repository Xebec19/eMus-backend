-- table to create plans which will be attached to users
create table plans(
    plan_id varchar(10) primary key,
    plan_name varchar(200) unique,
    description text not null,
    no_of_stores int default 1,
    no_of_members int default 4,
    created_on timestamp default now(),
    updated_on timestamp default now()
);

-- add price to plans
alter table plans add column price int default 0;

-- add constraint to map plan id of user to plans plan id
alter table users add constraint fk_users_plan_id_plans_plan_id 
FOREIGN KEY (plan_id) REFERENCES plans(plan_id);

-- added free plan
INSERT INTO PLANS
VALUES('bKoaR02hBa', 'Free tier', 'allows user to create one store and add 4 members for free', 4,4,NOW(),NOW(),0);