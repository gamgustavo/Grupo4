from sqlalchemy import *
from sqlalchemy import create_engine, ForeignKey
from sqlalchemy import Column, Date, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, backref
import datetime
from sqlalchemy import Column, Integer, DateTime
 
engine = create_engine('sqlite:///tutorial.db', echo=True)
Base = declarative_base()
 
########################################################################
class User(Base):
    """"""
    __tablename__ = "users"
 
    id = Column(Integer, primary_key=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)
    type_user = Column(Integer)
    #-- type_user 
    #-- 0 ->  user
    #-- 1 ->  customer
    #-- 2 ->  consumer
    #-- 3 ->  admin
 
    #----------------------------------------------------------------------
    def __init__(self, username, password, email, type_user):
        """"""
        self.username = username
        self.password = password
        self.email = email
        self.type_user = type_user


class Sesion(Base):
    __tablename__ = 'sesion'

    id = Column(Integer, primary_key = True)
    user_id =Column(Integer, ForeignKey('users.id'))
    sesion_token = Column(String)
    match_time = Column(DateTime, default=datetime.datetime.utcnow)

    #----------------------------------------------------------------------
    def __init__(self, user_id, sesion_token):
        """"""
        self.user_id = user_id
        self.sesion_token = sesion_token

 

Base.metadata.create_all(engine)