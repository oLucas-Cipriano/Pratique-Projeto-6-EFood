class PerfilModelo {
  description: string
  image: string
  infos: string[]
  title: string
  id: number
  nota: number
  link: string

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    nota: number,
    link: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.nota = nota
    this.link = link
  }
}
export default PerfilModelo
