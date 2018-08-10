from flask import Flask, flash, redirect, render_template, request, session, abort, jsonify
from flask_json import FlaskJSON, JsonError, json_response, as_json
from flask_marshmallow import Marshmallow
from sqlalchemy import update
import os
import json
import binascii
from sqlalchemy.orm import sessionmaker
from tabledef import *
import smtplib 

engine = create_engine('sqlite:///tutorial.db', echo=True)

app = Flask(__name__)
ma = Marshmallow(app)
FlaskJSON(app)



# Method that add a new user to the db
# username:
# password:
# email:
# type_user:
@app.route('/crear_usuario', methods=['POST'])
def crear_usuario(): 
    POST_USERNAME = str(request.form['username'])
    POST_PASSWORD = str(request.form['password'])
    POST_EMAIL    = str(request.form['email'])
    POST_TYPE_USER = str(request.form['type_user'])
    Session = sessionmaker(bind=engine)
    s = Session()
    query = s.query(User).filter(User.email.in_([POST_EMAIL]))
    result = query.first()
    if result:
        return '{ "result": "error", "details": "Usuario y/o correo Electronico ya Registrado" }'
    else:
        nuevo = User(POST_USERNAME,POST_PASSWORD,POST_EMAIL,POST_TYPE_USER)
        s.add(nuevo)
        s.commit()
        return jsonify(
                sesionTokenLoteria=nuevo.id,
                username=nuevo.username,
                email=nuevo.email,
                id=nuevo.id,
                password=nuevo.password,
                type_user=nuevo.type_user
            )


@app.route('/modificar_usuario', methods=['POST'])
def modificar_usuario(): 
    POST_ID = str(request.form['id'])
    POST_USERNAME = str(request.form['username'])
    POST_PASSWORD = str(request.form['password'])
    POST_EMAIL    = str(request.form['email'])
    POST_TYPE_USER = str(request.form['type_user'])
    Session = sessionmaker(bind=engine)
    s = Session()
    query = s.query(User).filter(User.email == POST_EMAIL, User.id != int(POST_ID))
    result = query.first()
    if result:
        return'{ "result": "error", "details": "Error en Modificacion de datos" }'
    else:        
        query = s.query(User).filter(User.id.in_([int(POST_ID)]))
        result = query.first()
        result.username = POST_USERNAME
        result.email = POST_EMAIL
        result.password = POST_PASSWORD
        result.type_user = POST_TYPE_USER
        s.commit()
        if result:
            nuevo = result
            return jsonify(
                    sesionTokenLoteria=nuevo.id,
                    username=nuevo.username,
                    email=nuevo.email,
                    id=nuevo.id,
                    password=nuevo.password,
                    type_user=nuevo.type_user
                )
        else:
            return '{ "result": "error", "details": "Error en Modificacion de datos" }'



@app.route('/eliminar_usuario', methods=['POST'])
def eliminar_usuario():
    POST_ID = str(request.form['id'])
    Session = sessionmaker(bind=engine)
    s = Session()
    query = s.query(User).filter(User.id.in_([int(POST_ID)]))
    result = query.first()
    s.delete(result)
    s.commit()
    return '[]'


@app.route('/login', methods=['POST'])
def login_usuario():
    POST_PASSWORD = str(request.form['password'])
    POST_EMAIL    = str(request.form['email'])
    Session = sessionmaker(bind=engine)
    s = Session()
    query = s.query(User).filter(User.email.in_([POST_EMAIL]),User.password.in_([POST_PASSWORD]))
    result = query.first()
    if result:
        nuevo = result        
        _sesionTokenLoteria = binascii.hexlify(os.urandom(16)).decode()
        nueva_sesion = Sesion(result.id,_sesionTokenLoteria)
        s.add(nueva_sesion)
        s.commit()
        return jsonify(
                sesionTokenLoteria=_sesionTokenLoteria,
                username=nuevo.username,
                email=nuevo.email,
                id=nuevo.id,
                password=nuevo.password,
                type_user=nuevo.type_user
            )
    else:
        query = s.query(User).filter(User.password.in_([POST_PASSWORD]))
        result = query.first()
        if result:
            return '{ "result": "error", "details": "Correo de Usuario Incorrecto" }'
        else:
            query = s.query(User).filter(User.email.in_([POST_EMAIL]))
            result = query.first()            
            if result:
                return '{ "result": "error", "details": "Contrasena Incorrecta" }'
            else:
                return '{ "result": "error", "details": "Usuario no existente" }'


@app.route('/lista_usuarios/<int:tipo_usuario>', methods=['POST'])
def lista_usuarios(tipo_usuario):
    Session = sessionmaker(bind=engine)
    s = Session()
    all_users = s.query(User).filter(User.type_user.in_([tipo_usuario]))
    result = users_schema.dump(all_users)
    return jsonify(result.data)


@app.route('/detalle_usuario/<int:id_usuario>', methods=['POST'])
def detalle_usuario(id_usuario):
    Session = sessionmaker(bind=engine)
    s = Session()
    result = s.query(User).filter(User.id.in_([id_usuario])).first()
    if result:
        nuevo = result
        return jsonify(
            sesionTokenLoteria=nuevo.id,
            username=nuevo.username,
            email=nuevo.email,
            id=nuevo.id,
            password=nuevo.password,
            type_user=nuevo.type_user
            )
    return '[]'


@app.route('/logout', methods=['POST'])
def logout():
    try:
        Session = sessionmaker(bind=engine)
        s = Session()
        _sesionTokenLoteria = request.headers.get('authorization').split(" ")
        if _sesionTokenLoteria:
            token = str(_sesionTokenLoteria[1])
            print(token)
            query = s.query(Sesion).filter(Sesion.sesion_token == token)
            result = query.first()
            s.delete(result)
            s.commit()
            return '[]'
        else:
            return '{ "result": "error", "details": "UnAutorized" }'
    except Exception as inst:
        print(inst)
        return '{ "result": "error", "details": "UnAutorized" }'

@app.route('/correo')
def enviar_correo():
    remitente = "Desde gnucita <holagamboatavo@gmail.com>" 
    destinatario = "Mama de Gnucita <holagamboatavo@gmail.com>" 
    asunto = "E-mal HTML enviado desde Python" 
    mensaje = """Hola!<br/> <br/> 
    Este es un <b>e-mail</b> enviando desde <b>Python</b> 
    """
    
    email = """From: %s 
    To: %s 
    MIME-Version: 1.0 
    Content-type: text/html 
    Subject: %s 
    
    %s
    """ % (remitente, destinatario, asunto, mensaje) 
    try: 
        smtp = smtplib.SMTP('localhost') 
        smtp.sendmail(remitente, destinatario, email) 
        return "Correo enviado"
    except: 
        return """Error: el mensaje no pudo enviarse.  Compruebe que sendmail se encuentra instalado en su sistema"""




class UserSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('id', 'username', 'email', 'password', 'type_user')

class SesionSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('id', 'user_id', 'sesion_token', 'match_time')        


user_schema = UserSchema()
users_schema = UserSchema(many=True)

sesion_schema = SesionSchema()
sesions_schema = UserSchema(many = True)



if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0', port=4000)


if __name__ == "__main__":
    app.run()

