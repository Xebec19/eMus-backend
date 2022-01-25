create table users(
    user_id varchar(20) primary key,
    user_name text not null,
    email varchar(100) not null unique,
    password text not null,
    created_at timestamp default now()
);