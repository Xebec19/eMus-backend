create table users(
    user_id varchar(20) primary key,
    user_name text not null,
    first_name text not null,
    last_name text,
    email varchar(100) not null unique,
    password text not null,
    created_on timestamp default now(),
    updated_on timestamp default now(),
    status varchar(10) default 'active'
);

create table roles(
    role_id varchar(20),
    role_name varchar(50) not null,
    description text,
    status varchar(10) default 'active',
    created_on timestamp default now(),
    updated_on timestamp default now(),
    created_by varchar(20) not null,
    updated_by varchar(20) not null,
    primary key(role_id),
    constraint fk_role_creater foreign key(created_by) references users(user_id) on delete restrict,
    constraint fk_role_updater foreign key(updated_by) references users(user_id) on delete restrict
);

create table permissions(
    permission_id varchar(20),
    permission_name varchar(100) not null,
    description text,
    created_on timestamp default now(),
    updated_on timestamp default now(),
    created_by varchar(20) not null,
    updated_by varchar(20) not null,
    primary key(permission_id),
    constraint fk_permission_creater foreign key (created_by) references users(user_id) on delete restrict,
    constraint fk_permission_updator foreign key (user_id) on delete restrict
);

create table role_permission_policies(
    policy_id varchar(20),
    role_id varchar(20) not null,
    permission_id varchar(20) not null,
    created_on timestamp default now(),
    updated_on timestamp default now(),
    created_by varchar(20) not null,
    updated_by varchar(20) not null,
    primary key(policy_id),
    constraint fk_policy_creater foreign key (created_by) references users(user_id) on delete restrict,
    constraint fk_policy_updater foreign key (updated_by) references users(user_id) on delete restrict
);

create table stores(
    store_id varchar(20),
    store_name varchar(100) not null,
    description text,
    status varchar(10) default 'active',
    created_on timestamp default now(),
    updated_on timestamp default now(),
    created_by varchar(20) not null,
    updated_by varchar(20) not null,
    primary key(store_id),
    constraint fk_store_creater foreign key (created_by) references users(user_id) on delete restrict,
    constraint fk_store_updater foreign key (updated_by) references users(user_id) on delete restrict
);

create table counters(
    counter_id varchar(20),
    counter_code varchar(50) not null,
    store_id varchar(20) not null,
    status varchar(10) default 'active',
    created_by varchar(20) not null,
    updated_by varchar(20) not null,
    created_on timestamp default now(),
    updated_on timestamp default now(),
    assignee varchar(20) not null,
    member_id varchar(20) not null,
    primary key(counter_id),
    constraint fk_store_creater foreign key (created_by) references users(user_id) on delete restrict,
    constraint fk_store_updater foreign key (updated_by) references users(user_id) on delete restrict,
    constraint fk_member foreign key (member_id) references members(member_id) on delete restrict,
    constraint fk_store foreign key (store_id) references stores(store_id) on delete restrict,
    constraint fk_assignee foreign key (assignee) references users(user_id) on delete restrict
);

create table members(
    member_id varchar(20),
    user_id varchar(20) not null,
    role_id varchar(20) not null,
    store_id varchar(20) not null,
    created_on timestamp default now(),
    updated_on timestamp default now(),
    created_by varchar(20) not null,
    updated_by varchar(20) not null,
    status varchar(20) default 'active',
    primary key(memeber_id),
    constraint fk_member_creater foreign key (created_by) references users(user_id) on delete restrict,
    constraint fk_member_updater foreign key (updated_by) references users(user_id) on delete restrict,
    constraint fk_member_user foreign key (user_id) references users(user_id) on delete restrict,
    constraint fk_member_role
)