 using System.ComponentModel.DataAnnotations;

namespace ProjetoFinalCast.Models
{
    public class Passageiro
    {

        public int Id{ get; set; }
        [StringLength(12)]
        public string? CPF { get; set; }
        [StringLength(50)]
        public string? NomeCompleto { get; set; }
        public DateTime Nascimento{ get; set; }
        [StringLength(50)]
        public string? Endereco { get; set; }
        [StringLength(50)]
        public string? Email{ get; set; }
        [StringLength(20)]
        public string? Telefone { get; set; }
        [StringLength(20)]
        public string? Usuario{ get; set; }
        [StringLength(20)]
        public string? Senha { get; set; }
    }
}
