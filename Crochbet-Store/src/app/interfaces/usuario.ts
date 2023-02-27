export interface Usuario {
    user:string,
    password:string,
    nombre:string,
    direccion:string,
    postal:string,
    nacimiento:string,
    rol:number
}

export interface UsuarioRest{
    idUsuario:number,
    usuario:string,
    contrasena:string,
    rolId:number,
    estado:string,
}
