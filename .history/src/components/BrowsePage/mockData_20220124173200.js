import planet from '../../img/browse/planet.PNG';
import simpson from '../../img/titles/grano_de_iconicidad/simpson_2_crop.png';
import rickMorty from '../../img/titles/grano_de_iconicidad/rickymorty.png';
import laLigne from '../../img/titles/grano_de_iconicidad/la_ligne.png';
import mickey from '../../img/titles/grano_de_iconicidad/mickey.png';
import peterGriffin from '../../img/titles/grano_de_iconicidad/peter_griffin.png';
import picapiedras from '../../img/titles/grano_de_iconicidad/picapiedras.png';
import varios from '../../img/titles/grano_de_iconicidad/varios.png';
import looney_tunes from '../../img/titles/grano_de_iconicidad/looney_tunes.png';
import los_teletubbies from '../../img/browse/office.PNG';
import pineapple from '../../img/browse/pineapple.PNG';
import roman from '../../img/browse/roman.PNG';
import bob_esponja from '../../img/titles/abstraccion_figuracion/bob_esponja.png';
import friday from '../../img/browse/friday.PNG';
import wallaceGromit from '../../img/titles/children/wallaceGromit.jpg';
import happy_tree_friends from '../../img/titles/complejidad_cualitativa_cuantitativa/happy_tree_friends.png';
import pokemon from '../../img/titles/complejidad_cualitativa_cuantitativa/pokemon.png';

const titles=[
//Monosemia/Polisemia

//Grado de iconicidad
{name:'Los Simpson', img:simpson, newRelease:true, type:'Realidad - Los Simpson', genre:'Grado de iconicidad', tags:['Hossein Diba ha diseñado este modelo 3D de Homer Simpson, lo que lo convierte en un personaje más realista.']},
{name:'Wallace y Gromit', img:wallaceGromit, newRelease:true, type:'Tridimension a escala - Wallace y Gromit', genre:'Grado de iconicidad', tags:['Wallace y Gromit es una serie de películas británicas realizadas mediante la técnica de la animación en volumen. Se trata de figuras elaboradas con plastilina, por lo que son representaciones en 3D.']},
{name:'Rick y Morty', img:rickMorty, newRelease:true, type:'Hologramas : Rick y Morty', genre:'Grado de iconicidad', tags:['«Edge of Tomorty : Live Die Rickpeat» es el primer episodio de la cuarta temporada de la serie Rick y Morty donde se activa un holograma de Rick.']},
{name:'Padre de familia', img:peterGriffin, newRelease:false, type:'Fotografia en color - Padre de familia', genre:'Grado de iconicidad', tags:['Peter Griffin haciéndose un selfie para su instagram @peterpumpkineater69 “Eating ziti at the gym. #carboload #shredded #cheese”.']},
{name:'Los Picapiedra', img:picapiedras, newRelease:true, type:'Fotografia procesada - Los Picapiedra', genre:'Grado de iconicidad', tags:['Fotografía de la familia Picapiedra durante la Prehistoria.']},
{name:'Varios', img:varios, newRelease:false, type:'Dibujo no realista - Varios', genre:'Grado de iconicidad', tags:['Aqui podemos observar una declinacion de varios personages de dibujos animados a la manera de otros dibujos animados. Son dibujos no realistas de los originales.']},
{name:'Los Teletubbies', img:los_teletubbies, newRelease:false, type:'Pictograma - Los Teletubbies', genre:'Grado de iconicidad', tags:['Estos pictogramas representan a los cuatro Teletubbies.']},
{name:'Mickey', img:mickey, newRelease:false, type:'Esquema - Mickey', genre:'Grado de iconicidad', tags:['Es un esquema de la cara de Mickey.']},
{name:'La línea', img:laLigne, newRelease:false, type:'Simbolismo arbitrario - La Linea', genre:'Grado de iconicidad', tags:['Esta serie presenta a un personaje con una simple línea blanca sobre un fondo de color. Se mueve a lo largo de una línea horizontal que sólo está limitada por el lápiz del artista']},
{name:'Los Looney Tunes', img:pineapple, newRelease:false, type:'Movie', genre:'Grado de iconicidad', tags:['Limited Series','Science & Nature','All Things Wild']},
{name:'Roman Empire', img:roman, newRelease:true, type:'TV', genre:'Grado de iconicidad', tags:['Visionary','Food & Wine','Docuseries']},

//Complejidad cualitativa y cuantitativa
{name:'Happy Tree Friends', img:happy_tree_friends, newRelease:false, type:'Complejidad cualitativa - Happy Tree Friends', genre:'Complejidad cualitativa y cuantitativa', tags:['Es una serie web que consiste en un grupo de amigos y sus aventuras diaras. A pesar de la linda aperiencia de sus personajes, el programa es extramadamente violento : casi todos los episodios de la serie presentan sangre, mutilaciones, muertes violentas.']},
{name:'Bob Esponja', img:pokemon, newRelease:false, type:'Complejidad cuantitativa - Pokemon', genre:'Complejidad cualitativa y cuantitativa', tags:['Pokemon es un dibujo animado que cuenta más de 800 Pokemon diferentes.']},

//Abstraccion figuracion
{name:'Bob Esponja', img:bob_esponja, newRelease:false, type:'Figurativa o representativa - Bob Esponja', genre:'Abstraccion/Figuracion', tags:['Este dibujo representa a Bob Esponja pero de manera poco realista, es una representacion.']},
{name:'Friday the 13th', img:friday, newRelease:false, type:'Movie', genre:'Abstraccion/Figuracion', tags:['Exciting','Super Hero','Sci Fi']},
]

export default titles;