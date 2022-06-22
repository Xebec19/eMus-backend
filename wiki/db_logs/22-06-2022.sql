-- haven't executed yet
create view v_user_permissions as
select s.store_id, s.store_name, u.user_id, coalesce(u.first_name, u.last_name) as name,
r.role_id, r.role_name, 
array_agg(select permission_name from role_permission_policies rpp
inner join permissions p on p.permission_id = rpp.permission_id where rpp.role_id = r.role_id)
from members m 
inner join users u on u.user_id = m.user_id 
inner join roles r ON r.role_id = m.role_id 
inner join stores s on m.store_id = s.store_id
where s.status = 'active' and u.status = 'active';