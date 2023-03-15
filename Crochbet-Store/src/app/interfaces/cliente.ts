export interface Cliente {
    idCliente?:number;
    nombre?:string;
    apellido?:string;
    ciudad?:string;
    direccion?: string;
    telefono?: string;
    correo?: string;
    usuarioId?: number;
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
