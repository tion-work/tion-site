-- grant create on schema public to anon
create
or replace function increment (slug_text text) returns void as $$
declare view_id int;
begin

select id into view_id from views where slug = slug_text limit 1;

if view_id is not null then
update views set count = count + 1 where id = view_id;
else
insert into views (slug,count) values(slug_text, 1);
end if;
end;

$$ language plpgsql;