create database if not exists hc4gmo;

create user if not exists dsw@'%' identified by 'dsw';
grant all on hc4gmo.* to dsw@'%';
