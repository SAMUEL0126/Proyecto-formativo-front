use dbempresa;

/* suma el total con el sub total de la tabla compra */
select sum(total + subtotal) as resultado from compra; 


select id_det_fact, avg(cantidad) as promedio from detalles_factura group by id_det_fact;

select total as total_menores_de_200 from detalles_factura where total > 2400;


/* calcular promedio de las cantidad por facturas */
SELECT fk_fact, AVG(cantidad) as promedio_cantidad FROM detalles_factura  group by fk_fact;

SELECT fk_fact, AVG(cantidad) as promedio_cantidad FROM detalles_factura;

select id_det_fact , avg(cantidad) as promedio_cantidad from detalles_factura; 

select id_compra, avg(subtotal) as promedioSubtotal from compra group by id_compra;

/* minima cantidad por cada venta */
select fk_fact, min(cantidad) as minima_cantidad from detalles_factura group by fk_fact;

