export interface Cliente {
    id:number,
    nombre:string,
    apellido:string,
    ciudad:string,
    direccion: string,
    telefono: string,
    correo: string
}

export interface ClienteRest {
    idCliente:number ,
    nombre :string,
    apellido :string  ,
    ciudad :string ,
    direccion :string ,
    telefono :string ,
    correo :string ,
    usuarioId :number  
}
