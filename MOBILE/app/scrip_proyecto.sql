use conta;


CREATE TABLE usuario 
(
usuario_id int primary key NOT NULL AUTO_INCREMENT,
usuario_nombre VARCHAR(100), 
usuario_apellido VARCHAR(100), 
usuario_contrasena VARCHAR(20)
);


CREATE TABLE negocio 
( 
    negocio_id int primary key NOT NULL AUTO_INCREMENT,
    negocio_id_propietario int,
    negocio_nombre VARCHAR(100), 
    negocio_ubicacion varchar(100),
    negocio_descripcion varchar(100),
    FOREIGN KEY (negocio_id_propietario) REFERENCES usuario(usuario_id)
);


CREATE TABLE producto
(
    producto_codigo int primary KEY not NULL AUTO_INCREMENT,
    producto_nombre varchar(100),
    producto_codigo_propio varchar(100),  
    producto_lote varchar(100),
    producto_fechav date,
    producto_precio decimal(10,2),
    producto_descripcion varchar(100)
);



CREATE TABLE stock
(
    stock_id int primary KEY not NULL AUTO_INCREMENT,
    id_producto int not NULL,
    id_negocio int not NULl,
    FOREIGN KEY (id_producto) REFERENCES producto(producto_codigo),
    FOREIGN KEY (id_negocio) REFERENCES negocio(negocio_id)    
);

CREATE TABLE historial
(
    stock_id int primary KEY not NULL AUTO_INCREMENT,    
    historial_stok int,
    historial_fecha date,
    historial_cantidad int,    
    historial_unidades_vendidas int,    
    FOREIGN KEY (historial_stok) REFERENCES stock(stock_id)
);



--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
---------------------------------    CONSULTA STOCK ACTUAL  --------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------

select   
stock0.stock_id as stock,
pro.producto_nombre as producto, 
sub1.cantidad as cantida, 
pro.producto_precio as precio_unitario, 
(pro.producto_precio * sub1.cantidad) as precio_total , 
sub1.fecha as fecha 
from
(
    select sub0.stock as stock, sub0.fecha as fecha, historial0.historial_cantidad as cantidad from 
    (
        select historial.historial_stok as stock, 
        max(historial_fecha) as fecha
        from historial
        group by historial.historial_stok
    ) as sub0,historial as historial0
    where sub0.stock = historial0.historial_stok
    and sub0.fecha = historial0.historial_fecha
) as sub1, stock as stock0, negocio as  neg, producto as pro
where sub1.stock = stock0.stock_id
and stock0.id_producto = pro.producto_codigo
and stock0.id_negocio = neg.negocio_id
;



--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
---------------------------------    Borrado de datos       --------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------

delete from historial;
delete from stock;
delete from producto;
delete from negocio;
delete from usuario;

drop TABLE historial;
drop TABLE stock;
drop TABLE negocio;
drop TABLE producto;
drop table usuario;


--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
---------------------------------    Ingreso de negocios    --------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------

insert into negocio(negocio_id_propietario,negocio_nombre,negocio_ubicacion,negocio_descripcion)
values (1,'La Bendicion','L36a Ma S3 Villa Hermosa 1','Abarroteria De Mediano Tamano');


--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
---------------------------------    Ingreso de Productos   --------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------



insert into producto (producto_nombre,producto_codigo_propio, producto_lote,producto_fechav,producto_precio,producto_descripcion)
values('Nachos Diana','1001','M31A 10:46 125','2018-10-12',1.00,'Nachos Diana de Q1');

insert into producto (producto_nombre,producto_codigo_propio, producto_lote,producto_fechav,producto_precio,producto_descripcion)
values('Jalapenos Diana','1002','M19A 17:20 116','2018-09-23',1.00,'Jalapenos Diana de Q1');

insert into producto (producto_nombre,producto_codigo_propio, producto_lote,producto_fechav,producto_precio,producto_descripcion)
values('Huevos Blancos','1003','1003','2018-07-20',1.50,'Huevos Blancos por Unidad');

insert into producto (producto_nombre,producto_codigo_propio, producto_lote,producto_fechav,producto_precio,producto_descripcion)
values('Tortrix Chiltepe','1004','192230C85','2018-08-26',1.00,'Tortrix Chiltepe Q1');

insert into producto (producto_nombre,producto_codigo_propio, producto_lote,producto_fechav,producto_precio,producto_descripcion)
values('Galletas Chiqui','1005','090 B2 1:35','2018-12-22',1.50,'Galletas Chiqui de Q1.50');


--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
---------------------------------    Ingreso a Historial    --------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------

http://104.198.216.252/contabilizar?negocio=1&producto=2&cantidad=35&fecha=2018-06-21
http://104.198.216.252/contabilizar?negocio=1&producto=2&cantidad=27&fecha=2018-06-22
http://104.198.216.252/contabilizar?negocio=1&producto=2&cantidad=23&fecha=2018-06-23
http://104.198.216.252/contabilizar?negocio=1&producto=2&cantidad=20&fecha=2018-06-24
http://104.198.216.252/contabilizar?negocio=1&producto=2&cantidad=15&fecha=2018-06-25
http://104.198.216.252/contabilizar?negocio=1&producto=2&cantidad=11&fecha=2018-06-26

http://104.198.216.252/contabilizar?negocio=1&producto=3&cantidad=23&fecha=2018-06-21
http://104.198.216.252/contabilizar?negocio=1&producto=3&cantidad=19&fecha=2018-06-22
http://104.198.216.252/contabilizar?negocio=1&producto=3&cantidad=14&fecha=2018-06-23
http://104.198.216.252/contabilizar?negocio=1&producto=3&cantidad=9&fecha=2018-06-24
http://104.198.216.252/contabilizar?negocio=1&producto=3&cantidad=7&fecha=2018-06-25
http://104.198.216.252/contabilizar?negocio=1&producto=3&cantidad=31&fecha=2018-06-26

--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
---------------------------------    Ingreso Ventas         --------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------


select his0.stock_id, his0.historial_stok, his0.historial_fecha, his0.historial_cantidad from 
(
    select sub0.stock as stock, max(sub0.fecha) as fecha from 
    (
        select historial.historial_stok as stock, historial.historial_fecha as fecha from historial
        where historial.historial_fecha < '2018-06-24'
    )as sub0
    group by sub0.stock
) as sub1, historial as his0
where sub1.stock = his0.historial_stok
and sub1.fecha = his0.historial_fecha
and his0.historial_stok = 2
;


--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------
---------------------------------    Pedido mas Certero     --------------------------------------
--------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------



select sub_consulta0.stock, sub_consulta1.negocio, sub_consulta0.producto, sub_consulta0.cantida,sub_consulta1.venta as promedio_venta from 
(
    select   
    stock0.stock_id as stock,
    pro.producto_nombre as producto, 
    sub1.cantidad as cantida, 
    pro.producto_precio as precio_unitario, 
    (pro.producto_precio * sub1.cantidad) as precio_total , 
    sub1.fecha as fecha 
    from
    (
        select sub0.stock as stock, sub0.fecha as fecha, historial0.historial_cantidad as cantidad from 
        (
            select historial.historial_stok as stock, 
            max(historial_fecha) as fecha
            from historial
            group by historial.historial_stok
        ) as sub0,historial as historial0
        where sub0.stock = historial0.historial_stok
        and sub0.fecha = historial0.historial_fecha
    ) as sub1, stock as stock0, negocio as  neg, producto as pro
    where sub1.stock = stock0.stock_id
    and stock0.id_producto = pro.producto_codigo
    and stock0.id_negocio = neg.negocio_id
    
)  as sub_consulta0,
(
    select  sub0.stock, sub0.negocio negocio , sub0.producto producto, avg(sub0.venta) venta from 
    (
        select n0.negocio_nombre as negocio , p0.producto_nombre as producto, s0.stock_id as stock, h0.historial_unidades_vendidas venta 
        from historial h0,stock s0,negocio n0, producto p0
        where h0.historial_stok = s0.stock_id
        and s0.id_producto = p0.producto_codigo
        and s0.id_negocio = n0.negocio_id
        and h0.historial_unidades_vendidas != 0
    )as sub0
    group by sub0.stock, sub0.negocio, sub0.producto

) as sub_consulta1
where sub_consulta0.stock = sub_consulta1.stock
;
