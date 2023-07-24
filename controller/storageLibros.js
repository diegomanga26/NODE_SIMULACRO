var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsNumber, IsString } from 'class-validator';
export class storageLibros {
    constructor(id_libro, id_autor, id_categoria, id_editorial, titulo, anio_publicacion, isbn, num_paginas, id_estado) {
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
}
__decorate([
    Expose({ name: 'idLibro' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro idLibro no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parámetro idLibro es obligatorio" }; } }),
    __metadata("design:type", Number)
], storageLibros.prototype, "id_libro", void 0);
__decorate([
    Expose({ name: 'idAutor' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro idAutor no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parámetro idAutor es obligatorio" }; } }),
    __metadata("design:type", Number)
], storageLibros.prototype, "id_autor", void 0);
__decorate([
    Expose({ name: 'idCategoria' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro idCategoria no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parámetro idCategoria es obligatorio" }; } }),
    __metadata("design:type", Number)
], storageLibros.prototype, "id_categoria", void 0);
__decorate([
    Expose({ name: 'idEditorial' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro idEditorial no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parámetro idEditorial es obligatorio" }; } }),
    __metadata("design:type", Number)
], storageLibros.prototype, "id_editorial", void 0);
__decorate([
    Expose({ name: 'tituloLibro' }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value))
        return (value) ? value : "Libro";
    else
        throw { status: 406, message: "El formato del parametro tituloLibro no es correcto" }; }, { toClassOnly: true }),
    IsDefined({ message: () => { throw { status: 422, message: "El parámetro tituloLibro es obligatorio" }; } }),
    __metadata("design:type", String)
], storageLibros.prototype, "titulo", void 0);
__decorate([
    Expose({ name: 'añoPublicacion' }),
    Transform(({ value }) => { if (/^[0-9]|undefined+$/.test(value))
        return (value) ? value : 1;
    else
        throw { status: 406, message: "El formato del parametro añoPublicacion no es correcto" }; }, { toClassOnly: true }),
    IsDefined({ message: () => { throw { status: 422, message: "El parámetro añoPublicacion es obligatorio" }; } }),
    __metadata("design:type", Number)
], storageLibros.prototype, "anio_publicacion", void 0);
__decorate([
    Expose({ name: 'codigoBibliotecaIsbn' }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro codigoBibliotecaIsbn no es correcto" }; } }),
    Transform(({ value }) => { if (/^[0-9\\-]|undefined+$/.test(value))
        return value;
    else
        throw { status: 400, message: "El parámetro del parametro codigoBibliotecaIsbn es obligatorio y no cumple con el formato solicitado" }; }, { toClassOnly: true }),
    IsDefined({ message: () => { throw { status: 422, message: "El parámetro codigoBibliotecaIsbn es obligatorio" }; } }),
    __metadata("design:type", String)
], storageLibros.prototype, "isbn", void 0);
__decorate([
    Expose({ name: 'numeroPaginas' }),
    Transform(({ value }) => { if (/^[0-9]|undefined+$/.test(value))
        return value;
    else
        throw { status: 406, message: "El formato del parametro numeroPaginas no es correcto" }; }, { toClassOnly: true }),
    IsDefined({ message: () => { throw { status: 422, message: "El parámetro numeroPaginas es obligatorio" }; } }),
    __metadata("design:type", Number)
], storageLibros.prototype, "num_paginas", void 0);
__decorate([
    Expose({ name: 'idEstado' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro idEstado no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parámetro idEstado es obligatorio" }; } }),
    __metadata("design:type", Number)
], storageLibros.prototype, "id_estado", void 0);
