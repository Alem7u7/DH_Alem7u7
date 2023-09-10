/*-------------------------------------Consignas:--------------------------------------------*/

/*1. Obtener los artistas que han actuado en una o más películas.*//*1. Obtener los artistas que han actuado en una o más películas.*/

SELECT artista.nombre, artista.apellido, artista_x_pelicula.pelicula_id 
FROM extra_joins.artista inner join extra_joins.artista_x_pelicula on artista.id = artista_x_pelicula.artista_id;

/*2. Obtener las películas donde han participado más de un artista según nuestra
base de datos.*/

create view extra_joins.numArtistas as 
SELECT artista_x_pelicula.pelicula_id, count(artista.nombre) as CantArtistas 
FROM extra_joins.artista_x_pelicula inner join extra_joins.artista on artista.id = artista_x_pelicula.artista_id 
group by artista_x_pelicula.pelicula_id;

select * from extra_joins.numArtistas where CantArtistas > 1;

/*3. Obtener aquellos artistas que han actuado en alguna película, incluso
aquellos que aún no lo han hecho, según nuestra base de datos.*/

SELECT artista.id, artista.apellido, artista.nombre, artista_x_pelicula.pelicula_id FROM extra_joins.artista left join extra_joins.artista_x_pelicula on artista.id = artista_x_pelicula.artista_id;

/*4. Obtener las películas que no se le han asignado artistas en nuestra base de
datos.*/

SELECT pelicula.id, pelicula.titulo, pelicula.anio, artista_x_pelicula.artista_id FROM extra_joins.pelicula left join extra_joins.artista_x_pelicula on pelicula.id = artista_x_pelicula.pelicula_id;

/*5. Obtener aquellos artistas que no han actuado en alguna película, según
nuestra base de datos.*/

/*6. Obtener aquellos artistas que han actuado en dos o más películas según
nuestra base de datos.*/

/*7. Obtener aquellas películas que tengan asignado uno o más artistas, incluso
aquellas que aún no le han asignado un artista en nuestra base de datos.*/