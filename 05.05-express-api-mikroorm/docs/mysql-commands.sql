create database if not exists hc4gmo;

create user if not exists dsw@'%' identified by 'dsw';
grant select, update, insert, delete on hc4gmo.* to dsw@'%';
