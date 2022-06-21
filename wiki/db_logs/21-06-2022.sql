-- permissions and roles would be global
alter table permissions drop column created_by;
alter table permissions drop column updated_by;

alter table roles drop column created_by;
alter table roles drop column updated_by;

alter table role_permission_policies 
drop column created_by;
alter table role_permission_policies 
drop column updated_by;

-- permissions
insert into permissions(permission_id, permission_name, description)
values('perm-YXfojaozRJ','create_store','allow to add store'); 0

insert into permissions(permission_id, permission_name, description)
values('perm-WkYitrkbS1','delete_store','allow to delete store'); 0

insert into permissions(permission_id, permission_name, description)
values('perm-pbW_8oe2Mb','edit_store','allow to edit store'); 0

insert into permissions(permission_id, permission_name, description)
values('perm-vR6FEztZoi','add_member','allow to add member'); 1

insert into permissions(permission_id, permission_name, description)
values('perm-uLWsF0GtyL','view_member','allow to view member'); 1

insert into permissions(permission_id, permission_name, description)
values('perm-MRoExOfP04','delete_member','allow to delete member'); 1

insert into permissions(permission_id, permission_name, description)
values('perm-lntGBPYFiE','serve','allow to serve customer'); 2

insert into permissions(permission_id, permission_name, description)
values('perm-lkFFvdU3V-','reject','allow to reject customer'); 2

insert into permissions(permission_id, permission_name, description)
values('perm-UKCfzLPa5r','direct_customer','allow to send customer to a counter'); 1

insert into permissions(permission_id, permission_name, description)
values('perm-1GbXbXnboM','edit_queue','edit queue'); 1

-- roles
insert into roles (role_id,role_name,description)
values
('role-V7Sa9K4I7Z','admin','owner of store'),
('role-G4KTy1yq-z','manager','manager of store'),
('role-m6EDURojxA','receptionist','serves customer');


-- classify permissions
insert into role_permission_policies (policy_id,role_id,permission_id)
values
('rpp-ONeeM4_M9A','role-V7Sa9K4I7Z','perm-YXfojaozRJ'),
('rpp-k12AkOTvDk','role-V7Sa9K4I7Z','perm-WkYitrkbS1'),
('rpp-3ZptSlDudK','role-V7Sa9K4I7Z','perm-pbW_8oe2Mb'),
('rpp-AMlD5D0WUy','role-V7Sa9K4I7Z','perm-vR6FEztZoi'),
('rpp-NHGbHKpzuJ','role-V7Sa9K4I7Z','perm-uLWsF0GtyL'),
('rpp-L4jiQNaoYP','role-V7Sa9K4I7Z','perm-MRoExOfP04'),
('rpp-reLdi7G0MW','role-V7Sa9K4I7Z','perm-lntGBPYFiE'),
('rpp-qNIJMI2trP','role-V7Sa9K4I7Z','perm-lkFFvdU3V-'),
('rpp-yFZxaUjZMF','role-V7Sa9K4I7Z','perm-UKCfzLPa5r'),
('rpp-gCQSaAMMpd','role-V7Sa9K4I7Z','perm-1GbXbXnboM'),
('rpp-pyZYsTpu0u','role-G4KTy1yq-z','perm-vR6FEztZoi'),
('rpp-E3gNskrMEF','role-G4KTy1yq-z','perm-uLWsF0GtyL'),
('rpp-rvUbVmWSVB','role-G4KTy1yq-z','perm-MRoExOfP04'),
('rpp-LkXM5Ytbgp','role-G4KTy1yq-z','perm-lntGBPYFiE'),
('rpp-GHcqKUbNhK','role-G4KTy1yq-z','perm-lkFFvdU3V-'),
('rpp-mvJzBFZD8w','role-G4KTy1yq-z','perm-UKCfzLPa5r'),
('rpp-zJ4FZ005Pv','role-G4KTy1yq-z','perm-1GbXbXnboM'),
('rpp-cN2qHMpASU','role-m6EDURojxA','perm-lntGBPYFiE'),
('rpp-tdpSAaU_J2','role-m6EDURojxA','perm-lkFFvdU3V-'),
('rpp-TRfKy6WKpr','role-m6EDURojxA','perm-UKCfzLPa5r')