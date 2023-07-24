import {conect} from '../db/connect.js'
import { Expose, Transform} from 'class-transformer';
import { IsDefined, IsNumber, IsString } from 'class-validator';
export class storageLibros {

    @Expose({ name: 'idLibro' })
    @IsNumber({}, {message: ()=>{throw {status:406, message: "El formato del parametro idLibro no es correcto"}}})
    @IsDefined({message:()=>{throw {status:422, message: "El parámetro idLibro es obligatorio"}}})
    id_libro: number;

    @Expose({ name: 'idAutor' })
    @IsNumber({}, {message: ()=>{throw {status:406, message: "El formato del parametro idAutor no es correcto"}}})
    @IsDefined({message:()=>{throw {status:422, message: "El parámetro idAutor es obligatorio"}}})
    id_autor: number;
    
    @Expose({ name: 'idCategoria' })
    @IsNumber({}, {message: ()=>{throw {status:406, message: "El formato del parametro idCategoria no es correcto"}}})
    @IsDefined({message:()=>{throw {status:422, message: "El parámetro idCategoria es obligatorio"}}})
    id_categoria: number;

    @Expose({ name: 'idEditorial' })
    @IsNumber({}, {message: ()=>{throw {status:406, message: "El formato del parametro idEditorial no es correcto"}}})
    @IsDefined({message:()=>{throw {status:422, message: "El parámetro idEditorial es obligatorio"}}})
    id_editorial: number;

    @Expose({ name: 'tituloLibro' })
    @Transform(({ value }) => { if(/^[a-z A-Z]+$/.test(value)) return (value) ? value : "Libro"; else throw {status: 406, message: "El formato del parametro tituloLibro no es correcto"};}, { toClassOnly: true })
    @IsDefined({message:()=>{throw {status:422, message: "El parámetro tituloLibro es obligatorio"}}})
    titulo: string;

    @Expose({ name: 'añoPublicacion' })
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/.test(value)) return (value) ? value : 1; else throw {status: 406, message: "El formato del parametro añoPublicacion no es correcto"};}, { toClassOnly: true })
    @IsDefined({message:()=>{throw {status:422, message: "El parámetro añoPublicacion es obligatorio"}}})
    anio_publicacion: number;

    @Expose({ name: 'codigoBibliotecaIsbn' })
    @IsString({message: ()=>{throw {status:406, message: "El formato del parametro codigoBibliotecaIsbn no es correcto"}}})
    @Transform(({ value }) => { if(/^[0-9\\-]|undefined+$/.test(value)) return value ; else throw {status: 400, message: "El parámetro del parametro codigoBibliotecaIsbn es obligatorio y no cumple con el formato solicitado"};}, { toClassOnly: true })
    @IsDefined({message:()=>{throw {status:422, message: "El parámetro codigoBibliotecaIsbn es obligatorio"}}})
    isbn: string;
    
    @Expose({ name: 'numeroPaginas' })
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/.test(value)) return value ; else throw {status: 406, message: "El formato del parametro numeroPaginas no es correcto"};}, { toClassOnly: true })
    @IsDefined({message:()=>{throw {status:422, message: "El parámetro numeroPaginas es obligatorio"}}})
    num_paginas: number;

    @Expose({ name: 'idEstado' })
    @IsNumber({}, {message: ()=>{throw {status:406, message: "El formato del parametro idEstado no es correcto"}}})
    @IsDefined({message:()=>{throw {status:422, message: "El parámetro idEstado es obligatorio"}}})
    id_estado: number;

    constructor(id_libro: number,
        id_autor: number,
        id_categoria: number,
        id_editorial: number,
        titulo: string,
        anio_publicacion: number,
        isbn: string,
        num_paginas: number,
        id_estado: number) {
        this.id_libro = id_libro;
        this.id_autor = id_autor;
        this.id_categoria = id_categoria;
        this.id_editorial = id_editorial;
        this.titulo = titulo;
        this.anio_publicacion = anio_publicacion;
        this.isbn = isbn;
        this.num_paginas = num_paginas;
        this.id_estado = id_estado;

    }
    get guardar(){
        conect.query(`SELECT * FROM Libro`,
        (err, data, fields)=>{
            console.log(data);
        });
        return "";
    }
}