namespace ProjetoFinalCast.Models
{
    public class Passagem
    {

        public int Id { get; set; }
        public string? Origem { get; set; }
        public int DestinoId { get; set; }
        public string? Destino { get; set; }
        public double Valor { get; set; }
        public int EmpresaId { get; set; }
        public string? Empresa{ get; set; }
        public int PassageiroId{ get; set; }
        public string?  NomePassageiro{ get; set; }
        public DateTime DataIda { get; set; }
        public DateTime DataVolta  { get; set; }

    }
}
