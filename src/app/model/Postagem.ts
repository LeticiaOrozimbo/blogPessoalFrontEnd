import { ɵLocaleDataIndex } from "@angular/core"
import { User } from "./User"

export class Postagem{
    public id: number
    public titulo: string
    public descricao: string
    public dataPostagem: Date // verificar
    public criador: User
}