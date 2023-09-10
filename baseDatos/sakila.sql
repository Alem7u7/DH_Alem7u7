/*1. Obtener el nombre y apellido de los primeros 5 actores disponibles. Utilizar 
alias para mostrar los nombres de las columnas en español. */

SELECT first_name as Nombre, last_name as Apellido FROM sakila.actor limit 5;

/*2. Obtener un listado que incluya nombre, apellido y correo electrónico de los 
clientes (customers) inactivos. Utilizar alias para mostrar los nombres de las 
columnas en español.*/

SELECT first_name as Nombre, last_name as Apellido, email FROM sakila.customer where active = 0;

/*3. Obtener un listado de films incluyendo título, año y descripción de los films 
que tienen un rental_duration mayor a cinco. Ordenar por rental_duration de 
mayor a menor. Utilizar alias para mostrar los nombres de las columnas en 
español. */

SELECT title as Titulo, description as Descripcion, release_year as Anio FROM sakila.film where rental_duration >= 5 order by rental_duration desc;

/*4. Obtener un listado de alquileres (rentals) que se hicieron durante el mes de 
mayo de 2005, incluir en el resultado todas las columnas disponibles. */

SELECT * FROM sakila.rental where extract(month from rental_date) = 05;

/*--------------------------------------------------------------------------------*/

/*1. Obtener la cantidad TOTAL de alquileres (rentals). Utilizar un alias para mostrarlo en una columna llamada “cantidad”. */

SELECT count(rental_id) as Cantidad FROM sakila.rental;

/*2. Obtener la suma TOTAL de todos los pagos (payments). Utilizar un alias para mostrarlo en una columna llamada “total”
junto a una columna con la cantidad de alquileres con el alias “Cantidad” y una columna que indique el “Importe promedio” por alquiler.*/

SELECT sum(amount) as Total, count(rental_id) as Cantidad, avg(amount) as ImportePromedio  FROM sakila.payment;

/*3. Generar un reporte que responda la pregunta: ¿cuáles son los diez clientes que más dinero gastan y en cuántos alquileres lo hacen? */

SELECT customer_id, sum(amount) as Amount, count(rental_id) as Rentals FROM sakila.payment group by customer_id order by amount desc limit 10;


/*4. Generar un reporte que indique: ID de cliente, cantidad de alquileres y monto total para todos los clientes que hayan gastado más de 150 dólares en alquileres.*/

SELECT customer_id, count(rental_id), sum(amount) as total FROM sakila.payment where sum(amount) >= 150 group by customer_id order by total desc  ;

/*5. Generar un reporte que muestre por mes de alquiler (rental_date de tabla rental), la cantidad de alquileres y 
la suma total pagada (amount de tabla payment) para el año de alquiler 2005 (rental_date de tabla rental). */

SELECT count(rental.rental_id), sum(payment.amount) FROM sakila.rental inner join sakila.payment on rental.rental_id = payment.rental_id where extract(year from rental_date) = 2005;

/*6. Generar un reporte que responda a la pregunta: ¿cuáles son los 5 inventarios más alquilados? (columna inventory_id en la tabla rental).
Para cada una de ellas indicar la cantidad de alquileres. */

SELECT inventory_id, count(rental_id) FROM sakila.rental group by inventory_id order by count(rental_id) desc limit 5;