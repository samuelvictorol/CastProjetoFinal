using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoFinalCast.Models
{
    public class Empresa
    {
        [Key()]
        public int Id { get; set; }
        public string? RazaoSocial { get; set; }
        public string? Cnpj { get; set; }
        public string? Cep { get; set; }
        public string? UrlLogo { get; set; }
    }
}
